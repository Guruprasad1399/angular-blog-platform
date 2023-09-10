import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  user = {
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    bio: 'A passionate blogger.'
  };

  editMode = false;

  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  saveProfile(): void {
    // Call a service to save the profile updates
    this.toggleEditMode();
  }
}
