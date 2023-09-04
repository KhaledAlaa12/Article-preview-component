var share = document.querySelector(".share");
var arrow = document.querySelector(".arrow");
var box = document.querySelector(".box");
var path = document.querySelector("path");
var svg = document.querySelector("svg");

var info = document.querySelector(".info");
var avNa = document.querySelector(".av-na");

var name = document.querySelector(".name");
var avatar = document.querySelector(".avatar");

var facebook = document.createElement("a");
facebook.href = "http://www.facebook.com";
facebook.target = "_blank";

var twitter = document.createElement("a");
twitter.href = "http://www.twitter.com";
twitter.target = "_blank";

var pinterest = document.createElement("a");
pinterest.href = "http://www.pinterest.com";
pinterest.target = "_blank";

var facebookimg = document.createElement("img");
facebookimg.src = "images/icon-facebook.svg";
facebookimg.style.marginLeft = "10px";
facebookimg.style.width = "25px";

var twitterimg = document.createElement("img");
twitterimg.src = "images/icon-twitter.svg";
twitterimg.style.width = "25px";

var pinterestimg = document.createElement("img");
pinterestimg.src = "images/icon-pinterest.svg";
pinterestimg.style.width = "25px";

var x = window.matchMedia("(max-width: 375px)");
var y = window.matchMedia("(min-width: 376px)");

document.addEventListener("click", (event) => {
  if (!event.target.matches(".share")) {
    if (share.classList.contains("active")) {
      myFunction2(x, y);
      x.addListener(myFunction2);
      y.addListener(myFunction2);
    }
  }
});

share.addEventListener("click", () => {
  if (!share.classList.contains("active")) {
    myFunction1(x, y);
    x.addListener(myFunction1);
    y.addListener(myFunction1);
  }
});

function myFunction1(x, y) {
  if (y.matches) {
    share.classList.add("active");
    path.setAttribute("fill", "#ffffff");
    box.style.display = "flex";
    arrow.style.display = "block";
  } else if (x.matches) {
    info.style.justifyContent = "space-around";
    info.style.padding = "20px";
    avNa.style.color = "hsl(214, 17%, 51%)";
    avNa.style.textTransform = "uppercase";
    avNa.style.letterSpacing = "7px";
    avNa.innerHTML = "share";
    facebook.appendChild(facebookimg);
    twitter.appendChild(twitterimg);
    pinterest.appendChild(pinterestimg);
    avNa.appendChild(facebook);
    avNa.appendChild(twitter);
    avNa.appendChild(pinterest);
  }
}

function myFunction2(x, y) {
  if (y.matches) {
    share.classList.remove("active");
    path.setAttribute("fill", "#6E8098");
    box.style.display = "none";
    arrow.style.display = "none";
  }
}
