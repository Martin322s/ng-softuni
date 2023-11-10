import { Component, OnInit } from '@angular/core';
import { FactsService } from '../facts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fact-details',
  templateUrl: './fact-details.component.html',
  styleUrls: ['./fact-details.component.css']
})
export class FactDetailsComponent implements OnInit {
  fact: any;
  itemId: string | undefined;

  constructor(private factService: FactsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.itemId = params['factId'];
    });

    this.factService.getOne(this.itemId).subscribe((data) => {
      this.fact = data;
    });
  }
}
