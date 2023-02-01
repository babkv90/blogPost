import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAccordianComponent } from './sidebar-accordian.component';

describe('SidebarAccordianComponent', () => {
  let component: SidebarAccordianComponent;
  let fixture: ComponentFixture<SidebarAccordianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarAccordianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
