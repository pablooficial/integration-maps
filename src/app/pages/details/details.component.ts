import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, tap } from 'rxjs';
import { API_PATCH } from 'src/environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  public ListOnibus: any[] = [];
  public isLoading: boolean = false;
  public marksName: any;

  zoom: number = 13;

  lat: number = -30.0324999;
  lng: number = -51.2303767;

  public markers: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  clickedMarker(lng: number, lat: number) {
    location.href = `https://www.google.com/maps/?q=${lat},${lng}`;
  }

  ngOnInit(): void {
    this.getItemOnibus.subscribe((res) => {
      this.markers = Object.values(res);
      this.marksName = res;

      console.log('Name: ', this.marksName);
    });
  }
  get getItemOnibus() {
    const id = this.activatedRoute.snapshot.params['id'];
    return this.http
      .get<any>(`${API_PATCH}a=il&p=${id}`)
      .pipe(tap((res) => res));
  }
}
