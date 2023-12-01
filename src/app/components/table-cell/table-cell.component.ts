import { Component } from '@angular/core';

@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.scss']
})
export class TableCellComponent {
  textContent: string = 'CELL';
  className: string = 'table-cell';

  tempCell() {
    const tempCell = document.createElement('div');
    tempCell.classList.add(this.className);
    tempCell.textContent = this.textContent;
    return tempCell;
  }
}

export const newCell = new TableCellComponent();
