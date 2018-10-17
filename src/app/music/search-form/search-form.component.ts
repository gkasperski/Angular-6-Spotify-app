import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
  ValidatorFn,
  ValidationErrors,
  AsyncValidatorFn,
  AbstractControl
} from "@angular/forms";
import {
  filter,
  distinctUntilChanged,
  debounceTime,
  withLatestFrom
} from "rxjs/operators";
import { Observable, empty, Observer } from "rxjs";

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
    const censor = (badword: string): ValidatorFn => (
      control: AbstractControl
    ): ValidationErrors | null => {
      const hasError = (control.value as string).includes("batman");
      return hasError
        ? {
            censor: {
              badword
            }
          }
        : null;
    };

    const asyncCensor = (badword: string): AsyncValidatorFn => (
      control: AbstractControl
    ): Observable<ValidationErrors | null> => {
      return Observable.create(
        (observer: Observer<ValidationErrors | null>) => {
          const hasError = (control.value as string).includes(badword);
          console.log(badword);
          const handler = setTimeout(() => {
            observer.next(
              hasError
                ? {
                    censor: {
                      badword
                    }
                  }
                : null
            );
            observer.complete();
          }, 2000);
          // onUnsubscribe
          return () => {
            clearTimeout(handler);
          };
        }
      );
    };

    this.queryForm = this.builder.group({
      query: [
        "",
        [Validators.required, Validators.minLength(3)],
        [asyncCensor("batman")]
      ]
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
    const status$ = this.queryForm.get("query").statusChanges;
    const valid$ = status$.pipe(filter(status => status === "VALID"));

    const search$ = valid$.pipe(withLatestFrom(value$, (_, value) => value));

    search$.subscribe(query => {
      this.search(query);
    });

    value$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      filter(query => query.length >= 3)
    );
  }

  ngOnInit() {}

  search(query: string) {
    this.queryChange.emit(query);
  }
}
