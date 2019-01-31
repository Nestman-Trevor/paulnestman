document.addEventListener("DOMContentLoaded", function (e) {
    var t = document.querySelector("body");
    t.style.transition = "padding-top .3s";
    t.insertAdjacentHTML("afterbegin", '<div id="counterfeitBanner" style="font-family: \'Lato\', sans-serif;width: 100%;position:fixed;top:0;z-index:1000;"><div id="counterfeitBannerCont" style="overflow:hidden;box-sizing:border-box;height:4px;padding:0 20px;background-color: #440099;display:flex;align-items:center;justify-content:center;color:#fff;transition:height .3s;border:solid 2px #440099;"><div class="bannerText" style="letter-spacing: 3px;text-transform: uppercase;"><span style="font-weight: 600">Buy real.</span> avoid counterfeit</div><a class="bannerButton" style="white-space: nowrap;border:2px solid #fff; background:none;color:#fff;padding:0 30px;margin-left:20px;border-radius:0;font-size:12px;line-height:2em;font-weight:300;cursor:pointer;outline:none !important;text-decoration:none;" href="#counterfeitInfo">LEARN MORE</a></div></div>');
    var o = document.querySelector("#counterfeitBanner"), i = document.querySelector("#counterfeitBannerCont"),
      n = document.querySelector(".bannerButton"), a = document.querySelector(".bannerText");

    function r(e) {
      e || (e = 0), setTimeout(function () {
          var e = window.getComputedStyle(t), i = o.offsetHeight;
          i !== parseInt(e.getPropertyValue("padding-top").replace(/\D/g, "")) && (t.style.paddingTop = i + "px")
        }
        , e)
    }

    function s(e) {
      e.matches ? (n.style.padding = "5px", n.style.marginLeft = "8px", a.style.fontSize = "14px") : (n.style.padding = "0 30px", n.style.marginLeft = "20px", a.style.fontSize = "16px")
    }

    function l(e) {
      e.matches ? a.style.letterSpacing = "1px" : a.style.letterSpacing = "3px"
    }

    var d = window.matchMedia("(max-width: 480px)");
    s(d), d.addListener(s);
    var c = window.matchMedia("(max-width: 600px)");
    l(c), c.addListener(l), setTimeout(function () {
        i.style.height = "50px", r(300)
      }
      , 300);
    t.insertAdjacentHTML("beforeend", '<div id="counterfeitInfo"> <div class="counterfeight-main"> <a class="close-counterfeit" href="#">&times;</a> <div class="counterfeit-content"> <div class="counterfeit-scroll"> <div class="counterfeight-title"> <h1> BUY </h1> <br> <h1> REAL </h1> </div> <div class="counterfeight-copy"> <p style="font-size:18px; font-weight:700; text-transform:uppercase; color: #492d8c;"> Beware of Counterfeit Products </p> <p> RapidLash® products are ophthalmologist approved and clinically-proven to be safe and effective for every consumer, but, unfortunately, we are seeing counterfeiters flooding the market with fake RapidLash® products. </p> <p> Counterfeit products can be found at many websites and auction sites such as Amazon, Alibaba, Overstock, eBay, and many others. </p> <p> The only way to ensure that your RapidLash® products are the real deal and contain the <span style="font-weight: 600">original tested, safe and effective formula</span>, is to buy directly from an authorized retailer/seller. </p> <p> In the U.S., only purchase RapidLash® products directly from rapidlash.com or from other authorized retailers found on the "Store Locator" page. <br> For International purchases, please contact <a href="mailto:info@internationalresearchlaboratories.com">info@internationalresearchlaboratories.com</a> to be connected with an authorized distributor/seller. </p> <p style="font-weight: bold;font-size:18px;color: #492d8c;"> BUYER BEWARE </p> <ul style="list-style-type:disc"> <li style="list-style-type:disc"> If the price on RapidLash® products seems way too good to be true, then it probably is. </li> <li style="list-style-type:disc"> Avoid all auction-based websites when purchasing RapidLash® products. </li> <li style="list-style-type:disc"> Be wary of all individual sellers online. Counterfeit sellers will generally not list phone numbers, email addresses, or websites. They will not be affiliated with a reputable company. </li> <li style="list-style-type:disc"> We do not authenticate or guarantee any RapidLash® products purchased on Amazon, Alibaba, Overstock, or eBay among others. </li> </ul> <p> <span style="font-weight: bold">Have a question about a RapidLash® product? We are here to help. </span> <br> FFor US and Canada Ordering & Customer Service Inquiries, please call 877.760.6677 <br> <br> For International Ordering & Customer Service Inquiries (outside the US & Canada) please email <a href="mailto:info@internationalresearchlaboratories.com">info@internationalresearchlaboratories.com</a> </p> </div> </div> </div> </div> </div>');
    document.head.insertAdjacentHTML("beforeend", '<style>#counterfeitInfo { display: block; position: fixed; top: 50%; left: 50%; height: 0; width: 0; display: flex; transform: translate(-50%,-50%); transition: all 0s; justify-content: center; align-items: center; padding: 0; background: rgba(73,45,140,.6); z-index: 2000; overflow: hidden; } .counterfeight-main { max-width:900px; background: #fff; position: relative; max-height: 100%; display: flex; box-shadow: 0 0 0 32px rgba(255,255,255, .6); } .close-counterfeit { position: absolute; display: inline-block; top: 5px; right: 5px; padding: 0 10px; font-size: 45px; font-weight: bold; line-height: 1em; margin: 0; color: #492d8c; transition: opacity .3s; opacity: .85; -webkit-transform: translateZ(0); border:none !important; outline: none !important; text-decoration: none !important; background: none !important; } #counterfeitInfo:target { height: 100%; width: 100%; padding: 14px; transition: all .35s; } .close-counterfeit:hover { color: #492d8c; opacity: 1; } .close-counterfeit:visited { color: #492d8c; } .counterfeit-content { overflow: hidden; display: flex; max-height: 100%; } .counterfeit-scroll { overflow: auto; flex-grow: 1; padding: 28px;} .counterfeight-title { margin-bottom: 24px; } .counterfeight-title h1 { font-size:50px !important; text-transform:uppercase; font-weight:700; letter-spacing:8px; line-height: 1.1em; padding: 0 10px; margin: 6px 0; color:#492d8c; border: solid 2px #492d8c; display: inline-block; } .counterfeight-main li { margin:.5em 0; } .counterfeight-main h2{ font-size:20px !important; } </style>');
    if (window.location.href.indexOf("#counterfeit") > -1) {
      window.location = window.location.href;
    }

    r()
  }
);