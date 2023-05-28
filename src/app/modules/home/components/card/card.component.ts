import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() tituloCard: string;
  @Input() descricaoCard: string;
  @Input() urlImagem: string;
  @Input() valor1: string;
  @Input() valor2: string;
  @Input() color: string;


  constructor(){
    this.tituloCard = 'titulo';
    this.descricaoCard = 'descricao';
    this.urlImagem = 'urlImagem';
    this.valor1 = '100';
    this.valor2 = '200';
    this.color = '200';
  }
}
