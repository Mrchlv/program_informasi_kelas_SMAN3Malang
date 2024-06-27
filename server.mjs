import path from "path";
import url from "url";
import fs0 from "fs";
import fs from "fs/promises";
import crypto from "crypto";
import express from "express";
import chokidar from "chokidar";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const databaseClassesFile = path.join(__dirname, "database-classes.json");
const databaseStudentsFile = path.join(__dirname, "database-students.json");
let databaseClasses;
let databaseStudents;
async function updateDatabaseClasses() {
  console.log("Reading database classes");
  if(!fs0.existsSync(databaseClassesFile))
    return databaseClasses = [];
  try {
    databaseClasses = JSON.parse(await fs.readFile(databaseClassesFile, "utf-8"));
  } catch(e) {
    console.error("Error updating database classes", e);
  }
}
async function updateDatabaseStudents() {
  console.log("Reading database students");
  if(!fs0.existsSync(databaseStudentsFile))
    return databaseStudents = [];
  try {
    databaseStudents = JSON.parse(await fs.readFile(databaseStudentsFile, "utf-8"));
  } catch(e) {
    console.error("Error updating database students", e);
  }
}
updateDatabaseClasses();
updateDatabaseStudents();
chokidar.watch(databaseClassesFile)
  .on("add", () => updateDatabaseClasses())
  .on("change", () => updateDatabaseClasses())
  .on("unlink", () => updateDatabaseClasses());
chokidar.watch(databaseStudentsFile)
  .on("add", () => updateDatabaseStudents())
  .on("change", () => updateDatabaseStudents())
  .on("unlink", () => updateDatabaseStudents());

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public/")));

const aesMethod = "aes-256-cbc";
const aesKey = Buffer.from("e6eacc5475e5632b431b25aa4139299b520fbffbf4d236aa8bf1f32b386e36c0", "hex");
const aesIv = Buffer.from("4386beca0ec47d8872aef74dff13baa4", "hex");
function encryptData(data) {
	const cipher = crypto.createCipheriv(aesMethod, aesKey, aesIv);
	return Buffer.concat([cipher.update(data, "utf-8"), cipher.final()]).toString("base64url");
}
function decryptData(data) {
	try {
		const decipher = crypto.createDecipheriv(aesMethod, aesKey, aesIv);
		return decipher.update(data, "base64url", "utf-8") + decipher.final("utf-8");
	} catch(_) {
		return null;
	}
}

function validateAdminAuthorization(req, res) {
  const basicAuth = req.headers.authorization;
  if(!basicAuth) return false;
  const auth = basicAuth.split(" ")[1];
  const [user, pwd] = Buffer.from(auth, "base64").toString().split(":");
  return user == "tl9Sy5WN9I" && pwd == "J1YXbt81os";
}
function sendRequestAdminAuthorization(req, res) {
  res.writeHead(401, {
		"WWW-Authenticate": "Basic realm=\"Secure Area\""
	});
	res.write(`Unauthorized.`);
	res.end();
}
function sendInvalidRequest(req, res) {
  res.status(400);
  res.end("Invalid request");
}
function sendNotFoundRequest(req, res) {
  res.status(404);
  res.end("Request not found");
}

app.get("/", async (req, res) => {
  res.render("index");
});

app.get("/success/:signature", async (req, res) => {
  const signature = req.params.signature;
  if(!signature)
    return sendInvalidRequest(req, res);
  const id = decryptData(signature);
  const student = databaseStudents.find(s => s.id == id);
  if(!id || !student)
    return sendNotFoundRequest(req, res);
  const classDetails = databaseClasses.find(c => c.name == student.classOf);
  res.render("success", { student: student, classDetails: classDetails });
});

app.post("/api/get-signature", express.json(), async (req, res) => {
  const { id } = req.body;
  if(!id)
    return sendInvalidRequest(req, res);
  if(!databaseStudents.some(s => s.id == id))
    return sendNotFoundRequest(req, res);
  res.status(200);
  res.end(encryptData(id));
});

app.get("/admin", async (req, res) => {
  if(!validateAdminAuthorization(req, res))
    return sendRequestAdminAuthorization(req, res);
  res.render("admin", { classes: databaseClasses, students: databaseStudents });
});

app.post("/api/update-classes", express.json(), async (req, res) => {
  if(!validateAdminAuthorization(req, res))
    return sendRequestAdminAuthorization(req, res);
  const classes = req.body;
  if(!(classes instanceof Array) || classes.some(c => !c.name || !c.subjects))
    return sendInvalidRequest(req, res);
  await fs.writeFile(databaseClassesFile, JSON.stringify(classes, null, 4));
  res.status(200);
  res.end();
});

app.post("/api/update-students", express.json(), async (req, res) => {
  if(!validateAdminAuthorization(req, res))
    return sendRequestAdminAuthorization(req, res);
  const students = req.body;
  if(!(students instanceof Array) || students.some(s => !s.id || !s.name || !s.classOf))
    return sendInvalidRequest(req, res);
  await fs.writeFile(databaseStudentsFile, JSON.stringify(students, null, 4));
  res.status(200);
  res.end();
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
