import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AgendamentoService {
  constructor(private httpClient: HttpClient) {}

  fetchName() {
    return this.httpClient.get().pipe(
      map(response => {
        console.log(response);
        return of();
      })
    );
  }
}
