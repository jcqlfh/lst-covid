import { Component } from '@angular/core';
import { IAgendamento } from 'src/app/models/IAgendamento';
import { AgendamentoService } from 'src/app/services/agendamento.service';

@Component({
  selector: 'app-app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.css'],
})
export class AppSearchComponent {
  isLoading: boolean;
  agendamento: IAgendamento;

  constructor(private agendamentoSrv: AgendamentoService) {}
  search(name: string) {
    this.isLoading = true;
    this.agendamentoSrv.fetchName(name).subscribe(
      agendamento => {
        this.isLoading = false;
        this.agendamento = agendamento as IAgendamento;
      },
      err => {
        this.isLoading = false;
        console.log(err);
      }
    );
  }
}
