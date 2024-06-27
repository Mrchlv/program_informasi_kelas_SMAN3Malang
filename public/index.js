// Contoh database siswa (data statis)
const studentDatabase = [
    { nama: "John Doe", kode: "12345" },
    { nama: "Jane Smith", kode: "67890" },
    // Data lainnya
  ];
  
  // Event listener untuk form submit
  const studentForm = document.getElementById('student-form');
  studentForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah submit default form
  
    // Mengambil nilai dari form
    const kode = document.getElementById('student-code').value;
    const nama = document.getElementById('student-name').value;
  
    // Memeriksa apakah siswa terdaftar dalam database
    const isRegistered = studentDatabase.some(student => student.nama === nama && student.kode === kode);
  
    if (isRegistered) {
      // Siswa terdaftar, tambahkan logika yang sesuai di sini
      alert('Siswa terdaftar dalam database!'); // Contoh output
    } else {
      // Siswa tidak terdaftar, berikan pesan kesalahan
      alert('Maaf nama dan kode anda tidak terdaftar, coba periksa nama dan kode anda dengan baik.');
    }
  
    // Mengosongkan nilai form setelah submit
    studentForm.reset();
  });
  