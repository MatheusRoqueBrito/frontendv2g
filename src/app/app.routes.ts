import { Routes } from '@angular/router';
//*pages
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VeiculosComponent } from './pages/veiculos/veiculos.component';
import { EstacoesComponent } from './pages/estacoes/estacoes.component';
import { TarifasComponent } from './pages/tarifas/tarifas.component';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';
import { UnidadesDeConsumoComponent } from './pages/unidades-de-consumo/unidades-de-consumo.component';

export const routes: Routes = [
{path: '', component:DashboardComponent},
{path: 'Veiculos',component:VeiculosComponent},
{path: 'Estacoes',component:EstacoesComponent},
{path: 'Tarifas',component:TarifasComponent},
{path: 'Relatorios',component:RelatoriosComponent},
{path: 'UnidadesDeConsumo',component:UnidadesDeConsumoComponent}

];
