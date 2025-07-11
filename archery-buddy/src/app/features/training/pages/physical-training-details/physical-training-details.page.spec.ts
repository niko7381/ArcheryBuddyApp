import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhysicalTrainingDetailsPage } from './physical-training-details.page';

describe('PhysicalTrainingDetailsPage', () => {
  let component: PhysicalTrainingDetailsPage;
  let fixture: ComponentFixture<PhysicalTrainingDetailsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalTrainingDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhysicalTrainingDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
