import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService){}
  

  ngOnInit(): void {
      this.weatherService.getData().subscribe((res) => {
        console.log('weather', res)
      })
  }

}
