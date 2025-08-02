import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Form } from '../../model/form';

@Injectable({
  providedIn: 'root'
})
export class FormdataService {
  private apiUrl = 'https://truvento-data-base-default-rtdb.firebaseio.com/form.json';

  constructor(private http: HttpClient) {}

  // POST form data
  saveDetails(formData: Form): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }

  // GET all submissions (include ID)
 getAllSubmissions(): Observable<Form[]> {
  return this.http.get<{ [key: string]: Form }>(this.apiUrl).pipe(
    map(data => {
      const submissions: Form[] = [];
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          submissions.push({ ...data[key], id: key }); // ✅ id added last
        }
      }
      return submissions;
    })
  );
}


  // DELETE by ID
  deleteSubmission(id: string): Observable<any> {
    const deleteUrl = `https://truvento-data-base-default-rtdb.firebaseio.com/form/${id}.json`;
    return this.http.delete(deleteUrl);
  }
}
