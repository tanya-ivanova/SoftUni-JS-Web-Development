import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, Optional, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appMyStructural]',
    exportAs: 'appMyStructural'
})
export class MyStructuralDirective implements OnChanges {
    @Input() appMyStructural: boolean = false;
    @Input() myTmpProp: any;

    constructor(
        @Optional() private templateRef: TemplateRef<any>,
        private vcRef: ViewContainerRef
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
        console.log(this.appMyStructural);

        const template = this.templateRef || this.myTmpProp;
        if(!template) {
            return;
        }

        if(this.appMyStructural) {
            this.vcRef.createEmbeddedView(template, {
                value: 'value from NgOnChanges',
                $implicit: 'this is implicit data'
            });
        } else {
            this.vcRef.clear();
        }
    }

}
