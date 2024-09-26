import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatchComponent } from './components/match/match.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatchComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'futcrewMatchAnalyzer';
}
