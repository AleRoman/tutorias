import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaborativoComponent } from './colaborativo.component';

describe('ColaborativoComponent', () => {
  let component: ColaborativoComponent;
  let fixture: ComponentFixture<ColaborativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaborativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaborativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
