"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MaterialModulesModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var select_1 = require("@angular/material/select");
var form_field_1 = require("@angular/material/form-field");
var progress_bar_1 = require("@angular/material/progress-bar");
var input_1 = require("@angular/material/input");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var card_1 = require("@angular/material/card");
var button_1 = require("@angular/material/button");
var toolbar_1 = require("@angular/material/toolbar");
var paginator_1 = require("@angular/material/paginator");
var datepicker_1 = require("@angular/material/datepicker");
var core_2 = require("@angular/material/core");
var tooltip_1 = require("@angular/material/tooltip");
var icon_1 = require("@angular/material/icon");
var checkbox_1 = require("@angular/material/checkbox");
var dialog_1 = require("@angular/material/dialog");
var sidenav_1 = require("@angular/material/sidenav");
var list_1 = require("@angular/material/list");
var MaterialModulesModule = /** @class */ (function () {
    function MaterialModulesModule() {
    }
    MaterialModulesModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [
                common_1.CommonModule,
            ],
            exports: [
                slide_toggle_1.MatSlideToggleModule,
                select_1.MatSelectModule,
                form_field_1.MatFormFieldModule,
                progress_bar_1.MatProgressBarModule,
                input_1.MatInputModule,
                progress_spinner_1.MatProgressSpinnerModule,
                card_1.MatCardModule,
                button_1.MatButtonModule,
                toolbar_1.MatToolbarModule,
                paginator_1.MatPaginatorModule,
                datepicker_1.MatDatepickerModule,
                core_2.MatNativeDateModule,
                tooltip_1.MatTooltipModule,
                icon_1.MatIconModule,
                checkbox_1.MatCheckboxModule,
                dialog_1.MatDialogModule,
                sidenav_1.MatSidenavModule,
                list_1.MatListModule,
            ]
        })
    ], MaterialModulesModule);
    return MaterialModulesModule;
}());
exports.MaterialModulesModule = MaterialModulesModule;
