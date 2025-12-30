import { Component, signal } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [ NgFor ],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
    protected readonly projects = signal ([ // lista: usar ([...]. Projects é signal do array)
    {
      name: 'BallitChampions1',
      description: 'Interface de jogo com partidas competitivas entre times.',
      techs: ['Java'] // outro array
    },
    {
      name: 'BallitChampions2',
      description: 'Interface de jogo com partidas competitivas entre times.',
      techs: ['Java', 'Angular']
    }
  ]);
}