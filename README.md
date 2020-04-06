# Smash That Clicky!

<a href="https://maserallm.github.io/Smash-That-Clicky/.">
<img src="./click-it-up/public/images/smashbrosheader.jpg" alt="Super Smash Bros Logo" width="80%" />
</a>

# Concept

Here's a fun game themed after the famed Nintendo Super Smash Brothers video game! Try not to click on the same fighter twice or else you'll be defeated.

## Contents

- [Technologies](#technologies)
- [Installation](#installation)
- [Features](#features)
- [About the Developer](#aboutthedeveloper)

---

### Project Overview

With React.js different images of fighters are rendered to the DOM. Each fighter has a name, id, and clicked value that is set equal to false. All of those values given to the fighters are set in the state of App.js and is passed down to the fighters as props. Also found in the App.js state is the score and topscore values which are set to 0. Each time that an image is clicked during the game, there is a shuffle character function that randomizes the fighters positions. When a fighter is clicked, there is an onClick handler that sets the fighters clicked state to true. As the value is being set to true, the score is incremented by 1. This continues until the user clicks on the same fighter again which will take the users current score and compare it to the top score. If the users score is higher than the top score, then the users score will be set as the new top score. The game will then reset and the score will be set back to 0.

# Languages and Technologies

- React JS
- Bootstrap
- CSS
- HTML
- JavaScript

---

### <a href="aboutthedeveloper">About the Developer</a>

Smash That Clicky creator/designer:

[<img src="https://avatars0.githubusercontent.com/u/53875404?s=460&u=31a5f360d71e4f0a1fa4dfd8db38ed44f27fa10b&v=4" height="70px" width="70px">](https://github.com/maserallm)<br>
[Maserall Marcelin](https://github.com/maserallm) is an Inventory Analyst at Publix Supermarkets, Inc. turned software developer. He can be found on [LinkedIn](https://www.linkedin.com/in/maserall-marcelin-76067a12b/) and [Github](https://github.com/maserallm).
