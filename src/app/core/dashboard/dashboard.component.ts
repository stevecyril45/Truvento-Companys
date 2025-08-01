import { Component, OnInit } from '@angular/core';
import { FormdataService } from '../../core/services/formdata.service';
import { Form } from '../../model/form';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  submissions: Form[] = [];
  isLoading = true;

  constructor(private formdataService: FormdataService) {}

  ngOnInit(): void {
    this.formdataService.getAllSubmissions().subscribe({
      next: (data: Form[]) => {
        this.submissions = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching data:', err);
        this.isLoading = false;
      }
    });
  }
}
