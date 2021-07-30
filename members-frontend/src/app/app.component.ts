import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'members-frontend';

  selected_member = {id: 0, name: '', surname: ''};
  
  members = [
    {name: 'Member01', id: 1, surname: "Ciclano", photo: 'http://www.minhaapp.com/photo1'},
    {name: 'Member02', id: 2, surname: "Ciclano2", photo: 'http://www.minhaapp.com/photo2'},
    {name: 'Member03', id: 3, surname: "Ciclano3", photo: 'http://www.minhaapp.com/photo3'},
  ];

  constructor(private api:ApiService) { 
    this.getMembers();
  }
  getMembers = () => {
    this.api.getAllMembers().subscribe(
      data => {
        this.members = data
      },
      error => {
        console.log('Aconteceu um erro', error.message);
      }
    );
  };

  memberClicked = (member) => {
    this.api.getMember(member.id).subscribe(
      data => {
        console.log(data)
        this.selected_member = data
      },
      error => {
        console.log('Error');
      }
    );
  };
}
