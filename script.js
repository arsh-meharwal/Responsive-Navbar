function initHamburger(){
    const hamburgerIcon = document.querySelector('.js_hamburger_icon');
    const iconSpans = document.querySelectorAll('.js_hamburger_icon span');
  
    function activeHamburger() {
      document.querySelector('.js_hamburger_list ul').classList.toggle('ativo');
  
      iconSpans.forEach((item) => {
        item.classList.toggle('ativo');
      });
      
  
    }
    hamburgerIcon.addEventListener('click', activeHamburger);
}
  
initHamburger();