import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItems } from 'src/app/shared/utils/navItem.interface';
import { IconComponent } from '../icon/icon.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-nav-list',
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive, MatListModule, IconComponent],
  template: `
    <mat-nav-list class="nav-list">
      <a
        mat-list-item
        *ngFor="let item of navItems"
        class="link-item"
        [routerLink]="item.path"
        routerLinkActive="link__active"
        (click)="navEvent.emit()"
      >
        <span class="link-content">
          <app-icon [icon]="item.icon" size="medium" [isButton]="false" />
          <span class="link-title">{{ item.title }}</span>
        </span>
      </a>
    </mat-nav-list>
  `,
  styleUrls: ['./nav-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavListComponent {
  @Input({ required: true }) navItems?: NavItems | null;
  @Output() navEvent = new EventEmitter<any>();
}
