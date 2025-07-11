import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpecsheetSelecttypePage } from './specsheet-selecttype.page';

describe('SpecsheetSelecttypePage', () => {
  let component: SpecsheetSelecttypePage;
  let fixture: ComponentFixture<SpecsheetSelecttypePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecsheetSelecttypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpecsheetSelecttypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
