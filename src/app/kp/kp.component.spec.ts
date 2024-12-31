import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpComponent } from './kp.component';

describe('KpComponent', () => {
  let component: KpComponent;
  let fixture: ComponentFixture<KpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
