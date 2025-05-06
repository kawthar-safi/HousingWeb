import { Component } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { Location } from '../../models/location';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-details',
  imports: [RouterModule, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  location!: Location;

  constructor(
    private housingService: HousingService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.housingService.getHousingLocationById(id).subscribe((data) => {
      this.location = data;
    });
  }
}
