import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { filter, distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  queryForm: FormGroup;

  constructor(private builder: FormBuilder) {
    this.queryForm = this.builder.group({
      query: ['witcher 3'],
      // options: new FormGroup({
      //   type: new FormControl('new type'),
      //   markets: new FormArray([
      //     new FormControl('pl'),
      //     new FormControl('gb')
      //   ])
      // })
    });
    console.log(this.queryForm);
    const value$ = this.queryForm.get('query').valueChanges;
    value$
    .pipe(
      filter(query => query.length >= 3),
      distinctUntilChanged(),
      debounceTime(400)
    )
    .subscribe(query => {
      this.search(query);
    })
   }


  ngOnInit() {

  }

  search(query: string) {
    console.log(query);
  }
}
