import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeepageComponent } from './neepage.component';

describe('NeepageComponent', () => {
  let component: NeepageComponent;
  let fixture: ComponentFixture<NeepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NeepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});