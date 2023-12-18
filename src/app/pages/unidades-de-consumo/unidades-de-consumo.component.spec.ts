import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesDeConsumoComponent } from './unidades-de-consumo.component';

describe('UnidadesDeConsumoComponent', () => {
  let component: UnidadesDeConsumoComponent;
  let fixture: ComponentFixture<UnidadesDeConsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnidadesDeConsumoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnidadesDeConsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
