function windowScroll(handleScroll){
    window.addEventListener('scroll',handleScroll)
}

function windowUnscroll(handleScroll){
    window.removeEventListener('scroll',handleScroll)
}

function handleScroll(setScrolled) {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

module.exports={windowScroll,windowUnscroll,handleScroll}