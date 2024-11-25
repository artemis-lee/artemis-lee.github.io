const hiddenItems = document.querySelectorAll('.menu .hidden');
const buttonText = document.querySelector('.btn-text');
const iconBtn = document.querySelector('.icon');

function toggleMenu() {
  buttonText.innerText =
    buttonText.innerText === 'Скрыть' ? 'Показать все' : 'Скрыть';

  hiddenItems.forEach((item) => {
    item.style.display =
      item.style.display === 'none' || item.style.display === ''
        ? 'block'
        : 'none';
  });


  if (iconBtn.className === 'icon') {
    iconBtn.className = 'icon closed';
  } else { 
    iconBtn.className = 'icon';
  }

}


 