const TELEGRAM_URL = 'https://t.me/+V3GANmUmyDs2NDRl';

const themes = [
  {bg:['#10051f','#2b0b4f','#57127d'], orb1:'#b15cff', orb2:'#ff3ea5', accent:'#ffd6f3'},
  {bg:['#031229','#063b68','#087ca8'], orb1:'#19c8ff', orb2:'#1769ff', accent:'#bdefff'},
  {bg:['#190707','#4d1010','#8a1c35'], orb1:'#ff7a45', orb2:'#ff2d69', accent:'#ffd0b8'},
  {bg:['#031c19','#075044','#0b7b69'], orb1:'#42f5b3', orb2:'#19b8ff', accent:'#c8fff0'},
  {bg:['#130b27','#2b155c','#4e1f83'], orb1:'#a970ff', orb2:'#ff4fd8', accent:'#ead8ff'},
  {bg:['#171000','#4a2700','#8c4b00'], orb1:'#ffd166', orb2:'#ff7b00', accent:'#fff0ad'},
  {bg:['#06151b','#073f4b','#096b72'], orb1:'#55f0ff', orb2:'#6f7cff', accent:'#d6fbff'},
  {bg:['#16051c','#4b0b52','#84136d'], orb1:'#ff67d4', orb2:'#8f7cff', accent:'#ffe0fa'}
];

let themeIndex = Math.floor(Math.random() * themes.length);

function applyTheme(theme){
  const root = document.documentElement;
  root.style.setProperty('--bg1', theme.bg[0]);
  root.style.setProperty('--bg2', theme.bg[1]);
  root.style.setProperty('--bg3', theme.bg[2]);
  root.style.setProperty('--orb1', theme.orb1);
  root.style.setProperty('--orb2', theme.orb2);
  root.style.setProperty('--accent', theme.accent);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme.bg[0]);
}

function rotateTheme(){
  themeIndex = (themeIndex + 1) % themes.length;
  applyTheme(themes[themeIndex]);
}

applyTheme(themes[themeIndex]);
setInterval(rotateTheme, 1500);

const btn = document.getElementById('joinBtn');
const footerBrand = document.getElementById('footerBrand');

if (btn) {
  btn.href = TELEGRAM_URL;

  btn.addEventListener('click', function(e){
    if (typeof fbq === 'function') {
      fbq('track', 'Subscribe');
    }

    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = ((e.clientX || (rect.left + rect.width/2)) - rect.left - size/2) + 'px';
    ripple.style.top = ((e.clientY || (rect.top + rect.height/2)) - rect.top - size/2) + 'px';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  });
}

if (footerBrand) footerBrand.href = TELEGRAM_URL;
