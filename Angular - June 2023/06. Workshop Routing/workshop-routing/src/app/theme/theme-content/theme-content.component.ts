import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-theme-content',
  templateUrl: './theme-content.component.html',
  styleUrls: ['./theme-content.component.css']
})
export class ThemeContentComponent implements OnInit {
  theme: Theme | undefined;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private userService: UserService) {

  }

  fetchTheme(): void {
    const id = this.activatedRoute.snapshot.params['themeId'];
    this.apiService.getTheme(id).subscribe(theme => {
      this.theme = theme;
    });
  }

  isLogged(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit() {
    this.fetchTheme();
  }
}
