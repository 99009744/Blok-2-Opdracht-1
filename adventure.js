function part1(){
    document.body.style.backgroundImage = "url(background/boat.jpg)"
    document.body.style.backgroundSize= "cover";
    var div = document.createElement("div");
    div.class = "main";
    var startButton = document.createElement("BUTTON");
    startButton.innerHTML = "CLICK ME";
    document.body.appendChild(startButton);
    startButton.onclick=function(){part2()};
}
part1()
function part2(){
    document.body.style.backgroundImage = "url(background/bilgewater.jpg)"
}