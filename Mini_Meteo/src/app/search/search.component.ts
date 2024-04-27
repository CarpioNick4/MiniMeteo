import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string;
  title = 'first-routed-app';
  obsCW: Observable<Object>;
  results: any;

  constructor(private http:HttpClient) { 
  }
  Token='69f179b83bfc632ae61d7b87fb226ef3'
 
  submit(query: HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;

  this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.query}&appid=${this.Token}&units=metric&lang=it`).subscribe(data => {
this.results=data
  });
  }
  getBackgroundColor() {
    if (this.results) {
      const weather = this.results.weather[0].main;
      if (weather === 'Clear') {
        return '#ffffcc'; // Giallo chiaro quando è sereno (sole)
      } else if (weather === 'Rain') {
        return '#007acc'; // Azzurro scuro quando è piovoso
      } else if (weather === 'Clouds') {
        return '#f5f5f5'; // Grigio quando è nuvoloso
      }
    }
    return 'transparent'; // Sfondo trasparente quando non ci sono risultati
  }
  
  
}
