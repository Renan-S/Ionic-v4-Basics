import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NgswitchPage } from './ngswitch.page';

describe('NgswitchPage', () => {
  let component: NgswitchPage;
  let fixture: ComponentFixture<NgswitchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgswitchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NgswitchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
