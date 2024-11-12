//when scroll down
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("bar").style.padding = "8px 10px";
        document.getElementById("logo").height = "35px";
        document.getElementById("logo").width = "50px";
    } else {
        document.getElementById("bar").style.padding = "30px 10px";
        document.getElementById("logo").height = "85px";
        document.getElementById("logo").width = "100px";
    }
}