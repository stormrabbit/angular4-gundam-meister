import { Component, Input } from '@angular/core';
import { Gundam } from './../../model/gundam';

@Component({
    selector: 'my-host-item',
    templateUrl: './html/gundam-host-item.component.html'
})

export class GundamHostItemComponent {
    @Input() gundam: Gundam;
}
