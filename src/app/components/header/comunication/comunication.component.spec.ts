import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicationComponent } from './comunication.component';

describe('ComunicationComponent', () => {
  let component: ComunicationComponent;
  let fixture: ComponentFixture<ComunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComunicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
