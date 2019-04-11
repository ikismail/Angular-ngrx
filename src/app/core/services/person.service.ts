import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Person } from "../store/models/Person";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class PersonService {
  BASE_URL = environment.BASE_URL;

  constructor(private http: HttpClient) {}

  getAllPersons(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/persons`);
  }

  getPersonById(personId: string) {
    return this.http.get(`${this.BASE_URL}/persons/${personId}`);
  }

  createPerson(person: Person) {
    return this.http.post(`${this.BASE_URL}/persons`, person);
  }

  updatePerson(personId: string, person: Person) {
    return this.http.put(`${this.BASE_URL}/persons/${personId}`, person);
  }

  deletePerson(personId: string) {
    return this.http.get(`${this.BASE_URL}/persons/${personId}`);
  }
}
