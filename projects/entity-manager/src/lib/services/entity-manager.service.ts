import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EntityManagerConfig, EntityManagerInfoDto} from '../models';
import {SidebarDynamicMenuService} from '@ngx-k/components/sidebar';
import {SidebarItem} from '@ngx-k/components/sidebar/models/sidebar-item.model';
import {Observable, ReplaySubject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class EntityManagerService {
	managers = new ReplaySubject<EntityManagerInfoDto[]>();

	constructor(
		private http: HttpClient,
		private sidebarService: SidebarDynamicMenuService,
		@Inject(EntityManagerConfig) private config: EntityManagerConfig
	) {
	}

	getByName(name: string): Observable<EntityManagerInfoDto> {
		return this.managers.pipe(map(x => x.find(y => y.name == name)));
	}

	fetchAllEntityManagers(): void {
		if (!this.config.useDiscovery) {
			return;
		}
		this.http.get<EntityManagerInfoDto[]>(this.config.discovery_url).subscribe(data => {
			this.managers.next(data);
			setTimeout(() => {
				const sideBarItems: SidebarItem[] = [];
				data.forEach(value => {
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
