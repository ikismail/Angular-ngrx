import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import {
  LoadPersons,
  PersonActionTypes,
  PersonLoaded,
  isPersonLoading
} from "../actions/person.actions";
import { mergeMap, map } from "rxjs/operators";
import { PersonService } from "../../services/person.service";
import { AppState } from "../reducers";
import { Store } from "@ngrx/store";

@Injectable()
export class PersonEffects {
  @Effect()
  LoadAlbums$ = this.actions$.pipe(
    ofType<LoadPersons>(PersonActionTypes.LoadPersons),
    mergeMap(() => {
      this.store.dispatch(new isPersonLoading({ isLoading: true }));
      return this.personService.getAllPersons();
    }),
    map(response => {
      const PersonsDispatch = new PersonLoaded({ persons: response });
      this.store.dispatch(
        new isPersonLoading({
          isLoading: false
        })
      );
      return PersonsDispatch;
    })
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private personService: PersonService
  ) {}
}
