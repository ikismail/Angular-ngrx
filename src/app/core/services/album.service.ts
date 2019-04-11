import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class AlbumService {
  BASE_URL: string;
  constructor(private http: HttpClient) {
    this.BASE_URL = environment.BASE_URL;
  }

  getAlbum(id: number) {
    return this.http.get(`${this.BASE_URL}/albums/${id}`);
  }

  getAlbums() {
    return this.http.get(`${this.BASE_URL}/albums`);
  }

  createAlbum(album: any) {
    return this.http.post(`${this.BASE_URL}/albums`, album);
  }

  updateAlbum(id: number, album: any) {
    return this.http.put(`${this.BASE_URL}/albums/${id}`, album);
  }

  deleteAlbum(id: number) {
    return this.http.delete(`${this.BASE_URL}/albums/${id}`);
  }
}
