import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Team } from '../../models/team.model';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

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
  team1: Team = new Team(''); // Crea un objeto Team para el equipo 1
  team2: Team = new Team(''); // Crea un objeto Team para el equipo 2
  RunningMatch: boolean = false; // Para mostrar/ocultar las estadísticas

  // Función para iniciar el partido
  initMatch() {
    if (this.team1.name && this.team2.name) {
      this.RunningMatch = true;
    }
  }

  // Función para registrar eventos (tiros, goles, faltas)
  registrarEvento(teamName: 'team1' | 'team2', tipoEvento: 'shoots' | 'onGoalShoots' | 'fouls' | 'goals') {
    if (tipoEvento === 'goals') {
      this.handleGoal(teamName);
    } else {
      if (teamName === 'team1') {
        this.updateStats(this.team1, tipoEvento);
      } else {
        this.updateStats(this.team2, tipoEvento);
      }
    }
  }

  private updateStats(team: Team, tipoEvento: string) {
    switch (tipoEvento) {
      case 'shoots':
        team.addShoot();
        break;
      case 'onGoalShoots':
        team.addOnGoalShoot();
        break;
      case 'fouls':
        team.addFoul();
        break;
    }
  }

  private handleGoal(equipo: 'team1' | 'team2') {
    const player = prompt('¿Quién hizo el gol? (obligatorio)');
    if (!player) {
      alert('El nombre del goleador es obligatorio.');
      return; // Si no hay nombre, salir de la función
    }

    const assistant = prompt('¿Quién dio la asistencia? (opcional)') || '';

    if (equipo === 'team1') {
      this.team1.addGoal(player, assistant);
    } else {
      this.team2.addGoal(player, assistant);
    }
  }

  editGoal(equipo: 'team1' | 'team2', index: number) {
    const player = prompt('Editar nombre del goleador:', equipo === 'team1' ? this.team1.goalScorers[index].player : this.team2.goalScorers[index].player);
    if (player !== null) {
      const assistant = prompt('Editar nombre del asistente (dejar vacío si no hay):', equipo === 'team1' ? this.team1.goalScorers[index].assistant : this.team2.goalScorers[index].assistant) || '';
      if (equipo === 'team1') {
        this.team1.editGoal(index, player, assistant);
      } else {
        this.team2.editGoal(index, player, assistant);
      }
    }
  }

  addYellowCard(equipo: 'team1' | 'team2') {
    const player = prompt('¿Quién recibió la amarilla? (obligatorio)');
    if (!player) {
      alert('El nombre del amonestado es obligatorio.');
      return; // Si no hay nombre, salir de la función
    }

    if (equipo === 'team1') {
      this.team1.addYellowCard(player);
    } else {
      this.team2.addYellowCard(player);
    }
  }

  addRedCard(equipo: 'team1' | 'team2') {
    const player = prompt('¿Quién recibió la roja? (obligatorio)');
    if (!player) {
      alert('El nombre del amonestado es obligatorio.');
      return; // Si no hay nombre, salir de la función
    }

    if (equipo === 'team1') {
      this.team1.addRedCard(player);
    } else {
      this.team2.addRedCard(player);
    }
  }

  resetMatch() {
    // Reiniciar los equipos
    this.team1 = new Team('');
    this.team2 = new Team('');
    this.RunningMatch = false; // Reiniciar el estado del partido
  }
}
