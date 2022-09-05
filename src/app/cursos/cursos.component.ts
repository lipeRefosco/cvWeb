import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos = [
    {
      nome: 'Engenharia de Software',
      instituicao: {
        nome: 'UNINTER',
        logo: '../../assets/logos/uninter.jpg',
        inicio: '25/02/2021',
        fim: 'Em andamento...'
      },
      code: null
    },
    {
      nome: 'Formação PHP',
      instituicao: {
        nome: 'Alura',
        logo: '../../assets/logos/alura.jpg',
        inicio: '25/10/2021',
        fim: '25/06/2022'
      },
      code: null
    }
  ]

  ngOnInit(): void {

  }

}
