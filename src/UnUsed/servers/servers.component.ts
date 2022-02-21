// import { Component} from '@angular/core';

// @Component({
//   selector: 'app-servers',
//   templateUrl: './servers.component.html',
//   styleUrls: ['./servers.component.css']
// })
// export class ServersComponent {
//   showSecret=false;
//   log = [];

//   onToggleDetails(){
//     this.showSecret = !this.showSecret;
//     // this.log.push(this.log.length + 1);
//     this.log.push(new Date());
//   }
//     }
 //------------------------------------------------------------------------>  
//   inputText:string='';
//   displayText:string='';
//   storeValue=[];
//   i:number;
//   showDetails:boolean=false;

//   constructor(){
//   }

//   getColor(){
//     return this.storeValue.length >= 5 ? 'blue': 'transparent';
//   }

//   getDetails(){
//     this.showDetails =! this.showDetails;
//     this.displayText=this.inputText;
//     this.storeValue.push(this.inputText);
    
//   }

//   ngOnInit() {
      
//   }
// }

  //------------------------------------------------------------------------>
  // allowNewUser=true;
  //   InnerStatus="Not Allowed to create!!";
  //   ServerName='';
  //   showMsg:boolean=false;
  //   servers=['server1','server2','server3'];
  
  //   constructor() {
  //     setTimeout(() => {
  //       this.allowNewUser=false;
  //     }, 3000);
  //    }
  
  //   ngOnInit() {
  //   }
  
  //   showInputValue(event:Event){
  
  //  this.ServerName=(<HTMLInputElement>event.target).value;
  //  }
  
  //   showInnerStatus(){
  //     this.showMsg=true;
  //     this.servers.push(this.ServerName);
  //     this.InnerStatus="You Are Allowed Now!!server name is "+this.ServerName;
  //   }
  
  // }



  // 2} ------------------------------------------------------------------>
  // username="";
  // resetButton:boolean=true;

  // inputValueEntered(event:any){
    
  //   if(event!=""){
  //     this.resetButton=false;
  //   }
  // }

  // resetTheUserName(){
  //   this.username="";
  // }

  // constructor(){
  // }
  // ngOnInit() {
    // }
//  }
// 1} ----------------------------------------------------------------------->
//   allowNewUser=true;
//   InnerStatus="Not Allowed to create!!";
//   ServerName='';

//   constructor() {
//     setTimeout(() => {
//       this.allowNewUser=false;
//     }, 3000);
//    }

  // ngOnInit() {
  // }

//   showInputValue(event:Event){

//  this.ServerName=(<HTMLInputElement>event.target).value;
//  }

//   showInnerStatus(){
//     this.InnerStatus="You Are Allowed Now!!server name is "+this.ServerName;
//   }

//}
//---------------------------------------------------------------->