import { Component, OnInit,NgZone } from '@angular/core';


@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  myDate;
  constructor() {
    
   }

  ngOnInit() {
    
    setTimeout(()=>{
      this.myDate= Date.now();
    }, 100);
    


  }

}