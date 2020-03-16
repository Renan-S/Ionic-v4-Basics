import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BadgesChipsPage } from './badges-chips.page';

describe('BadgesChipsPage', () => {
  let component: BadgesChipsPage;
  let fixture: ComponentFixture<BadgesChipsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgesChipsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BadgesChipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
