import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combo-display',
  templateUrl: './combo-display.component.html',
  styleUrls: ['./combo-display.component.css']
})
export class ComboDisplayComponent implements OnInit {
  dataArray: string[] = ['Lotus', 'Sunflower', 'Tulip', 'Marigold'];
  selectedItem: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
