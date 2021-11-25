document.querySelectorAll('.menu li a').forEach(function (el) {
  const href = el.href.split("/");
  if ( window.location.pathname === `/${href[href.length-1]}`){
      el.classList.add('active');
  }
});