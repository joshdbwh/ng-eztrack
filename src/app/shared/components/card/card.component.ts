import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, IconComponent],
  template: `
    <mat-card class="card mdc-mat-elevation-z8">
      <mat-card-header *ngIf="title">
        <mat-card-title>
          <app-icon *ngIf="icon" [icon]="icon" size="medium"></app-icon>
          {{ title }}
        </mat-card-title>
      </mat-card-header>
      <mat-card-subtitle *ngIf="subtitle">{{ subtitle }}</mat-card-subtitle>
      <mat-card-content>
        <div class="card-container">
          <ng-content></ng-content>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() icon?: string;
}
