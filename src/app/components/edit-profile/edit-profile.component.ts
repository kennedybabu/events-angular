import { Component, Inject, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UpdateProfileService } from 'src/app/services/profile/update-profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {

  userObject!: any
  profileAvatar!: any 
  profileBgImg!: any

  constructor(
    public dialogRef: MatDialogRef<EditProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private updateProfileService: UpdateProfileService
    ){
      this.userObject = data.user 
      console.log(this.userObject)
    }

  

  closeDialog(){
    this.dialogRef.close()
  }


  editForm = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    bio: new FormControl('', Validators.required)
  })


  onAvatarSelect(event: any){
    this.profileAvatar = event.target.files[0]
  }

  onProfileBgSelect(event: any) {
    this.profileBgImg = event.target.files[0]
  }

  onFormSubmit(form: any){
    this.updateProfileService.updateEvent(form.value, this.profileAvatar, this.profileBgImg, this.userObject.id).subscribe((res) => {
      console.log(res)
    })
  }


}
