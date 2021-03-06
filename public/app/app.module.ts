import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule }   from '@angular/router';
import { AUTH_PROVIDERS }      from 'angular2-jwt';

import {BYTNavComponent} from './byt-nav.component';
import {AppComponent} from './app.component';
import {BYTBodyNavComponent} from './byt-body-nav.component';
import {BYTDashboardQuoteComponent} from './byt-dashboard-quote.component';
import {BYTDashboardOverviewComponent} from './byt-dashboard-overview.component';
//import {BYTDashboardOverviewQuestionComponent} from './byt-dashboard-overview-question.component';
//import {BYTDashboardExpenseQuestionComponent} from './byt-dashboard-expense-question.component';
import {BYTDashboardExpenseAnalysisComponent} from './byt-dashboard-expense-analysis.component';
import {BYTDashboardDailyBudgetComponent} from './byt-dashboard-daily-budget.component';
//import {BYTDashboardDailyBudgetQuestionComponent} from './byt-dashboard-daily-budget-question.component';
import {BYTHomeArrowComponent} from "./byt-home-arrow.component";
import {GetBYTUser} from './byt-dashboard-overview.service';
import {BYTIncomeComponent} from './byt-income.component';
import {BYTIncomeFormComponent} from './byt-income-form.component';
import {BYTLastIncomeEntryComponent} from './byt-last-income-entry.component';
import {BYTLastBillEntryComponent} from './byt-last-bill-entry.component';
import {BYTAssetComponent} from './byt-assets.component';
import {BYTAssetFormComponent} from "./byt-assets-form.component";
import {BYTLiabilityFormComponent} from "./byt-liability-form.component";
import {BYTLastAssetEntryComponent} from "./byt-last-asset-entry.component";
import {BYTLastLiabilityEntryComponent} from "./byt-last-liability-entry.component";
import {BYTBillsComponent} from './byt-bills.component'
import {BYTOrderByPipe} from './byt-order-by.pipes';
import {BYTOrderByDatePipe} from './byt-order-by.pipes';
import {BYTBillsFormComponent} from './byt-bills-form.component';
import {BYTLastExpenseEntryComponent} from "./byt-last-expense-entry.component";
import {BYTExpensesComponent} from "./byt-expenses.component";
import {BYTExpensesFormComponent} from "./byt-expenses-form.component";
import {BYTEducationComponent} from "./byt-education.component";
import {Auth} from "./auth.service";
import {BYTLoginComponent} from "./byt-login.component";
import {AuthGuard} from "./auth.guard";
import {AuthCheck} from "./auth.guard";
import {BYTPostProjections} from './byt-dashboard-overview.service';
import {BYTPostIncome} from "./byt-dashboard-overview.service";
import {BYTPostAsset} from "./byt-dashboard-overview.service";
import {BYTPostLiability} from "./byt-dashboard-overview.service";
import {BYTPostBill} from "./byt-dashboard-overview.service";
import {BYTPostExpense} from "./byt-dashboard-overview.service";
import {BYTRemoveTransaction} from "./byt-dashboard-overview.service";
import {BYTTransactionJournalComponent} from "./byt-transaction-journal.component";
import {BYTLiabilityComponent} from "./byt-liability.component";
import {BYTNetWorthComponent} from "./byt-net-worth.component";
import {BYTNetWorthNavComponent} from "./byt-net-worth-nav.component";
import {BYTBalanceSheetComponent} from "./byt-balance-sheet.component";
import {BYTAppComponent} from "./byt-app.component";
import {BYTAppArrowComponent} from "./byt-app-arrow.component";
import {BYT404Component} from "./byt-not-found.component";
import {BYTActionStep} from "./byt-action-step.component";
import {BYTInstructionsComponent} from "./byt-instructions.component";
import {BYTStripeComponent} from "./byt-stripe.component"; 
import {BYTStripePayment} from "./byt-dashboard-overview.service";
//import {BYTPlaidComponent} from "./byt-plaid.component";
//import {BYTPlaid} from "./byt-dashboard-overview.service";
import {BYTMonthlyProjectionsComponent} from "./byt-monthly-projections.component";
//import {BYTMonthlyProjectionsOverviewComponent} from "./byt-monthly-projections-overview.component";
import {BYTMonthlyProjectionsNavComponent} from "./byt-monthly-projections-nav.component";
import {BYTMonthlyProjectionsIncomeComponent} from "./byt-monthly-projections-income.component";
import {BYTMonthlyProjectionsBillsComponent} from "./byt-monthly-projections-bills.component";
import {BYTMonthlyProjectionsExpensesComponent} from "./byt-monthly-projections-expenses.component";
import {BYTPostIncomeProjections} from './byt-dashboard-overview.service';
import {BYTPostBillProjection} from "./byt-dashboard-overview.service";
import {BYTPostExpenseProjection} from "./byt-dashboard-overview.service";

const routes: Routes = [
  { path: 'login', component: BYTLoginComponent, canActivate: [AuthCheck] },
  //{ path: '', component: BYTHomeComponent, canActivate: [AuthGuard] },
  { path: 'app', component: BYTAppComponent, canActivate: [AuthGuard] },
  //{ path: 'stripe', component: BYTStripeComponent, canActivate: [AuthGuard] },
  { path: 'education', component: BYTEducationComponent, canActivate: [AuthGuard] },
  { path: 'instructions', component: BYTInstructionsComponent, canActivate: [AuthGuard] },
  //{ path: 'plaid-transactions', component: BYTPlaidComponent, canActivate: [AuthGuard] },
  { 
    path: 'monthly-projections', 
    component: BYTMonthlyProjectionsComponent, 
    canActivate: [AuthGuard],
    children: [
      {
        path: 'income',
        component: BYTMonthlyProjectionsIncomeComponent
      },
      {
        path: 'bills',
        component: BYTMonthlyProjectionsBillsComponent
      },
      {
        path: 'expenses',
        component: BYTMonthlyProjectionsExpensesComponent
      }
    ]
  },
  {
    path: 'spending-journal',
    component: BYTTransactionJournalComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: BYTDashboardOverviewComponent
      },
      {
        path: 'income',
        component: BYTIncomeComponent
      },
      {
        path: 'bills',
        component: BYTBillsComponent
      },
      {
        path: 'expenses',
        component: BYTExpensesComponent
      }
    ]
  },
  { path: 'balance-sheet', component: BYTBalanceSheetComponent, canActivate: [AuthGuard], 
    children: 
    [
      {
        path: 'net-worth',
        component: BYTNetWorthComponent
      },
      {
        path: 'assets',
        component: BYTAssetComponent
      },
      {
        path: 'liabilities',
        component: BYTLiabilityComponent
      }
    ]
  },
  { path: '**', component: BYT404Component }
];

@NgModule({
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, RouterModule.forRoot(routes)],
  declarations: [ AppComponent, BYTNavComponent, BYTBodyNavComponent, 
  				  BYTDashboardQuoteComponent, BYTDashboardOverviewComponent, /*BYTDashboardOverviewQuestionComponent,*/ 
  				  /*BYTDashboardExpenseQuestionComponent,*/ BYTDashboardExpenseAnalysisComponent, 
  				  BYTDashboardDailyBudgetComponent, /*BYTDashboardDailyBudgetQuestionComponent,*/
  				  BYTHomeArrowComponent, BYTIncomeComponent, BYTIncomeFormComponent, BYTLastIncomeEntryComponent, BYTAssetComponent, BYTAssetFormComponent,
            BYTLastAssetEntryComponent, BYTLastLiabilityEntryComponent, BYTLastBillEntryComponent, BYTBillsComponent, BYTOrderByPipe, BYTOrderByDatePipe, BYTBillsFormComponent,
  				  BYTLastExpenseEntryComponent, BYTExpensesComponent, BYTExpensesFormComponent, BYTEducationComponent, BYTLoginComponent, BYTTransactionJournalComponent, BYTLiabilityFormComponent, BYTLiabilityComponent, BYTNetWorthComponent, BYTNetWorthNavComponent, 
            BYTBalanceSheetComponent, BYTAppComponent, BYTAppArrowComponent, BYT404Component, BYTEducationComponent, BYTActionStep, BYTInstructionsComponent,
            BYTStripeComponent, /*BYTPlaidComponent,*/ BYTMonthlyProjectionsComponent, BYTMonthlyProjectionsNavComponent, /*BYTMonthlyProjectionsOverviewComponent,*/ 
            BYTMonthlyProjectionsIncomeComponent, BYTMonthlyProjectionsBillsComponent, BYTMonthlyProjectionsExpensesComponent],
  providers: [ GetBYTUser, Auth, AUTH_PROVIDERS, AuthGuard, AuthCheck, BYTPostProjections, BYTPostIncome, BYTPostAsset, BYTPostLiability, BYTPostBill, 
               BYTPostExpense, BYTRemoveTransaction, BYTStripePayment, /*BYTPlaid,*/ BYTPostIncomeProjections, BYTPostBillProjection, BYTPostExpenseProjection ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}