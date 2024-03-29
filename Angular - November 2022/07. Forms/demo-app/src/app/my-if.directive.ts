import { Directive, Input, OnChanges, OnInit, Optional, SimpleChange, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appMyIf]'
})
export class MyIfDirective implements OnChanges {
    @Input() appMyIf = false;
    @Input() template: TemplateRef<any> | undefined

    constructor(
        @Optional() private templateRef: TemplateRef<any>,
        private vc: ViewContainerRef
    ) { }

    ngOnChanges(): void {
        if (this.appMyIf) {
            const template = this.templateRef || this.template;
            if (!template) { return; }

            this.vc.createEmbeddedView(template);
        } else {
            this.vc.clear();
        }
    }

}
