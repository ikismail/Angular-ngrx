import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PersonState, adapter } from "../reducers/person.reducer";
import { each } from "lodash";
import { Person } from "../models/Person";

export const selectPersonState = createFeatureSelector<PersonState>("persons");

export const selectPersons = createSelector(
  selectPersonState,
  personState => {
    const items: Person[] = [];
    each(personState.entities, person => {
      items.push(person);
    });

    return items;
  }
);

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();
