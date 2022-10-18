import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class TranscationService {
  constructor(private http: HttpClient, private datePipe: DatePipe) { }
  getTransactions(startDate: Date, endDate: Date): Observable<Transaction[]> {
    var transUrl = 'http://localhost:3000/v1/transactions?startDate=';
    transUrl = transUrl + this.datePipe.transform(startDate, "yyyy-MM-dd") + "&endDate=" + this.datePipe.transform(endDate, "yyyy-MM-dd")
    return this.http.get<Transaction[]>(transUrl)
  }

}