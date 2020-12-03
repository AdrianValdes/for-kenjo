import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistFormCreateReactiveComponent } from './artist-form-create-reactive.component';

describe('ArtistFormCreateReactiveComponent', () => {
  let component: ArtistFormCreateReactiveComponent;
  let fixture: ComponentFixture<ArtistFormCreateReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistFormCreateReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistFormCreateReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
