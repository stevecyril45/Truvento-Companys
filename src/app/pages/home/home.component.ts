import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fullLine1: string = 'Revolutionizing Ads. Maximizing Performance';
  fullLine2: string = 'Smart CPL and CPA Ad Network Strategies to Fuel Your Growth';

  animatedLine1: string = '';
  animatedLine2: string = '';

  ngOnInit(): void {
    this.typeText(this.fullLine1, (typedText) => this.animatedLine1 = typedText, () => {
      this.typeText(this.fullLine2, (typedText) => this.animatedLine2 = typedText);
    });
  }

  typeText(text: string, updateFn: (val: string) => void, callback?: () => void): void {
    let i = 0;
    const interval = setInterval(() => {
      updateFn(text.substring(0, i + 1));
      i++;
      if (i === text.length) {
        clearInterval(interval);
        if (callback) callback();
      }
    }, 40); // typing speed
  }
}