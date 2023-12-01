import { Component } from '@angular/core';
import { newCell } from '../table-cell/table-cell.component';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent {
  className: string = 'table-row';

  tempRow(): HTMLDivElement {
    const tempRow = document.createElement('div');
    tempRow.classList.add(this.className)
    return tempRow;
  }
}

export const newRow = new TableRowComponent();