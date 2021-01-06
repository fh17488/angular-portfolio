import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAcademia() {
    const dialogRef = this.dialog.open(DialogContentForAcademia);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openExhibitions() {
    const dialogRef = this.dialog.open(DialogContentForExhibitions);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openProjects() {
    const dialogRef = this.dialog.open(DialogContentForProjects);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openPublications() {
    const dialogRef = this.dialog.open(DialogContentForPublications);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


@Component({
  selector: 'dialog-content-for-academia',
  templateUrl: './dialog-content-for-academia.html',
  styleUrls: ['./dialog.css']
})
export class DialogContentForAcademia {}

@Component({
  selector: 'dialog-content-for-exhibitions',
  templateUrl: './dialog-content-for-exhibitions.html',
  styleUrls: ['./dialog.css']
})
export class DialogContentForExhibitions {}

@Component({
  selector: 'dialog-content-for-projects',
  templateUrl: './dialog-content-for-projects.html',
  styleUrls: ['./dialog.css']
})
export class DialogContentForProjects {}

@Component({
  selector: 'dialog-content-for-publications',
  templateUrl: './dialog-content-for-publications.html',
  styleUrls: ['./dialog.css']
})
export class DialogContentForPublications {}