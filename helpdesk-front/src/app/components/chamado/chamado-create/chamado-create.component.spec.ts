import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadoCreateComponent } from './chamado-create.component';

describe('ChamadoCreateComponent', () => {
  let component: ChamadoCreateComponent;
  let fixture: ComponentFixture<ChamadoCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChamadoCreateComponent]
    });
    fixture = TestBed.createComponent(ChamadoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
