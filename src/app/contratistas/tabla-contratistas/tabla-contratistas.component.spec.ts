import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaContratistasComponent } from './tabla-contratistas.component';

describe('TablaContratistasComponent', () => {
  let component: TablaContratistasComponent;
  let fixture: ComponentFixture<TablaContratistasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaContratistasComponent]
    });
    fixture = TestBed.createComponent(TablaContratistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
