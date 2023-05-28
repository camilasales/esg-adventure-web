import { Component } from '@angular/core';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss']
})
export class ListCardsComponent {
  listaAtividadess = [
    {
      titulo:'Alimentação Saudável',
      descricao: 'Você achou a carta de hábitos alimentares saudáveis, hora de comer, a cada carta jogada uma fruta ou vegetal comida',
      urlImagem: '',
      valor1: '560',
      valor2: '250',
      color: '#fef3b1',
    },
    {
      titulo:'Cultivo em Horta',
      descricao: 'Você achou a carta do cultivo em horta, hora de plantar, a cada carta jogada, uma planata plnatada',
      urlImagem: '',
      valor1: '680',
      valor2: '490',
      color: '#e8ffcb',
    },
    {
      titulo:'Separação de Lixo',
      descricao: 'Você achou a carta de separação de lixo, hora de separar, a cada carta jogada um lixo separado',
      urlImagem: '',
      valor1: '806',
      valor2: '360',
      color: '#feb2b2',
    },
    {
      titulo:'Prática de Atividade Física',
      descricao: 'Você achou a carta de práticas de atividades fisicas, hora de pedalar, a cada carta jogada 1km pedalado',
      urlImagem: '',
      valor1: '806',
      valor2: '360',
      color: '#ffd2b1',
    },
  ]
}
