import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  showAlert(){
    alert('You Are Succesfully Registered')
    }

  constructor() { }

  
    

  ngOnInit(): void {
  }

}
