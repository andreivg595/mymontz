import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExpenseCategory } from '../models/expense-category';

@Injectable({
  providedIn: 'root',
})
export class ExpenseCategoryService {
  private url = environment.BASE_URL;

  constructor(private http: HttpClient) {}

  getExpenseCategories(): Observable<ExpenseCategory[]> {
    return this.http.get<ExpenseCategory[]>(`${this.url}/expense/categories`);
  }
}
