import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.css']
})
export class PublishersComponent implements AfterViewInit {
  @ViewChild('introHeading') introHeading!: ElementRef;
  @ViewChild('introTitle') introTitle!: ElementRef;
  @ViewChild('introParagraph') introParagraph!: ElementRef;

  ngAfterViewInit(): void {
    this.typeText(this.introHeading.nativeElement, 'Publishers', 50);
    setTimeout(() => {
      this.typeText(this.introTitle.nativeElement, 'Maximize Your Earnings with Truvento Company', 40);
    }, 1000);
    setTimeout(() => {
      this.typeText(
        this.introParagraph.nativeElement,
        `As a publisher, your audience is your most valuable asset, and at Truvento Company
, we help you monetize that asset to its fullest potential. Our network connects you with premium advertisers who are looking for quality traffic, ensuring you earn top dollar for every click, lead, or sale.`,
        20
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
