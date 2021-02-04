import { Component, OnInit, ViewChild, ElementRef, OnDestroy, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit, OnDestroy {
  mediaStream: any;
  Iswarning=false;
  @ViewChild('videoRef') videoRef: ElementRef;
  @Output() videoFail = new EventEmitter();
  @Output() warnHandle = new EventEmitter();
  Questions = [
    { id: 1, question: "what is your name" },
    { id: 2, question: "what is your role" },
    { id: 3, question: "what is your salary" },
    { id: 4, question: "what is your company" },
    { id: 5, question: "where is your Location" },
    { id: 6, question: "where is your Designation" },
    { id: 7, question: "what is your mother tougue" },
    { id: 8, question: "what is your nationality" },
    { id: 9, question: "what is your Profession" },
    { id: 10, question: "where is your seat" },
  ]
  constructor(private AppService: AppService) {
    this.mediaStream = null;
    this.AppService.dataSubject.subscribe(value => {
      this.Iswarning=true;                  //calling this subject to show warn popup
    console.log(value,"observable");
    })
  }
  ngOnInit() {
    navigator.getUserMedia({ video: true }, (res: any) => {
      this.mediaStream = new MediaStream(res);
      this.videoRef.nativeElement.srcObject = this.mediaStream;
      this.videoRef.nativeElement.play();
      window.onblur = () => {
        this.warnHandle.emit();
        // this.count=this.count+1;
        // this.Iswarning=true;
        // if(this.count>1){
        // console.log("windows");
        // document.exitFullscreen();
        // }  
      }
    }, () => {
      this.videoFail.emit();
    });
    
  }
  ngOnDestroy() {
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach((track: any) => {
        track.stop();
      });
    }
  }
}
