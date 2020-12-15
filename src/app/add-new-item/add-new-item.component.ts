import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.css'],
})
export class AddNewItemComponent implements OnInit {
  @Input() element: 'string';
  @Input() route: 'string';

  constructor(
    private location: Location,
    public router: Router,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'addIcon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../assets/add_to_photos-white-48dp.svg'
      )
    );
  }

  ngOnInit(): void {}
}
