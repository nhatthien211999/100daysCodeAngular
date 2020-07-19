import { Author } from './../models/author';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core'; 
// EventEmitter ???? 

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
  @Input() author: Author;
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();
  @Output() changeBG = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }

}
