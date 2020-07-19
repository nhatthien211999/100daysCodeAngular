import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent implements OnInit, OnChanges {

  @Input() backgroundColor: string;
  @Input() progressColor: string;
  @Input() progress = 30;
  constructor() 
  { 
    // console.log(
    //   "backgroundColor: " + this.backgroundColor,
    //   "progressColor: " + this.progressColor,
    //   "progress: " + this.progress

    // )
  }
  // Liên quan đến js ts không liên quan đến Angular
  //Liên quan đến class, 1 class phải có 1 constructor
  // constructor này là 1 function luôn luôn đc chạy khi components này đc invoke
  //Ví dụ trên cho ta thấy khi gọi 2 lần ProgressBarComponent thì constructor đc gọi 2 lần
  //trong constructor không nhận giá trị input từ bên ngoài truyền vào
  ngOnInit(): void {
        console.log("OnInit" +
      "backgroundColor: " + this.backgroundColor,
      "progressColor: " + this.progressColor,
      "progress: " + this.progress

    )
  }
//Nhận giá trị từ bên ngoài truyền vào
//Chỉ chạy 1 lần
  ngOnChanges(changes: SimpleChanges){
    console.log("OnChang" +
    "backgroundColor: " + this.backgroundColor,
    "progressColor: " + this.progressColor,
    "progress: " + this.progress

  )
  }
//Nhận giá trị từ bên ngoài truyền vào
//Chỉ chạy khi có giá trị thay đổi, nếu không thayddooir sẽ không chạy
//chạy trước ngOnInit
//luôn luôn chạy khi có giá trị thay đổi
// Sử dụng để nhận biết sự thay đổi của input
//làm validate
}
