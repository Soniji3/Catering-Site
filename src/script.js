
document.addEventListener('DOMContentLoaded', function() {
  // Navigation Toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      this.classList.toggle('active');
    });
  }
  
  // Navigation Links Smooth Scroll
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      }
    });
  });
  
  // Header Background Change on Scroll
  const header = document.getElementById('header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Tabs Functionality
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabPanes = document.querySelectorAll('.tab-pane');
  
  tabLinks.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from all tabs
      tabLinks.forEach(t => t.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding pane
      const tabId = this.getAttribute('data-tab');
      this.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });
  
  // Menu Filtering
  const menuCategories = document.querySelectorAll('.menu-category');
  const menuItems = document.querySelectorAll('.menu-item');
  
  menuCategories.forEach(category => {
    category.addEventListener('click', function() {
      // Remove active class from all categories
      menuCategories.forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked category
      this.classList.add('active');
      
      const filter = this.getAttribute('data-category');
      
      // Show/hide items based on category
      menuItems.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  
  // Testimonial Slider
  const testimonials = document.querySelectorAll('.testimonial');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.testimonial-arrow.prev');
  const nextBtn = document.querySelector('.testimonial-arrow.next');
  let currentIndex = 0;
  
  function showTestimonial(index) {
    testimonials.forEach(t => {
      t.style.transform = `translateX(-${index * 100}%)`;
      t.classList.remove('active');
    });
    dots.forEach(d => d.classList.remove('active'));
    
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
  }
  
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', function() {
      currentIndex = currentIndex <= 0 ? testimonials.length - 1 : currentIndex - 1;
      showTestimonial(currentIndex);
    });
    
    nextBtn.addEventListener('click', function() {
      currentIndex = currentIndex >= testimonials.length - 1 ? 0 : currentIndex + 1;
      showTestimonial(currentIndex);
    });
  }
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      currentIndex = index;
      showTestimonial(currentIndex);
    });
  });
  
  // Initialize the testimonial slider
  showTestimonial(currentIndex);
  
  // Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Here you would normally send the form data to your server
      // For demo purposes, we'll just show an alert
      alert('Thank you for your inquiry! We will get back to you soon.');
      this.reset();
    });
  }

  // Animation on scroll
  function addAnimationOnScroll() {
    const animatedElements = document.querySelectorAll('.section-header, .about-content, .service-content, .menu-grid, .gallery-grid, .chef-content');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeIn');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
      observer.observe(el);
    });
  }
  
  // Call the animation function
  addAnimationOnScroll();
});
