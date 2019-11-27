var nextTextPart1 = 0;
var nextTextPart2 = 0;
var name;
function part1(){
    var fullpage = document.createElement("div")
    fullpage.id = "page";
    document.body.appendChild(fullpage);
    document.body.style.backgroundImage = "url(background/boat.jpg)"
    document.body.style.backgroundSize= "cover";
    statsBar()
    
    function statsBar(){
        var health = 100;
        var ad = 0;
        var md = 0;
        var armor = 0;
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
    nextButton.onclick=function(){nextPart1()};

    function buttonOptions(){
        var firstOption = document.createElement("button");
        firstOption.innerHTML = "CHOICE 1";
        firstOption.id = "firstOption";
        document.getElementById("main").appendChild(firstOption);
        firstOption.onclick=function(){ranger()};
        function ranger(){
            ad=+30;
            attackDamagebar = document.createElement("h1");
            document.getElementById("ad").innerHTML = "AD:" + ad;
            attackDamagebar.id = "ad"
            document.getElementById("stats").appendChild(attackDamagebar);
            part2();
        }
        firstOption.style.visibility = "visible";

        var secondOption = document.createElement("button");
        secondOption.innerHTML = "CHOICE 2";
        secondOption.id = "secondOption";
        document.getElementById("main").appendChild(secondOption);
        secondOption.onclick=function(){mage()};
        function mage(){
            md=+30;
            magicDamagebar = document.createElement("h1");
            document.getElementById("md").innerHTML = "MD:" + md;
            magicDamagebar.id = "md"
            document.getElementById("stats").appendChild(magicDamagebar);
            part2();
        }
        secondOption.style.visibility = "visible";

        var thirdOption = document.createElement("button");
        thirdOption.innerHTML = "CHOICE 3";
        thirdOption.id = "thirdOption";
        document.getElementById("main").appendChild(thirdOption);
        thirdOption.onclick=function(){tank()};
        function tank(){
            armor=+30;
            armorbar = document.createElement("h1");
            document.getElementById("armor").innerHTML = "Armor:" + armor;
            armorbar.id = "armor"
            document.getElementById("stats").appendChild(armorbar);
            part2();
        }
        thirdOption.style.visibility = "visible";

    }
    function nameGenerator(){
        name = document.getElementById("text1").value;
        nextButton.style.visibility = "hidden";
        nextTextPart1 ++
    }

    function nextPart1(){
        nextTextPart1 ++
        if (nextTextPart1 == 1){
            story.innerHTML = "You hear someone walking above you... the footsteps are going down a stair.";
        }
        if (nextTextPart1 == 2){
            story.innerHTML = "Someone opens you door and you see a pirate.";
        }
        if (nextTextPart1 == 3){
            story.innerHTML = "Pirate: Hello there, we found you in the water and helpt you on board, What's your name?<br>What do you want your name to be?";
            var nameInput = document.createElement("input");
            document.getElementById("main").appendChild(nameInput);
            nameInput.id = "text1";
            nameInput.placeholder = "Name";
            nameInput.style.visibility = "visible";
            var nameButton = document.createElement("button");
            nameButton.innerHTML = "OK";
            nameButton.id = "nameButton";
            nameButton.style.visibility = "visible";
            document.getElementById("main").appendChild(nameButton);
            nameButton.onclick=function(){nameGenerator()};
        }
        if (nextTextPart1 == 4){
            story.innerHTML = "Pirate: Welcome on board "+ name +" What is your speciality?";
            nameButton.style.visibility = "hidden";
            nameInput.style.visibility = "hidden";
            nextButton.style.visibility = "visible";
        }
        if (nextTextPart1 ==5){
            story.innerHTML = "Choice 1, A ranger you will get +30 ad.<br>Choice 2, A mage you will get +30 ap.<br>Choice 3, A tank you will get +30 armor.";
            buttonOptions();
            nextButton.style.visibility = "hidden";
        }
    }
}
part1()
statsBar()
function part2(){
    story.innerHTML = "Alright i will be back when we arive at our home town.";
    document.body.style.backgroundImage = "url(background/bilgewater.jpg)";
    story.id = "story";
    firstOption.style.visibility = "hidden";
    secondOption.style.visibility = "hidden";
    thirdOption.style.visibility = "hidden";

    var nextButton2 = document.createElement("button");
    nextButton2.innerHTML = "NEXT";
    nextButton2.id = "nextButton2";
    nextButton2.style.visibility = "visible";
    document.getElementById("main").appendChild(nextButton2);
    nextButton2.onclick=function(){nextPart2()};

    function nextPart2(){
    nextTextPart2 ++
        if (nextTextPart2 == 1){
            story.innerHTML = "2 houres later..."
        }
        if (nextTextPart2 == 2){
            story.innerHTML = "Pirate: Alright, we arived in our home town bilgerwater.";
        }
        if (nextTextPart2 == 3){
            story.innerHTML = "We will bring you to captain Gangplank.";
        }
        if (nextTextPart2 ==4){
            var gangplank = document.createElement("img");
            gangplank.src = "characters/gp.png";
            gangplank.id = "gp";
            gangplank.style.visibility = "visible";
            document.getElementById("page").appendChild(gangplank);
            story.innerHTML = "Gangplak: Welcome to Bilgewater! My name is Gangplank and i'm the captain here.";
            // nextButtonPart1.style.display = "none";
            }
        if (nextTextPart2 == 5) {
            story.innerHTML = "My crew told me they found you floating in the waters and saved your life.";            
        }
        if (nextTextPart2 == 6){
            story.innerHTML = "In return we expact you to do a challange for us, you have 3 options";
        }
        if (nextTextPart2 == 7){
            story.innerHTML = "Choice 1, You will challange Graves, our sharpeshooter.<br> Choice 2, You will help tahm kench out in the frontline holding agro on a golem.<br>Choice 3, You will help Twisted fate out dealing damage to the golem.";
            buttonOptions2()
            function buttonOptions2(){
                var firstOption = document.createElement("button");
                firstOption.innerHTML = "CHOICE 1";
                firstOption.id = "firstOption";
                document.getElementById("main").appendChild(firstOption);
                firstOption.style.visibility = "visible";
                firstOption.onclick=function(){gravesChallange()};
                function gravesChallange(){
                    story.innerHTML = "Graves: Hello, my name is Graves.";
                    gp.style.visibility = "hidden";
                    var graves = document.createElement("img");
                    graves.src = "characters/graves.png";
                    graves.id = "graves";
                    graves.style.visibility = "visible";
                    document.getElementById("page").appendChild(graves);
                }
        
                var secondOption = document.createElement("button");
                secondOption.innerHTML = "CHOICE 2";
                secondOption.id = "secondOption";
                document.getElementById("main").appendChild(secondOption);
                secondOption.onclick=function(){lol()};
                secondOption.style.visibility = "visible";
        
                var thirdOption = document.createElement("button");
                thirdOption.innerHTML = "CHOICE 3";
                thirdOption.id = "thirdOption";
                document.getElementById("main").appendChild(thirdOption);
                thirdOption.onclick=function(){lol()};
                thirdOption.style.visibility = "visible";
                nextButton2.style.visibility = "hidden";
            }
        }
    }
    
}