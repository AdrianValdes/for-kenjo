import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumFormUpdateReactiveComponent } from './album-form-update-reactive.component';

describe('AlbumFormUpdateReactiveComponent', () => {
  let component: AlbumFormUpdateReactiveComponent;
  let fixture: ComponentFixture<AlbumFormUpdateReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumFormUpdateReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumFormUpdateReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
