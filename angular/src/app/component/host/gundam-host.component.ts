import {
  Component,
  OnInit
} from '@angular/core';
import { GundamService } from '../../service/gundam.service';
import { Gundam } from '../../model/gundam';

@Component({
  templateUrl: './html/gundam-host.component.html',
})

export class GundamHostComponent implements OnInit {

  gundams: Gundam[];

  constructor(private gundamService: GundamService) {}

  ngOnInit(): void {
    this.gundamService.getGundams().then(gundams => this.gundams = gundams.slice(0, 3)); // 让主页只显示3个
  }

}
