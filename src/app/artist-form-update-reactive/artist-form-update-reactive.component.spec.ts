import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistFormUpdateReactiveComponent } from './artist-form-update-reactive.component';

describe('ArtistFormUpdateReactiveComponent', () => {
  let component: ArtistFormUpdateReactiveComponent;
  let fixture: ComponentFixture<ArtistFormUpdateReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistFormUpdateReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistFormUpdateReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
