import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import {
  FormGroup,
  AbstractControl,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
  ValidatorFn,
  ValidationErrors
} from "@angular/forms";
import { filter, distinctUntilChanged, debounceTime } from "rxjs/operators";
import { AbstractControl } from '@angular/forms';

@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.scss"]
})
export class SearchFormComponent implements OnInit {
  queryForm: FormGroup;

  @Output()
  queryChange = new EventEmitter();

  constructor(private builder: FormBuilder) {

    const censor = (badword: string): ValidatorFn => (control: AbstractControl): ValidationErrors | null => {
      const hasError = (control.value as string).includes('batman');
      return hasError ? {
        censor: {
          badword
        }
      } : null;
    } 

    this.queryForm = this.builder.group({
      query: ["", [Validators.required, Validators.minLength(3), censor('batman')]]
      // options: new FormGroup({
      //   type: new FormControl('new type'),
      //   markets: new FormArray([
      //     new FormControl('pl'),
      //     new FormControl('gb')
      //   ])
      // })
    });
    console.log(this.queryForm);
    const value$ = this.queryForm.get("query").valueChanges;
    value$
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        filter(query => query.length >= 3)
      )
      .subscribe(query => {
        this.search(query);
      });
  }

  ngOnInit() {}

  search(query: string) {
    this.queryChange.emit(query);
  }
}
