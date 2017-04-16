import {
  Component,
  OnInit
} from '@angular/core';
import { GundamService } from '../../service/gundam.service';
import { Gundam } from '../../model/gundam';

@Component({
  template: `
    <div *ngFor="let gundam of gundams"  [routerLink]="['/detail', gundam.id]">
      <span>
        {{gundam.name}}
      </span>
    </div>
  `,
})

export class GundamHostComponent implements OnInit {

  gundams: Gundam[];

  constructor(private gundamService: GundamService) {}

  ngOnInit(): void {
    this.gundamService.getGundams().then(gundams => this.gundams = gundams);
  }

}
