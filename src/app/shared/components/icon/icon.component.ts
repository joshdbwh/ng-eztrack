import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [NgClass, MatIconModule],
  template: `
    <div style="display: flex">
      <mat-icon
        fontSet="material-symbols-outlined"
        [ngClass]="['icon-size-' + size, isButton ? 'icon-button' : 'icon']"
        >{{ icon }}</mat-icon
      >
    </div>
  `,
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input({ required: true }) icon!: string;
  @Input() isButton?: boolean = false;
  @Input() size: 'small' | 'medium' | 'large' = 'small';
}
