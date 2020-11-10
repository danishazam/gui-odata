import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'gui-odata';
  columnDefs = [
    {headerName: 'Id', field: 'Id', sortable: true, filter: true},
    {headerName: 'Section', field: 'Section', sortable: true, filter: true},
    {headerName: 'Key', field: 'Key', sortable: true, filter: true},
    {headerName: 'Value', field: 'Value', sortable: true, filter: true},
    {headerName: 'UpdateBy', field: 'UpdateBy', sortable: true, filter: true},
    {headerName: 'UpdateDate', field: 'UpdateDate', sortable: true, filter: true}
    
];

  rowData = [];

  ngOnInit() {
    fetch("https://localhost:44368/Settings")
      .then(result => result.json())
      .then(rowData => this.rowData = rowData.value);      
  }
}
