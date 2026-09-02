// MenuForge Marketing Site - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  var mobileMenuToggle = document.getElementById('mobileMenuToggle');
  var navLinks = document.getElementById('navLinks');
  var header = document.getElementById('header');

  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      mobileMenuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });

    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 1100) {
          navLinks.classList.remove('active');
          mobileMenuToggle.textContent = '☰';
        }
      });
    });
  }

  if (header) {
    window.addEventListener('scroll', function() {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var href = this.getAttribute('href');
      if (href === '#' || href === '') return;
      e.preventDefault();
      var target = document.querySelector(href);
      if (target) {
        var headerHeight = header ? header.offsetHeight : 80;
        var targetTop = target.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: targetTop - headerHeight - 20, behavior: 'smooth' });
      }
    });
  });

  // Intersection Observer for fade-in animations
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.feature-card').forEach(function(card, i) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease ' + (i * 0.1) + 's, transform 0.6s ease ' + (i * 0.1) + 's';
    observer.observe(card);
  });

  document.querySelectorAll('.workflow-step').forEach(function(step, i) {
    step.style.opacity = '0';
    step.style.transform = 'translateY(30px)';
    step.style.transition = 'opacity 0.6s ease ' + (i * 0.15) + 's, transform 0.6s ease ' + (i * 0.15) + 's';
    observer.observe(step);
  });

  // Recipe editor mockup: tab switching + auto-cycle
  var mockupTabs = document.querySelectorAll('.mockup-modal-tabs .mockup-tab[data-tab]');
  var mockupPanels = document.querySelectorAll('.mockup-modal-body .modal-mockup-panel');
  var tabOrder = ['overview', 'ingredients', 'prep'];
  var currentTabIdx = 0;
  var tabCycleTimer = null;

  function switchTab(tabId) {
    mockupTabs.forEach(function(t) { t.classList.remove('active'); });
    mockupPanels.forEach(function(p) { p.hidden = true; });
    mockupTabs.forEach(function(t) {
      if (t.getAttribute('data-tab') === tabId) t.classList.add('active');
    });
    mockupPanels.forEach(function(p) {
      if (p.id === 'modal-mockup-' + tabId) p.hidden = false;
    });
  }

  function startTabCycle() {
    if (tabCycleTimer) clearInterval(tabCycleTimer);
    tabCycleTimer = setInterval(function() {
      currentTabIdx = (currentTabIdx + 1) % tabOrder.length;
      switchTab(tabOrder[currentTabIdx]);
    }, 5000);
  }

  if (mockupTabs.length && mockupPanels.length) {
    mockupTabs.forEach(function(tab) {
      tab.addEventListener('click', function(e) {
        e.preventDefault();
        var tabId = this.getAttribute('data-tab');
        currentTabIdx = tabOrder.indexOf(tabId);
        switchTab(tabId);
        if (tabCycleTimer) clearInterval(tabCycleTimer);
        tabCycleTimer = null;
        setTimeout(startTabCycle, 15000);
      });
    });
    startTabCycle();
  }

  // Scrollbar: show on scroll or when mouse is near the right gutter
  var scrollbarTimeout;
  function showScrollbar() {
    document.documentElement.classList.add('scrollbar-visible');
    clearTimeout(scrollbarTimeout);
    scrollbarTimeout = setTimeout(function() {
      document.documentElement.classList.remove('scrollbar-visible');
    }, 1500);
  }
  window.addEventListener('scroll', showScrollbar, { passive: true });
  document.addEventListener('mousemove', function(e) {
    if (window.innerWidth - e.clientX < 24) showScrollbar();
  }, { passive: true });

  // Grid recipe cards: tooltip centered in blank space right of "Add New Recipe" card
  var tooltipEl = document.createElement('div');
  tooltipEl.id = 'mockup-card-tooltip';
  tooltipEl.setAttribute('role', 'tooltip');
  tooltipEl.className = 'mockup-card-tooltip-js';

  var gridLayout = document.querySelector('.preview-grid-layout');
  if (gridLayout) {
    gridLayout.style.position = 'relative';
    gridLayout.appendChild(tooltipEl);
  }

  var addCard = document.querySelector('.responsive-card-grid .add-recipe-card');

  function positionTooltipFixed() {
    if (!addCard || !gridLayout) return;
    var gridRect = gridLayout.getBoundingClientRect();
    var cardRect = addCard.getBoundingClientRect();
    var blankLeft = cardRect.right - gridRect.left;
    var blankRight = gridRect.width;
    var centerX = blankLeft + (blankRight - blankLeft) / 2;
    var centerY = cardRect.top - gridRect.top + cardRect.height / 2;
    tooltipEl.style.left = centerX + 'px';
    tooltipEl.style.top = centerY + 'px';
    tooltipEl.style.transform = 'translate(-50%, -50%)';
  }

  document.querySelectorAll('.mockup-card-hover').forEach(function(card) {
    var text = card.getAttribute('data-tooltip');
    if (!text) return;
    card.addEventListener('mouseenter', function() {
      tooltipEl.textContent = text;
      tooltipEl.classList.add('is-visible');
      positionTooltipFixed();
    });
    card.addEventListener('mouseleave', function() {
      tooltipEl.classList.remove('is-visible');
    });
  });

  // Reviews: stagger pop-in once the sticky section header pins
  (function initReviewsReveal() {
    var section = document.querySelector('.reviews-section');
    if (!section) return;

    var head = section.querySelector('.section-sticky-head');
    var sentinel = section.querySelector('.reviews-sticky-sentinel');
    var stickyTop = window.matchMedia('(max-width: 1024px)').matches ? 64 : 72;
    var revealed = false;

    function reveal() {
      if (revealed) return;
      revealed = true;
      section.classList.add('is-revealed');
      window.setTimeout(function() {
        section.classList.add('is-settled');
      }, 1800);
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      reveal();
      return;
    }

    function headPastPin() {
      if (!head) return false;
      return head.getBoundingClientRect().top <= stickyTop + 1;
    }

    if (sentinel) {
      var pinObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (!entry.isIntersecting && entry.boundingClientRect.top < stickyTop) {
            reveal();
          }
        });
      }, { root: null, threshold: 0, rootMargin: '-' + stickyTop + 'px 0px 0px 0px' });
      pinObserver.observe(sentinel);
    }

    // Fallback if sticky pin detection misses (or deep-link already in section)
    var sectionObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && headPastPin()) reveal();
      });
    }, { threshold: [0, 0.15, 0.35], rootMargin: '0px 0px -5% 0px' });
    sectionObserver.observe(section);

    requestAnimationFrame(function() {
      if (headPastPin()) reveal();
    });
  })();
});

document.addEventListener('click', function(event) {
  var mobileMenuToggle = document.getElementById('mobileMenuToggle');
  var navLinks = document.getElementById('navLinks');
  if (navLinks && navLinks.classList.contains('active')) {
    if (!navLinks.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
      navLinks.classList.remove('active');
      mobileMenuToggle.textContent = '☰';
    }
  }
});
