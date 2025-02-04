// This is where the player name is stored
let playerName = "";

//Chapter Select
const chapters = {
        start: {
            title: "Chapter 1: Introduction",
            image: "assets/images/front-door.png",
            description: "Hello Adventurer! Before we get started on our journey, we’re going to need a name! So, What is your name, Adventurer?",
        },
        chapter1: {
            title: "Chapter 2: The Journey Begins",
            image: "assets/images/front-door.png",
            description: "After a lovely walk in the forest with your family, you've returned home to your small cottage, the front door which you’re sure you closed ajar. {playerName}, What do you do?",
            options: {
                a: "chapter2",
                b: "chapter1A"
            }
        },
        chapter1A: {
            title: "Chapter 2: Explore Outside",
            image: "assets/images/bedroom-window.png",
            description: "You’ve decided to walk around the cottage. As you walk around the cottage you notice sparkly shards on the grass floor, the bedroom window shattered. Sharp rectangular shards stick up around the edges of the frame, too perilous for someone of your size to climb through.",
            options: {
                a: "chapter1",
            }
        },

        chapter2: {
            title: "Chapter 2: Kitchen",
            image: "assets/images/kitchen.png",
            description: "You’ve decided to enter the cottage, you walk into the cozy kitchen you're accustomed to. Nothing appears to be out of place at first glance. The porridge you left to cool before your walk is still on the wooden table. The smell of the porridge still in the air. What do you do, {playerName}?",
            options: {
                a: "chapter2a",
                b: "chapter3"
            }


        },

        chapter2a: {
            title: "Chapter 2: The Porridge",
            image: "assets/images/porridge.png",
            description: "You’ve decided to check the porridge. Your bowl is undisturbed apart from a small spoon’s worth missing. The middle bowl is in a similar condition however the Baby Bears bowl is all gone. Beside it lies a sticky key slightly covered in porridge.",
            options: {

                a: "chapter2",
                b: "chapter3"
            },

            
        },
        chapter3: {
            title: "Chapter 3: Upstairs",
            image: "assets/images/bedroom-door.png",
            description: "As you explore the rest of the house, nothing seems out of place. The last place you look is the upstairs bedroom. It's locked! What do you do next {playerName}?",
            options: {
                a: "chapter4a",
                b: "chapter4b"
                
            }


        },
        



            // Add more chapters as needed
            //CHAPTER 4 NEEDS ADDING
        };

        //Start Game Next button Function
        document.getElementById("next-button").onclick = () => {
            const nameInput = document.getElementById("player-name");
            playerName = nameInput.value;
            if (nameInput.checkValidity()) {
                document.querySelector(".input-area").style.display = "none";
                document.getElementById("next-button").style.display = "none";
                document.querySelector(".choice-area.d-flex.justify-content-between").style.display = "flex";
                updateCard("chapter1");
            } else {
                nameInput.reportValidity();
            }
        };

        //Start Again Button Function
        document.getElementById("start-again").onclick = () => {
            document.querySelector(".input-area").style.display = "flex";
            document.getElementById("next-button").style.display = "block";
            document.querySelector(".choice-area.d-flex.justify-content-between").style.display = "none";
            document.getElementById("player-name").value = "";
            playerName = "";
            for (let chapter in chapters) {
            if (chapters.hasOwnProperty(chapter)) {
                chapters[chapter].visited = false;
            }
            }
            updateCard("start");
        };

        // Function to update the card with the chapter image, description and options
        function updateCard(chapter) {
            const cardImage = document.getElementById("card-image");
            const cardDescription = document.getElementById("card-description");
            const chapterTitle = document.getElementById("chapter-title");

            cardImage.src = chapters[chapter].image;
            cardDescription.textContent = chapters[chapter].description.replace("{playerName}", playerName);
            chapterTitle.textContent = chapters[chapter].title;

            const optionA = document.getElementById("option-a");
            const optionB = document.getElementById("option-b");

            if (chapter === "start") {
                optionA.style.display = "none";
                optionB.style.display = "none";
                document.getElementById("player-name").style.display = "flex";
            } else {
                optionA.style.display = "block";
                optionB.style.display = "block";
                document.getElementById("player-name").style.display = "none";
                // if (chapter !== "start") {
                //   document.getElementById("player-name").style.display = "flex";
                // }
                optionA.onclick = () => updateCard(chapters[chapter].options.a);
                optionB.onclick = () => updateCard(chapters[chapter].options.b);
                console.log(chapter);

                //Per Chapter Button/Option Name Change
                if (chapter === "chapter1") {
                    optionA.textContent = "Explore Inside";
                    optionB.textContent = "Explore Outside";

                } else if (chapter === "chapter1A") {
                    optionA.textContent = "Go Back";
                    optionB.style.display = "none";
                }
                if (chapter === "chapter2") {
                    optionA.textContent = "Check the Porridge";
                    optionB.textContent = "Explore the rest of the house";
    
                } if (chapter === "chapter2a") {
                    optionA.textContent = "Back to the kitchen";
                    optionB.textContent = "Explore the rest of the house";
    
                } if (chapter === "chapter3") {
                    if (chapters["chapter2a"].visited) {
                        optionA.textContent = "Unlock the door";
                        optionA.onclick = () => updateCard("4a");
                    } else {
                        optionA.textContent = "Back to the kitchen";
                        optionA.onclick = () => updateCard("chapter2");
                    }
                    optionB.textContent = "BREAK THE DOOR DOWN";
                    optionB.onclick = () => updateCard("chapter4b");
                }
               
                // add if/else statement for key requirements in the AM

                //ADD ANOTHER ELSE IF FOR EACH CHAPTER YOU ADD FOLLOWING BUTTON NAMING CONVENTIONS
            }

            chapters[chapter].visited = true;

        };

        // Initialize the game with the start chapter
        updateCard("start");