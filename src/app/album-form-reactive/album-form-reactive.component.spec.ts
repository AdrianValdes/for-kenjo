import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumFormReactiveComponent } from './album-form-reactive.component';

describe('AlbumFormReactiveComponent', () => {
  let component: AlbumFormReactiveComponent;
  let fixture: ComponentFixture<AlbumFormReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumFormReactiveComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
