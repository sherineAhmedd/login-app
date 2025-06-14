import { routes } from './../../app.routes';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../Core/services/auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   //create Group
   loginForm: FormGroup = new FormGroup( {
    //start create controls
    username : new FormControl(),
    password : new FormControl()
   } ); //1)we created empty object {  } then to get controls
  constructor(private authService: AuthService , private router:Router){}
  
  loginSubmit(): void {
    const payload = this.loginForm.getRawValue();
  console.log('Form Data Sent:', payload); 

  if (this.loginForm.valid) {
    this.authService.login(payload).subscribe({
      next: (res) => {
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('user', JSON.stringify(res));
        console.log('Login success:', res);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Login failed:', err);
        alert(err.error?.message || 'Invalid username or password');
      }
    });
  }
}

  
}
