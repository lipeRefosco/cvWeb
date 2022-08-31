import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {

  nome = "Luis Felipe Refosco do Nascimento";
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
