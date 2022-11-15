import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatfigureComponent } from './creatfigure.component';

describe('CreatfigureComponent', () => {
  let component: CreatfigureComponent;
  let fixture: ComponentFixture<CreatfigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatfigureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
