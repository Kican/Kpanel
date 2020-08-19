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

	fetchAllEntityManagers(): void {
		this.http.get<EntityManagerInfoDto[]>(this.config.discovery_url).subscribe(x => {
			this.managers = x;
			setTimeout(() => {
				const sideBarItems: SidebarItem[] = [];
				this.managers.forEach(value => {
					sideBarItems.push({
						type: 'single',
						routerLink: value.url,
						label: value.title,
						itemId: value.url,
						iconClass: 'mdi mdi-account-multiple-outline'
					});
				});
				this.sidebarService.addGroup('main-sidebar', {groupId: 'entities', title: 'موجودیت ها', items: sideBarItems});
			});

			console.log(`entity-managers`, x);
		});
	}
}
