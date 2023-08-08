import { Component } from '@angular/core';
import { MatDialog ,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(Dialog, {
      width: '1000px',
      panelClass: 'custom-dialog-container',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}


@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: './dialog-animations-example-dialog.html',
})
export class Dialog {
  constructor(public dialogRef: MatDialogRef<Dialog>) {}
}
