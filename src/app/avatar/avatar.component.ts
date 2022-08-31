import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {

  avatarURL = window.location.hostname === "localhost" ?
  "assets/avatar-github.jpeg" : "https://avatars.githubusercontent.com/u/92929224?v=4"
}
