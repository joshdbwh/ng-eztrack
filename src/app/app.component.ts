import { routes } from './app.routes';
import { NavigationService } from './core/services/navigation/navigation.service';
import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PlatformBarComponent } from './shared/layouts/platform-bar/platform-bar.component';
import { LinkComponent } from './features/link/link.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavListComponent } from './shared/components/nav-list/nav-list.component';
import { NavItem, NavItems } from './core/interfaces/navItem.interface';
import { Observable } from 'rxjs';
import { IconComponent } from './shared/components/icon/icon.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LinkComponent,
    RouterOutlet,
    IconComponent,
    PlatformBarComponent,
    NavListComponent,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-eztrack';
  routes?: NavItems | undefined;
  currentParentRoute$: Observable<NavItem> =
    this.navService.currentParentRoute$;
  childrenRoutes$: Observable<NavItems> =
    this.navService.currentChildrenRoutes$;

  currentChildRoute$: Observable<string> = this.navService.currentRoute$;

  constructor(private navService: NavigationService) {}

  ngOnInit() {
    this.routes = this.navService.getParentRoutes();
  }
}
