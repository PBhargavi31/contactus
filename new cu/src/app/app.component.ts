import { Component } from '@angular/core';
import { InfodeskService } from './services/infodesk.service';
import {Info} from './model/info';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logo: string;
  icon1:string;
icon2:string;
icon3:string;
  title = 'contact';
  info:Info[];
constructor(private inf:InfodeskService,private activatedRoute : ActivatedRoute)
  {
    this.logo = "/assets/logo.png";
    this.icon2="/assets/placeholder.png ";
    this.icon1="/assets/email.png ";
    this.icon3="/assets/agenda.png";

  }
  ngOnInit() {
    this.inf.getInformation().subscribe(
      (data) => this.info=data
     );

  }
}
