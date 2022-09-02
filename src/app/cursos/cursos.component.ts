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
        logo: '../../assets/avatar-github.jpeg',
        inicio: '25/02/2021',
        fim: '25/02/2022'
      }
    },
    {
      nome: 'Formação PHP',
      instituicao: {
        nome: 'Alura',
        logo: '../../assets/avatar-github.jpeg',
        inicio: '25/10/2021',
        fim: '25/06/2022'
      }
    }
  ]

  ngOnInit(): void {

  }

}
