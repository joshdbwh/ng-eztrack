import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-platform-bar',
  standalone: true,
  imports: [MatToolbarModule],
  template: ` <mat-toolbar> </mat-toolbar> `,
  styleUrls: ['./platform-bar.component.scss'],
})
export class PlatformBarComponent {}
