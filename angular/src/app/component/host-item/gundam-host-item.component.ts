import { Component, Input, OnInit } from '@angular/core';
import { Gundam } from './../../model/gundam';

@Component({
    selector: 'my-host-item',
    templateUrl: './html/gundam-host-item.component.html',
    styleUrls: ['./html/gundam-host-item.component.scss'],
})

export class GundamHostItemComponent implements OnInit {
    @Input() gundam: Gundam;

    ngOnInit(): void {
      if (this.gundam.describe && this.gundam.describe.length > 65) {
        this.gundam.describe = this.gundam.describe.substring(0, 60) + '...';
      }
    }
}
