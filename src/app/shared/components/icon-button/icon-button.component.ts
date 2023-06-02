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
  imports: [MatButtonModule, IconComponent],
  template: `
    <a mat-icon-button (click)="onClick()">
      <app-icon [icon]="icon" size="medium" />
    </a>
  `,
  styleUrls: ['./icon-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconButtonComponent {
  @Input({ required: true }) icon = '';
  @Output() event = new EventEmitter<void>();

  onClick() {
    this.event.emit();
  }
}
