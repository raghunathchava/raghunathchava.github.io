// ============================================
// Raghunath Chava Website - Interactive JavaScript
// Modern UX Enhancements
// ============================================

(function() {
  'use strict';

  // ============================================
  // Loading Screen
  // ============================================
  
  window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
          loadingScreen.style.display = 'none';
        }, 500);
      }, 800);
    }
  });

  // ============================================
  // Theme Toggle
  // ============================================
  
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  // Initialize theme
  const currentTheme = localStorage.getItem('theme') || 'light';
  html.className = currentTheme;
  updateThemeIcon(currentTheme);
  
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const newTheme = html.className === 'dark' ? 'light' : 'dark';
      html.className = newTheme;
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
  
  function updateThemeIcon(theme) {
    if (themeToggle) {
      themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  // ============================================
  // Navigation Scroll Effect
  // ============================================
  
  const nav = document.querySelector('.nav');
  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (nav) {
      if (currentScroll > 100) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
    
    lastScroll = currentScroll;
  });

  // ============================================
  // Smooth Scroll for Anchor Links
  // ============================================
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '#!') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const navHeight = nav ? nav.offsetHeight : 0;
        const targetPosition = target.offsetTop - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ============================================
  // Intersection Observer for Animations
  // ============================================
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements for fade-in animation
  document.querySelectorAll('.erp-card, .enterprise-card, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });

  // ============================================
  // Copy Code Block
  // ============================================
  
  const copyBtn = document.querySelector('.copy-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', function() {
      const codeBlock = this.closest('.code-block');
      const code = codeBlock.querySelector('code');
      
      if (code) {
        const text = code.textContent;
        navigator.clipboard.writeText(text).then(() => {
          const originalText = this.textContent;
          this.textContent = 'Copied!';
          this.style.background = 'var(--green)';
          this.style.color = 'var(--white)';
          
          setTimeout(() => {
            this.textContent = originalText;
            this.style.background = '';
            this.style.color = '';
          }, 2000);
        }).catch(err => {
          console.error('Failed to copy:', err);
        });
      }
    });
  }

  // ============================================
  // Mobile Menu Toggle
  // ============================================
  
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      this.classList.toggle('active');
      
      // Animate hamburger icon
      const spans = this.querySelectorAll('span');
      if (this.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
      }
    });
  }

  // ============================================
  // Parallax Effect for Hero Background
  // ============================================
  
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.5;
      heroBg.style.transform = `translateY(${rate}px)`;
    });
  }

  // ============================================
  // Card Hover Effects
  // ============================================
  
  document.querySelectorAll('.card-hover').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });

  // ============================================
  // Form Validation (if forms are added)
  // ============================================
  
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      }
      form.classList.add('was-validated');
    });
  });

  // ============================================
  // Lazy Loading Images
  // ============================================
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // ============================================
  // Performance: Debounce Function
  // ============================================
  
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // ============================================
  // Analytics (if needed)
  // ============================================
  
  // Track button clicks
  document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', function() {
      const text = this.textContent.trim();
      // Analytics event would go here
      console.log('Button clicked:', text);
    });
  });

  // ============================================
  // Error Handling
  // ============================================
  
  window.addEventListener('error', function(e) {
    console.error('Error:', e.error);
    // Error reporting would go here
  });

  // ============================================
  // Console Message
  // ============================================
  
  console.log('%cRaghunath Chava', 'font-size: 24px; font-weight: bold; color: #1565C0;');
  console.log('%cModern Open-Source ERP', 'font-size: 14px; color: #00ACC1;');
  console.log('%cBuilt with Django 5.0.6, Django REST Framework 3.15.1, React 18, and PostgreSQL 17', 'font-size: 12px; color: #757575;');

})();

