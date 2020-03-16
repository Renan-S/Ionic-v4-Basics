import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NgclassPage } from './ngclass.page';

describe('NgclassPage', () => {
  let component: NgclassPage;
  let fixture: ComponentFixture<NgclassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgclassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NgclassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
