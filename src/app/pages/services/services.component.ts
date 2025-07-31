import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})

export class ServicesComponent implements AfterViewInit {
  @ViewChild('headingText') headingText!: ElementRef;
  @ViewChild('subHeadingText') subHeadingText!: ElementRef;
  @ViewChild('descriptionText') descriptionText!: ElementRef;

  ngAfterViewInit(): void {
    this.typeText(this.headingText.nativeElement, 'Services', 70);
    setTimeout(() => {
      this.typeText(this.subHeadingText.nativeElement, 'Comprehensive Advertising Solutions for Every Need', 60);
    }, 1000);
    setTimeout(() => {
      this.typeText(
        this.descriptionText.nativeElement,
        'At Truvento Company, we offer a full suite of advertising and affiliate marketing services tailored to meet the unique needs of our clients. Our solutions are designed to drive engagement, increase conversions, and maximize ROI across multiple platforms and channels.',
        30
      );
    }, 2500);
  }

  typeText(element: HTMLElement, text: string, speed: number): void {
    element.textContent = '';
    let index = 0;
    const interval = setInterval(() => {
      element.textContent += text.charAt(index);
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, speed);
  }
}
