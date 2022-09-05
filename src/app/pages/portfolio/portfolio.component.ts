import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projects = [
    {
      nome: 'SparklePHP',
      desc: 'Framework PHP. Manipula os Sockets, Rotas.',
      img: null,
      links: [
        {
          label: 'Github',
          url: 'https://github.com/lipeRefosco/sparklePHP'
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
