import { Component, OnInit, } from '@angular/core';

// import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css'],
  // encapsulation: ViewEncapsulation.None,
 
})



export class PatientDetailsComponent implements OnInit {

  // closeResult: string;

  myDate;
  timer;
  display="none";
  image="none";
  IsText:boolean=false;
  IsImage:boolean=false;

  // constructor(private modalService: NgbModal) { }
  constructor() { }

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

  onCloseHandled(){
    this.display="none";
  }

  openModal(){
    this.display="block";
    this.IsText=false;
    this.IsImage=false;
  }

  openimage(){
    if(this.IsImage==true){
      this.IsText=false;
      this.IsImage=false;
    }else{
      this.IsText=false;
      this.IsImage=true;
    }
  }

  opentextarea(){
    if(this.IsText==true){
      this.IsText=false;
      this.IsImage=false;
    }else{
      this.IsText=true;
      this.IsImage=false;
    }
    
  }

  // =============== upload image ===============

  afuConfig = {
    uploadAPI: {
      url:"https://example-file-upload-api"
    }
  };

  // =============== End of Upload Image ===============


  // =============== MODAL ===============


  // openBackDropCustomClass(content) {
  //   this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  // }

  // openWindowCustomClass(content) {
  //   this.modalService.open(content, { windowClass: 'dark-modal' });
  // }

  // openSm(content) {
  //   this.modalService.open(content, { size: 'sm' });
  // }

  // openLg(content) {
  //   this.modalService.open(content, { size: 'lg' });
  // }

  // openXl(content) {
  //   this.modalService.open(content, { size: 'xl' });
  // }

  // openVerticallyCentered(content) {
  //   this.modalService.open(content, { centered: true });
  // }

  // openScrollableContent(longContent) {
  //   this.modalService.open(longContent, { scrollable: true });
  // }

  // =============== End of MODAL ===============
  


}

export class ExpansionOverviewExample {
  panelOpenState = false;
}


