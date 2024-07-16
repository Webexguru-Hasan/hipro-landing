document.addEventListener("DOMContentLoaded", function() {
    const accordionItems = document.querySelectorAll(".accordion-item");
  
    accordionItems.forEach(item => {
      const btn = item.querySelector(".accordion-btn");
      const content = item.querySelector(".accordion-description");
  
      btn.addEventListener("click", () => {
        // Close all other accordion items
        accordionItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove("active");
            otherItem.querySelector(".accordion-description").style.height = 0;
          }
        });
  
        // Toggle the current accordion item
        if (item.classList.contains("active")) {
          item.classList.remove("active");
          content.style.height = 0;
        } else {
          item.classList.add("active");
          content.style.height = content.scrollHeight + "px";
        }
      });
    });
  
    // Ensure the first item is open on load
    const firstItem = accordionItems[0];
    const firstContent = firstItem.querySelector(".accordion-description");
    firstItem.classList.add("active");
    firstContent.style.height = firstContent.scrollHeight + "px";
  });

  // testimonial-slider-js

  document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".testimonial-track");
    const items = Array.from(document.querySelectorAll(".testimonial-item"));
    const dots = Array.from(document.querySelectorAll(".dot"));
  
    let currentIndex = 0;
  
    const updateSlider = () => {
      const offset = (currentIndex - 1) * (100 / 3);
      track.style.transform = `translateX(${offset}%)`;
  
      items.forEach((item, index) => {
        item.classList.toggle("focus", index === currentIndex);
      });
  
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
    };
  
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlider();
      });
    });
  
    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % items.length;
      updateSlider();
    };
  
    const prevSlide = () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateSlider();
    };
  
    // Initialize the slider
    updateSlider();
  
    // Auto-slide functionality
    setInterval(nextSlide, 5000); // Change slide every 3 seconds
  });

  //blog-js

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
  
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
      },
      576:{
        slidesPerView: 1,
      }
      // when window width is < 768px
      
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  