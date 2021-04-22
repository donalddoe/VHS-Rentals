import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-record',
  templateUrl: './delete-record.component.html',
  styleUrls: ['./delete-record.component.scss']
})
export class DeleteRecordComponent implements OnInit {
  public dialogRef:MatDialogRef<DeleteRecordComponent>

  constructor() { }

  ngOnInit(): void {
  }


}
