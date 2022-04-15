import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTDComponent } from './table-td.component';

describe('TableTDComponent', () => {
  let component: TableTDComponent;
  let fixture: ComponentFixture<TableTDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
