import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AgendamentoService {
  constructor(private readonly httpClient: HttpClient) {}

  fetchName(name: string) {
    return this.httpClient.get(`${environment.api}/agendamentos/${name}`).pipe(
      map(response => {
        console.log(response);
        return response;
      })
    );
  }
}
