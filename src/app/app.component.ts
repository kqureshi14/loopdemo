import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'loopdemo';

   users  = ['Kaleem','Sami', 'Noman', 'John','Smith'];
   
   userDetails = [
    {name:'Kaleem',email:'kaleem@gmail.com',phone:'92334343345'},
    {name:'Sami',email:'sami@gmail.com',phone:'9233343439'},
    {name:'Noman',email:'noman@gmail.com',phone:'923000343434'},
    {name:'John',email:'john@gmail.com',phone:'16134343434'},
    {name:'Smith',email:'smith@gmail.com',phone:'16223232433'},
   ]

}
