import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTypewriterText]'
})
export class TypewriterTextDirective implements OnInit {
  @Input('appTypewriterText') fullText: string = '';
  private currentIndex = 0;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.typeLetter();
  }

  private typeLetter() {
    if (this.currentIndex < this.fullText.length) {
      this.el.nativeElement.textContent += this.fullText.charAt(this.currentIndex);
      this.currentIndex++;
      setTimeout(() => this.typeLetter(), 40); // Typing speed
    }
  }
}
