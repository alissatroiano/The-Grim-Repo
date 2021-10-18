# Spooky Escape

Spooky Escape is an online spooky story experience, that invites users to make logical decisions that will control their fate. Follow the prompts to escape this terrifying nightmare. A scary experience enhanced with animated images and audio clips. This game will be built using HTML, CSS, Bootstrap and JavaScript for [Code Institute's](https://codeinstitute.net/) October 2021 [Spookathon](https://hackathon.codeinstitute.net/hackathon/12/). This experience is meant for Desktop use only.

## UX

![User Stories](assets/images/user-stories.png)
 
**Target market**: People that want to have fun while challenging their imagination.

**User Stories**:

User Stories were created during the development phase of this project to help the developers plan out features and create wireframes.

| ID #       | As A/An... | I wan't to be able to... | So that I can... | Status |
| ----------- | ----------- | ----------- | ----------- | ----------- | 
|   1        | User       | Have an interactive experience | Have fun while I learn more about a haunted escape | In Progress |
| 2        | User  |  Use my mouse or keyboard to control the story | Play along and be part of the experience   | In Progress |
| 3        | User       | Preview a prompt/dialog | Understand what to do next  | Done |
| 4        | User       | Choose from a selection of answers | Control the way my story goes | Done |
| 5        | User       | Click on a button that says, "buy tickets" |  Book tickets for the haunted experience   | IP |
| 6        | User       | Toggle audio states |  Play audio when it's convenient for me   | Done |

## Planning: 

**Brainstorming;** Our first steps of planning where to figure out anything and everything we want.  We had daily calls to discuss what features the Spooky Escape should have. We had a multitude of ideas ranging form using a quiji board to navigate around the experience and tasks/questions for the user to complete to escape each room that they found themselves in. From our calls we determined the the locations we would set the story in.  Our protagonist would find themselves across numerous rooms, in an asuylm bathrooom, catacombs and abandoned hallways for example.  

**Prototyping;** On our next call we discussed the language and symbolism that might be involved and how we could use Gaelic and Celtic folklore for the user to collect as a clue to escape.  We then mind mapped as a group each of the components, determining the content and boxes for elements for each of the pages and how they would interlink and run as a story.  Determining what was a successful route and which routes would lead to end game. We wanted to include a torch effect on mouse movement to enhance the story.  A main draft of the layout, colors and format was agreed.

**Execution;** Tasks were assign on the kanban board. Each room was divided in the team for development the sprints were then tested and PR was pushed to the main repository.


## Features:

**Start:** Starts the story, by having the user click on a button that says, story located on the cover/start page (or section of the same page) to start the game.

**- Game:** Allows the user to play the games, by clicking on one of two text-based prompts sent to take them through the interactive game experience.

**“The End”:** Let’s the user know when they have finished their story, by directing them to one of (several) endings.

## Technologies

- [Bootstrap 5](https://getbootstrap.com/docs/5.1/getting-started/introduction/) was used to make this game responsive and visually appealing.
- [CSS]  (https://css-tricks.com/guides/) was used to style the project.
- [HTML] (https://html.com/#Creating_Your_First_HTML_Webpage) was used as a base language.
- [Javascript] (https://www.javascript.com/learn/strings) was used to make the audio and images dynamic on each scene.
- [Github] used to host the deployed website and the repository of all previous versions of the build.
- [Google Chrome Developer Tools] used as the core test phase throughout the project build life, testing the responsiveness of elements and CSS visuals.
- [Microsoft Excel] used for testing table.

## Testing
| Functionality                          | Page                           | Browser     | Pass/Fail | Comment if Fail                                                                                                     |
| -------------------------------------- | ------------------------------ | ----------- | --------- | ------------------------------------------------------------------------------------------------------------------- |
| Home pages lodads for user             | Index                          | Chrome/Edge | Pass      |                                                                                                                     |
| Audio works for user                   | All                            | Chrome/Edge | Pass      |                                                                                                                     |
| Navigation/Option button work for user | Scene 2-extra and Scene 3      | Chrome/Edge | Fail      | Option B and C brought me to a 404 page. On scene 3, Option A and C didn't work.                                    |
| Content loads for user                 | Index,Scene1,Scene2,Scene4,End |             | Pass      |                                                                                                                     |
| Flash light effect                     | Scene 3                        | Chrome/Edge | Fail      | The flashlight effect doesn't work. It also doesn't stay in place.The "darkness" follows your mouse while scrolling |
| Can the user proceed to scene 4        | Scene 3                        | Chrome/Edge | Fail      | When the secret entrance is found, and press proceed nothing happens                                                |
| Story content                          | ALL                            | Chrome/Edge | Fail      | Alignment issue                                                                                                     |

## Credits

- [Code Institute](https://codeinstitute.net/)
- [Hackathon](https://hackathon.codeinstitute.net/)
- [Google Fonts](https://fonts.google.com/)
- [Bootstrap 5](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
- [CSS Tricks](https://css-tricks.com/snippets/css/typewriter-effect/) - The typewriter effect on index.html was learned from this article.
- [CSS Scan](https://getcssscan.com/css-box-shadow-examples) box shadow styles were copied from CSS Scan.
- [CSS Buttons Glitch Effect](https://cssbuttons.io/detail/namecho/slippery-moth-23)

## Testing:




## Deployment:







