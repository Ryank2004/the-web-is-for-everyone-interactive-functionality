//Javascript voor hamburger menu
const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  document.body.classList.toggle("slide-right");
});

//Javascript voor invliegende animatie
// let reveals = document.querySelectorAll(".reveal");

// window.addEventListener("scroll", reveal);
// window.addEventListener("scroll", checkHeight);

// function reveal() {
//     for (var i = 0; i < reveals.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = reveals[i].getBoundingClientRect().top;
//       var elementVisible = 150;
  
//       if (elementTop < windowHeight - elementVisible) {
//         reveals[i].classList.add("active");
//       } else {
//         reveals[i].classList.remove("active");
//       }
//     }
//   }
  
  
//   window.addEventListener("resize", checkHeight);
  

document.addEventListener("DOMContentLoaded", () => {
  // Krijg de huidige path van de URL.
  const currentPath = window.location.pathname;

  // Loop door alle navigatielinks.
  document.querySelectorAll('.lijst-item').forEach(link => {
      // Krijg het pad van de href attribuut voor de link.
      const linkPath = link.getAttribute('href');

      // Verwijder de 'active-state' klasse van alle links eerst
      link.classList.remove('active-state');

      // Controleer of de link overeenkomt met de huidige pagina.
      // Verwijder eventuele leidende en volgende slashes voor een juiste vergelijking.
      if (currentPath.replace(/^\/|\/$/g, '') === linkPath.replace(/^\/|\/$/g, '')) {
          // Voeg de 'active-state' klasse toe aan de overeenkomende link.
          link.classList.add('active-state');
      }
  });
});


