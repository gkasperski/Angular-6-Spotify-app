import {
  Directive,
  ElementRef,
  Input,
  SimpleChanges,
  Renderer2,
  HostListener,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[appHighlight]",
  host: {}
})
export class HighlightDirective {
  @Input()
  @HostBinding("style.color")
  @HostBinding("style.border-bottom-color")
  appHighlight;

  @HostBinding("class.hover")
  hover = false;

  @HostListener("mouseenter", ["$event.x", "$event.y"])
  activate(x: number, y: number) {
    this.hover = true;
  }

  @HostListener("mouseleave")
  deactivate() {
    this.hover = false;
  }

  constructor(private elem: ElementRef, private renderer: Renderer2) {
    console.log(elem);
  }

  ngOnInit() {
    console.log("hello" + this.appHighlight);
  }

  ngOnCheck() {}

  ngOnChanges(changes: SimpleChanges) {
    // this.elem.nativeElement.style.color = this.appHighlight;
    this.renderer.setStyle(this.elem.nativeElement, "color", this.appHighlight);
  }
}
