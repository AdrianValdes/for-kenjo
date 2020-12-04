import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistFormReactiveComponent } from './artist-form-reactive.component';

describe('ArtistFormReactiveComponent', () => {
  let component: ArtistFormReactiveComponent;
  let fixture: ComponentFixture<ArtistFormReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtistFormReactiveComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
