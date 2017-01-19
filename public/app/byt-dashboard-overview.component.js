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
var byt_dashboard_overview_service_1 = require('./byt-dashboard-overview.service');
var byt_dashboard_expense_analysis_component_1 = require('./byt-dashboard-expense-analysis.component');
var byt_dashboard_daily_budget_component_1 = require('./byt-dashboard-daily-budget.component');
var byt_dashboard_overview_service_2 = require('./byt-dashboard-overview.service');
var byt_body_nav_component_1 = require('./byt-body-nav.component');
var BYTDashboardOverviewComponent = (function () {
    function BYTDashboardOverviewComponent(_getBYTUser, _bytPostProjections) {
        this._getBYTUser = _getBYTUser;
        this._bytPostProjections = _bytPostProjections;
    }
    BYTDashboardOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._getBYTUser.getUser().subscribe(function (user) {
            _this.totalIncome = user.totalIncome;
            _this.totalBills = user.billsTotal;
            _this.totalSpent = user.totalSpent;
            _this.incomeProjectionsTotal = user.incomeProjectionsTotal;
            _this.billProjectionsTotal = user.billProjectionsTotal;
            _this.expenseProjectionsTotal = user.expenseProjectionsTotal;
        });
        if (this.totalIncome - this.totalBills - this.totalSpent > 0) {
            this.DashboardMessage = "Keep saving that money homie.";
        }
        else if (!this.totalIncome && !this.totalBills && !this.totalSpent) {
            this.DashboardMessage = "Baby boo, stop being lazy and add your income, bills, and expenses.";
        }
        else {
            this.DashboardMessage = "Yo, stop spending so much money.";
        }
        var delay = 8000;
        setInterval(function () { return _this.byt_show_section = true; }, delay);
    };
    ;
    __decorate([
        core_1.ViewChild(byt_dashboard_expense_analysis_component_1.BYTDashboardExpenseAnalysisComponent), 
        __metadata('design:type', byt_dashboard_expense_analysis_component_1.BYTDashboardExpenseAnalysisComponent)
    ], BYTDashboardOverviewComponent.prototype, "expenseAnalysis", void 0);
    __decorate([
        core_1.ViewChild(byt_dashboard_daily_budget_component_1.BYTDashboardDailyBudgetComponent), 
        __metadata('design:type', byt_dashboard_daily_budget_component_1.BYTDashboardDailyBudgetComponent)
    ], BYTDashboardOverviewComponent.prototype, "dailyBudget", void 0);
    __decorate([
        core_1.ViewChild(byt_body_nav_component_1.BYTBodyNavComponent), 
        __metadata('design:type', byt_body_nav_component_1.BYTBodyNavComponent)
    ], BYTDashboardOverviewComponent.prototype, "bytNav", void 0);
    BYTDashboardOverviewComponent = __decorate([
        core_1.Component({
            selector: 'byt-dashboard-overview',
            templateUrl: '/app/byt-dashboard-overview.component.html',
            styleUrls: ['app/byt-dashboard-overview.component.css']
        }), 
        __metadata('design:paramtypes', [byt_dashboard_overview_service_1.GetBYTUser, byt_dashboard_overview_service_2.BYTPostProjections])
    ], BYTDashboardOverviewComponent);
    return BYTDashboardOverviewComponent;
}());
exports.BYTDashboardOverviewComponent = BYTDashboardOverviewComponent;
//# sourceMappingURL=byt-dashboard-overview.component.js.map