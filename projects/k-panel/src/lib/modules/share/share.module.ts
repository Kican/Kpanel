import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticationService} from "../../../auth/services/authentication.service";
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";
import {NgBootstrapFormValidationModule} from "ng-bootstrap-form-validation";
import {AccountService} from "../../../auth/services/account.service";
import {AutoDialogService} from "./services/auto-dialog.service";
import {ModalModule} from "ngx-bootstrap/modal";
import {WindowSizeService} from "./services/window-size/window-size.service";
import {ScrollService} from "./services/scroll/scroll.service";
import {NeoCrumbModule} from "ngx-neocrumb";
import {DataTableModule} from "../../../data-table/data-table.module";
import {SideBarModule} from "./modules/side-bar/side-bar.module";
import {NavBarModule} from "./modules/nav-bar/nav-bar.module";
import {CoreModule} from "../core/core.module";
import {AutoToastrService} from "./services/auto-toastr/auto-toastr.service";
import {HttpClientModule} from "@angular/common/http";
import {NgxPermissionsModule} from "ngx-permissions";
import {NgSelectModule} from "@ng-select/ng-select";
import {NgPersianDatepickerModule} from "ng-persian-datepicker";
import {CdkTableModule} from "@angular/cdk/table";


@NgModule({
	declarations: [],
	providers: [
		AuthenticationService,
		AccountService,
		AutoDialogService,
		AutoToastrService,
		WindowSizeService,
		ScrollService,
	],
	imports: [
		CommonModule,
		RouterModule,
		ReactiveFormsModule,
		TranslateModule.forRoot(),
		NgBootstrapFormValidationModule.forRoot(),
		ToastrModule.forRoot(),
		ModalModule.forRoot(),
		NeoCrumbModule.forRoot(),
		DataTableModule,
		SideBarModule,
		NavBarModule,
		CoreModule,
		HttpClientModule,
		NgxPermissionsModule.forRoot(),
		NgSelectModule,
		NgPersianDatepickerModule,
		CdkTableModule,
	],
	exports: [
		NgBootstrapFormValidationModule,
		TranslateModule,
		CommonModule,
		RouterModule,
		ReactiveFormsModule,
		ToastrModule,
		ModalModule,
		NeoCrumbModule,
		DataTableModule,
		SideBarModule,
		NavBarModule,
		CoreModule,
		NgxPermissionsModule,
		NgSelectModule,
		NgPersianDatepickerModule,
		CdkTableModule,
	]
})
export class ShareModule {
}
