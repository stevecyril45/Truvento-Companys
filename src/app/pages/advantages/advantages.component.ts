import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.css']
})
export class AdvantagesComponent implements OnInit {

  headingText: string = 'Why Choose Truvento Company';
  animatedHeading: string = '';
  cardGroups: any[][] = [];

  cards = [
    {
      icon: 'industry',
      title: 'Broad Range of Verticals',
      description: 'Our expertise spans multiple industries, allowing us to tailor our services to your needs.'
    },
    {
      icon: 'bullhorn',
      title: 'Diverse Ad Models',
      description: 'We offer CPC, CPM, CPA, and CPL to match your campaign objectives.'
    },
    {
      icon: 'dollar-sign',
      title: 'High Payouts',
      description: 'Enjoy high payouts with flexible and on-time payment terms.'
    },
    {
      icon: 'users',
      title: 'Diverse Traffic Types',
      description: 'Get access to multiple channels: display, native, social, and email.'
    },
    {
      icon: 'shield-alt',
      title: 'Advanced Anti-Fraud Tools',
      description: 'Protect your investment with cutting-edge fraud prevention.'
    },
    {
      icon: 'headset',
      title: 'Dedicated Support and Management',
      description: '24/7 support with personalized guidance and affiliate managers.'
    },
    {
      icon: 'cogs',
      title: 'Customized Solutions',
      description: 'We craft strategies unique to your business objectives.'
    },
    {
      icon: 'award',
      title: 'Proven Track Record',
      description: 'Years of results-driven experience and trusted performance.'
    }
  ];

  ngOnInit(): void {
    this.animateText();
    this.groupCards();
  }

  animateText(): void {
    let i = 0;
    const interval = setInterval(() => {
      this.animatedHeading += this.headingText[i];
      i++;
      if (i === this.headingText.length) clearInterval(interval);
    }, 70);
  }

  groupCards(): void {
    for (let i = 0; i < this.cards.length; i += 2) {
      this.cardGroups.push(this.cards.slice(i, i + 2));
    }
  }
}

