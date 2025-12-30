import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { Header } from './header/header';
import { Projects } from './projects/projects';

@Component({ //Essa classe que vem logo abaixo é um componente, e aqui estão seus detalhes.
  selector: 'app-root', //nome da tag que representa esse componente
  imports: [RouterOutlet, NgFor, Header, Projects ], //dentro do HTML do App vou usar <router-outlet>, então preciso importar RouterOutlet
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

  protected readonly title = signal('dev-landing-page');

  protected readonly fullDescription = signal(
    `Sou estudante de Sistemas de Informação na PUCRS, e estou na metade do curso.
    Atualmente, sou estagiária na Dell Technologies através do projeto IT Academy - onde atuei como desenvolvedora fullstack e, também, suporte de aplicações internas.
    Anteriormente, tive duas experiências de iniciação científica na área de segurança da informação: minha primeira pesquisa foi o estudo sobre o software e hardware das urnas eletrônicas brasileiras durante seis meses, onde pude iniciar a criação de um artigo com foco em exemplificar a tecnologia utilizada no processo eleitoral.
    Então, tive oportunidade de ser pesquisadora do INCT Forense por cinco meses, gerenciando a página de Instagram da pesquisa, agenda de conteúdo e criação de projetos com foco no combate às fake news nas redes sociais.`
  );

  protected readonly shortDescription = signal(
    'Sou estudante de Sistemas de Informação na PUCRS e estagiária na Dell, com experiências em pesquisa em segurança da informação e combate a fake news.'
  );

  // controla se mostra versão curta ou longa. Guarda valor booleano para cada caso de description.
  protected readonly showFullDescription = signal(false); // sinal booleano “mostrar versão completa?”. False = não mostrar versão completa.


  // função chamada pelo botão
  // "toggle" significa "alternar". Void significa que não retorna, só faz ação
  toggleDescription(): void {
    this.showFullDescription.update((current) => !current);

    // Usa update para inverter o valor atual: se era false vira true, se era true vira false.
  }
}