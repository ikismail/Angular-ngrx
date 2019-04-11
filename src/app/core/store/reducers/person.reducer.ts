import {
  EntityState,
  EntityAdapter,
  createEntityAdapter,
  Update
} from "@ngrx/entity";
import { Person } from "../models/Person";
import { PersonActionTypes, PersonActions } from "../actions/person.actions";

export interface PersonState extends EntityState<Person> {
  listLoading: boolean;
}

export const adapter: EntityAdapter<Person> = createEntityAdapter<Person>();

export const initialPersonState: PersonState = adapter.getInitialState({
  listLoading: false
});

export function reducer(
  state = initialPersonState,
  action: PersonActions
): PersonState {
  switch (action.type) {
    case PersonActionTypes.LoadPersons: {
      return {
        ...state
      };
    }
    case PersonActionTypes.isPersonLoading: {
      return {
        ...state,
        listLoading: action.payload.isLoading
      };
    }
    case PersonActionTypes.PersonsLoaded: {
      return adapter.addMany(action.payload.persons, {
        ...initialPersonState,
        listLoading: false
      });
    }
    default:
      return state;
  }
}
