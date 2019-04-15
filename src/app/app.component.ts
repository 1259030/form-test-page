import { Component, ViewChild, HostListener, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ControlContainer } from '@angular/forms';
import { FormsubmitService } from './formsubmit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  UserForm: FormGroup;
  UserImageFile: File;
  ImageUrl: any;
  Username: string;
  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();
  @ViewChild('UserImage') UserImage;
  @HostListener('input', ['$event']) onInputChange($event) {
    this.Username = $event.target.value[0].toUpperCase();
    this.ngModelChange.emit(this.Username);
  }
  message: string;
  constructor( 
    private fb: FormBuilder,
    private fService: FormsubmitService
    ) {
    this.UserForm = this.fb.group({
      'FullName': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]+|\s$')])],
      'Birthday': ['',],
      'Email': ['', Validators.compose([Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      'Mobile': ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]+')])],
      'Description': ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(100)])],
      'UserImage': [null]
    });
    
    console.log(this.UserForm);
    if(this.UserForm.value.FullName) {
      this.UserForm.value.FullName.charAt(0).toUpperCase;
    }
  }
  OnSubmit(value) {
      const image = this.UserImage.nativeElement;
      if(image.files && image.files[0]) {
        this.UserImageFile = image.files[0];
      }

      const imageFile: File = this.UserImageFile;
      console.log(imageFile);
      const formData: FormData = new FormData();
      formData.append('FullName', value.FullName);
      formData.append('Birthday', value.Birthday);
      formData.append('Email', value.Email);
      formData.append('Mobile', value.Mobile);
      formData.append('Description', value.Description);
      formData.append('Image', value.Image);

      this.fService.submitData(formData).subscribe(
        data => {
          console.log(data);
        }
      )
  }

  public CreateUser(value) {
    console.log(JSON.stringify(value));
    const Image = this.UserImage.nativeElement;
    if (Image.files && Image.files[0]) {
      this.UserImageFile = Image.files[0];
    }
    const ImageFile: File = this.UserImageFile;
    console.log(ImageFile);
  }
  
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.UserImageFile = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.ImageUrl = reader.result; 
    }
  }

  cancelForm() {
    this.UserForm.reset();
  }
}
