import { Component } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { Location } from '../../models/location';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  locations: Location[] = [];
  constructor(private housingService: HousingService) {}
  ngOnInit() {
    this.housingService.getAllHousingLocations().subscribe((data) => {
      this.locations = data;
    });
  }
}
