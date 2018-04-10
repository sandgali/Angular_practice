import { Component } from '@angular/core';
import {FirstComponent} from "./first/first.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./first/first.component.css']
})
export class AppComponent {
  title = 'MY FIRST ANGULAR pROJECTs';
  name = ["sandya","sandya","ranga","ranga","bujji"]
}
