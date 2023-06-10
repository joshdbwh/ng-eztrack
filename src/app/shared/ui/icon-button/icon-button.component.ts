import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [NgClass, MatButtonModule, IconComponent],
  template: `
    <a mat-icon-button (click)="onClick()" [ngClass]="'icon-button-' + size">
      <app-icon [icon]="icon" [size]="size" [isButton]="true" />
    </a>
  `,
  styleUrls: ['./icon-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconButtonComponent {
  @Input({ required: true }) icon = '';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Output() event = new EventEmitter<void>();

  onClick() {
    this.event.emit();
  }
}
