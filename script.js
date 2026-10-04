// ===== 1. DARK / LIGHT MODE =====
const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body');

btnTema.addEventListener('click', function () {
  bodyHalaman.classList.toggle('light-mode');

  const sedangLightMode = bodyHalaman.classList.contains('light-mode');
  btnTema.textContent = sedangLightMode ? '🌙 Mode Gelap' : '☀️ Mode Terang';
  btnTema.setAttribute('aria-pressed', String(sedangLightMode));
});

// ===== 2. MODAL KONTAK =====
const btnBukaModal = document.querySelector('#btnKontak');
const elemenModal = document.querySelector('#modalKontak');
const btnTutupModal = document.querySelector('#btnTutupModal');

function bukaModal() {
  elemenModal.classList.add('show');
  elemenModal.setAttribute('aria-hidden', 'false');
  btnTutupModal.focus();
}

function tutupModal() {
  elemenModal.classList.remove('show');
  elemenModal.setAttribute('aria-hidden', 'true');
  btnBukaModal.focus();
}

btnBukaModal.addEventListener('click', function (event) {
  event.preventDefault();
  bukaModal();
});

btnTutupModal.addEventListener('click', function () {
  tutupModal();
});

// Tambahan kecil agar modal juga bisa ditutup saat area overlay diklik.
elemenModal.addEventListener('click', function (event) {
  if (event.target === elemenModal) {
    tutupModal();
  }
});

// ===== 3. MODIFIKASI MANDIRI: TOGGLE DAFTAR KEAHLIAN =====
const btnToggleSkills = document.querySelector('#btnToggleSkills');
const skillMatrix = document.querySelector('#skillMatrix');

btnToggleSkills.addEventListener('click', function () {
  skillMatrix.classList.toggle('is-hidden');

  const disembunyikan = skillMatrix.classList.contains('is-hidden');
  btnToggleSkills.textContent = disembunyikan
    ? 'Tampilkan Keahlian'
    : 'Sembunyikan Keahlian';
  btnToggleSkills.setAttribute('aria-expanded', String(!disembunyikan));
});
