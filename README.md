# JM-Note-Taker
### License Badge
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

As an business owner living in this current economy, it's vital to organize and structure your thoughts to keep track of tasks that are essential in developing the success of your business. One way to keep track of what you're thinking is through a note pad, which is why I have created an application based on a previous foundation, that allows users to generate, read, and delete notes that contain important information!

## Table of Contents

- [Title](#jm-note-taker)
- [License Badge](#license-badge)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contribution](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

1. Open the provided Heroku URL in your browser

## Usage

Upon entering the main path on website load, users are met with a title screen displaying the name of the application and a tiny description indicating what it's used for. Just under the aforementioned is a 'Get Started' button, which when clicked, will redirect the user to the /notes path.

Visiting the /notes path will send a new html file, and subsequently, a get request to the main database. If successful, all objects from the database (notes) will render on the left side of the page, displaying the title of the note. In the /notes path, users get to interact with notes by creating, reading, and deleting them. To create a note, users must click the '+' icon found in the top right, which will clear all inputs for the title and text fields, and allow new user input. Once all fields are filled out, a floppy disc icon will appear next to the '+' in the top right, which will save the note to the database and render the note to the left when clicked. To read a note, users can click on the title of a note on the left, and the input boxes will change state and content so that it displays both the title and the text of the chosen note. Additionally, users can delete notes by clicking on the red bin icon on the right of a specific note's display. Doing so will send a delete request which filters out the unique note id, resulting in the corresponding note's deletion from the database.

In a special case where a user has misspelt the URL path, there is a wildcard route in the code which will redirect any spelling mistakes or random character combinations in the URL path to the main index.

Github Repo: 
https://github.com/jujusoi/JM-Note-Taker

Heroku Link:
https://dry-retreat-03451-3dae48e8dc9a.herokuapp.com/

## Features

- Opening the note taker will present the user with a landing page with a button that leads to the notes page.
- Notes path renders pre-existing notes on the left of the page, and new note input boxes on the right.
- Entering a note title and text will cause a save icon to appear in the top right.
- Clicking the save icon will save the current written note in the to the database & render it on the left.
- Clicking on a note on the left will change input boxes to match the corresponding note title and text.
- Clicking on the '+' icon on the top left will clear inputs and allow new user input.
- Clicking the delete icon next to rendered notes will remove that note from the left side of the page.
- Entering a non-existent URL path will redirect users to the landing page.

## Contributing

N/A

## Tests

N/A

## Questions

N/A

GitHub user:
- jujusoi, https://www.github.com/jujusoi/

If further inquiry is necessary, reach out to me through my email address: 
- jalxmcdonald@hotmail.com

## License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  