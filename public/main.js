document.getElementById('student-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const studentCode = document.getElementById('student-code').value;
    const studentName = document.getElementById('student-name').value;
    
    // Simpan data murid ke local storage
    let students = JSON.parse(localStorage.getItem('students')) || [];
    students.push({ studentCode, studentName });
    localStorage.setItem('students', JSON.stringify(students));
    
    // Simpan data murid untuk halaman success
    localStorage.setItem('studentCode', studentCode);
    localStorage.setItem('studentName', studentName);
    
    window.location.href = 'success';
  });
  