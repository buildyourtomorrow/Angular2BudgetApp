"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var forms_2 = require('@angular/forms');
var router_1 = require('@angular/router');
var angular2_jwt_1 = require('angular2-jwt');
var byt_nav_component_1 = require('./byt-nav.component');
var app_component_1 = require('./app.component');
var byt_body_nav_component_1 = require('./byt-body-nav.component');
var byt_dashboard_quote_component_1 = require('./byt-dashboard-quote.component');
var byt_dashboard_overview_component_1 = require('./byt-dashboard-overview.component');
var byt_dashboard_overview_question_component_1 = require('./byt-dashboard-overview-question.component');
var byt_dashboard_expense_question_component_1 = require('./byt-dashboard-expense-question.component');
var byt_dashboard_expense_analysis_component_1 = require('./byt-dashboard-expense-analysis.component');
var byt_dashboard_daily_budget_component_1 = require('./byt-dashboard-daily-budget.component');
var byt_dashboard_daily_budget_question_component_1 = require('./byt-dashboard-daily-budget-question.component');
var byt_home_arrow_component_1 = require("./byt-home-arrow.component");
var byt_dashboard_overview_service_1 = require('./byt-dashboard-overview.service');
var byt_income_component_1 = require('./byt-income.component');
var byt_income_form_component_1 = require('./byt-income-form.component');
var byt_last_income_entry_component_1 = require('./byt-last-income-entry.component');
var byt_last_bill_entry_component_1 = require('./byt-last-bill-entry.component');
var byt_assets_component_1 = require('./byt-assets.component');
var byt_assets_form_component_1 = require("./byt-assets-form.component");
var byt_liability_form_component_1 = require("./byt-liability-form.component");
var byt_last_asset_entry_component_1 = require("./byt-last-asset-entry.component");
var byt_last_liability_entry_component_1 = require("./byt-last-liability-entry.component");
var byt_bills_component_1 = require('./byt-bills.component');
var byt_order_by_pipes_1 = require('./byt-order-by.pipes');
var byt_bills_form_component_1 = require('./byt-bills-form.component');
var byt_last_expense_entry_component_1 = require("./byt-last-expense-entry.component");
var byt_expenses_component_1 = require("./byt-expenses.component");
var byt_expenses_form_component_1 = require("./byt-expenses-form.component");
var byt_education_component_1 = require("./byt-education.component");
var byt_home_component_1 = require("./byt-home.component");
var auth_service_1 = require("./auth.service");
var byt_login_component_1 = require("./byt-login.component");
var auth_guard_1 = require("./auth.guard");
var auth_guard_2 = require("./auth.guard");
var byt_dashboard_overview_service_2 = require('./byt-dashboard-overview.service');
var byt_dashboard_overview_service_3 = require("./byt-dashboard-overview.service");
var byt_dashboard_overview_service_4 = require("./byt-dashboard-overview.service");
var byt_dashboard_overview_service_5 = require("./byt-dashboard-overview.service");
var byt_dashboard_overview_service_6 = require("./byt-dashboard-overview.service");
var byt_dashboard_overview_service_7 = require("./byt-dashboard-overview.service");
var byt_dashboard_overview_service_8 = require("./byt-dashboard-overview.service");
var byt_spending_journal_component_1 = require("./byt-spending-journal.component");
var byt_liability_component_1 = require("./byt-liability.component");
var byt_net_worth_component_1 = require("./byt-net-worth.component");
var byt_net_worth_nav_component_1 = require("./byt-net-worth-nav.component");
var byt_balance_sheet_component_1 = require("./byt-balance-sheet.component");
var byt_app_component_1 = require("./byt-app.component");
var byt_app_arrow_component_1 = require("./byt-app-arrow.component");
var byt_not_found_component_1 = require("./byt-not-found.component");
var routes = [
    { path: 'login', component: byt_login_component_1.BYTLoginComponent, canActivate: [auth_guard_2.AuthCheck] },
    { path: '', component: byt_home_component_1.BYTHomeComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'app', component: byt_app_component_1.BYTAppComponent, canActivate: [auth_guard_1.AuthGuard] },
    {
        path: 'spending-journal',
        component: byt_spending_journal_component_1.BYTSpendingJournalComponent,
        canActivate: [auth_guard_1.AuthGuard],
        children: [
            {
                path: 'dashboard',
                component: byt_dashboard_overview_component_1.BYTDashboardOverviewComponent
            },
            {
                path: 'income',
                component: byt_income_component_1.BYTIncomeComponent
            },
            {
                path: 'bills',
                component: byt_bills_component_1.BYTBillsComponent
            },
            {
                path: 'expenses',
                component: byt_expenses_component_1.BYTExpensesComponent
            },
            {
                path: 'education',
                component: byt_education_component_1.BYTEducationComponent
            }
        ]
    },
    { path: 'balance-sheet', component: byt_balance_sheet_component_1.BYTBalanceSheetComponent, canActivate: [auth_guard_1.AuthGuard],
        children: [
            {
                path: 'net-worth',
                component: byt_net_worth_component_1.BYTNetWorthComponent
            },
            {
                path: 'assets',
                component: byt_assets_component_1.BYTAssetComponent
            },
            {
                path: 'liabilities',
                component: byt_liability_component_1.BYTLiabilityComponent
            }
        ]
    },
    { path: '**', component: byt_not_found_component_1.BYT404Component }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_2.ReactiveFormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(routes)],
            declarations: [app_component_1.AppComponent, byt_nav_component_1.BYTNavComponent, byt_body_nav_component_1.BYTBodyNavComponent,
                byt_dashboard_quote_component_1.BYTDashboardQuoteComponent, byt_dashboard_overview_component_1.BYTDashboardOverviewComponent, byt_dashboard_overview_question_component_1.BYTDashboardOverviewQuestionComponent,
                byt_dashboard_expense_question_component_1.BYTDashboardExpenseQuestionComponent, byt_dashboard_expense_analysis_component_1.BYTDashboardExpenseAnalysisComponent,
                byt_dashboard_daily_budget_component_1.BYTDashboardDailyBudgetComponent, byt_dashboard_daily_budget_question_component_1.BYTDashboardDailyBudgetQuestionComponent,
                byt_home_arrow_component_1.BYTHomeArrowComponent, byt_income_component_1.BYTIncomeComponent, byt_income_form_component_1.BYTIncomeFormComponent, byt_last_income_entry_component_1.BYTLastIncomeEntryComponent, byt_assets_component_1.BYTAssetComponent, byt_assets_form_component_1.BYTAssetFormComponent,
                byt_last_asset_entry_component_1.BYTLastAssetEntryComponent, byt_last_liability_entry_component_1.BYTLastLiabilityEntryComponent, byt_last_bill_entry_component_1.BYTLastBillEntryComponent, byt_bills_component_1.BYTBillsComponent, byt_order_by_pipes_1.BYTOrderByPipe, byt_bills_form_component_1.BYTBillsFormComponent,
                byt_last_expense_entry_component_1.BYTLastExpenseEntryComponent, byt_expenses_component_1.BYTExpensesComponent, byt_expenses_form_component_1.BYTExpensesFormComponent, byt_education_component_1.BYTEducationComponent,
                byt_home_component_1.BYTHomeComponent, byt_login_component_1.BYTLoginComponent, byt_spending_journal_component_1.BYTSpendingJournalComponent, byt_liability_form_component_1.BYTLiabilityFormComponent, byt_liability_component_1.BYTLiabilityComponent, byt_net_worth_component_1.BYTNetWorthComponent, byt_net_worth_nav_component_1.BYTNetWorthNavComponent,
                byt_balance_sheet_component_1.BYTBalanceSheetComponent, byt_app_component_1.BYTAppComponent, byt_app_arrow_component_1.BYTAppArrowComponent, byt_not_found_component_1.BYT404Component],
            providers: [byt_dashboard_overview_service_1.GetBYTUser, auth_service_1.Auth, angular2_jwt_1.AUTH_PROVIDERS, auth_guard_1.AuthGuard, auth_guard_2.AuthCheck, byt_dashboard_overview_service_2.BYTPostProjections, byt_dashboard_overview_service_3.BYTPostIncome, byt_dashboard_overview_service_4.BYTPostAsset, byt_dashboard_overview_service_5.BYTPostLiability, byt_dashboard_overview_service_6.BYTPostBill,
                byt_dashboard_overview_service_7.BYTPostExpense, byt_dashboard_overview_service_8.BYTRemoveTransaction],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map