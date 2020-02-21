import { Component, OnInit, } from '@angular/core';


@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})


export class PatientDetailsComponent implements OnInit {

  myDate;
  timer;

  constructor() {
     
   }

  ngOnInit() {

    var mainThis = this;
    this.timer = setInterval(() => {
      mainThis.myDate= Date.now();
    }, 100);
    
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

}
