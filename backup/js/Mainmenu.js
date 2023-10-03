document.getElementById('splash').addEventListener('click', function () {
  this.classList.add('fade'); // Menambahkan kelas 'fade' untuk menghilangkan splash

  // Menghapus elemen dengan kelas 'fade' dari DOM setelah animasi selesai
  setTimeout(() => {
      this.remove();
  }, 1000); // Sesuaikan waktu sesuai dengan durasi animasi CSS
});
