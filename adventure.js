var nextTextPart1 = 0;
var nextTextPart2 = 0;
var nextTextPart3 = 0;
var name;
var health = 100;
var ad = 0;
var md = 0;
var armor = 0;
var damage;
var bonusad;
var bonusmd;
var bonusarmor;

function statsBar(){
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
    magicDamagebar.innerHTML = "MD:" + md;
    magicDamagebar.id = "md"
    document.getElementById("stats").appendChild(magicDamagebar);

    var armorbar = document.createElement("h1");
    armorbar.innerHTML = "Armor:" + armor;
    armorbar.id = "armor"
    document.getElementById("stats").appendChild(armorbar);
}
var invertory;
var invertorytext;
var bag;
function invertory(){
    invertory = document.createElement("div");
    invertory.id = "invertory";
    document.getElementById("page").appendChild(invertory);
    invertorytext = document.createElement("h1");
    invertorytext.innerHTML = "Inventory";
    invertorytext.id = "invertorytext";
    document.getElementById("invertory").appendChild(invertorytext);
    bag = document.createElement("img");
    bag.src = "characters/invertory.png";
    bag.id = "bag";
    document.getElementById("invertory").appendChild(bag);
    bag.onclick=function(){invertorySpace()};
}
var invertorycounter = 1;
var fullinvertory = document.createElement("div");
fullinvertory.id = "fullinvertory";

function invertorySpace(){
    invertorycounter ++;
    document.getElementById("page").appendChild(fullinvertory);
    fullinvertory.style.display = "none";
    if (invertorycounter%2 == 0){
        fullinvertory.style.display = "inline-block";
    }
    else{
        fullinvertory.style.display = "none";
    }
}

function defeated(){
    if (health<=0){
        defeat.style.display = "inline-block";
    }
}
function healthFunction(damage){
    health= health - damage;
    healthbar = document.createElement("h1");
    document.getElementById("hp").innerHTML = "HP:" + health;
    attackDamagebar.id = "hp"
    document.getElementById("stats").appendChild(healthbar);
    defeated()
}
function ranger(bonusad){
    ad = ad + bonusad;
    attackDamagebar = document.createElement("h1");
    document.getElementById("ad").innerHTML = "AD:" + ad;
    attackDamagebar.id = "ad"
    document.getElementById("stats").appendChild(attackDamagebar);
}
function mage(bonusmd){
    md= md + bonusmd;
    magicDamagebar = document.createElement("h1");
    document.getElementById("md").innerHTML = "MD:" + md;
    magicDamagebar.id = "md"
    document.getElementById("stats").appendChild(magicDamagebar);
}
function tank(bonusarmor){
    armor= armor+bonusarmor
    armorbar = document.createElement("h1");
    document.getElementById("armor").innerHTML = "Armor:" + armor;
    armorbar.id = "armor"
    document.getElementById("stats").appendChild(armorbar);
}

var fullpage = document.createElement("div")
fullpage.id = "page";
document.body.appendChild(fullpage);
document.body.style.backgroundImage = "url(background/boat.jpg)"
document.body.style.backgroundSize= "cover";

var textbar = document.createElement("div");
textbar.id = "main";
document.getElementById("page").appendChild(textbar)

var text = document.createElement("div");
text.id = "text";
document.getElementById("main").appendChild(text);

var story = document.createElement("p");
story.innerHTML = "You wake up on a ship, you have no clue who you are, where you are, or what your doing here...";
story.id = "story";
document.getElementById("text").appendChild(story);

var nextButton = document.createElement("button");
nextButton.innerHTML = "NEXT";
nextButton.id = "nextButton";
document.getElementById("main").appendChild(nextButton);
nextButton.onclick=function(){part1()};

var nameInput = document.createElement("input");
document.getElementById("main").appendChild(nameInput);
nameInput.id = "text1";
nameInput.placeholder = "Name";
nameInput.style.display = "none";

var nameButton = document.createElement("button");
nameButton.innerHTML = "OK";
nameButton.id = "nameButton";
nameButton.style.display = "none";
document.getElementById("main").appendChild(nameButton);
nameButton.onclick=function(){nameGenerator(), part1()};

var defeat = document.createElement("img");
defeat.src = "characters/defeat.png";
defeat.id = "defeat";
defeat.style.display = "none";
document.getElementById("page").appendChild(defeat);

function nameGenerator(){
    name = document.getElementById("text1").value;
    nextButton.style.display = "inline-block";
}

invertory()
statsBar()
start()
function start(){
    story.innerHTML= "Welcome to the game made by MaestroMitchell productions.<br>Its a league of legends based game where you play as a class and need to compleet challanges that are good for your class.<br>Goodluck!";
    nextButton.innerHTML = "START";
}
function part1(){
    nextTextPart1 ++
    nextButton.innerHTML = "NEXT";
    if (nextTextPart1 == 1){
        story.innerHTML = "You hear someone walking above you... the footsteps are going down a stair.";
    }
    else if (nextTextPart1 == 2){
        story.innerHTML = "Someone opens you door and you see a pirate.";
    }
    else if (nextTextPart1 == 3){
        story.innerHTML = "Pirate: Hello there, we found you in the water and helpt you on board, What's your name?<br>What do you want your name to be?";
        nameButton.style.display = "inline-block";
        nameInput.style.display = "inline-block";
        nextButton.style.display = "none";
    }
    else if (nextTextPart1 == 4){
        story.innerHTML = "Pirate: Welcome on board "+ name +" What is your speciality?";
        nameButton.style.visibility = "hidden";
        nameInput.style.visibility = "hidden";
    }
    else if (nextTextPart1 ==5){
        story.innerHTML = "Choice 1, A ranger you will get +30 AD.<br>Choice 2, A mage you will get +30 MD.<br>Choice 3, A tank you will get +30 Armor.<br>Good to know is the class you pick have impacts on the challanges you can do!";
        document.getElementById("firstOption").style.display = "inline-block";
        document.getElementById("secondOption").style.display = "inline-block";
        document.getElementById("thirdOption").style.display = "inline-block";
        nextButton.style.display = "none";
    }

}

var firstOption = document.createElement("button");
firstOption.innerHTML = "CHOICE 1";
firstOption.id = "firstOption";
document.getElementById("main").appendChild(firstOption);
firstOption.onclick=function(){ranger(30), part2()};
firstOption.style.display = "none";

var secondOption = document.createElement("button");
secondOption.innerHTML = "CHOICE 2";
secondOption.id = "secondOption";
document.getElementById("main").appendChild(secondOption);
secondOption.onclick=function(){mage(30), part2()};
secondOption.style.display = "none";

var thirdOption = document.createElement("button");
thirdOption.innerHTML = "CHOICE 3";
thirdOption.id = "thirdOption";
document.getElementById("main").appendChild(thirdOption);
thirdOption.onclick=function(){tank(30), part2()};
thirdOption.style.display = "none";

var gangplank = document.createElement("img");
gangplank.src = "characters/gp.png";
gangplank.id = "gp";
gangplank.style.display = "none";
document.getElementById("page").appendChild(gangplank);

function part2(){
    firstOption.style.display = "none";
    secondOption.style.display = "none";
    thirdOption.style.display = "none";
    nextButton.style.display = "inline-block";
    document.getElementById("nextButton").onclick=function(){part2()};
    nextTextPart2 ++
    if (nextTextPart2 == 1){
        story.innerHTML = "Alright i will be back when we arive at our home town.";
    }
    else if (nextTextPart2 == 2){
        story.innerHTML = "2 houres later..."
    }
    else if (nextTextPart2 == 3){
        story.innerHTML = "Pirate: Alright, we arived in our home town bilgerwater.";
        document.body.style.backgroundImage = "url(background/bilgewater.jpg)";
    }
    else if (nextTextPart2 == 4){
        story.innerHTML = "We will bring you to captain Gangplank.";
    }
    else if (nextTextPart2 == 5){
        gangplank.style.display = "inline-block";
        story.innerHTML = "Gangplak: Welcome to Bilgewater! My name is Gangplank and i'm the captain here.";
        }
    else if (nextTextPart2 == 6) {
        story.innerHTML = "My crew told me they found you floating in the waters and saved your life.";            
    }
    else if (nextTextPart2 == 7){
        document.getElementById("nextButton").onclick=function(){gpOptions()};
    }
    
}

function gpOptions(){
    story.innerHTML = "Choice 1, You will challange Graves, our sharpeshooter.<br> Choice 2, You will help tahm kench out in the frontline holding agro on a golem.<br>Choice 3, You will help Twisted fate out dealing magic damage to the golem.";
        nextButton.style.display = "none";
        document.getElementById("firstOption").style.display = "inline-block";
        document.getElementById("secondOption").style.display = "inline-block";
        document.getElementById("thirdOption").style.display = "inline-block";
        document.getElementById("firstOption").onclick=function(){gravesChallange()};
        document.getElementById("secondOption").onclick=function(){tahmKenchChallange()};
        document.getElementById("thirdOption").onclick=function(){twistedFateChallange()};
        document.body.style.backgroundImage = "url(background/bilgewater.jpg)";
        gangplank.style.display = "inline-block";
        graves.style.display = "none";
        tahmKench.style.display = "none";
        golem.style.display = "none";
        twistedFate.style.display = "none";
        nextTextPart3 = 0;
}
var graves = document.createElement("img");
    graves.src = "characters/graves.png";
    graves.id = "graves";
    graves.style.display = "none";
    document.getElementById("page").appendChild(graves);

function gravesChallange(){
    nextTextPart3 ++;
    gp.style.display = "none";
    document.getElementById("nextButton").onclick=function(){gravesChallange()};
    graves.style.display = "inline-block";
    document.getElementById("firstOption").style.display = "none";
    document.getElementById("secondOption").style.display = "none";
    document.getElementById("thirdOption").style.display = "none";
    document.getElementById("nextButton").style.display = "inline-block";
    if (nextTextPart3 == 1) {
        story.innerHTML = "Graves: Hello, my name is Graves.";
        document.body.style.backgroundImage = "url(background/pub.jpg)";
    }
    else if (nextTextPart3 == 2){
        story.innerHTML = "Graves: So.. you think you can challange me " + name + "?";
    }
    else if (nextTextPart3 == 3){
        story.innerHTML = "Graves: there is a reason my gun has 2 barrels, i never miss my shots.";
    }
    else if (nextTextPart3 == 4){
        story.innerHTML = "Graves: but.. i have been drinking all day long so i might be a bit off..";
    }
    else if (nextTextPart3 == 5){
        story.innerHTML = name + ": so you're already making excusses?"
    }
    else if (nextTextPart3 == 6){
        story.innerHTML = "Graves: Well we see that in a bit! Lets make a piramide of those empty beer bottels and see you can take out the most with 1 shot! Here take this gun";
    }
    else if (nextTextPart3 == 7) {
        story.innerHTML = "Graves hends over a spare gun.";
    }
    else if (nextTextPart3 == 8 && ad<30) {
        story.innerHTML = "Your shooting is not good and the knockback of the gun hit you on your head.";
    }
    else if (nextTextPart3 == 9 && ad<30) {
        story.innerHTML = "You pass out with no memories of what happend and return to gangplank..<br> To compleet this challange you wil need to have 30AD<br> You might want to try a different challange.<br>You lost 15hp";
        healthFunction(25);
        graves.style.display = "none";
    }
    else if(nextTextPart3 == 10 && ad<30){
        document.getElementById("nextButton").onclick=function(){gpOptions()};
        document.body.style.backgroundImage = "url(background/back.png)";
        graves.style.display = "none";
    }
    else if (nextTextPart3 == 8 && ad>=30){
    story.innerHTML = "You hit them al and broke the bottles.";
    }
    else if (nextTextPart3 == 9 && ad>=30) {
    story.innerHTML = "Graves: Well played, you do have a good shot!";
    }
    else if (nextTextPart3 == 10 && ad>=30) {
        story.innerHTML = "Graves: For completing this challange you will be rewarded with a long sword.";
    }
    else if (nextTextPart3 == 11 && ad>=30) {
        story.innerHTML = "A long sword is an item that boost your AD with +10<br>Items that you collect in the story can be upgraded to better items in your invertory.";
        document.getElementById("nextButton").onclick=function(){part3()};
        ranger(10)
        nextTextPart2 = 0;
    }
}
var tahmKench = document.createElement("img");
    tahmKench.src = "characters/tahm-kench.png";
    tahmKench.id = "tahmKench";
    tahmKench.style.display = "none";
    document.getElementById("page").appendChild(tahmKench);
var golem = document.createElement("img");
    golem.src = "characters/golem.png";
    golem.id = "golem";
    golem.style.display = "none";
    document.getElementById("page").appendChild(golem);

function tahmKenchChallange(){
    nextTextPart3 ++;
    gp.style.display = "none";
    document.getElementById("nextButton").onclick=function(){tahmKenchChallange()};;
    tahmKench.style.display = "inline-block";
    document.getElementById("firstOption").style.display = "none";
    document.getElementById("secondOption").style.display = "none";
    document.getElementById("thirdOption").style.display = "none";
    document.getElementById("nextButton").style.display = "inline-block";

    if (nextTextPart3 == 1){
        story.innerHTML = "Tahm Kench: Hello, my name is Tahm Kench.";
    }
    if (nextTextPart3 == 2){
        story.innerHTML = "Tahm Kench: So "+ name +" you're going to help me tanking the golem in the dungeon.";
    }
    if (nextTextPart3 == 3){
        story.innerHTML = "Tahm Kench: Well lets get right to it!";
    }
    if (nextTextPart3 == 4){
        story.innerHTML = "30 minutes later...";
    }
    if (nextTextPart3 == 5){
        story.innerHTML = "Tahm Kench: Here we are, in the dungeon of Bilgewater, the golem should be right ahead. Lets go!";
        document.body.style.backgroundImage = "url(background/cave.jpg)";
    }
    if (nextTextPart3 == 6){
        story.innerHTML = "Tahm Kench: Here it is "+ name + "! Lets keep it busy!";
        golem.style.display = "inline-block";
    }
    if (nextTextPart3 == 7 && armor <30){
        story.innerHTML = "The golem gives you a punch and you got hit hard.";
    }
    if (nextTextPart3 == 8 && armor <30){
        story.innerHTML = "You pass out with no memories of what happend and return to gangplank..<br> To compleet this challange you wil need to have 30Armor<br> You might want to try a different challange.<br>You lost 15hp";
        healthFunction(25);
        tahmKench.style.display = "none";
        golem.style.display = "none"; 
    }
    if (nextTextPart3 == 9 && armor<30){
        document.getElementById("nextButton").onclick=function(){gpOptions()};
        tahmKench.style.display = "none";
        golem.style.display = "none";
        document.body.style.backgroundImage = "url(background/back.png)";
    }
    if (nextTextPart3 == 7 && armor>=30){
        story.innerHTML = "Your doing a great job keeping the golem busy en you guys defeated it";
    }
    if (nextTextPart3 == 8 && armor>=30){
        story.innerHTML = "Tahm Kench: Well " + name + ", you did a great job!";
    }
    if (nextTextPart3 == 9 && armor>=30){
        story.innerHTML = "Tahm Kench: Thanks alot for your help!";
    }
    if (nextTextPart3 == 10 && armor>=30){
        story.innerHTML = "Tahm Kench: You will be rewarded with a relic.";
    }
    if (nextTextPart3 == 11 && armor>=30){
        story.innerHTML = "A relic is an item that boost your armor with +10<br>Items that you collect in the story can be upgraded to better items in your invertory.";
        document.getElementById("nextButton").onclick=function(){part3()};
        nextTextPart2 = 0;
        tank(10)
    }
}
var twistedFate = document.createElement("img");
    twistedFate.src = "characters/twisted_fate.png";
    twistedFate.id = "twistedFate";
    twistedFate.style.display = "none";
    document.getElementById("page").appendChild(twistedFate);

function twistedFateChallange(){
    nextTextPart3 ++
    gp.style.display = "none";
    document.getElementById("nextButton").onclick=function(){twistedFateChallange()};
    document.getElementById("firstOption").style.display = "none";
    document.getElementById("secondOption").style.display = "none";
    document.getElementById("thirdOption").style.display = "none";
    document.getElementById("nextButton").style.display = "inline-block";
    
    if (nextTextPart3 == 1){
        story.innerHTML = "Twisted Fate: Hello, my name is Twisted Fate.";
        twistedFate.style.display = "inline-block";
    }
    if (nextTextPart3 == 2){
        story.innerHTML = "Twisted Fate: So "+ name + ", You're going to help me take down the Golem";
    }
    if (nextTextPart3 == 3){
        story.innerHTML = "Twited Fate: The golem is weak against magic damge, so we are going to use that against him.";
    }
    if (nextTextPart3 == 4){
        story.innerHTML = "Twistd fate: Alright lets get right to it!";
    }
    if (nextTextPart3 == 5){
        story.innerHTML = "30 minutes later...";
    }
    if (nextTextPart3 == 6){
        document.body.style.backgroundImage = "url(background/cave.jpg)";
        story.innerHTML = "Twisted Fate: Here we are, in the dungeon of Bilgewater, the golem should be right ahead. Lets go!";
    }
    if (nextTextPart3 == 7){
        story.innerHTML = "Twisted Fate: There it is " + name + "! Lets get your greatist spell ready.";
        golem.style.display = "inline-block";
    }
    if (nextTextPart3 == 8 && md<30){
        story.innerHTML = "You're trying to cast a spell to hit the golem, but it failed and explode in your face...";
    }
    if (nextTextPart3 == 9 && md<30){
        story.innerHTML = "You pass out with no memories of what happend and return to gangplank..<br> To compleet this challange you wil need to have 30MD<br> You might want to try a different challange.<br>You lost 15hp";
        healthFunction(25);
        twistedFate.style.display = "none";
        golem.style.display = "none";
    }
    if (nextTextPart3 == 10 && md<30){
        document.getElementById("nextButton").onclick=function(){gpOptions()};
        document.body.style.backgroundImage = "url(background/back.png)";
        twistedFate.style.display = "none";
        golem.style.display = "none";
    }
    if (nextTextPart3 == 8 && md>=30){
        story.innerHTML = "You're doing a spell at it a critical hit on the golem and it fainted.";
    }
    if (nextTextPart3 == 9 && md>=30){
        story.innerHTML = "Twisted Fate: Great job " + name + "!";
    }
    if (nextTextPart3 == 10 && md>=30){
        story.innerHTML = "Twisted Fate: Thanks alot for your help!";
    }
    if (nextTextPart3 == 11 && md>=30){
        story.innerHTML = "Twisted Fate: As a reward i wll give you a spell book";
    }
    if (nextTextPart3 == 12 && md>=30){
        story.innerHTML = "A spell book is an item that boost your MD with +10<br>Items that you collect in the story can be upgraded to better items in your invertory.";
        document.getElementById("nextButton").onclick=function(){part3()};
        nextTextPart2 = 0;
        mage(10)
    }
}

function part3(){
    nextTextPart2 ++
    nextTextPart1 = 0;
    nextTextPart3 = 0;
    firstOption.style.display = "none";
    secondOption.style.display = "none";
    thirdOption.style.display = "none";
    document.getElementById("firstOption").onclick=function(){noxus()};
    document.getElementById("secondOption").onclick=function(){shadowIsles()};
    document.getElementById("thirdOption").onclick=function(){demacia()};
    nextButton.style.display = "inline-block";
    document.body.style.backgroundImage = "url(background/bilgewater.jpg)";
    document.getElementById("nextButton").onclick=function(){part3()};
    gangplank.style.display = "inline-block";
    graves.style.display = "none";
    tahmKench.style.display = "none";
    golem.style.display = "none";
    twistedFate.style.display = "none";

    if (nextTextPart2 == 1){
        story.innerHTML = "Gangplank: Welcome back "+ name + "!";
    }
    if (nextTextPart2 == 2){
        story.innerHTML = "Gangplank: Congratulations on completing the challange.";
    }
    if (nextTextPart2 == 3){
        story.innerHTML = "Gangplank: Alright, you're free to go where ever you want to go to.";
    }
    if (nextTextPart2 == 4){
        story.innerHTML = "Gangplank: We have 3 ships leaving today to 3 different locations.";
    }
    if (nextTextPart2 ==5){
        story.innerHTML = "Gangplank: 1 is going to Noxus, this is an notirious city with a lot of bandits en strong warrios that are dueling.<br>not the most friendly city to go to.";
    }
    if (nextTextPart2 == 6){
        story.innerHTML = "Gangplank: 2 is going to the Shadow Isles, this is an misty and dark location thats almost only forrest.<br>Not the savest location to go to.";
    }
    if (nextTextPart2 == 7){
        story.innerHTML = "Gangplank: 3 is going to Demacia, this i the city of justice, a big city where everone is welcome.<br>The best options for people that want to train.";
    }
    if (nextTextPart2 == 8){
        story.innerHTML = "Gangplank: So where do you want to go to?<br>Choice 1: Noxus<br>Choice 2: The Shadow Isles<br>Choice 3: Demacia."
        document.getElementById("firstOption").style.display = "inline-block";
        document.getElementById("secondOption").style.display = "inline-block";
        document.getElementById("thirdOption").style.display = "inline-block";
        nextButton.style.display = "none";
    }
}
var galio = document.createElement("img");
    galio.src = "characters/galio.png";
    galio.id = "galio";
    galio.style.display = "none";
    document.getElementById("page").appendChild(galio);

var garen = document.createElement("img");
    garen.src = "characters/garen.png";
    garen.id = "garen";
    garen.style.display = "none";
    document.getElementById("page").appendChild(garen);

function demacia(){
    nextTextPart1 ++
    nextTextPart2 = 0;
    nextTextPart3 = 0;
    firstOption.style.display = "none";
    secondOption.style.display = "none";
    thirdOption.style.display = "none";
    nextButton.style.display = "inline-block";
    document.getElementById("nextButton").onclick=function(){demacia()};
    gangplank.style.display = "none";
    if (nextTextPart1 == 1) {
        story.innerHTML = "Gangplank: Alright! Good luck on your journey to Demacia!";
        gangplank.style.display = "inline-block";
        document.body.style.backgroundImage = "url(background/bilgewater.jpg)";
    }
    if (nextTextPart1 == 2){
        story.innerHTML = "You're on your way to Damacia.";
        gangplank.style.display = "none";
        document.body.style.backgroundImage = "url(background/boat2.jpg)";
    }
    if (nextTextPart1 == 3){
        story.innerHTML = "3 houres later...";
    }
    if (nextTextPart1 == 4){
        document.body.style.backgroundImage = "url(background/demacia.jpg)"
        story.innerHTML = name+": Wow, its so huge, i have no idea where to go to.";
    }
    if (nextTextPart1 == 5){
        story.innerHTML = "You feel save around here and go on a walk to explore the city.";
    }
    if (nextTextPart1 == 6){
        story.innerHTML = "You see something standing and have no clue what it is?  even tho it doesnt look human, it look heroic and friendly.<br>You're going to it and see if you can ask some questions about Demacia.";
    }
    if (nextTextPart1 == 7){
        galio.style.display = "inline-block";
        story.innerHTML = "Galio: Hello, my name is Galio!";
    }
    if (nextTextPart1 ==8){
        story.innerHTML = "You're telling Galio that you got here with a boat from Gangplank, and you're here to train.";
    }
    if (nextTextPart1 == 9){
        story.innerHTML = "Galio: Alright welcome! i will bring you to Garen he is the leader around here and will help you to get you to the right person for your training";
    }
    if (nextTextPart1 == 10){
        document.getElementById("nextButton").onclick=function(){garentraining()};
        galio.style.display = "none";
    }
}
var darius = document.createElement("img");
    darius.src = "characters/darius.png";
    darius.id = "darius";
    darius.style.display = "none";
    document.getElementById("page").appendChild(darius);

var fiora = document.createElement("img");
    fiora.src = "characters/fiora.png";
    fiora.id = "fiora";
    fiora.style.display = "none";
    document.getElementById("page").appendChild(fiora);

function noxus(){
    nextTextPart1++;
    firstOption.style.display = "none";
    secondOption.style.display = "none";
    thirdOption.style.display = "none";
    nextButton.style.display = "inline-block";
    document.getElementById("nextButton").onclick=function(){noxus()};
    gangplank.style.display = "none";
    if (nextTextPart1 == 1) {
        story.innerHTML = "Gangplank: Alright! Good luck on your journey to Noxus!";
        gangplank.style.display = "inline-block";
        document.body.style.backgroundImage = "url(background/bilgewater.jpg)";
    }
    if (nextTextPart1 == 2){
        story.innerHTML = "You're on your way to Noxus.";
        gangplank.style.display = "none";
        document.body.style.backgroundImage = "url(background/boat2.jpg)";
    }
    if (nextTextPart1 == 3){
        story.innerHTML = "3 houres later...";
    }
    if (nextTextPart1 == 4){
        story.innerHTML = name + ": Wow so this is Noxus, i feel a bloodlust atmosphere around here.";
        document.body.style.backgroundImage = "url(background/noxus.png)";
    }
    if (nextTextPart1 == 5){
        story.innerHTML = "You think its an good idea to look around a bit more and see if you can get some help"
    }
    if (nextTextPart1 == 6){
        story.innerHTML = "When you walk around a corner you bump into someone..";
    }
    if (nextTextPart1 == 7){
        darius.style.display = "inline-block";
        story.innerHTML = "???: WHAT DO YOU THINK YOUR DOING";
    }
    if (nextTextPart1 == 8){
        story.innerHTML = "???: LOOK WHERE YOU ARE WALKING KID";
    }
    if (nextTextPart1 == 9){
        story.innerHTML = "??? hits you and walks off";
        healthFunction(25);
    }
    if (nextTextPart1 == 10){
        story.innerHTML = "Fiora: Are you alright?";
        fiora.style.display = "inline-block";
        darius.style.display = "none";
    }
    if (nextTextPart1 == 11){
        story.innerHTML = "Fiora: Hello, my name is fiora, i saw what happend.";
    }
    if (nextTextPart1 == 12){
        story.innerHTML = "Fiora: This is not a place for someone like you, let me bring you to Demacia.";
    }
    if (nextTextPart1 == 13){
        story.innerHTML = "Fiora: I will bring you to garen, the leader of Demacia.<br>He can help you to get some training!";
        document.getElementById("nextButton").onclick=function(){garentraining()};
        fiora.style.display = "none";
        document.body.style.backgroundImage = "url(background/back2.png)";
    }
}
var maokai = document.createElement("img");
    maokai.src = "characters/maokai.png";
    maokai.id = "maokai";
    maokai.style.display = "none";
    document.getElementById("page").appendChild(maokai);

var lucian = document.createElement("img");
    lucian.src = "characters/lucian.png";
    lucian.id = "lucian";
    lucian.style.display = "none";
    document.getElementById("page").appendChild(lucian);

function shadowIsles(){
    nextTextPart1 ++
    nextTextPart2 = 0;
    nextTextPart3 = 0;
    firstOption.style.display = "none";
    secondOption.style.display = "none";
    thirdOption.style.display = "none";
    nextButton.style.display = "inline-block";
    document.getElementById("nextButton").onclick=function(){shadowIsles()};
    if (nextTextPart1 == 1) {
        story.innerHTML = "Gangplank: Alright! Good luck on your journey to the Shadow Isles!";
        gangplank.style.display = "inline-block";
        document.body.style.backgroundImage = "url(background/bilgewater.jpg)";
    }
    if (nextTextPart1 == 2){
        story.innerHTML = "You're on your way to the Shadow Isles.";
        gangplank.style.display = "none";
        document.body.style.backgroundImage = "url(background/boat2.jpg)";
    }
    if (nextTextPart1 == 3){
        story.innerHTML = "3 houres later...";
    }
    if (nextTextPart1 == 4){
        story.innerHTML = name+": Wow.. so this is the Shadow Isles, its so dark and misty and dark around here.";
        document.body.style.backgroundImage = "url(background/shadowisles.png)";
    }
    if (nextTextPart1 == 5){
        story.innerHTML = "You think its an good idea to look around a bit more and see if you can get some help";
    }
    if (nextTextPart1 == 6){
        story.innerHTML = "You see something that looks like a tree in the distance but it like was moving a litle.<br>You want to take a closer look of it.";
    }
    if (nextTextPart1 == 7){
        story.innerHTML = "You're getting close to it..<br>And it moved again...";
    }
    if (nextTextPart1 == 8){
        story.innerHTML = name + ": He.. hello? is someone there?";
    }
    if (nextTextPart1 == 9){
        story.innerHTML = "???: What do you think you're doing in this forrest this is no place for a weak human like you!";
        maokai.style.display = "inline-block";
    }
    if (nextTextPart1 == 10){
        story.innerHTML = "??? swings at you but is really slow so you could dodge it.<br>You take a couple of step back but fell over a sticks.";
        healthFunction(25);
    }
    if  (nextTextPart1 == 11){
        story.innerHTML = "??? is comming to you again";
    }
    if (nextTextPart1 == 12) {
        story.innerHTML = "There are flashing light comming hitting ??? in the back, its hurt and its taking off";
        maokai.style.display = "none";
    }
    if (nextTextPart1 == 13){
        story.innerHTML = "Someone is comming to you..."
    }
    if (nextTextPart1 == 14){
        story.innerHTML = "Lucian: are you alright?";
        lucian.style.display = "inline-block";
    }
    if (nextTextPart1 == 15){
        story.innerHTML = "Lucian: my name is lucian, what are you doing here?";
    }
    if (nextTextPart1 == 16){
        story.innerHTML = "Lucian: it's not save here come with me to Demacia.";
        document.getElementById("nextButton").onclick=function(){garentraining()};
        lucian.style.display = "none";
        document.body.style.backgroundImage = "url(background/back2.png)";
    }
}

function garentraining(){
    nextTextPart3++;
    nextTextPart1 = 0;
    firstOption.style.display = "none";
    secondOption.style.display = "none";
    thirdOption.style.display = "none";
    document.getElementById("firstOption").onclick=function(){tankTraining()};
    document.getElementById("secondOption").onclick=function(){mageTraining()};
    document.getElementById("thirdOption").onclick=function(){accurasyTraining()};
    document.getElementById("nextButton").onclick=function(){garentraining()};
    if (nextTextPart3 == 1){
        story.innerHTML = "Garen: Hello, my name is Garen";
        document.body.style.backgroundImage = "url(background/demacia2.png)"
        garen.style.display = "inline-block";
    }
    if (nextTextPart3 == 2){
        story.innerHTML = "Garen: Welcome in Demacia, the city of justice.<br>Everyone is welcome here!<br>As long as you have good intensions.";
    }
    if (nextTextPart3 == 3){
        story.innerHTML = name + ": Hello my name is "+ name + ", and i'm here to get stronger!";
    }
    if (nextTextPart3 == 4){
        story.innerHTML = "Garen: Alright "+ name + " i can help you with that we have trainers with different qualitys.";
    }
    if (nextTextPart3 == 5){
        story.innerHTML = "Garen: We got Jarven IV, he is a tank and helps you to train getting your deffence up."
    }
    if (nextTextPart3 == 6){
        story.innerHTML = "Garen: We got Lux, she is a mage and can help you to train your magic.";
    }
    if (nextTextPart3 == 7){
        story.innerHTML = "Garen: We got Vayne, she is a ranger and can help you to get better accuracy.";
        document.getElementById("nextButton").onclick=function(){garenoptions()};
    }
}
function garenoptions(){
    story.innerHTML = "Garen: With who do you want to train?<br>Choise 1: Jarven IV the tank trainer.<br>Choise 2: Lux the magic trainer.<br>Choise 3: Vayne the accuracy trainer.";
    firstOption.style.display = "inline-block";
    secondOption.style.display = "inline-block";
    thirdOption.style.display = "inline-block";
    nextButton.style.display = "none";
}
var jarvan = document.createElement("img");
    jarvan.src = "characters/jarvaniv.png";
    jarvan.id = "jarvan";
    jarvan.style.display = "none";
    document.getElementById("page").appendChild(jarvan);

var lux = document.createElement("img");
    lux.src = "characters/lux.png";
    lux.id = "lux";
    lux.style.display = "none";
    document.getElementById("page").appendChild(lux);

var vayne = document.createElement("img");
    vayne.src = "characters/vayne.png";
    vayne.id = "vayne";
    vayne.style.display = "none";
    document.getElementById("page").appendChild(vayne);

function tankTraining(){
    nextTextPart1++;
    nextTextPart3 = 0;
    firstOption.style.display = "none";
    secondOption.style.display = "none";
    thirdOption.style.display = "none";
    nextButton.style.display = "inline-block";
    garen.style.display = "none";
    document.getElementById("nextButton").onclick=function(){tankTraining()};
    if (nextTextPart1 == 1){
        jarvan.style.display = "inline-block";
        story.innerHTML = "Jarvan IV: Hello my name is Jarven IV, i'm here to help you train your deffence.";
    }
    if (nextTextPart1 == 2){
        story.innerHTML = "Jarvan IV: The training will take 1 week to compleet if you can handle it.";
    }
    if (nextTextPart1 == 3){
        story.innerHTML = "Jarvan IV: Alright let get right to it!";
    }
    if (nextTextPart1 == 4 && armor>=40){
        story.innerHTML = "1 week later.";
    }
    if (nextTextPart1 == 5 && armor>=40){
        story.innerHTML = "Jarvan IV: Well done "+ name +"! You completed the training and your armor is boosted by +20";
        tank(20)
    }
    if (nextTextPart1 == 6 && armor>=40){
        story.innerHTML = "Jarvan IV: As a reward i will give you a relic, this gives you a bonus of +10 armor.";
        tank(10)
        document.getElementById("nextButton").onclick=function(){garencompleet()}
    }
    if (nextTextPart1 == 7 && armor>=40){
        story.innerHTML = "Jarvan IV: Now its time to return to Garen.";
    }
    else if (nextTextPart1 == 4 && armor<40){
        story.innerHTML = "The next day";
    }
    else if(nextTextPart1 == 5 && armor<40){
        story.innerHTML = "Jarvan IV: "+ name +" i don't think deffence is your specialty.. you should try something else";
        healthFunction(25);
        document.getElementById("nextButton").onclick=function(){garenoptions()};
    }
}

function mageTraining(){
    nextTextPart1++;
    nextTextPart3 = 0;
    firstOption.style.display = "none";
    secondOption.style.display = "none";
    thirdOption.style.display = "none";
    nextButton.style.display = "inline-block";
    garen.style.display = "none";
    document.getElementById("nextButton").onclick=function(){mageTraining()};
    if (nextTextPart1 == 1){
        lux.style.display = "inline-block";
        story.innerHTML = "Lux: Hello my name is Lux, i'm here to help you train your magic.";
    }
    if (nextTextPart1 == 2){
        story.innerHTML = "Lux: The training will take 1 week to compleet if you can handle it.";
    }
    if (nextTextPart1 == 3){
        story.innerHTML = "Lux: Alright let get right to it!";
    }
    if (nextTextPart1 == 4 && md>=40){
        story.innerHTML = "1 week later.";
    }
    if (nextTextPart1 == 5 && md>=40){
        story.innerHTML = "Lux: Well done "+ name +"! You completed the training and your MD is boosted by +20";
        mage(20)
    }
    if (nextTextPart1 == 6 && md>=40){
        story.innerHTML = "Lux: As a reward i will give you a spellbook, this gives you a bonus of +10 MD.";
        mage(10)
        document.getElementById("nextButton").onclick=function(){garencompleet()}
    }
    else if (nextTextPart1 == 4 && md<40){
        story.innerHTML = "The next day";
    }
    else if(nextTextPart1 == 5 && md<40){
        story.innerHTML = "Lux: "+ name +" i don't think magic is your specialty.. you should try something else";
        healthFunction(25);
        document.getElementById("nextButton").onclick=function(){garenoptions()};
    }
}
function accurasyTraining(){
    nextTextPart1++;
    nextTextPart3 =0;
    firstOption.style.display = "none";
    secondOption.style.display = "none";
    thirdOption.style.display = "none";
    nextButton.style.display = "inline-block";
    garen.style.display = "none";
    document.getElementById("nextButton").onclick=function(){accurasyTraining()};
    if (nextTextPart1 == 1){
        story.innerHTML = "Vayne: Hello my name is Vayne, i'm here to help you train your accurasy.";
        vayne.style.display = "inline-block";
    }
    if (nextTextPart1 == 2){
        story.innerHTML = "Vayne: The training will take 1 week to compleet if you can handle it.";
    }
    if (nextTextPart1 == 3){
        story.innerHTML = "Vayne: Alright let get right to it!";
    }
    if (nextTextPart1 == 4 && ad>=40){
        story.innerHTML = "1 week later.";
    }
    if (nextTextPart1 == 5 && ad>=40){
        story.innerHTML = "Vayne: Well done "+ name +"! You completed the training and your AD is boosted by +20";
        ranger(20)
    }
    if (nextTextPart1 == 6 && ad>=40){
        story.innerHTML = "Vayne: As a reward i will give you a long sword, this gives you a bonus of +10 AD.";
        ranger(10)
        document.getElementById("nextButton").onclick=function(){garencompleet()}
    }
    else if (nextTextPart1 == 4 && ad<40){
        story.innerHTML = "The next day";
    }
    else if(nextTextPart1 == 5 && ad<40){
        story.innerHTML = "Vayne: "+ name +" i don't think range is your specialty.. you should try something else";
        healthFunction(25);
        document.getElementById("nextButton").onclick=function(){garenoptions()};
    }
}

function garencompleet(){
    nextTextPart3++;
    nextTextPart1 = 0;
    firstOption.style.display = "none";
    secondOption.style.display = "none";
    thirdOption.style.display = "none";
    lux.style.display = "none";
    vayne.style.display = "none";
    jarvan.style.display = "none";
    document.getElementById("firstOption").onclick=function(){tankTraining()};
    document.getElementById("secondOption").onclick=function(){magicTraining()};
    document.getElementById("nextButton").onclick=function(){garentraining()};
    if (nextTextPart3 == 1){
        story.innerHTML = "Garen: Welcome back, congratulations on the succes in your training";
        document.body.style.backgroundImage = "url(background/demacia2.png)"
        garen.style.display = "inline-block";
    }
    if (nextTextPart3 == 2){
        story.innerHTML = "Garen: 2 of our hero's need help with something and i want you to help 1 of them.";
    }
    if (nextTextPart3 == 3){
        story.innerHTML = "Garen: Lucian is on a mission to get his wife back and in the Shadow Isles.";
    }
    if (nextTextPart3 == 4){
        story.innerHTML = "Garen: Fiora is on a mission in Noxus to get her sword back.";
    }
    if (nextTextPart3 == 5){
        story.innerHTML = "Garen: So who do you want to help?<br>Choice 1: Lucian.<br>Choice 2: Fiora.";
        firstOption.style.display = "inline-block";
        secondOption.style.display = "inline-block";
        nextButton.style.display = "none";
    }
}