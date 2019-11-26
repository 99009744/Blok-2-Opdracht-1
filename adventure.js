var health = 100;
var ad = 0;
var mp = 0;
var armor = 0;
var nextTextPart1 = 0;
var name = "???";
function part1(){
    var fullpage = document.createElement("div")
    fullpage.id = "page";
    document.body.appendChild(fullpage);
    document.body.style.backgroundImage = "url(background/boat.jpg)"
    document.body.style.backgroundSize= "cover";

    var stats = document.createElement("div");
    stats.id = "stats";
    document.getElementById("page").appendChild(stats);
    
    var healthbar = document.createElement("h1");
    healthbar.innerHTML = "HP:" + health;
    healthbar.id = "hp"
    document.getElementById("stats").appendChild(healthbar);

    var attackDamagebar = document.createElement("h1");
    attackDamagebar.innerHTML = "AD:" + ad;
    attackDamagebar.id = "ad"
    document.getElementById("stats").appendChild(attackDamagebar);

    var magicDamagebar = document.createElement("h1");
    magicDamagebar.innerHTML = "MP:" + mp;
    magicDamagebar.id = "mp"
    document.getElementById("stats").appendChild(magicDamagebar);

    var armorbar = document.createElement("h1");
    armorbar.innerHTML = "Armor:" + armor;
    armorbar.id = "armor"
    document.getElementById("stats").appendChild(armorbar);

    var textbar = document.createElement("div");
    textbar.id = "main";
    document.getElementById("page").appendChild(textbar)

    var text = document.createElement("div");
    text.id = "text";
    document.getElementById("main").appendChild(text);

    var story = document.createElement("p");
    story.innerHTML = "You wake up on a ship, you have no clue who you are, where you are, or what your doing here..."
    story.id = "story";
    document.getElementById("text").appendChild(story);

    var nextButtonPart1 = document.createElement("button");
    nextButtonPart1.innerHTML = "NEXT";
    nextButtonPart1.id = "nextButton";
    document.getElementById("main").appendChild(nextButtonPart1);
    nextButtonPart1.onclick=function(){nextPart1()};

    function nextPart1(){
        nextTextPart1 ++
        if (nextTextPart1 == 1){
            story.innerHTML = "You hear someone walking above you... the footsteps are going down a stair.";
        }
        if (nextTextPart1 == 2){
            story.innerHTML = "Someone opens you door and you see a pirate, he tells you that they found you in the middle of the sea.";
        }
        if (nextTextPart1 == 3){
            story.innerHTML = "He ask you who you are? you have 3 options";
        }
    }

    var firstOption = document.createElement("button");
    firstOption.innerHTML = "CHOICE 1";
    firstOption.id = "firstOption";
    document.getElementById("main").appendChild(firstOption);
    firstOption.onclick=function(){part2()};

    var secondOption = document.createElement("button");
    secondOption.innerHTML = "CHOICE 2";
    secondOption.id = "secondOption";
    document.getElementById("main").appendChild(secondOption);
    secondOption.onclick=function(){part2()};

    var thirdOption = document.createElement("button");
    thirdOption.innerHTML = "CHOICE 3";
    thirdOption.id = "thirdOption";
    document.getElementById("main").appendChild(thirdOption);
    thirdOption.onclick=function(){part2()};
}
part1()
function part2(){
    document.body.style.backgroundImage = "url(background/bilgewater.jpg)"
    story.innerHTML = "doei"
    story.id = "story";
}
