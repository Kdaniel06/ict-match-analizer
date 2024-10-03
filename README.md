# FutCrew Match Analyzer

**FutCrew Match Analyzer** is a web application that allows you to analyze and record events from soccer matches. Built using Angular and TypeScript, it helps manage the data of two teams, recording shots, goals, fouls, cards, and match statistics.

## Description

The project allows:
- Creating and managing information for two teams.
- Recording match events: shots, goals, assists, fouls, and cards (yellow and red).
- Editing goal scorers and their assists.
- Resetting the match to start over.

## Features

- **Angular**: The project uses Angular 17 for frontend development.
- **Reusable Components**: The `MatchComponent` manages the match interface.
- **Clear Models**: Uses a `Team` model to represent the information and statistics of each team.

## Installation

### Clone the repository

```bash
git clone https://github.com/your-username/futcrew-match-analyzer.git
cd futcrew-match-analyzer
```

### Install dependencies
Make sure you have Node.js and Angular CLI installed. Then, install the dependencies by running:

```bash
npm install
```

## Running the Application
To start the development server:

```bash
ng serve
```

By default, the application will be available at http://localhost:4200/.

## Project Structure
The project structure includes the following folders:

```css
src
├───app
│   ├───components
│   │   └───match
│   └───models
└───assets
``` 

* app/components/match: Contains the main component (match.component.ts) that handles the match.
* app/models: Contains the Team model (team.model.ts) used to represent the teams.

## Usage
### Create a Match
1. Start the application and provide names for both teams.
2. Click on "Start Match" to begin recording events.

### Register Events
* Shots, Goals, Fouls: Use the buttons to register events occurring during the match.
* Cards: Register yellow or red cards by entering the player's name.
* Edit Goals: Edit the name of the goal scorer or assistant by clicking "Edit".

### Reset the Match
Click on "Reset Match" to clear the data for both teams and start again.

## Live Demo
The application is deployed and can be accessed here: [FutCrew Match Analyzer](https://futcrew-match-analyzer.netlify.app)

## Code Highlights
### MatchComponent
The main match component is located in app/components/match/match.component.ts. It handles starting the match, registering events, and managing the statistics of the teams.

```typescript
import { Component } from '@angular/core';
// Necessary imports

@Component({
  selector: 'app-match',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent {
  // Match logic here
}
``` 

### Team Model
The Team model (app/models/team.model.ts) is used to represent team information and related statistics, such as goals, fouls, and cards.

```typescript
export class Team {
    name: string;
    // More properties and methods to manage statistics
}
```

## Technologies Used
* Angular 17: Framework for frontend development.
* SCSS: For styling.
* TypeScript: For source code development.

## Author
Daniel Cascante

## License
This project is licensed under the ISC License.

## Contributions
Contributions are welcome. If you wish to collaborate, feel free to fork the project and submit a pull request.