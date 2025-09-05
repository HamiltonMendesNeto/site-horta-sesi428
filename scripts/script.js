document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById("mobile-menu");
    const navList = document.getElementById("nav-list");
    const overlay = document.getElementById("overlay");
  
    mobileMenu.addEventListener("click", function() {
      mobileMenu.classList.toggle("is-active");
      navList.classList.toggle("active");
      overlay.classList.toggle("active");
      document.body.style.overflow = navList.classList.contains('active') ? 'hidden' : '';
    });
  
    overlay.addEventListener("click", function() {
      mobileMenu.classList.remove("is-active");
      navList.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = '';
    });
  
    // Fechar o menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove("is-active");
        navList.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = '';
      });
    });
  
    // Adicionar smooth scroll para navegação rápida
    document.querySelectorAll('.lettuce-nav-minimal-item').forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  
    // Adicionar efeito de destaque ao scroll para as seções
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);
  
    // Observar as seções para animação
    document.querySelectorAll('.lettuce-section').forEach(section => {
      section.style.opacity = 0;
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(section);
    });
  });

  