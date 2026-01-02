import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { Header } from './header/header';
import { Projects } from './projects/projects';
import { AboutMe } from './about-me/about-me';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';

@Component({ //Essa classe que vem logo abaixo é um componente, e aqui estão seus detalhes.
  selector: 'app-root', //nome da tag que representa esse componente
  imports: [RouterOutlet, Header, Projects, AboutMe, Contact, Footer ], //dentro do HTML do App vou usar <router-outlet>, então preciso importar RouterOutlet
  templateUrl: './app.html', //qual arquivo de template HTML esse componente usa.
  styleUrl: './app.css' //qual arquivo CSS contém os estilos específicos desse componente.
})
export class App {
  /*
    Essa classe é a parte "lógica" do componente, aqui coloca-se dados e funções que o 
    HTML pode usar.

    - export: faz essa classe ficar "visível" para outros arquivos


    **ps: usar signal quando é informação que pode ser usada várias vezes.
  */
}