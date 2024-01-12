import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

/**
 * @title Dialog Animations
 */
@Component({
  selector: 'app-dialog-animations-example',
  styleUrls: ['dialog-animations.component.css'],
  templateUrl: 'dialog-animations.component.html',
  standalone: true,
  imports: [MatButtonModule],
})
export class DialogAnimationsExampleComponent {
  weatherData$: any;
  dialogRef: any;
  constructor(public dialog: MatDialog) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

@Component({
  selector: 'app-dialog-animations-example-dialog',
  templateUrl: 'dialog-animations.component.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
})
export class DialogAnimationsExampleDialogComponent {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialogComponent>) { }
}