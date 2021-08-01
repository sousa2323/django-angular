import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'members-frontend';

  selected_member = {id: 0, name: '', surname: '', phone: ''};
  
  members = [
    {name: 'Member01', id: 1, surname: "Ciclano", phone: '', photo: 'http://www.minhaapp.com/photo1'},
    {name: 'Member02', id: 2, surname: "Ciclano2", phone: '',  photo: 'http://www.minhaapp.com/photo2'},
    {name: 'Member03', id: 3, surname: "Ciclano3", phone: '', photo: 'http://www.minhaapp.com/photo3'},
  ];

  constructor(private api:ApiService, private router: Router) { 
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
    this.router.navigate(['member-detail', member.id]);
  };
}
