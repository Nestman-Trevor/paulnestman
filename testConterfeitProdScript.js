<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="1671.2">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">var MAIN = document.querySelector("body");</p>
<p class="p2"><br></p>
<p class="p1">MAIN.style.transition = "padding-top .2s";</p>
<p class="p2"><br></p>
<p class="p1">var linkToPage = "#";</p>
<p class="p1">var banner =</p>
<p class="p1"><span class="Apple-converted-space">  </span>'&lt;div id="conterfeitBanner" style="width: 100%;position:fixed;top:0;"&gt;&lt;div id="conterfeitBannerCont" style="overflow:hidden;box-sizing:border-box;height:4px;padding:0 20px;background-color: #7F76BE;display:flex;align-items:center;justify-content:center;color:#fff;transition:height .3s;border:solid 2px #7F76BE;"&gt;&lt;div class="bannerText"&gt;Buy real and avoid conterfeit&lt;/div&gt;&lt;a class="bannerButton" style="white-space: nowrap;border:2px solid #fff; background:none;color:#fff;padding:0 30px;margin-left:20px;border-radius:0;font-size:12px;line-height:2em;font-weight:300;cursor:pointer;outline:none !important;text-decoration:none;" href="' +</p>
<p class="p1"><span class="Apple-converted-space">  </span>linkToPage +</p>
<p class="p1"><span class="Apple-converted-space">  </span>'"&gt;LEARN MORE&lt;/a&gt;&lt;/div&gt;&lt;/div&gt;';</p>
<p class="p2"><br></p>
<p class="p1">MAIN.insertAdjacentHTML("afterbegin", banner);</p>
<p class="p2"><br></p>
<p class="p1">var BANNER = document.querySelector("#conterfeitBanner");</p>
<p class="p1">var BANNERCONT = document.querySelector("#conterfeitBannerCont");</p>
<p class="p2"><br></p>
<p class="p1">var bannerButton = document.querySelector(".bannerButton");</p>
<p class="p1">var bannerText = document.querySelector(".bannerText");</p>
<p class="p2"><br></p>
<p class="p1">function checkMainTop(timeout) {</p>
<p class="p1"><span class="Apple-converted-space">  </span>if (!timeout)</p>
<p class="p1"><span class="Apple-converted-space">    </span>timeout = 0;</p>
<p class="p1"><span class="Apple-converted-space">  </span>setTimeout(function() {</p>
<p class="p1"><span class="Apple-converted-space">  </span>var mainStyle = window.getComputedStyle(MAIN);</p>
<p class="p1"><span class="Apple-converted-space">  </span>var headerHeight = BANNER.offsetHeight;</p>
<p class="p1"><span class="Apple-converted-space">  </span>var mainPaddTop = parseInt(</p>
<p class="p1"><span class="Apple-converted-space">    </span>mainStyle.getPropertyValue("padding-top").replace(/\D/g, "")</p>
<p class="p1"><span class="Apple-converted-space">  </span>);</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>if (headerHeight !== mainPaddTop) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>MAIN.style.paddingTop = headerHeight + "px";</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p1"><span class="Apple-converted-space">  </span>},timeout);</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function myFunction(x) {</p>
<p class="p1"><span class="Apple-converted-space">  </span>if (x.matches) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>// If media query matches</p>
<p class="p1"><span class="Apple-converted-space">    </span>bannerButton.style.padding = "5px";</p>
<p class="p1"><span class="Apple-converted-space">    </span>bannerButton.style.marginLeft = "8px";</p>
<p class="p1"><span class="Apple-converted-space">    </span>bannerText.style.fontSize = "14px";</p>
<p class="p1"><span class="Apple-converted-space">  </span>} else {</p>
<p class="p1"><span class="Apple-converted-space">    </span>bannerButton.style.padding = "0 30px";</p>
<p class="p1"><span class="Apple-converted-space">    </span>bannerButton.style.marginLeft = "20px";</p>
<p class="p1"><span class="Apple-converted-space">    </span>bannerText.style.fontSize = "16px";</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">var x = window.matchMedia("(max-width: 480px)");</p>
<p class="p1">myFunction(x);</p>
<p class="p1">x.addListener(myFunction);</p>
<p class="p2"><br></p>
<p class="p1">setTimeout(function() {</p>
<p class="p1"><span class="Apple-converted-space">  </span>BANNERCONT.style.height = "50px";</p>
<p class="p2"><span class="Apple-converted-space">  </span></p>
<p class="p1"><span class="Apple-converted-space">  </span>checkMainTop(300);</p>
<p class="p1">},300);</p>
<p class="p2"><br></p>
<p class="p1">checkMainTop();</p>
</body>
</html>
