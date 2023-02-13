const menuStateIndicator = document.querySelector('.menu__state__indicator');
const menuWraper = document.querySelector('.menu__wraper');
const menuItem = document.querySelectorAll('.menu__item');
const overlay = document.querySelector('.overlay');
const burger = document.querySelector('.burger');
const container = document.querySelector('.container');
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const root = document.querySelector(':root');
const darkModeChechbox = document.querySelector('.toggle__input');

menuStateIndicator.addEventListener('click', handleInicatorClick);
overlay.addEventListener('click', handleInicatorClick);

function handleInicatorClick(e) {
   menuWraper.classList.toggle('expanded');
   menuWraper.classList.remove('show');
   menuStateIndicator.classList.toggle('expanded');
   overlay.classList.toggle('expanded');
   burger.classList.remove('active');
}

menuItem.forEach(item => {
   item.addEventListener('click', handleMenuItemClik);
});

function handleMenuItemClik(e) {
   menuItem.forEach(item => item.classList.remove('active'));
   e.currentTarget.classList.add('active');
   menuWraper.classList.remove('expanded');
   menuStateIndicator.classList.remove('expanded');
   overlay.classList.remove('expanded');
   menuWraper.classList.remove('show');
   burger.classList.remove('active');
}

burger.addEventListener('click', showMobileMenu);

function showMobileMenu(e) {
   e.currentTarget.classList.toggle('active');
   menuWraper.classList.toggle('show');
   overlay.classList.toggle('expanded');
}

document.addEventListener('mouseover', createHoverElement);

function createHoverElement(e) {
   document.querySelector('.hover__element')?.remove();
   const expanded = menuWraper.classList.contains('expanded');
   const mediaQueryMatch = window.matchMedia(
      '(max-width: 1024px) and (min-width: 768px)'
   ).matches;
   if (e.target.closest('.menu__item') && !expanded && mediaQueryMatch) {
      const hoverElementLeft = e.target
         .closest('.menu__wraper')
         .getBoundingClientRect().right;
      const hoverElementTop = e.target
         .closest('.menu__item')
         .getBoundingClientRect().top;
      const hoverElementText =
         e.target.closest('.menu__item').children[0].children[1].textContent;
      const hoverElement = document.createElement('div');
      hoverElement.classList.add('hover__element');
      hoverElement.textContent = hoverElementText;
      hoverElement.style.setProperty(
         '--position-left',
         hoverElementLeft + 4 + 'px'
      );
      hoverElement.style.setProperty('--position-top', hoverElementTop + 'px');
      container.appendChild(hoverElement);
   }
}

sun.addEventListener('click', toggleLightTheme);
moon.addEventListener('click', toggleLightTheme);

function toggleLightTheme() {
   root.toggleAttribute('light-theme');
   darkModeChechbox.toggleAttribute('checked', true);
}
