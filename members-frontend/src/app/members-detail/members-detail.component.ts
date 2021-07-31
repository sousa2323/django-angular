import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css']
})
export class MembersDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    private api: ApiService,
    private router: Router) { }
  
  selected_member = { name: '', surname: '', id: '', phone: ''};
  selected_id;

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id') || '{}');
      this.selected_id = id;
      this.loadMember(id);
    });
  }

  loadMember(id) {
    this.api.getMember(id).subscribe(
      data => {
        console.log(data);
        this.selected_member = data;
      },
      error => {
        console.log('Aconteceu um erro', error.message);
      }
    );
  };

  update(){
    this.api.updateMember(this.selected_member).subscribe(
      data => {
        this.selected_member = data;
      },
      error => {
        console.log('Aconteceu um erro', error.message);
      }
    );
  };

  newMember(){
    this.router.navigate(['new-member']);
  }
}
