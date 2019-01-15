var MAIN = document.querySelector("body");

MAIN.style.transition = "padding-top .2s";

var linkToPage = "#";
var banner =
  '<div id="conterfeitBanner" style="font-family: \'Lato\', sans-serif;width: 100%;position:fixed;top:0;"><div id="conterfeitBannerCont" style="overflow:hidden;box-sizing:border-box;height:4px;padding:0 20px;background-color: #7F76BE;display:flex;align-items:center;justify-content:center;color:#fff;transition:height .3s;border:solid 2px #7F76BE;"><div class="bannerText">Buy real and avoid conterfeit</div><a class="bannerButton" style="white-space: nowrap;border:2px solid #fff; background:none;color:#fff;padding:0 30px;margin-left:20px;border-radius:0;font-size:12px;line-height:2em;font-weight:300;cursor:pointer;outline:none !important;text-decoration:none;" href="' +
  linkToPage +
  '">LEARN MORE</a></div></div>';

MAIN.insertAdjacentHTML("afterbegin", banner);

var BANNER = document.querySelector("#conterfeitBanner");
var BANNERCONT = document.querySelector("#conterfeitBannerCont");

var bannerButton = document.querySelector(".bannerButton");
var bannerText = document.querySelector(".bannerText");

function checkMainTop(timeout) {
  if (!timeout)
    timeout = 0;
  setTimeout(function() {
    var mainStyle = window.getComputedStyle(MAIN);
    var headerHeight = BANNER.offsetHeight;
    var mainPaddTop = parseInt(
      mainStyle.getPropertyValue("padding-top").replace(/\D/g, "")
    );

    if (headerHeight !== mainPaddTop) {
      MAIN.style.paddingTop = headerHeight + "px";
    }
  },timeout);
}

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    bannerButton.style.padding = "5px";
    bannerButton.style.marginLeft = "8px";
    bannerText.style.fontSize = "14px";
  } else {
    bannerButton.style.padding = "0 30px";
    bannerButton.style.marginLeft = "20px";
    bannerText.style.fontSize = "16px";
  }
}

var x = window.matchMedia("(max-width: 480px)");
myFunction(x);
x.addListener(myFunction);

setTimeout(function() {
  BANNERCONT.style.height = "50px";

  checkMainTop(300);
},300);

checkMainTop();
