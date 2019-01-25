document.addEventListener("DOMContentLoaded", function (event) {

  var MAIN = document.querySelector("body");

  MAIN.style.transition = "padding-top .3s";

  var linkToPage = "#counterfeitInfo";
  var banner =
    '<div id="counterfeitBanner" style="font-family: \'Lato\', sans-serif;width: 100%;position:fixed;top:0;z-index:1000;"><div id="counterfeitBannerCont" style="overflow:hidden;box-sizing:border-box;height:4px;padding:0 20px;background-color: #440099;display:flex;align-items:center;justify-content:center;color:#fff;transition:height .3s;border:solid 2px #440099;"><div class="bannerText" style="letter-spacing: 3px;text-transform: uppercase;"><span style="font-weight: 600">Buy real.</span> avoid counterfeit</div><a class="bannerButton" style="white-space: nowrap;border:2px solid #fff; background:none;color:#fff;padding:0 30px;margin-left:20px;border-radius:0;font-size:12px;line-height:2em;font-weight:300;cursor:pointer;outline:none !important;text-decoration:none;" href="' +
    linkToPage +
    '">LEARN MORE</a></div></div>';

  MAIN.insertAdjacentHTML("afterbegin", banner);

  var BANNER = document.querySelector("#counterfeitBanner");
  var BANNERCONT = document.querySelector("#counterfeitBannerCont");

  var bannerButton = document.querySelector(".bannerButton");
  var bannerText = document.querySelector(".bannerText");

  function checkMainTop(timeout) {
    if (!timeout)
      timeout = 0;
    setTimeout(function () {
      var mainStyle = window.getComputedStyle(MAIN);
      var headerHeight = BANNER.offsetHeight;
      var mainPaddTop = parseInt(
        mainStyle.getPropertyValue("padding-top").replace(/\D/g, "")
      );

      if (headerHeight !== mainPaddTop) {
        MAIN.style.paddingTop = headerHeight + "px";
      }
    }, timeout);
  }

  function checkIfMobile(x) {
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

  function checkIfTablet(x) {
    if (x.matches) {
      // If media query matches
      bannerText.style.letterSpacing = "1px";
    } else {
      bannerText.style.letterSpacing = "3px";
    }
  }

  var x = window.matchMedia("(max-width: 480px)");
  checkIfMobile(x);
  x.addListener(checkIfMobile);

  var y = window.matchMedia("(max-width: 600px)");
  checkIfTablet(y);
  y.addListener(checkIfTablet);

  setTimeout(function () {
    BANNERCONT.style.height = "50px";

    checkMainTop(300);
  }, 300);

// #counterfeitInfo
  var counterfeitPopup = '<div id="counterfeitInfo"> <div class="counterfeight-main"> <a class="close-counterfeit" href="#">&times;</a> <img src="https://cdn.shopify.com/s/files/1/0233/1561/files/rapidLash-2-s_web.png?15996989436826501551" alt="rapidlash" class="counterfeit-img" /> <div class="counterfeit-content"> <div class="counterfeit-scroll"> <div class="counterfeight-title"> <h1> BUY </h1> <br> <h1> REAL </h1> </div> <div class="counterfeight-copy"> <p style="font-size:18px; font-weight:700; text-transform:uppercase; color: #492d8c;"> Beware of Counterfeit Products </p> <p> RapidLash® products are ophthalmologist approved and clinically-proven to be safe and effective for every consumer, but, unfortunately, we are seeing counterfeiters flooding the market with fake RapidLash® products. </p> <p> Counterfeit products can be found at many websites and auction sites such as Amazon, Alibaba, Overstock, eBay, and many others. </p> <p> <!--Counterfeit products are not created equal. Some of them are not shrink-wrapped, come in damaged and/or expired boxes (or no box at all), and lack our product tracking system. These products could also be completely counterfeit, containing a different formula, or at the very least, have been tampered with.--> The only way to ensure that your RapidLash® products are the real deal and contain the <span style="font-weight: 600">original tested, safe and effective formula</span>, is to buy directly from an authorized retailer/seller. </p> <p> In the U.S., only purchase RapidLash® products directly from rapidlash.com or from other authorized retailers found on the “Store Locator” page. <br> For International purchases, please contact <a href="mailto:info@internationalresearchlaboratories.com">info@internationalresearchlaboratories.com</a> to be connected with an authorized distributor/seller. </p> <p style="font-weight: bold;font-size:18px;color: #492d8c;"> BUYER BEWARE </p> <ul style="list-style-type:disc"> <li style="list-style-type:disc"> If the price on RapidLash® products seems way too good to be true, then it probably is. </li> <li style="list-style-type:disc"> Avoid all auction-based websites when purchasing RapidLash® products. </li> <li style="list-style-type:disc"> Be wary of all individual sellers online. Counterfeit sellers will generally not list phone numbers, email addresses, or websites. They will not be affiliated with a reputable company. </li> <li style="list-style-type:disc"> We do not authenticate or guarantee any RapidLash® products purchased on Amazon, Alibaba, Overstock, or eBay among others. </li> </ul> <p> <span style="font-weight: bold">Have a question about a RapidLash® product? We are here to help. </span> <br> FFor US and Canada Ordering & Customer Service Inquiries, please call 877.760.6677 <br> <br> For International Ordering & Customer Service Inquiries (outside the US & Canada) please email <a href="mailto:info@internationalresearchlaboratories.com">info@internationalresearchlaboratories.com</a> </p> </div> </div> </div> </div> </div>';

  MAIN.insertAdjacentHTML("beforeend", counterfeitPopup);

// Add the styling for the animation of the counterfeit popup appearing
  document.head.insertAdjacentHTML("beforeend", "<style>#counterfeitInfo { display: block; position: fixed; top: 50%; left: 50%; height: 0; width: 0; display: flex; transform: translate(-50%,-50%); transition: all 0s; justify-content: center; align-items: center; padding: 0; background: rgba(73,45,140,.6); z-index: 2000; overflow: hidden; } .counterfeight-main { max-width:900px; background: #fff; position: relative; max-height: 100%; margin-right: 250px; display: flex; box-shadow: 0 0 0 32px rgba(255,255,255, .6); } .close-counterfeit { position: absolute; display: inline-block; top: 5px; right: 5px; padding: 0 10px; font-size: 45px; font-weight: bold; line-height: 1em; margin: 0; color: #492d8c; transition: opacity .3s; opacity: .85; -webkit-transform: translateZ(0); border:none !important; outline: none !important; text-decoration: none !important; background: none !important; } #counterfeitInfo:target { height: 100%; width: 100%; padding: 14px; transition: all .35s; } .close-counterfeit:hover { color: #492d8c; opacity: 1; } .close-counterfeit:visited { color: #492d8c; } .counterfeit-img { position: absolute; left: 100%; top: 50%; transform: translate(-40%,-50%); max-height: calc(100vmin - 86px); pointer-events:none; } .counterfeit-content { overflow: hidden; display: flex; max-height: 100%; } .counterfeit-scroll { overflow: auto; flex-grow: 1; padding: 28px; margin-right: 172px; } .counterfeight-title { margin-bottom: 24px; } .counterfeight-title h1 { font-size:50px !important; text-transform:uppercase; font-weight:700; letter-spacing:8px; line-height: 1.1em; padding: 0 10px; margin: 6px 0; color:#492d8c; border: solid 2px #492d8c; display: inline-block; } .counterfeight-main li { margin:.5em 0; } .counterfeight-main h2{ font-size:20px !important; } @media only screen and (max-width: 1250px) { .counterfeight-main { margin-right: 0; } .counterfeit-img { display: none; } .counterfeit-scroll { margin-right: 0; } }</style>");

// Check if the url is looking for the counterfeit information
  if (window.location.href.indexOf("#counterfeit") > -1) {
    console.log("the popup should be appearing...");
    window.location = window.location.href; // Need to test...
  }

  checkMainTop();

});