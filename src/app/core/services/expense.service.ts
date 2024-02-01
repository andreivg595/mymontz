import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Expense } from '../models/expense.model';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private url = environment.BASE_URL;

  constructor(private http: HttpClient) {}

  getExpenses(
    id: number,
    startDate: Date,
    endDate: Date
  ): Observable<Expense[]> {
    let params = new HttpParams();
    params = params.append('id', id);
    params = params.append('startDate', startDate.toISOString().slice(0, 10));
    params = params.append('endDate', endDate.toISOString().slice(0, 10));

    return this.http.get<Expense[]>(`${this.url}/expense/expenses`, { params });
  }

  createExpense(expense: Expense): Observable<Expense> {
    const formData = new FormData();
    formData.append('amount', JSON.stringify(expense.amount));
    formData.append('userId', JSON.stringify(expense.user.id));
    formData.append('categoryId', JSON.stringify(expense.category.id));
    formData.append('date', expense.date.toISOString().slice(0, 10));
    formData.append('note', expense.note);
    return this.http.post<Expense>(`${this.url}/expense/create`, formData);
  }

  updateExpense(expense: Expense): Observable<Expense> {
    const formData = new FormData();
    formData.append('amount', JSON.stringify(expense.amount));
    formData.append('userId', JSON.stringify(expense.user.id));
    formData.append('categoryId', JSON.stringify(expense.category.id));
    formData.append('note', expense.note);

    return this.http.put<Expense>(
      `${this.url}/expense/update/${expense.id}`,
      formData
    );
  }

  deleteExpense(id: number): Observable<Expense> {
    return this.http.delete<Expense>(`${this.url}/expense/${id}`);
  }
}
