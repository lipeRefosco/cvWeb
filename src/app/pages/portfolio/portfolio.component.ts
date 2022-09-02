import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projects = [
    './assets/images/Rectangle 4.png',
    './assets/images/Rectangle 5.png',
    './assets/images/Rectangle 6.png'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
