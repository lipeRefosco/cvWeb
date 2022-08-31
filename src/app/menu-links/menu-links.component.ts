import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-links',
  templateUrl: './menu-links.component.html',
  styleUrls: ['./menu-links.component.scss']
})
export class MenuLinksComponent {
  links = [
    {
      uri: "#home",
      label: "Sobre mim"
    },
    {
      uri: "#educacao",
      label: "Educação"
    },
    {
      uri: "#portifolio",
      label: "Portifólio"
    },
    {
      uri: "#contato",
      label: "Contate-me"
    },
  ]
}
