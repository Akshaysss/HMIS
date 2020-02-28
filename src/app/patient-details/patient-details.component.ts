import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { trigger, state, transition, style, animate } from '@angular/animations';

// import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css'],
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('shown => hidden', animate('600ms')),
      transition('hidden => shown', animate('300ms')),
    ])
  ]
  // encapsulation: ViewEncapsulation.None,
 
})



export class PatientDetailsComponent implements OnInit {
  
  modalRef: BsModalRef;
  
  optionsSelect: Array<any>;


  // closeResult: string;

  myDate;
  timer;
  display="none";
  image="none";
  IsText:boolean=false;
  IsImage:boolean=false;

  // constructor(private modalService: NgbModal) { }
  // constructor() { }
  constructor(private modalService: BsModalService) { }

  ngOnInit() {

    var mainThis = this;
    this.timer = setInterval(() => {
      mainThis.myDate= Date.now();
    }, 100);
    
  }

  openAddModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,{ backdrop: 'static', keyboard: false });
  }

  visiblityState = 'hidden';
  toggle() {
  if (this.visiblityState === 'hidden')
    this.visiblityState = 'shown';
  else
    this.visiblityState = 'hidden';
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


