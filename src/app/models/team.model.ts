// src/app/models/team.model.ts

export class Team {
    name: string;
    shoots: number;
    onGoalShoots: number;
    fouls: number;
    goals: number;
    yellowCards: number;
    redCards: number;
    goalScorers: { player: string; assistant?: string }[]; // Para registrar goleadores y asistentes
    cardPlayers: { player: string; color: string }[];
  
    constructor(name: string) {
      this.name = name;
      this.shoots = 0;
      this.onGoalShoots = 0;
      this.fouls = 0;
      this.goals = 0;
      this.yellowCards = 0;
      this.redCards = 0;
      this.goalScorers = [];
      this.cardPlayers = [];
    }
  
    // Métodos para registrar eventos
    addShoot() {
      this.shoots++;
    }
  
    addOnGoalShoot() {
      this.onGoalShoots++;
    }
  
    addFoul() {
      this.fouls++;
    }
  
    //* Handle Goals
    addGoal(player: string, assistant?: string) {
      this.goals++;
      this.goalScorers.push({ player, assistant }); 
    }

    editGoal(index: number, player: string, assistant: string) {
        if (this.goalScorers[index]) {
          this.goalScorers[index] = { player, assistant };
        }
    }

    //* Handle Cards
    //? Yellow
    addYellowCard(player: string) {
        this.yellowCards++;
        this.cardPlayers.push({ player, color:"Amarilla" }); 
    }

    //! Red
    addRedCard(player: string) {
        this.redCards++;
        this.cardPlayers.push({ player, color:"Roja" }); 
    }
  

    
  
  }
  