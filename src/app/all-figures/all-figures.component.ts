import { Component, OnInit } from '@angular/core';
import {MyService} from "../shared/my.service";
import {Figure} from "../shared/figure";

@Component({
  selector: 'app-all-figures',
  templateUrl: './all-figures.component.html',
  styleUrls: ['./all-figures.component.css']
})
export class AllFiguresComponent implements OnInit {
figures!: Figure[];

  constructor(private bs: MyService) { }

  ngOnInit(): void {
    this.readAll();
  }

  readAll(): void {
    this.bs.getAll().subscribe(
      (
        response: Figure[]) => {
        this.figures = response;
        console.log(this.figures);
        return this.figures;
      },
      error => console.log(error)
      );
  }
}
