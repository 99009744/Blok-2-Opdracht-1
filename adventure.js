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

function part2(){
    story.id = "story";
    firstOption.style.display = "none";
    secondOption.style.display = "none";
    thirdOption.style.display = "none";
    nextButton.style.display = "inline-block";
    document.getElementById("nextButton").onclick=function(){part2()};
    nextTextPart2 ++
    if (nextTextPart2 == 1){
        story.innerHTML = "Alright i will be back when we arive at our home town.";
    }
    if (nextTextPart2 == 2){
        story.innerHTML = "2 houres later..."
    }
    if (nextTextPart2 == 3){
        story.innerHTML = "Pirate: Alright, we arived in our home town bilgerwater.";
        document.body.style.backgroundImage = "url(background/bilgewater.jpg)";
    }
    if (nextTextPart2 == 4){
        story.innerHTML = "We will bring you to captain Gangplank.";
    }
    if (nextTextPart2 == 5){
        var gangplank = document.createElement("img");
        gangplank.src = "characters/gp.png";
        gangplank.id = "gp";
        gangplank.style.display = "inline-block";
        document.getElementById("page").appendChild(gangplank);
        story.innerHTML = "Gangplak: Welcome to Bilgewater! My name is Gangplank and i'm the captain here.";
        }
    if (nextTextPart2 == 6) {
        story.innerHTML = "My crew told me they found you floating in the waters and saved your life.";            
    }
    if (nextTextPart2 == 7){
        story.innerHTML = "In return we expact you to do a challange for us, you have 3 options";
    }
    if (nextTextPart2 > 8){
        story.innerHTML = "Choice 1, You will challange Graves, our sharpeshooter.<br> Choice 2, You will help tahm kench out in the frontline holding agro on a golem.<br>Choice 3, You will help Twisted fate out dealing magic damage to the golem.";
        nextButton.style.display = "none";
        document.getElementById("firstOption").style.display = "inline-block";
        document.getElementById("secondOption").style.display = "inline-block";
        document.getElementById("thirdOption").style.display = "inline-block";
        document.getElementById("firstOption").onclick=function(){gravesChallange()};
        document.getElementById("secondOption").onclick=function(){tahmKenchChallange()};
        document.getElementById("thirdOption").onclick=function(){twistedFateChallange()};
    }
    
}
function gravesChallange(){
    nextTextPart3 ++;
    gp.style.display = "none";
    document.getElementById("nextButton").onclick=function(){gravesChallange()};
    var graves = document.createElement("img");
    graves.src = "characters/graves.png";
    graves.id = "graves";
    graves.style.display = "inline-block";
    document.getElementById("page").appendChild(graves);
    document.getElementById("firstOption").style.display = "none";
    document.getElementById("secondOption").style.display = "none";
    document.getElementById("thirdOption").style.display = "none";
    document.getElementById("nextButton").style.display = "inline-block";
    if (nextTextPart3 == 1) {
        story.innerHTML = "Graves: Hello, my name is Graves.";
        document.body.style.backgroundImage = "url(background/pub.jpg)";
    }
    if (nextTextPart3 == 2){
        story.innerHTML = "Graves: So.. you think you can challange me " + name + "?";
    }
    if (nextTextPart3 == 3){
        story.innerHTML = "Graves: there is a reason my gun has 2 barrels, i never miss my shots.";
    }
    if (nextTextPart3 == 4){
        story.innerHTML = "Graves: but.. i have been drinking all day long so i might be a bit off..";
    }
    if (nextTextPart3 == 5){
        story.innerHTML = name + ": so you're already making excusses?"
    }
    if (nextTextPart3 == 6){
        story.innerHTML = "Graves: Well we see that in a bit! Lets make a pirate of those empty beer bottels and see you can take out the most with 1 shot! Here take this gun";
    }
    if (nextTextPart3 == 7) {
        story.innerHTML = "Graves hends over a spare gun.";
    }
    if (nextTextPart3 == 8) {
        if (ad<30) {
            story.innerHTML = "Your shooting is not good and you the shot, diddnt even hit 1 bottle...";
            if (nextTextPart3 == 9) {
                story.innerHTML = "Graves: Haha, i told you! I might take a gun with 1 barrel because you can see that i dont even need 2!";
                healthFunction(15);
                if (nextTextPart3 == 10) {
                    story.innerHTML = "You return to gangplank.";
                    part2();
                }

            }
        }
        else{
            story.innerHTML = "You hit them al and broke all bottles.";
        }
    }
}

function tahmKenchChallange(){
    story.innerHTML = "Tahm Kench: Hello, my name is Tahm Kench.";
    gp.style.display = "none";
    document.getElementById("nextButton").onclick=function(){tahmKenchChallange()};
    document.body.style.backgroundImage = "url(background/cave.jpg)";
    var tahmKench = document.createElement("img");
    tahmKench.src = "characters/tahm-kench.png";
    tahmKench.id = "tahmKench";
    tahmKench.style.display = "inline-block";
    document.getElementById("page").appendChild(tahmKench);
}

function twistedFateChallange(){
    story.innerHTML = "Twisted Fate: Hello, my name is Twisted Fate.";
    gp.style.display = "none";
    document.getElementById("nextButton").onclick=function(){twistedFateChallange()};
    document.body.style.backgroundImage = "url(background/cave.jpg)";
    var twistedFate = document.createElement("img");
    twistedFate.src = "characters/twisted_fate.png";
    twistedFate.id = "twistedFate";
    twistedFate.style.display = "inline-block";
    document.getElementById("page").appendChild(twistedFate);
}
// function buttonOptions(){
    // var firstOption = document.createElement("button");
    // firstOption.innerHTML = "CHOICE 1";
    // firstOption.id = "firstOption";
    // document.getElementById("main").appendChild(firstOption);
    // firstOption.onclick=function(){ranger()};
    // function ranger(){
    //     ad=+30;
    //     attackDamagebar = document.createElement("h1");
    //     document.getElementById("ad").innerHTML = "AD:" + ad;
    //     attackDamagebar.id = "ad"
    //     document.getElementById("stats").appendChild(attackDamagebar);
    //     part2();
    // }
//     firstOption.style.visibility = "visible";

    // var secondOption = document.createElement("button");
    // secondOption.innerHTML = "CHOICE 2";
    // secondOption.id = "secondOption";
    // document.getElementById("main").appendChild(secondOption);
    // secondOption.onclick=function(){mage()};
    // function mage(){
    //     md=+30;
    //     magicDamagebar = document.createElement("h1");
    //     document.getElementById("md").innerHTML = "MD:" + md;
    //     magicDamagebar.id = "md"
    //     document.getElementById("stats").appendChild(magicDamagebar);
    //     part2();
    // }
//     secondOption.style.visibility = "visible";

    // var thirdOption = document.createElement("button");
    // thirdOption.innerHTML = "CHOICE 3";
    // thirdOption.id = "thirdOption";
    // document.getElementById("main").appendChild(thirdOption);
    // thirdOption.onclick=function(){tank()};
    // function tank(){
    //     armor=+30;
    //     armorbar = document.createElement("h1");
    //     document.getElementById("armor").innerHTML = "Armor:" + armor;
    //     armorbar.id = "armor"
    //     document.getElementById("stats").appendChild(armorbar);
    //     part2();
//     }
//     thirdOption.style.visibility = "visible";
    

//     }
// }
// part1()
// function part2(){
//     story.innerHTML = "Alright i will be back when we arive at our home town.";
//     document.body.style.backgroundImage = "url(background/bilgewater.jpg)";
//     story.id = "story";
//     firstOption.style.visibility = "hidden";
//     secondOption.style.visibility = "hidden";
//     thirdOption.style.visibility = "hidden";

//     var nextButton2 = document.createElement("button");
//     nextButton2.innerHTML = "NEXT";
//     nextButton2.id = "nextButton2";
//     nextButton2.style.visibility = "visible";
//     document.getElementById("main").appendChild(nextButton2);
//     nextButton2.onclick=function(){nextPart2()};

//     function nextPart2(){
    // nextTextPart2 ++
    //     if (nextTextPart2 == 1){
    //         story.innerHTML = "2 houres later..."
    //     }
    //     if (nextTextPart2 == 2){
    //         story.innerHTML = "Pirate: Alright, we arived in our home town bilgerwater.";
    //     }
    //     if (nextTextPart2 == 3){
    //         story.innerHTML = "We will bring you to captain Gangplank.";
    //     }
    //     if (nextTextPart2 ==4){
    //         var gangplank = document.createElement("img");
    //         gangplank.src = "characters/gp.png";
    //         gangplank.id = "gp";
    //         gangplank.style.visibility = "visible";
    //         document.getElementById("page").appendChild(gangplank);
    //         story.innerHTML = "Gangplak: Welcome to Bilgewater! My name is Gangplank and i'm the captain here.";
    //         // nextButtonPart1.style.display = "none";
    //         }
    //     if (nextTextPart2 == 5) {
    //         story.innerHTML = "My crew told me they found you floating in the waters and saved your life.";            
    //     }
    //     if (nextTextPart2 == 6){
    //         story.innerHTML = "In return we expact you to do a challange for us, you have 3 options";
    //     }
    //     if (nextTextPart2 == 7){
    //         story.innerHTML = "Choice 1, You will challange Graves, our sharpeshooter.<br> Choice 2, You will help tahm kench out in the frontline holding agro on a golem.<br>Choice 3, You will help Twisted fate out dealing damage to the golem.";
//             buttonOptions2()
//             function buttonOptions2(){
//                 var firstOption = document.createElement("button");
//                 firstOption.innerHTML = "CHOICE 1";
//                 firstOption.id = "firstOption";
//                 document.getElementById("main").appendChild(firstOption);
//                 firstOption.style.visibility = "visible";
//                 firstOption.onclick=function(){gravesChallange()};
                // function gravesChallange(){
                //     story.innerHTML = "Graves: Hello, my name is Graves.";
                //     gp.style.visibility = "hidden";
                //     var graves = document.createElement("img");
                //     graves.src = "characters/graves.png";
                //     graves.id = "graves";
                //     graves.style.visibility = "visible";
                //     document.getElementById("page").appendChild(graves);
                // }
        
//                 var secondOption = document.createElement("button");
//                 secondOption.innerHTML = "CHOICE 2";
//                 secondOption.id = "secondOption";
//                 document.getElementById("main").appendChild(secondOption);
//                 secondOption.onclick=function(){lol()};
//                 secondOption.style.visibility = "visible";
        
//                 var thirdOption = document.createElement("button");
//                 thirdOption.innerHTML = "CHOICE 3";
//                 thirdOption.id = "thirdOption";
//                 document.getElementById("main").appendChild(thirdOption);
//                 thirdOption.onclick=function(){lol()};
//                 thirdOption.style.visibility = "visible";
//                 nextButton2.style.visibility = "hidden";
//             }
//         }
//     }