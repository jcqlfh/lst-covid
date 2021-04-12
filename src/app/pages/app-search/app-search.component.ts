import { Component } from '@angular/core';
import { IAgendamento } from 'src/app/models/IAgendamento';
import { AgendamentoService } from 'src/app/services/agendamento.service';

@Component({
  selector: 'app-app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.css'],
})
export class AppSearchComponent {
  agendamento: IAgendamento;

  constructor(private agendamentoSrv: AgendamentoService) {}
  search(name: string) {
    this.agendamentoSrv.fetchName(name).subscribe(
      agendamento => (this.agendamento = agendamento as IAgendamento),
      err => console.log(err)
    );
  }
}
