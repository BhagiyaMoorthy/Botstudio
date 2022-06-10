import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorytitleComponent } from './categorytitle.component';

describe('CategorytitleComponent', () => {
  let component: CategorytitleComponent;
  let fixture: ComponentFixture<CategorytitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorytitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorytitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
