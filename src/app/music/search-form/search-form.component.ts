import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, AbstractControl, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { filter, distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  queryForm: FormGroup;

  @Output() queryChange = new EventEmitter();

  constructor(private builder: FormBuilder) {
    this.queryForm = this.builder.group({
      query: [],
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
      debounceTime(400),
      distinctUntilChanged(),
      filter(query => query.length >= 3),
    )
    .subscribe(query => {
      this.search(query);
    })
   }


  ngOnInit() {

  }

  search(query: string) {
    this.queryChange.emit(query);
  }
}
