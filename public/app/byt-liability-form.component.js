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
var byt_liability_form_model_component_1 = require('./byt-liability-form-model.component');
var byt_dashboard_overview_service_1 = require("./byt-dashboard-overview.service");
var BYTLiabilityFormComponent = (function () {
    function BYTLiabilityFormComponent(_bytPostLiability) {
        this._bytPostLiability = _bytPostLiability;
        this.liabilityForm = new core_1.EventEmitter();
        this.submitted = false;
        this.model = new byt_liability_form_model_component_1.BYTLiabilityFormModel(1, '', new Date, '', '');
        this.categories = [
            { name: "Credit card debt" },
            { name: "Medical debt" },
            { name: "Unpaid rent" },
            { name: "Unpaid utilities" },
            { name: "Auto loan" },
            { name: "Personal loan" },
            { name: "Consolidation loan" },
            { name: "Student loan" },
            { name: "Home loan" },
            { name: "Business loan" },
            { name: "Other" }
        ];
    }
    BYTLiabilityFormComponent.prototype.submitLiability = function () {
        this.submitted = true;
    };
    BYTLiabilityFormComponent.prototype.submitLiabilityFinal = function () {
        this.submitted = false;
        this.liabilityForm.emit(this.model);
        this._bytPostLiability.bytPostLiabilityForm(this.model).subscribe(function (user) { });
        this.model = new byt_liability_form_model_component_1.BYTLiabilityFormModel(1, '', new Date, '', '');
    };
    BYTLiabilityFormComponent = __decorate([
        core_1.Component({
            selector: 'byt-liability-form',
            templateUrl: '/app/byt-liability-form.component.html',
            styleUrls: ['app/byt-liability-form.component.css'],
            outputs: ['liabilityForm']
        }), 
        __metadata('design:paramtypes', [byt_dashboard_overview_service_1.BYTPostLiability])
    ], BYTLiabilityFormComponent);
    return BYTLiabilityFormComponent;
}());
exports.BYTLiabilityFormComponent = BYTLiabilityFormComponent;
//# sourceMappingURL=byt-liability-form.component.js.map