var index = 0;
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        document.getElementsByClassName("preload")[0].removeAttribute("class");
    }
}