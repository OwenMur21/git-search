import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';
import {ProfileService} from '../profiles/profile.service';
import {Repos} from '../repos';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {
  public username = 'owenmur21';
user: User;
repos: Repos;

  constructor(private profileService: ProfileService, public repoService: ProfileService) {}

  ngOnInit() {
    this.profileService.getProfileInfo(this.username);
    this.user = this.profileService.user;
    this.repoService.getRepoInfo(this.username);
    this.repos = this.repoService.repos;
}

}
