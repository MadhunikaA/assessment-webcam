import { Component, Output, EventEmitter, ViewChild, ElementRef, OnInit } from '@angular/core';
import{AppService}from'../app.service';
@Component({
  selector: 'app-link-popup',
  templateUrl: './link-popup.component.html',
  styleUrls: ['./link-popup.component.scss']
})
export class LinkPopupComponent implements OnInit {
  isStarted: boolean;
  isVisible: boolean;
  isModal: boolean;
  count=0;
  @Output() close = new EventEmitter();
  @ViewChild('assessmentContianerRef') assessmentContianerRef: ElementRef;
  constructor(private AppService:AppService) {
    this.isStarted = false;
    this.isVisible = true;
    this.isModal = true;
  }
  ngOnInit() {
    document.addEventListener('fullscreenchange', (event) => {
      // event.preventDefault();
      // return;
      if (document.fullscreenElement) {
        this.isStarted = true;
   
      } else {
        this.isStarted = false;
      }
    });
  }
  handleWarning(){
    this.count=this.count+1;
    if(this.count==1){
      this.AppService.send(true); //sending value to a subject
    }else{
      document.exitFullscreen();
      this.count=0;
    }
  }
  handleClose() {
    this.close.emit();  
  }
  handleVideoFail() {
    setTimeout(() => {
      document.exitFullscreen();
    }, 500);
  }
  startAssessment() {
    this.isStarted = true;
    setTimeout(() => {
      if (this.assessmentContianerRef) {
        this.assessmentContianerRef.nativeElement.requestFullscreen();
      }
    }, 0);
  }
}
