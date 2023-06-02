import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [NgClass, MatIconModule],
  template: `
    <mat-icon
      fontSet="material-symbols-outlined"
      [ngClass]="'icon-size-' + size"
      >{{ icon }}</mat-icon
    >
  `,
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input({ required: true }) icon!: string;
  @Input() size: 'small' | 'medium' | 'large' = 'small';
}
