import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-links',
  templateUrl: './menu-links.component.html',
  styleUrls: ['./menu-links.component.scss']
})
export class MenuLinksComponent {

  links = [
    {
      pathname: "/",
      label: "Sobre mim"
    },
    {
      pathname: "/educacao",
      label: "Educação"
    },
    {
      pathname: "/portifolio",
      label: "Portifólio"
    },
    {
      pathname: "/contato",
      label: "Contato"
    },
  ]

  pathname = window.location.pathname;

}
