// https://www.reddit.com/r/neocities/comments/10t6btl/comment/j7ajjqc

let isEnglish;
let isTokiPona;
let isSitelenPona;

function tokiponaLang() {
  for(let en of document.querySelectorAll('.txt-en'))
  {
    en.style.display = 'none';
  }
  for(let tp of document.querySelectorAll('.txt-tp'))
  {
    tp.style.display = 'inline';
  }
  for(let sp of document.querySelectorAll('.txt-sp'))
  {
    sp.style.display = 'none'
  }
  isEnglish = false;
  isTokiPona = true;
  isSitelenPona = false;
}
function englishLang() {
  for(let en of document.querySelectorAll('.txt-en'))
  {
    en.style.display = 'inline';
  }
  for(let tp of document.querySelectorAll('.txt-tp'))
  {
    tp.style.display = 'none';
  }
  for(let sp of document.querySelectorAll('.txt-sp'))
  {
    sp.style.display = 'none'
  }
  isEnglish = true;
  isTokiPona = false;
  isSitelenPona = false;
}
function sitelenponaLang() {
  for(let en of document.querySelectorAll('.txt-en'))
  {
    en.style.display = 'none';
  }
  for(let tp of document.querySelectorAll('.txt-tp'))
  {
    tp.style.display = 'none';
  }
  for(let sp of document.querySelectorAll('.txt-sp'))
  {
    sp.style.display = 'inline'
  }
  isEnglish = false;
  isTokiPona = false;
  isSitelenPona = true;
}

window.onload = function () {
  englishLang();
}

function toggleLang() {
  if(isEnglish) {
    tokiponaLang();
  }
  else if(isTokiPona) {
    sitelenponaLang();
  }
  else {
    englishLang();
  }
}