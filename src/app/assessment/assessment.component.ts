import { Component, OnInit, ViewChild, ElementRef, OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit, OnDestroy {
  mediaStream: any;
  @ViewChild('videoRef') videoRef: ElementRef;
  @Output() videoFail = new EventEmitter();
  constructor() {
    this.mediaStream = null;
  }
  ngOnInit() {
    navigator.getUserMedia({ video: true }, (res: any) => {
      this.mediaStream = new MediaStream(res);
      this.videoRef.nativeElement.srcObject = this.mediaStream;
      this.videoRef.nativeElement.play();
      window.onblur = () => {
        document.exitFullscreen();
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
