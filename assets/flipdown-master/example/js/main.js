document.addEventListener('DOMContentLoaded', () => {

  // Gunakan format aman (angka, bukan string)
  var tanggalAcara = Math.floor(Date.now() / 1000) + 3600;
  // NOTE: bulan = 5 artinya Juni (0 = Januari)

  var flipdown = new FlipDown(tanggalAcara)
    .start()
    .ifEnded(() => {
      console.log('Acara dimulai!');
    });

  // Toggle theme
  var interval = setInterval(() => {
    let body = document.body;
    body.classList.toggle('light-theme');
    body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
    body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
  }, 5000);

  // Show version number
  var ver = document.getElementById('ver');
  ver.innerHTML = flipdown.version;
});
