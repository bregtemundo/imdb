/* tslint:disable:member-ordering */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[flickity]',  
})
export class FlickityDirective {

  constructor(private el: ElementRef) { }

  
  @Input() defaultColor: string;

  @Input('flickity') highlightColor: string;

  @HostListener('AfterViewInit') onMouseEnter() {
    alert("init");
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
/*
    //trun into slidshow   
    let flkty = new Flickity( '.c-list_popular', {
      // options
      cellAlign: 'left',
      contain: true
    });*/
  }
}
