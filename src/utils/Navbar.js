function windowScroll(handleScroll){
    window.addEventListener('scroll',handleScroll)
}

function windowUnscroll(handleScroll){
    window.removeEventListener('scroll',handleScroll)
}

function handleScroll(setScrolled) {
    if (window.scrollY > 50) {
      setScrolled(true);
      console.log('scrolled')
    } else {
      setScrolled(false);
    }
  };

module.exports={windowScroll,windowUnscroll,handleScroll}