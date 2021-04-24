import { Component } from '@angular/core';
import { IScheduling } from 'src/app/models/IScheduling';
import { SchedulingService } from 'src/app/services/SchedulingService';

@Component({
  selector: 'app-app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.css'],
})
export class AppSearchComponent {
  isLoading: boolean;
  scheduling: IScheduling;

  constructor(private schedulingSrv: SchedulingService) {}
  search(name: string) {
    this.isLoading = true;
    this.schedulingSrv.fetchName(name).subscribe(
      scheduling => {
        this.isLoading = false;
        this.scheduling = scheduling as IScheduling;
      },
      err => {
        this.isLoading = false;
        console.error(err);
      }
    );
  }
}
