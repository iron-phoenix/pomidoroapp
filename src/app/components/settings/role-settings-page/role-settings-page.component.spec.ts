import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleSettingsPageComponent } from './role-settings-page.component';

describe('RoleSettingsPageComponent', () => {
  let component: RoleSettingsPageComponent;
  let fixture: ComponentFixture<RoleSettingsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleSettingsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleSettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
