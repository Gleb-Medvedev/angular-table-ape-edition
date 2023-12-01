import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableBodyComponent } from './components/table-body/table-body.component';
import { TableRowComponent } from './components/table-row/table-row.component';
import { TableCellComponent } from './components/table-cell/table-cell.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    TableBodyComponent,
    TableRowComponent,
    TableCellComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
