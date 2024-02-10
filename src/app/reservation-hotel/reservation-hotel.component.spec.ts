import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationHotelComponent } from './reservation-hotel.component';

describe('ReservationHotelComponent', () => {
  let component: ReservationHotelComponent;
  let fixture: ComponentFixture<ReservationHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservationHotelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservationHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
