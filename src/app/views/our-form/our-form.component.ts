import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Countries } from 'src/app/interfaces/countriesInterface';

@Component({
  selector: 'app-our-form',
  templateUrl: './our-form.component.html',
  styleUrls: ['./our-form.component.css']
})
export class OurFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }


  contactForm = this.fb.group(
    {
      firstName:["" ,[ Validators.required , Validators.minLength(3)]],
      lastName:["" , [Validators.required , Validators.minLength(3)]],
      email:["" , [Validators.required , Validators.email]],
      gender:["male" , [Validators.required]],
      isMarried: [false],
      country:["" , [Validators.required]]
    }
  )




  logContactFrom()
  {
    console.log(this.contactForm.controls);
  }

  onSubmit(x: any)
  {
    console.log(x);
  }

  get contactFormValues()
  {
    return this.contactForm.controls;
  }



  countriesArray: Countries[] =
  [
    {name: "Egypt"},
    {name: "UAE"},
    {name: "KSA"},
    {name: "Russia"},
    {name: "China"},
    {name: "India"},
    {name: "Japan"}
  ]










  ngOnInit(): void {
  }

}
