import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhysicalTrainingFrontpagePage } from './physical-training-frontpage.page';

describe('PhysicalTrainingFrontpagePage', () => {
  let component: PhysicalTrainingFrontpagePage;
  let fixture: ComponentFixture<PhysicalTrainingFrontpagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalTrainingFrontpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhysicalTrainingFrontpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
