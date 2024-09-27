/*                                                                                              
                                                                                                                    
                                                            dddddddd                                                
        CCCCCCCCCCCCC                                       d::::::d       iiii       lllllll                       
     CCC::::::::::::C                                       d::::::d      i::::i      l:::::l                       
   CC:::::::::::::::C                                       d::::::d       iiii       l:::::l                       
  C:::::CCCCCCCC::::C                                       d:::::d                   l:::::l                       
 C:::::C       CCCCCC        ooooooooooo            ddddddddd:::::d      iiiiiii       l::::l         ooooooooooo   
C:::::C                    oo:::::::::::oo        dd::::::::::::::d      i:::::i       l::::l       oo:::::::::::oo 
C:::::C                   o:::::::::::::::o      d::::::::::::::::d       i::::i       l::::l      o:::::::::::::::o
C:::::C                   o:::::ooooo:::::o     d:::::::ddddd:::::d       i::::i       l::::l      o:::::ooooo:::::o
C:::::C                   o::::o     o::::o     d::::::d    d:::::d       i::::i       l::::l      o::::o     o::::o
C:::::C                   o::::o     o::::o     d:::::d     d:::::d       i::::i       l::::l      o::::o     o::::o
C:::::C                   o::::o     o::::o     d:::::d     d:::::d       i::::i       l::::l      o::::o     o::::o
 C:::::C       CCCCCC     o::::o     o::::o     d:::::d     d:::::d       i::::i       l::::l      o::::o     o::::o
  C:::::CCCCCCCC::::C     o:::::ooooo:::::o     d::::::ddddd::::::dd     i::::::i     l::::::l     o:::::ooooo:::::o
   CC:::::::::::::::C     o:::::::::::::::o      d:::::::::::::::::d     i::::::i     l::::::l     o:::::::::::::::o
     CCC::::::::::::C      oo:::::::::::oo        d:::::::::ddd::::d     i::::::i     l::::::l      oo:::::::::::oo 
        CCCCCCCCCCCCC        ooooooooooo           ddddddddd   ddddd     iiiiiiii     llllllll        ooooooooooo
*/

(function () {
   "use strict";

   // ======= Sticky Menu
   window.onscroll = function () {
      var header_navbar = document.querySelector(".navigation");
      var sticky = header_navbar.offsetTop;

      if (window.pageYOffset > sticky) {
         header_navbar.classList.add("sticky");
      } else {
         header_navbar.classList.remove("sticky");
      }

      // show or hide the back-top-top button
      var backToTop = document.querySelector(".back-to-top");
      if (
         document.body.scrollTop > 50 ||
         document.documentElement.scrollTop > 50
      ) {
         backToTop.style.display = "flex";
      } else {
         backToTop.style.display = "none";
      }
   };

   // Get the navbar

   // for menu scroll
   var pageLink = document.querySelectorAll(".page-scroll");

   pageLink.forEach((elem) => {
      elem.addEventListener("click", (e) => {
         e.preventDefault();
         document.querySelector(elem.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            offsetTop: 1 - 60,
         });
      });
   });

   // section menu active
   function onScroll(event) {
      var sections = document.querySelectorAll(".page-scroll");
      var scrollPos =
         window.pageYOffset ||
         document.documentElement.scrollTop ||
         document.body.scrollTop;

      for (var i = 0; i < sections.length; i++) {
         var currLink = sections[i];
         var val = currLink.getAttribute("href");
         var refElement = document.querySelector(val);
         var scrollTopMinus = scrollPos + 73;
         if (
            refElement.offsetTop <= scrollTopMinus &&
            refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
         ) {
            document.querySelector(".page-scroll").classList.remove("active");
            currLink.classList.add("active");
         } else {
            currLink.classList.remove("active");
         }
      }
   }

   window.document.addEventListener("scroll", onScroll);

   //===== close navbar-collapse when a  clicked
   let navbarToggler = document.querySelector(".navbar-toggler");
   var navbarCollapse = document.querySelector(".navbar-collapse");

   document.querySelectorAll(".page-scroll").forEach((e) =>
      e.addEventListener("click", () => {
         navbarToggler.classList.remove("active");
         navbarCollapse.classList.remove("show");
      })
   );
   navbarToggler.addEventListener("click", function () {
      navbarToggler.classList.toggle("active");
      navbarCollapse.classList.toggle("show");
   });
})();

/*
   ____   U  ___ u  ____              _       U  ___ u
U /"___|   \/"_ \/ |  _"\    ___     |"|       \/"_ \/
\| | u     | | | |/| | | |  |_"_|  U | | u     | | | |
 | |/__.-,_| |_| |U| |_| |\  | |    \| |/__.-,_| |_| |
  \____|\_)-\___/  |____/ uU/| |\u   |_____|\_)-\___/
 _// \\      \\     |||_.-,_|___|_,-.//  \\      \\
(__)(__)    (__)   (__)_)\_)-' '-(_/(_")("_)    (__)

*/