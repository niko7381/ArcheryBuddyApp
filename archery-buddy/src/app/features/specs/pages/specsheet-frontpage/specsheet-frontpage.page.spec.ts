import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpecsheetFrontpagePage } from './specsheet-frontpage.page';

describe('SpecsheetFrontpagePage', () => {
  let component: SpecsheetFrontpagePage;
  let fixture: ComponentFixture<SpecsheetFrontpagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecsheetFrontpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpecsheetFrontpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
