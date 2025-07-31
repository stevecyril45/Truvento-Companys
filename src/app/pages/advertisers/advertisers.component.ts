import { Component, ElementRef, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-advertisers',
  templateUrl: './advertisers.component.html',
  styleUrls: ['./advertisers.component.css']
})
export class AdvertisersComponent implements OnInit {
  @Input('appTypewriterText') fullText: string = '';
  private speed = 50;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.typeWriter(0);
  }

  typeWriter(index: number) {
    if (index < this.fullText.length) {
      this.el.nativeElement.innerHTML += this.fullText.charAt(index);
      setTimeout(() => this.typeWriter(index + 1), this.speed);
    }
  }
}
