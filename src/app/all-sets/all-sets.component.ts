import { Component, OnInit } from '@angular/core';
import {MyService} from "../shared/my.service";
import {Set} from "../shared/set";
import {Figure} from "../shared/figure";


@Component({
  selector: 'app-all-sets',
  templateUrl: './all-sets.component.html',
  styleUrls: ['./all-sets.component.css']
})
export class AllSetsComponent implements OnInit {
  sets!: Set[];

  constructor(private bs: MyService) { }

  ngOnInit(): void {
    this.readAll();
  }
  readAll(): void {
    this.bs.getAll().subscribe(
      (
        response: Figure[]) => {
        this.sets = response;
        console.log(this.sets);
        return this.sets;
      },
      error => console.log(error)
    );
  }

}
