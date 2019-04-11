import { Component, OnInit } from "@angular/core";
import { PersonService } from "src/app/core/services/person.service";
import { Observable } from "rxjs";
import { AppState } from "src/app/core/store/reducers";
import { Store, select } from "@ngrx/store";
import { LoadPersons } from "src/app/core/store/actions/person.actions";
import {
  selectEntities,
  selectPersons
} from "src/app/core/store/selectors/person.selectors";
import { Album } from "src/app/core/store/models/Album";
import { Person } from "src/app/core/store/models/Person";

@Component({
  selector: "app-album",
  templateUrl: "./album.component.html",
  styleUrls: ["./album.component.scss"]
})
export class AlbumComponent implements OnInit {
  persons: Person[];
  constructor(
    private personService: PersonService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.store.dispatch(new LoadPersons());
    this.store.pipe(select(selectPersons)).subscribe(data => {
      this.persons = data as any;
    });
  }
}
