// scripts/script.js - VERSÃO SIMPLIFICADA
document.addEventListener('DOMContentLoaded', function() {
    // Menu hambúrguer
    const mobileMenu = document.getElementById("mobile-menu");
    const navList = document.getElementById("nav-list");
    const overlay = document.getElementById("overlay");
  
    mobileMenu.addEventListener("click", function() {
      mobileMenu.classList.toggle("is-active");
      navList.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  
    overlay.addEventListener("click", function() {
      mobileMenu.classList.remove("is-active");
      navList.classList.remove("active");
      overlay.classList.remove("active");
    });
  
    // Fechar menu ao clicar nos links
    document.querySelectorAll('.nav-list a').forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove("is-active");
        navList.classList.remove("active");
        overlay.classList.remove("active");
      });
    });
  
    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  
    console.log('Site carregado!');
  });