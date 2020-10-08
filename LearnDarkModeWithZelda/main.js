const toggleSwitch =document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
const firstSection = document.querySelector('.firstSection');
const lastSection = document.querySelector('.lastSection');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if(currentTheme === 'dark') {
    toggleSwitch.checked = true;
    firstSection.classList.add('hide');
    lastSection.classList.remove('hide');
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    firstSection.classList.add('hide');
    lastSection.classList.remove('hide');
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    firstSection.classList.remove('hide');
    lastSection.classList.add('hide')
  }
}

toggleSwitch.addEventListener('change', switchTheme, false)