import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  protected readonly title = signal('Ana Bertuzzo'); /* aqui, dava para ser sem protected e reandoly */
}
