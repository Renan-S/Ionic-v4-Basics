import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NgforPage } from './ngfor.page';

describe('NgforPage', () => {
  let component: NgforPage;
  let fixture: ComponentFixture<NgforPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgforPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NgforPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
