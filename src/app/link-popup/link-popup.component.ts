import { Component, Output, EventEmitter, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-popup',
  templateUrl: './link-popup.component.html',
  styleUrls: ['./link-popup.component.scss']
})
export class LinkPopupComponent implements OnInit {
  isStarted: boolean;
  isVisible: boolean;
  isModal: boolean;
  @Output() close = new EventEmitter();  
  @ViewChild('assessmentContianerRef') assessmentContianerRef: ElementRef;
  constructor() {
    this.isStarted = false;
    this.isVisible = true;
    this.isModal = true;
  }
  ngOnInit() {
    document.addEventListener('fullscreenchange', () => {
      if (document.fullscreenElement) {
        this.isStarted = true;
      } else {
        this.isStarted = false;
      }
    });
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
