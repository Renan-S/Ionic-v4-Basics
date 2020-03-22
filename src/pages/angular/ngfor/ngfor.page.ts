import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.page.html',
  styleUrls: ['./ngfor.page.scss'],
})
export class NgforPage implements OnInit {
  public array: any[] = [1, 2, 3, 4, 5]
  public objArray: any[] = [
    {
    name: "Yourname",
    surName: "Surname",
    grades: [1, 2, 3, 10, 5]
    },
    {
      name: "Yourname",
      surName: "Surname",
      grades: [1, 2, 3, 6, 5]
    },
    {
      name: "Yourname",
      surName: "Surname",
      grades: [1, 2, 3, 9, 5]
    },
    {
      name: "Yourname",
      surName: "Surname",
      grades: [1, 2, 3, 32, 5]
    },
    {
      name: "Yourname",
      surName: "Surname",
      grades: [1, 2, 3, 100, 5]
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
