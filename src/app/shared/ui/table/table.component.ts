import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  template: ``,
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {}
