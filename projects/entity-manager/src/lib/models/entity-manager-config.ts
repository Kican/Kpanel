import {InjectionToken} from '@angular/core';

export interface EntityManagerConfig {
	discovery_url: string;
	useDiscovery: boolean;
	showInSidebar: boolean;
}

export const DefaultEntityManagerConfig: EntityManagerConfig = {
	discovery_url: 'api/discovery/entity-managers',
	useDiscovery: true,
	showInSidebar: false
};

export const ENTITY_MANAGER_CONFIG = new InjectionToken<EntityManagerConfig>('entity_manager_config');
