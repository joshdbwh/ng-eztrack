import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule, NgClass],
  template: `
    <div class="button-container">
      <button mat-button class="button" [ngClass]="type" disabled>
        <ng-content />
      </button>
    </div>
  `,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() type: 'borderless' | 'bezeled-grey' | 'bezeled' | 'filled' =
    'borderless';
  @Input() isDisabled = false;
}
