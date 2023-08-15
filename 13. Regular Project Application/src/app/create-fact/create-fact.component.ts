import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FactsService } from '../facts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-fact',
  templateUrl: './create-fact.component.html',
  styleUrls: ['./create-fact.component.css']
})
export class CreateFactComponent {
  constructor(private factService: FactsService, private router: Router) {}

  submitHandler(createForm: NgForm) {
    if (Object.values(createForm.value).some(x => x === '')) {
      alert('All fields must be filled correctly!');
    } else {
      this.factService.createOne(createForm.value).subscribe({
        next: () => {
          this.router.navigate(['/facts']);
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }
}
