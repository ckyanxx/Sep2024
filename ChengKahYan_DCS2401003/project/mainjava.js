//when scroll down
window.onscroll = function () {
    scrollFunction();
    scrollspringFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("bar").style.padding = "10px 5px 10px 5px";
        document.getElementById("logo").height = "25px";
        document.getElementById("logo").width = "40px";
        document.getElementById("bar").style.backgroundColor= "floralwhite";
    } else {
        document.getElementById("bar").style.padding = "10px 10px 10px 10px";
        document.getElementById("logo").height = "85px";
        document.getElementById("logo").width = "100px";
        document.getElementById("bar").style.backgroundColor="rgba(250,0,0,0)";
    }
};

//burger icon
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

//image slide show
var counter = 1;
setInterval(function(){
    document.getElementById('radio'+counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
},2000);


// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 13); // Replace with your coordinates and zoom level

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker
L.marker([51.505, -0.09]).addTo(map)
    .bindPopup('A pretty marker.')
    .openPopup();




