import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadoresAritmeticosComponent } from './operadores-aritmeticos.component';

describe('OperadoresAritmeticosComponent', () => {
  let component: OperadoresAritmeticosComponent;
  let fixture: ComponentFixture<OperadoresAritmeticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperadoresAritmeticosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadoresAritmeticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
