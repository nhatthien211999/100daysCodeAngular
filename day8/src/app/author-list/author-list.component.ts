import { Author,authors } from './../models/author';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors = authors; //list
  currentAuthor = authors[0];

  constructor() { }

  ngOnInit(): void { }

  onSelected(selectAuthor: Author){
    this.currentAuthor = selectAuthor;
  }
  onDeleted(idDeleteAuthor: number){
    this.authors = this.authors.filter(author =>{
      return author.id != idDeleteAuthor;
    })

    if(this.currentAuthor.id === idDeleteAuthor){

      this.currentAuthor = this.authors[0]
    }
  }
  onChanged(idnameAuthor: number){
   this.authors = this.authors.filter(author =>{
    if(idnameAuthor == author.id){ 
      author.firstName = author.firstName +" "+author.lastName;
    }
    return author.firstName; 
   })
  }

}
