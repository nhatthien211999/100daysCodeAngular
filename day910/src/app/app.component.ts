import { ToggleComponent } from './toggle/toggle.component';
import { Component, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day9&10';
  //Cách tương tác giữa parent component và view của nó
  name = "Thiện"
  isCheck = true;
  showLast = false;
  @ViewChildren(ToggleComponent) toggleComp: QueryList<ToggleComponent>;
  // Có 2  cách truyền 
  //1. truyền vào 1 chuỗi string đk: phải giống #... template variable
  //2. Truyền vào component
  @ViewChild('nameInput', {static: true}) nameInput: ElementRef<HTMLInputElement>;
  @ViewChild('nameButton', {static: true}) nameButton: ElementRef<HTMLButtonElement>;
  //Input, button thuộc về ElementRef
  ngOnInit() {
    setTimeout(()=>{
      this.nameInput.nativeElement.focus() //focus() cho con trỏ vào ô input
    }, 3000
    )
    console.log('onInit ', this.nameButton);
    // console.log('onInit ', this.toggleComp);
  }
  // kq: undefined vì tại thời điểm onInit cái component đc ... nên Angular chưa resolve được ToggleComponent
  // AfterViewInit thì nó resolve được 
  // để giải quyết vấn đề trên ViewChild nó hỗ trợ thêm 1 cái property static nếu để mặc định là false
  //Chỉ sử dụng static True khi cái mình tham chiếu đến không năm trong STRUCTURE DIRECTIVE
  ngAfterViewInit(){
    // console.log(this.toggleComp);
    console.log(this.nameButton);
    this.toggleComp.changes.subscribe(console.log)
  }
  //Sau khi view đc init vào 
  //Hàm của view
   
}
