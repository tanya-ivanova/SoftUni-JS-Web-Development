import { Directive, ElementRef, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appHighlightOnMove]'
})
export class HighlightOnMoveDirective implements OnInit,OnDestroy {
    @HostListener('mouseover', ['$event']) mouseOverHandler(e: MouseEvent) {
        console.log(e);
    } 

    constructor(
        private elRef: ElementRef,
        private renderer: Renderer2,
    ) { }

    unsubscribeFromEvents: (() => void)[] = [];

    ngOnInit(): void {        
        //this.elRef.nativeElement.style.backgroundColor = 'yellow';    
        
        this.unsubscribeFromEvents.push(
            this.renderer.listen(
                this.elRef.nativeElement,
                'mouseenter',
                this.mounseEnterHandler.bind(this)
            )
        );        

        this.unsubscribeFromEvents.push(
            this.renderer.listen(
                this.elRef.nativeElement,
                'mouseleave',
                this.mounseLeaveHandler.bind(this)
            )
        );
    }

    ngOnDestroy(): void {
        this.unsubscribeFromEvents.forEach((fn) => {
            console.log(fn);
            fn();
        });
    }

    mounseEnterHandler(e: MouseEvent): void {
        //console.log(e);

        // this.renderer.setStyle(
        //     this.elRef.nativeElement,
        //     'background-color',
        //     'yellow'
        // );

        this.renderer.addClass(this.elRef.nativeElement, 'highlight');
    }

    mounseLeaveHandler(e: MouseEvent): void {
        //console.log(e);

        // this.renderer.setStyle(
        //     this.elRef.nativeElement,
        //     'background-color',
        //     'white'
        // );

        this.renderer.removeClass(this.elRef.nativeElement, 'highlight');
    }

}
