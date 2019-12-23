function change(a) {
    var imgbox = document.getElementsByClassName("banner_img");
    var dotbox = document.getElementsByClassName("dot");
    for (var i = 0; i < imgbox.length; i++) {
        imgbox[i].style.display = "none";
    }
    for (var i = 0; i < dotbox.length; i++) {
        dotbox[i].classList.replace("index_hover", "index");
    }
    imgbox[a].style.display = "inline";
    dotbox[a].classList.replace("index", "index_hover");
    index = a;
    clearInterval(timer);
    timer = setInterval(banner, 2000);
}


function banner() {
    index++;
    var imgbox = document.getElementsByClassName("banner_img");
    var dotbox = document.getElementsByClassName("dot");
    if (index >= imgbox.length) index = 0;
    for (var i = 0; i < imgbox.length; i++) {
        imgbox[i].style.display = "none";
    }
    imgbox[index].style.display = "inline";
    for (var i = 0; i < dotbox.length; i++) {
        dotbox[i].classList.replace("index_hover", "index");
    }
    dotbox[index].classList.replace("index", "index_hover");
}
var timer = setInterval(banner, 2000);