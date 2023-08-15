import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { FactsService } from '../facts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allFacts: any;

  constructor(private factService: FactsService) {

  }

  ngOnInit() {
    this.factService.getAll().subscribe(data => {
      this.allFacts = data;
    });
  }
}
