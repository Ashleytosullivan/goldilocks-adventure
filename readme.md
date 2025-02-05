
![Tales In Motion Hero PNG](/readme_resources/front_page_readme.png)

<h1 align="center">Tales In Motion</h1>

<div align="center"> 
<a target="_blank" href="https://ashleytosullivan.github.io/goldilocks-adventure/"> | Live Link Here | </a>
<a target="_blank" href="https://miro.com/app/board/uXjVLlv8dx4=/"> | Project Board | </a>
</div align="center"> 

<h1 align="center"> Introduction: </h1>

<p>
Tales in Motion is a assessed portfolio project developed as part of the Code Institute Full Stack Software Developer Bootcamp as part of a team effort. The team consists of Ashley O'Sullivan, Megan Otton and Jago Truscott. The learning outcomes for this project is to learn how to work as a team and use Github collabratively, alongside utilising our skills in HTML, CSS, Bootstrap and Java Script in order to create a interactive website. 

The live project can found here: <a target="_blank" href="https://ashleytosullivan.github.io/goldilocks-adventure/">Link Here</a>
</p>

## Project Outline

Tales in Motion is a fictional organisation created for the sole purpose of creating an interactive website using JS, the primary focus of the website is to have the user play through an interactive tale that changes based on the users choices. Based on the users choices it would take you down a different narrative path with three seperate endings.

#### Key Objectives
 - A clear and easy to navigate website,
 - Responsive design that works effectively on all web sizes,
 - Color and imagery that matches the theme of the website,
 - Interactive website that clearly displays the story and intent,
 - Have the story be entertaining for specified audiences.

## UX Design

### User Stories

As a young adult reader, I want to make choices at key points in the story so that I can shape the narrative and experience a personalised adventure.

As a player, I want to choose how my character reacts in difficult situations so that I can influence their personal growth within the story.

As a user, I would like an easy to navigate website with information on how to play so that I can understand how to play. 

As a young adult, I want my choices to have real consequences on the world around me so that the story feels meaningful and my decisions matter.

As a player, I want the option to use my name for character interactions, so that it feels more personalised when other characters address me within the story.

### Colour Design

Color selection is a important part to any design and especially with this design, due to the fact it is primarily word based we need colours that compliment the text and aides in readability whilst not taking the users eyes away from the main centerpoint which is the game itself.

With that in mind we chose a wooden texture for the background to mimic a table backdrop and added red elements like the header and footer to represent traditional ribbon book marks. All the while having white headers to aid in readibility and to add emphasis to the main parts. 

### Fonts

Fonts was another thing to consider when creating this website, the readibility as suggested in the last section is incredibly important.  

Bona Nova SC was used for the headers because it mimics traditional old fashioned book title fonts whilst still being legible.

Frank Ruhl Libre was used for the main text elements for similar reasons as above. 

<img src="/readme_resources/font_readibility_score.png" alt="Header & Footer Readibility Score">
<img src="/readme_resources/main_font_readibility_score.png" alt="Main Text Readibility Score">

## Wireframes
<img src="/readme_resources/wireframes.png" alt="Phone, Tablet and Laptop Wireframe">

These wireframes have been created using Balsamiq to define the key feature layout to guide the user experience design. We will be using mostly our own code rather than Bootstrap elements so that it is easier to configure the functions in Java Script.

#### Index Page

<img src="/readme_resources/index_page.png" alt="Picture of the index page">

## Imagery

Due to the nature of this project it heavily relies on imagery in the form of active descriptions and actual images. The images needed to be Copyright free and Royalty Free as well and most importantly match the descriptions set out in the script. This is to aid in our users experience and allow users to have a clearer picture of the scene and setting. 

Due to the particulars of this project, We created these goals for the images:

- Clear in the meaning of the image,,
- Appropriate for the intended audience (16 and above),
- Avoid triggering or sensitive imagery or themes,
- Showcase the story element it is representing clearly,
- Match all Images in the sequence to promote a clear theme.

Due to the goals of the images we have decided to use custom images created by Megan Otton, as AI or stock images would struggle to match the needs required of our images and are unlikely to follow the same theme and styling required. We are aiming for a storybook-esque aesthetic with linework pieces only to boost user experience but not to take the readers attention away from the main story. 

#### General Features
In order to fulfil the criteria set out by the user stories, listed above, the page will consist of a header containing the company name, a game section consisting of a interchangable image, story description and two buttons and finally a footer.

Upon the creation and development of the project the design shifted slightly from the wireframe.
Some key adjustments are as follow:
- The addition of a How to Modal in the form of a fav-icon on the header,
- Story chapter moving from the side to the center,
- Tales in motion is no longer represented by a Jam Jar.

#### Index Page
<img src="/readme_resources/index_page.png" alt="Picture of the index page">

## Responsive Design

With some experimentation we have been able to create a page that is fully responsive to modern standards with the use of media queries.

Below is an image of my website from different devices.

<img src="/readme_resources/responsive_image.png" alt="Picture of the index page on different devices">

Improvements:

If we were to improve this further we would look further into the fav icon images on the header as at certain resoloutions they change sizes from each other. 

## AI Implementation

#### Use Cases and Reflections:
#### - Code Creation
  - We used AI like copilot to help implement and generate elements from bootstrap without having to source it from bootstraps website. This sped up creation time exponentially in a project where time is limited.

#### - Debugging 
  - We used Copilot to fix or change elements of the code to make it more aligned with the websites vision. This was a useful time saving technique which if not used could have taken hours of research to fix/edit manually.

#### - Overall Impact
  - AI tools streamlined repetive tasks and basic jobs, enabling us to focus on the more complex elements of the development.

## Testing and QA

| Location               | Feature         | Expected Outcome                                                | Pass/Fail |
| ---------------------- | --------------- | --------------------------------------------------------------- | --------- |
| Index/ / Nar Bar       | Instructions    | Popup with instructions on how to play                          | PASS |
| Index / Nar Bar        | Mute            | Mute the background audio                                       | PASS |
| Index / Card     | Choices buttons  | Allow the user to make narrative choices                      | PASS      |
| Index / Card     | Name insert  | Allow the user to input their chosen name                         | PASS      |
| Index / Card     | Start Again | Allow the user to restard the game                         | PASS      |
| Index / Footer     | Credits  | Take user to authors' github pages                        | PASS      |
| Index / Hidden     | Audio  | Audio to start playing after the player inputs their name                       | PASS      |

- Conducted multiple tests on Emulated Mobile, Ipad and Laptop and Desktop. Along with a Manual Test On  Mobile, Ipad and Desktop, testing all webpages and links are working correctly.
    - Desktop Devices
    - iPhone SE
    - Iphone 12 Pro
    - Iphone 14 Pro Max
    - Pixel 7
    - iPad Air
    - iPad Pro
    - Samsung Galaxy 8+
    - Samsung Galaxy S20 Ultra
    - Nest Hub

- All information can be read clearly and the page is responsive.

### Bugs

- No Bugs Found

### Validation

Index Page: ![HTML](/readme_resources/html-valid.PNG)



CSS: ![CSS](/readme_resources/css-valid.PNG)

JS: 
![JavaScript](/readme_resources/js-valid.PNG)

Lighthouse:

Mobile

The mobile Lighthouse score was reduced by a number of issues at the time of testing, predominantly the Largest Contentful Paint element. This issue can be resolved by pre loading the image in future projects.

![Lighthouse](/readme_resources/lighthouse-mobile.PNG)

Desktop


![Lighthouse](/readme_resources/lighthouse-desktop.PNG)


### Credits
- Favicons generated by favicon.io
- Music track: Forest Bathing by Piki
Source: https://freetouse.com/music
Copyright Free Music for Videos
- JavaScript and HTML from Bootstrap Design
- Fonts provided by Google Fonts
- Images by FontAwesome
- Wireframes created on Balsamiq