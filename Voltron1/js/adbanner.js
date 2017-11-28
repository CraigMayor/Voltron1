window.onload = rotate;
var thisAd = 0;
function rotate ()
{
"use strict";
var adImages = new
Array("img/ad1.jpg","img/ad2.jpg","img/ad3.jpg","img/ad4.jpg");
thisAd++
if (thisAd === adImages.length)
{
thisAd = 0;
}
document.getElementById("adBanner").src = adImages[thisAd];
setTimeout(rotate, 3*1000);
}