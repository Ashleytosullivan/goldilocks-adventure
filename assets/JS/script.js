// This is where the player name is stored
let playerName = "";

//Chapter Select
const chapters = {
        start: {
            title: "Chapter 1: Introduction",
            image: "assets/images/front_page.webp",
            description: "Hello Adventurer! Before we get started on our journey, we’re going to need a name! So, What is your name, Adventurer?",
        },
        chapter1: {
            title: "Chapter 2: The Journey Begins",
            image: "assets/images/front_door.webp",
            description: "After a lovely walk in the forest with your family, you've returned home to your small cottage, the front door which you’re sure you closed ajar. {playerName}, What do you do?",
            options: {
                a: "chapter2",
                b: "chapter1A"
            }
        },
        chapter1A: {
            title: "Chapter 2: Explore Outside",
            image: "assets/images/bedroom_window.webp",
            description: "You’ve decided to walk around the cottage. As you walk around the cottage you notice sparkly shards on the grass floor, the bedroom window shattered. Sharp rectangular shards stick up around the edges of the frame, too perilous for someone of your size to climb through.",
            options: {
                a: "chapter1",
            }
        },

        chapter2: {
            title: "Chapter 2: Kitchen",
            image: "assets/images/kitchen.webp",
            description: "You’ve decided to enter the cottage, you walk into the cozy kitchen you're accustomed to. Nothing appears to be out of place at first glance. The porridge you left to cool before your walk is still on the wooden table. The smell of the porridge still in the air. What do you do, {playerName}?",
            options: {
                a: "chapter2a",
                b: "chapter3"
            }


        },

        chapter2a: {
            title: "Chapter 2: The Porridge",
            image: "assets/images/porridge.webp",
            description: "You’ve decided to check the porridge. Your bowl is undisturbed apart from a small spoon’s worth missing. The middle bowl is in a similar condition however the Baby Bears bowl is all gone. Beside it lies a sticky key slightly covered in porridge.",
            options: {

                a: "chapter2",
                b: "chapter3"
            },

            
        },
        chapter3: {
            title: "Chapter 3: Upstairs",
            image: "assets/images/bedroom_door.webp",
            description: "As you explore the rest of the house, nothing seems out of place. The last place you look is the upstairs bedroom. It's locked! What do you do next {playerName}?",
            options: {
                a: "chapter4a",
                b: "chapter4b"
                
            },


        },
        
        chapter4a: {
            title: "Chapter 4: The Tresspasser!",
            image: "assets/images/bedroom.webp",
            description: "You quietly unlock the bedroom door and slowly open it. Looking around, you see your bed, the covers disturbed as though somebody has recently been in it. The opposite bed is in a similar state, but what really catches your eye is the lump in the smallest bed. The covers are moving slightly, there's somebody in there! What do you do {playerName}?",
            options: {
                a: "goodEndingA",
                b: "goodEndingB"
                
            }


        },

        chapter4b: {
            title: "Chapter 4: The Tresspasser!",
            image: "assets/images/goldilocks_escapes.webp",
            description: "The door is locked, but you're not going to let that stop you. You take a few steps back and charge at the door, it splinters and breaks open. A figure in the smallest bed jumps up and leaps out of the broken window, making her nimble escape. She has avoided justice and your wrath.",
            options: {
                a: "goodEndingA",
                b: "goodEndingB"
                
            }


        },

        goodEndingA: {
            title: "The End",
            image: "assets/images/goldilocks_pie.webp",
            description: "As a bear, you are expertly equipped to deal with intruders and protect your family. Thankfully it got you a nice meal out of it too and it was just right.",
            options: {
                a: "goodEndingA",
                b: "goodEndingB"
                
            }


        },

        goodEndingB: {
            title: "The End",
            image: "assets/images/goldilocks_jail.webp",
            description: "Being a friendly, law-abiding bear, you decide to call the park rangers for help. They arrive and take the intruder away, you and your family are safe once more.",
            options: {
                a: "goodEndingA",
                b: "goodEndingB"
                
            }


        },



            // Add more chapters as needed
            // goodEndingA and goodEndingB need adding
            //CHAPTERS 3, 4 + ENDINGS NEED ART UPDATES
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

        // Add event listener for Enter key
        document.getElementById("player-name").addEventListener("keyup", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                document.getElementById("next-button").click();
            }
        });

        //Start Again Button Function - Now Inlcudes Cache Clear
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
                    } else {
                        optionA.textContent = "Back to the kitchen";
                        optionA.onclick = () => updateCard("chapter2");
                    }
                    optionB.textContent = "BREAK THE DOOR DOWN";
                    optionB.onclick = () => updateCard("chapter4b");
                } if (chapter === "chapter4a") {
                    optionA.textContent = "Eat her up!";
                    optionB.textContent = "Call the park rangers for help";
    
                } if (chapter === "chapter4b") {
                    optionA.style.display = "none";
                 optionB.style.display = "none";
    
                }

                if (chapter === "goodEndingA") {
                    optionA.style.display = "none";
                 optionB.style.display = "none";
    
                } if (chapter === "goodEndingB") {
                    optionA.style.display = "none";
                 optionB.style.display = "none";
    
                }
               
                // 

                //ADD ANOTHER ELSE IF FOR EACH CHAPTER YOU ADD FOLLOWING BUTTON NAMING CONVENTIONS
            }

            chapters[chapter].visited = true;

        };


        // EVENT LISTENER FOR AUDIO

        document.addEventListener('DOMContentLoaded', (event) => {
            const audioElement = document.getElementById('background-audio');
            const inputElements = document.querySelectorAll('input, textarea');

            inputElements.forEach(input => {
                input.addEventListener('input', () => {
                    if (audioElement.paused) {
                        audioElement.play();
                    }
                });
            });
        });

        // EVENT LISTENER FOR MUTE BUTTON + CHANGE SYMBOL

        document.getElementById('mute-button').addEventListener('click', function() {
            var audio = document.getElementById('background-audio');
            var muteButton = document.getElementById('mute-button');
            if (audio.muted) {
                audio.muted = false;
                muteButton.innerHTML = ' <i class="fa-solid fa-volume-xmark fa-2xl"></i>';
            } else {
                audio.muted = true;
                muteButton.innerHTML = '<i class="fa-solid fa-play fa-2xl"></i>';
            }
        });

        // Initialize the game with the start chapter
        updateCard("start");