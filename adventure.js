var nextTextPart1 = 0;
var nextTextPart2 = 0;
var nextTextPart3 = 0;
var name;
var health = 100;
var ad = 0;
var md = 0;
var armor = 0;
var damage;

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
    invertorytext.innerHTML = "Invertory";
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

function healthFunction(damage){
    health= health - damage;
    healthbar = document.createElement("h1");
    document.getElementById("hp").innerHTML = "HP:" + health;
    attackDamagebar.id = "hp"
    document.getElementById("stats").appendChild(healthbar);
}
function ranger(){
    ad =+ 30;
    attackDamagebar = document.createElement("h1");
    document.getElementById("ad").innerHTML = "AD:" + ad;
    attackDamagebar.id = "ad"
    document.getElementById("stats").appendChild(attackDamagebar);
    part2();
}
function mage(){
    md=+30;
    magicDamagebar = document.createElement("h1");
    document.getElementById("md").innerHTML = "MD:" + md;
    magicDamagebar.id = "md"
    document.getElementById("stats").appendChild(magicDamagebar);
    part2();
}
function tank(){
    armor=+30;
    armorbar = document.createElement("h1");
    document.getElementById("armor").innerHTML = "Armor:" + armor;
    armorbar.id = "armor"
    document.getElementById("stats").appendChild(armorbar);
    part2();
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

function nameGenerator(){
    name = document.getElementById("text1").value;
    nextButton.style.display = "inline-block";
}

invertory()
statsBar()

function part1(){
    nextTextPart1 ++
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
        story.innerHTML = "Choice 1, A ranger you will get +30 ad.<br>Choice 2, A mage you will get +30 ap.<br>Choice 3, A tank you will get +30 armor.";
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
firstOption.onclick=function(){ranger()};
firstOption.style.display = "none";

var secondOption = document.createElement("button");
secondOption.innerHTML = "CHOICE 2";
secondOption.id = "secondOption";
document.getElementById("main").appendChild(secondOption);
secondOption.onclick=function(){mage()};
secondOption.style.display = "none";

var thirdOption = document.createElement("button");
thirdOption.innerHTML = "CHOICE 3";
thirdOption.id = "thirdOption";
document.getElementById("main").appendChild(thirdOption);
thirdOption.onclick=function(){tank()};
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
        healthFunction(15);
        graves.style.display = "none";
    }
    else if(nextTextPart3 == 10 && ad<30){
        document.getElementById("nextButton").onclick=function(){gpOptions()};
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
        healthFunction(15);
        tahmKench.style.display = "none";
        golem.style.display = "none"; 
    }
    if (nextTextPart3 == 9 && armor<30){
        document.getElementById("nextButton").onclick=function(){gpOptions()};
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
        healthFunction(15);
        twistedFate.style.display = "none";
        golem.style.display = "none";
    }
    if (nextTextPart3 == 10 && md<30){
        document.getElementById("nextButton").onclick=function(){gpOptions()};
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
        story.innerHTML = "Twisted Fate: As a reward i wll give you a spell book.";
    }
    if (nextTextPart3 == 12 && md>=30){
        story.innerHTML = "A spell book is an item that boost your MD with +10<br>Items that you collect in the story can be upgraded to better items in your invertory.";
        document.getElementById("nextButton").onclick=function(){part3()};
        nextTextPart2 = 0;
    }
}

function part3(){
    nextTextPart2 ++
    firstOption.style.display = "none";
    secondOption.style.display = "none";
    thirdOption.style.display = "none";
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
    if (nextTextPart3 == 3){
        story.innerHTML = "Gangplank: Alright, you payed of";
    }
}
