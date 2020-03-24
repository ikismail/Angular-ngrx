import { Action } from "@ngrx/store";
import { Person } from "../models/Person";

export enum PersonActionTypes {
  LoadPersons = "[Person] Load Persons",
  isPersonLoading = "[Person] fetching Person",
  PersonsLoaded = "[Person] Persons Loaded"
}

export class LoadPersons implements Action {
  readonly type = PersonActionTypes.LoadPersons;
}

// tslint:disable-next-line:class-name
export class isPersonLoading implements Action {
  readonly type = PersonActionTypes.isPersonLoading;
  constructor(
    public payload: {
      isLoading: boolean;
    }
  ) {}
}

export class PersonLoaded implements Action {
  readonly type = PersonActionTypes.PersonsLoaded;
  constructor(
    public payload: {
      persons: Person[];
    }
  ) {}
}

export type PersonActions = LoadPersons | PersonLoaded | isPersonLoading;
