import { Component, OnInit   } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms'
import { AbstractControl,ValidatorFn} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[`
  input.ng-invalid{border-left:5px solid red;}
  input.ng-valid{border-left:5px solid green;}
  `]
})
export class AppComponent implements OnInit {
 
userForm: FormGroup;  

constructor(private _formBuilder: FormBuilder){}

ngOnInit(){

  this.userForm=this._formBuilder.group({
    name:['abc',[Validators.required,Validators.minLength(4),Validators.maxLength(10)], validatePatternFactory],
    email:[],
    cities: [{name:"hyderabad"},
    {name:"kolkata"},
    {name:"noida"}] ,
    password:['null',Validators.pattern('^[1-9][0-9]{4}$')]


  })

  function validatePatternFactory() : ValidatorFn {
  return (c: AbstractControl) => {
    
    let isValid = c.value === '^[a-zA-Z]*$';

    if(isValid) {
        return null;
    } else {
        return {
            pattern: {
                valid: false
            }
        };
  }
}

}

/*userForm= new FormGroup({
  name:new FormControl("abc",[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
  email:new FormControl("abc@gmail.com"),
  cities:new FormControl( [{name:"hyderabad"},
    {name:"kolkata"},
    {name:"noida"}]), 
    password:new FormControl('null',Validators.pattern('^[1-9][0-9]{4}$'))
});*/
}
onSubmit(){
  console.log(this.userForm.value)
}


}