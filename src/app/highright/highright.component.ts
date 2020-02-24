import { Component, OnInit, ElementRef, SecurityContext, Input, ViewChild, AfterViewInit } from '@angular/core';
import * as hljs from 'highlight.js';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-highright',
  templateUrl: './highright.component.html',
  styleUrls: ['./highright.component.scss']
})
export class HighrightComponent implements OnInit {

  @ViewChild('codeBlock', { read: ElementRef, static: true }) codeblock: ElementRef;
  highrightHtml = '';
  constructor(
    private sanitizer: DomSanitizer
  ) { }

  @Input() code: string;
  @Input() languages: string[];

  ngOnInit() {
    this.init();
  }

  init() {
    hljs.configure({
      languages: ['javascirpt', 'typescript', 'json'],
      tabReplace: '',
      useBR: false,
    });
    const { value } = hljs.highlightAuto(this.code, this.languages);
    this.highrightHtml = value;
    // console.log('this.highrightHtml', this.highrightHtml);
    this.codeblock.nativeElement.innerHTML = this.sanitizer.sanitize(SecurityContext.HTML, this.highrightHtml);
    hljs.highlightBlock(this.codeblock.nativeElement);
  }



}
