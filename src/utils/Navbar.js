function windowScroll(handleScroll) {
  window.addEventListener("scroll", handleScroll);
}

function windowUnscroll(handleScroll) {
  window.removeEventListener("scroll", handleScroll);
}

function handleScroll(setScrolled) {
  if (window.scrollY > 50) {
    setScrolled(true);
    console.log("scrolled");
  } else {
    setScrolled(false);
  }
}

function navExtend(changeNavExtended) {
  const toggler=document.querySelector('.navbar-toggler')
  toggler.addEventListener('click',changeNavExtended)
}

function unmountNavExtend(changeNavExtended){
  const toggler=document.querySelector('.navbar-toggler')
  toggler.removeEventListener('click',changeNavExtended)
}

module.exports = { windowScroll, windowUnscroll, handleScroll ,navExtend,unmountNavExtend};
