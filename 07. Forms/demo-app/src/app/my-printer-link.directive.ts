import { Directive, ElementRef, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef, HostListener } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyPrinterLink]'
})
export class MyPrinterLinkDirective implements OnInit, OnDestroy {
  @Input() appMyPrinterLink!: string;
  @Input() template!: TemplateRef<any>;
  @HostListener('mouseover') mouseOver() {
    this.elementRef.nativeElement.backgroundColor = 'yellow'
  }
  unsub: (() => void)[] = [];

  viewHasBeenCreated: boolean = false;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private vc: ViewContainerRef
  ) {
    // this.unsub.push(this.renderer.listen(this.elementRef.nativeElement, 'mouseover', this.mouseOverHandler));
    this.unsub.push(this.renderer.listen(this.elementRef.nativeElement, 'mouseout', this.mouseOutHandler));
  }

  mouseOverHandler = (e: MouseEvent) => {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
    this.vc.createEmbeddedView(this.template);
    this.viewHasBeenCreated = true;
  }

  mouseOutHandler = () => {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
    this.vc.clear();
    this.viewHasBeenCreated = false;
  }

  ngOnInit(): void {
    if (this.viewHasBeenCreated) {
      this.vc.createEmbeddedView(this.template);
      this.viewHasBeenCreated = true;
    }
  }

  ngOnDestroy(): void {
    this.unsub.forEach(fn => fn());
  }
}