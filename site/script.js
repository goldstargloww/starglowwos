// https://www.reddit.com/r/neocities/comments/10t6btl/comment/j7ajjqc

let isEnglish;

function tokiponaLang() {
  for(let en of document.querySelectorAll('.txt-en'))
  {
    en.style.display = 'none';
  }
  for(let tp of document.querySelectorAll('.txt-tp'))
  {
    tp.style.display = 'inline';
  }
  isEnglish = false;
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
  isEnglish = true;
}
window.onload = function () {
  englishLang();
}

function toggleLang() {
  if(isEnglish) {
    tokiponaLang();
  }
  else {
    englishLang();
  }
}