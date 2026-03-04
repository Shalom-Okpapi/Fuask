/* FUASK – Homepage Scripts */

/* ── HERO SLIDER ── */
(function () {
  var slides  = document.querySelectorAll('.hero-slide');
  var dots    = document.querySelectorAll('.hero-dot');
  var current = 0;
  var timer;

  function show(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function next() { show(current + 1); }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(next, 5500);
  }

  dots.forEach(function (d, i) {
    d.addEventListener('click', function () { show(i); resetTimer(); });
  });

  resetTimer();
})();

/* ── CAMPUS SLIDER ── */
(function () {
  var track    = document.querySelector('.campus-track');
  var cards    = document.querySelectorAll('.campus-card');
  var btnPrev  = document.querySelector('.slider-arrow.prev');
  var btnNext  = document.querySelector('.slider-arrow.next');
  if (!track || !cards.length) return;

  var pos = 0;

  function visibleCount() {
    if (window.innerWidth < 576)  return 1;
    if (window.innerWidth < 992)  return 2;
    return 3;
  }

  function maxPos() {
    return Math.max(0, cards.length - visibleCount());
  }

  function move(dir) {
    pos = Math.max(0, Math.min(pos + dir, maxPos()));
    var pct = (100 / visibleCount()) * pos;
    track.style.transform = 'translateX(-' + pct + '%)';
  }

  if (btnPrev) btnPrev.addEventListener('click', function () { move(-1); });
  if (btnNext) btnNext.addEventListener('click', function () { move(1); });

  window.addEventListener('resize', function () {
    pos = 0;
    track.style.transform = 'translateX(0)';
  });
})();

/* ── ADMISSION MODAL ── */
(function () {
  var overlay = document.getElementById('admissionModal');
  if (!overlay) return;

  function close() { overlay.style.display = 'none'; }

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });

  var closeBtn = overlay.querySelector('.close-x');
  var okBtn    = overlay.querySelector('.btn-ok');
  if (closeBtn) closeBtn.addEventListener('click', close);
  if (okBtn)    okBtn.addEventListener('click', close);
})();

/* ── STICKY NAV SCROLL ── */
(function () {
  var nav = document.getElementById('navbar-main');
  if (!nav) return;
  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
      nav.style.padding = '4px 0';
      nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
    } else {
      nav.style.padding = '8px 0';
      nav.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
    }
  });
})();

