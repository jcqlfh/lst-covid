import { Component } from '@angular/core';
import { AgendamentoService } from 'src/app/services/agendamento.service';

@Component({
  selector: 'app-app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.css'],
})
export class AppSearchComponent {
  constructor(private agendamentoSrv: AgendamentoService) {}
  search(name: string) {
    alert(name);
    this.agendamentoSrv.fetchName().subscribe();
  }
}
