import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatisticsFrontpagePage } from './statistics-frontpage.page';

describe('StatisticsFrontpagePage', () => {
  let component: StatisticsFrontpagePage;
  let fixture: ComponentFixture<StatisticsFrontpagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsFrontpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatisticsFrontpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
