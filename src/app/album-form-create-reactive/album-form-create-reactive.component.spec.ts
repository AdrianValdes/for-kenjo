import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumFormCreateReactiveComponent } from './album-form-create-reactive.component';

describe('AlbumFormCreateReactiveComponent', () => {
  let component: AlbumFormCreateReactiveComponent;
  let fixture: ComponentFixture<AlbumFormCreateReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumFormCreateReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumFormCreateReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
