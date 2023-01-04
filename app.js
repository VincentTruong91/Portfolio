const menuIcon = document.querySelector('.menu-icon');
const popup = document.querySelector('.popup');
const exitIcon = document.querySelector('.exit-icon');

menuIcon.addEventListener('click', () => {
  if (popup.style.display === 'none') {
    popup.style.display = 'block';
    menuIcon.style.display = 'none';
    exitIcon.style.display = 'block';
  } 
  else {
    popup.style.display = 'none';
    menuIcon.style.display = 'block';
  }
});

exitIcon.addEventListener('click', () => {
    if(popup.style.display === 'block'){
        popup.style.display = 'none';
        menuIcon.style.display = 'block';
        exitIcon.style.display = 'none';
    }
    else{
        popup.style.display = 'block';
        menuIcon.style.display = 'none';
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth <= 402) {
        if(popup.style.display === 'none'){
            popup.style.display = 'none';
            menuIcon.style.display = 'block';
            exitIcon.style.display = 'none';
        }
        else{
            popup.style.display = 'block';
            menuIcon.style.display = 'none';
            exitIcon.style.display = 'block';
        }
    }
    else if(window.innerWidth > 402){
      popup.style.display = 'none';
      menuIcon.style.display = 'none';
      exitIcon.style.display = 'none';
    }
    else {
      popup.style.display = 'none';
      menuIcon.style.display = 'none';
      exitIcon.style.display = 'none';
    }
  });

