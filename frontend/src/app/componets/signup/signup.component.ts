import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { UserServicesService } from 'src/app/services/user-services.service';
import { Users } from 'src/app/models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm !: FormGroup;

  constructor(private fb: FormBuilder, private userServices: UserServicesService) { }

  ngOnInit(): void {

    this.signUpForm = this.fb.group({
      name:['', Validators.required],
      email:['', Validators.required],
      phone:['', Validators.required],
      password:['', Validators.required]
    })
  }

  signup(){

    const formData = this.signUpForm.value;

    if(this.signUpForm.valid){
      this.userServices.signUp(formData)
      .subscribe((res)=>{
        this.signUpForm.reset()
        console.log(formData);
        alert('sucessfully created')
      })
    }
    
  }

}
