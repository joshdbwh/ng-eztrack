import { NavigationService } from './shared/utils/navigation/navigation.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PlatformBarComponent } from './shared/layouts/platform-bar/platform-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavListComponent } from './shared/ui/nav-list/nav-list.component';
import { NavItem, NavItems } from './shared/utils/navItem.interface';
import { Observable } from 'rxjs/internal/Observable';
import { IconComponent } from './shared/ui/icon/icon.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
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
