var imagesLoaded = false;
var fontsLoaded = false;

window.addEventListener("scroll", lazyLoad);
setTimeout(lazyLoad, 3000);

function lazyLoad() {
  if (!imagesLoaded) {
    loadImages();
  }

  if (!fontsLoaded) {
    loadFonts();
  }
}

function loadImages() {
  imagesLoaded = true;

  [].forEach.call(document.querySelectorAll("img[data-src]"), function(img) {
    img.setAttribute("src", img.getAttribute("data-src"));
    img.onload = function() {
      img.removeAttribute("data-src");
    };
  });
}

function loadFonts() {
  fontsLoaded = true;

  var style = document.createElement("style");
  style.type = "text/css";
  var css =
    "@font-face{font-family:'Open Sans';font-style:normal;font-weight:300;src:local('Open Sans Light'),local('OpenSans-Light'),url(https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Open Sans';font-style:normal;font-weight:400;src:local('Open Sans Regular'),local('OpenSans-Regular'),url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}";
  style.appendChild(document.createTextNode(css));

  document.head.appendChild(style);
}
