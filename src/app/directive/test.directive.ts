import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Directive, DoCheck, ElementRef,
  OnInit
} from "@angular/core";

@Directive({
  selector: '[appTest]'
})
export class TestDirective implements DoCheck, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  constructor(private elementRef: ElementRef) {
  }


  ngOnInit(): void {
    console.log('ngOnInit');
    console.log(this.elementRef.nativeElement.children.item(0));
    console.log($(this.elementRef.nativeElement).height());
    console.log($(this.elementRef.nativeElement).width());

  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
    console.log(this.elementRef.nativeElement.children.item(0));
    console.log(this.elementRef);
    console.log($(this.elementRef.nativeElement).height());
    console.log($(this.elementRef.nativeElement).width());
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    console.log(this.elementRef.nativeElement.children.item(0));
    console.log(this.elementRef);
    console.log($(this.elementRef.nativeElement).height());
    console.log($(this.elementRef.nativeElement).width());
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
    console.log(this.elementRef.nativeElement.children.item(0));
    console.log(this.elementRef);
    console.log($(this.elementRef.nativeElement).height());
    console.log($(this.elementRef.nativeElement).width());
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.elementRef.nativeElement.children.item(0));
    console.log(this.elementRef);
    console.log($(this.elementRef.nativeElement).height());
    console.log($(this.elementRef.nativeElement).width());
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
    console.log(this.elementRef.nativeElement.children.item(0));
    console.log(this.elementRef);
    console.log($(this.elementRef.nativeElement).height());
    console.log($(this.elementRef.nativeElement).width());
  }
}