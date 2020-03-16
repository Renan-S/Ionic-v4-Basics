import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NgifPage } from './ngif.page';

describe('NgifPage', () => {
  let component: NgifPage;
  let fixture: ComponentFixture<NgifPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgifPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NgifPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
