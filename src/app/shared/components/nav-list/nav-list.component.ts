import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItems } from 'src/app/core/interfaces/navItem.interface';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-nav-list',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatListModule, IconComponent],
  template: `
    <mat-nav-list>
      <a
        mat-list-item
        *ngFor="let item of navItems"
        [routerLink]="item.path"
        routerLinkActive="link__active"
        [activated]="item.isActive"
      >
        <span class="link-content">
          <app-icon [icon]="item.icon" size="medium" />
          <span class="link-title">{{ item.title }}</span>
        </span>
      </a>
    </mat-nav-list>
  `,
  styleUrls: ['./nav-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavListComponent {
  @Input({ required: true }) navItems!: NavItems;
}
