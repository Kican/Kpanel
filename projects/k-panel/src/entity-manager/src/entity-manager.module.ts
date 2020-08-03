import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListPageComponent} from './components/list-page/list-page.component';
import {Routes} from "@angular/router";
import {EditPageComponent} from './components/edit-page/edit-page.component';
import {ShareModule} from "../../lib/modules/share/share.module";
import { FormBuilderComponent } from './components/form-builder/form-builder.component';

export const EntityManagerRoutes: Routes = [
	{
		path: 'entity/:type', children: [
			{path: 'list', component: ListPageComponent},
			{path: 'edit/:id', component: EditPageComponent},
			{path: 'new', component: EditPageComponent},
		]
	}
];

@NgModule({
	declarations: [
		ListPageComponent,
		EditPageComponent,
		FormBuilderComponent
	],
	imports: [
		ShareModule
	]
})
export class EntityManagerModule {
}
