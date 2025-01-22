import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeBtnComponent } from './add-employee-btn.component';

describe('AddEmployeeBtnComponent', () => {
  let component: AddEmployeeBtnComponent;
  let fixture: ComponentFixture<AddEmployeeBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEmployeeBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmployeeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
