import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';

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

}
