import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PlatformBarComponent } from './shared/layouts/platform-bar/platform-bar.component';
import { PanelComponent } from './shared/layouts/panel/panel.component';
import { LinkComponent } from './features/link/link.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LinkComponent,
    RouterOutlet,
    PanelComponent,
    PlatformBarComponent,
    MatSidenavModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-eztrack';
}
