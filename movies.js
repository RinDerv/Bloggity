var moviesLM = ["../assets/images/movies/akira.jpg",
"../assets/images/movies/parasite.jpg"];

moviesImageLM = function (divLM) {
var randomIndex = Math.floor(Math.random() * moviesLM.length);
var moviesRandom = moviesLM[randomIndex];
var movieLmSelector = document.getElementById("divLM");
movieLmSelector.setAttribute("src". moviesRandom);

};

window.onload function(){
    moviesImageLM("divLM");
};