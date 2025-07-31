import {
  Component,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-30px)' })),
      ]),
    ]),
  ],
})
export class AboutComponent implements OnInit, AfterViewInit {
  aboutHeading: string = 'Connecting Brands and Consumers Globally';
  animatedAboutHeading: string = '';
  aboutParagraph: string = `At Truvento Company, we are dedicated to creating powerful connections between brands and consumers.
  Founded with a vision to revolutionize the advertising industry, we have grown into a trusted partner for brands across the globe.
  Our commitment to excellence and innovation drives us to deliver unparalleled results through our extensive network and advanced technological solutions.`;
  animatedAboutParagraph: string = '';



  ngOnInit(): void {
    this.typeText(this.aboutHeading, (text) => this.animatedAboutHeading = text, 40);
  }

  ngAfterViewInit(): void {
    const delay = this.aboutHeading.length * 40 + 300;
    setTimeout(() => {
      this.typeText(this.aboutParagraph, (text) => this.animatedAboutParagraph = text, 20);
    }, delay);

  }

  private typeText(text: string, updateFn: (text: string) => void, speed = 40, done?: () => void) {
    let output = '';
    let i = 0;
    const interval = setInterval(() => {
      output += text[i];
      updateFn(output);
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        if (done) done();
      }
    }, speed);
  }
}
