import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EntityManagerConfig, EntityManagerInfoDto} from '../models';
import {SidebarDynamicMenuService} from '@ngx-k/components/sidebar';
import {SidebarItem} from '@ngx-k/components/sidebar/models/sidebar-item.model';

@Injectable({
	providedIn: 'root'
})
export class EntityManagerService {
	managers: EntityManagerInfoDto[] = [];

	constructor(
		private http: HttpClient,
		private sidebarService: SidebarDynamicMenuService,
		@Inject(EntityManagerConfig) private config: EntityManagerConfig
	) {
	}

	getByName(name: string): EntityManagerInfoDto {
		return this.managers.filter(x => x.name == name)[0];
	}

	fetchAllEntityManagers(): void {
		this.http.get<EntityManagerInfoDto[]>(this.config.discovery_url).subscribe(x => {
			this.managers = x;
			setTimeout(() => {
				const sideBarItems: SidebarItem[] = [];
				this.managers.forEach(value => {
					sideBarItems.push({
						type: 'single',
						routerLink: `entity/${value.name}/list`,
						label: value.title,
						itemId: value.name,
						iconClass: value.icon == null ? 'mdi mdi-database-edit' : value.icon
					});
				});
				this.sidebarService.addGroup('main-sidebar', {groupId: 'entities', title: 'موجودیت ها', items: sideBarItems});
			});
		});
	}
}
