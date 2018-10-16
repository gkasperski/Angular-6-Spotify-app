import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight;

  constructor(private elem: ElementRef) {
    console.log(elem);
  }

  ngOnInit() {
    console.log("hello" + this.appHighlight);
  }
  
  ngOnCheck() {
    
  }
  
  ngOnChanges(changes: SimpleChanges) {
    this.elem.nativeElement.style.color = this.appHighlight;
    
  }



}
