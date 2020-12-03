import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumFormCreateComponent } from './album-form-create.component';

describe('AlbumFormCreateComponent', () => {
  let component: AlbumFormCreateComponent;
  let fixture: ComponentFixture<AlbumFormCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumFormCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumFormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
