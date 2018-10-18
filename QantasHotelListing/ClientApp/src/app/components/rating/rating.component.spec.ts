import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingComponent } from './rating.component';

describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
    component.itemId = 'cxd650nuyo' ;
    component.rating = 4 ;
    component.star = true ;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should get correct id', () => {
    expect(component.itemId).toEqual('cxd650nuyo');
  });

  it('Should get correct rating', () => {
    expect(component.rating).toEqual(4);
  });

  it('Should get correct star', () => {
    expect(component.star).toEqual(true);
  });
});
