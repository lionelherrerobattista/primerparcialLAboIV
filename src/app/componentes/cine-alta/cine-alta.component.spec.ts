import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CineAltaComponent } from './cine-alta.component';

describe('CineAltaComponent', () => {
  let component: CineAltaComponent;
  let fixture: ComponentFixture<CineAltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CineAltaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CineAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
