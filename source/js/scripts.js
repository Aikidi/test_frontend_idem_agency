var isIE11 = navigator.userAgent.match(/Trident.*rv[ :]*(\d+\.\d+)/);

if (isIE11) {
  document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>');
  document.write('<script src="./js/clip-path-polyfill.min.js"></script>');
};