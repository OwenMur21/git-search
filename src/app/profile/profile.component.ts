import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';
import {ProfileService} from '../profiles/profile.service';
import {Repo} from '../repo';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {
user: User;

  constructor(private profileService: ProfileService, public repoService: ProfileService) {
    this.user = this.profileService.user;

  }

  ngOnInit() {


}

}
