import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatsetComponent } from './creatset.component';

describe('CreatsetComponent', () => {
  let component: CreatsetComponent;
  let fixture: ComponentFixture<CreatsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatsetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
