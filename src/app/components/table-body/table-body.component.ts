import { Component } from '@angular/core';
import { newRow } from '../table-row/table-row.component';
import { newCell } from '../table-cell/table-cell.component';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss']
})
export class TableBodyComponent {

  selectValue: number;

  createElement() {
    if (!this.selectValue || this.selectValue === 0) {
      this.selectValue = 1;
    }
    for (let i = 1; i <= this.selectValue; i++) {
      if (document.querySelector('.table-body__container')!.lastChild?.childNodes?.length === 3) {
        this.createRow();
        break;
      } else {
        document.querySelector('.table-body__container')!.lastChild?.appendChild(newCell.tempCell());
      }
    }
  }

  createRow() {
    document.querySelector('.table-body__container')!.append(newRow.tempRow());
  }

  createCell() {
    document.querySelector('.table-body__container')!.lastChild?.appendChild(newCell.tempCell());
  }
}














// createRow() {
//   document.querySelector('.table-body__container')!.append(newRow.tempRow());
//   // if (!this.selectValue || this.selectValue === 0) {
//   //   this.selectValue = 1;
//   // }
//   // for (let i = 1; i <= this.selectValue; i++) {
//   //     document.querySelector('.table-body__container')?.appendChild(newRow.tempRow());
//   // }
// }