import { Component, OnInit } from '@angular/core';
import { FormdataService } from '../../core/services/formdata.service';
import { Form } from '../../model/form';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  submissions: Form[] = [];
  pagedSubmissions: Form[] = [];

  isLoading = true;
  currentPage = 1;
  pageSize = 12;
  totalPages = 0;

  // Deletion state
  showConfirm = false;
  deleteId: string | null = null;
  deleteAll = false;

  constructor(private formdataService: FormdataService) {}

  ngOnInit(): void {
    this.fetchSubmissions();
  }

  fetchSubmissions(): void {
    this.formdataService.getAllSubmissions().subscribe({
      next: (data: Form[]) => {
        this.submissions = data;
        this.totalPages = Math.ceil(this.submissions.length / this.pageSize);
        this.updatePage();
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching data:', err);
        this.isLoading = false;
      }
    });
  }

  updatePage(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedSubmissions = this.submissions.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePage();
  }

  // Confirm deletion of single record
  confirmDelete(id: string): void {
    this.deleteId = id;
    this.deleteAll = false;
    this.showConfirm = true;
  }

  // Confirm deletion of all paged records
  confirmDeletePage(): void {
    this.deleteAll = true;
    this.deleteId = null;
    this.showConfirm = true;
  }

  // Cancel deletion
  cancelDelete(): void {
    this.showConfirm = false;
    this.deleteId = null;
    this.deleteAll = false;
  }

  // Execute deletion
 proceedDelete(): void {
  if (this.deleteAll) {
    const idsToDelete = this.pagedSubmissions.map(form => form.id);
    let completed = 0;

    idsToDelete.forEach(id => {
      this.formdataService.deleteSubmission(id).subscribe({
        next: () => {
          this.submissions = this.submissions.filter(form => form.id !== id);
          completed++;
          if (completed === idsToDelete.length) {
            this.finalizeDeletion();
          }
        },
        error: (err) => {
          console.error(`Error deleting id ${id}:`, err);
          completed++;
          if (completed === idsToDelete.length) {
            this.finalizeDeletion();
          }
        }
      });
    });

  } else if (this.deleteId) {
    this.formdataService.deleteSubmission(this.deleteId).subscribe({
      next: () => {
        this.submissions = this.submissions.filter(form => form.id !== this.deleteId);
        this.finalizeDeletion();
      },
      error: (err) => {
        console.error('Error deleting:', err);
        this.finalizeDeletion(); // Still refresh in case of partial failure
      }
    });
  }
}

private finalizeDeletion(): void {
  // Reset deletion state
  this.showConfirm = false;
  this.deleteId = null;
  this.deleteAll = false;

  // Recalculate total pages
  this.totalPages = Math.ceil(this.submissions.length / this.pageSize);

  // If current page is now invalid, go back a page
  if (this.currentPage > this.totalPages) {
    this.currentPage = this.totalPages || 1;
  }

  // Refresh paged data
  this.updatePage();

}
isAdmin = true; // Replace with actual admin check

  downloadPDF(): void {
    const element = document.getElementById('dashboardData');
    if (!element) return;

    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('dashboard-report.pdf');
    });
  }
}
