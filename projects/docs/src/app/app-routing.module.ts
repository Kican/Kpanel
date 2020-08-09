import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EntityManagerRoutes} from '@ngx-k-panel/entity-manager';
import {FormBuilderTestComponent} from './components/form-builder-test/form-builder-test.component';
import {getPanelRoutes} from '@ngx-k-panel/dashboard';
import {RoomListPageComponent} from './components/room-list-page/room-list-page.component';
import {EditRoomPageComponent} from './components/edit-room-page/edit-room-page.component';

const routes: Routes = [
	...EntityManagerRoutes,
	{path: 'form-builder-test', component: FormBuilderTestComponent},
	{
		path: 'rooms', children: [
			{path: 'list', component: RoomListPageComponent},
			{path: 'edit/:id', component: EditRoomPageComponent},
			{path: 'new', component: EditRoomPageComponent},
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(getPanelRoutes(routes))
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
