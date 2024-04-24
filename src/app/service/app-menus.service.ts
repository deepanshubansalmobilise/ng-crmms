import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})

export class AppMenuService {
	getAppMenus() {
		return [{
			'icon': 'fa fa-sitemap',
			'title': 'Dashboard',
			'url': '/dashboard',
			'img': 'assets/images/dashboard.svg'
		},
		{
			'icon': 'fa fa-align-left',
			'title': 'Calls',
			'url': '/calls',
			'img': 'assets/images/phone.svg',
			'caret': 'true',
			'submenu': [{
				'url': '/calls',
				'title': 'Calls Management',
				// 'caret': 'true',
				}, {
				'url': '/menu/2',
				'title': 'Menu 1.2'
			}, {
				'url': '/menu/3',
				'title': 'Menu 1.3'
			}]
		},
		{
			'icon': 'fa fa-align-left',
			'title': 'Challan',
			'url': '/menu',
			'img': 'assets/images/challan.svg',
			'caret': 'true',
			'submenu': [{
				'url': '/customer',
				'title': 'Create Challan',
				// 'caret': 'true',
				
			}, {
				'url': '/menu/2',
				'title': 'Menu 1.2'
			}, {
				'url': '/menu/3',
				'title': 'Menu 1.3'
			}]
		},
		{
			'icon': 'fa fa-align-left',
			'title': 'Inventory',
			'url': '/menu',
			'img': 'assets/images/inventory.svg',
			'caret': 'true',
			'submenu': [{
				'url': '/inventory',
				'title': 'Inventory Management',
				// 'caret': 'true',
				
			}, {
				'url': '/menu/2',
				'title': 'Menu 1.2'
			}, {
				'url': '/menu/3',
				'title': 'Menu 1.3'
			}]
		},
		{
			'icon': 'fa fa-align-left',
			'title': 'Report',
			'url': '/menu',
			'img': 'assets/images/reports.svg',
			'caret': 'true',
			'submenu': [{
				'url': '/reports',
				'title': 'Current Inventory',
				// 'caret': 'true',
				
			}, {
				'url': '/menu/2',
				'title': 'Menu 1.2'
			}, {
				'url': '/menu/3',
				'title': 'Menu 1.3'
			}]
		},
		{
			'icon': 'fa fa-align-left',
			'title': 'Sales',
			'url': '/menu',
			'img': 'assets/images/sales.svg',
			'caret': 'true',
			'submenu': [{
				'url': '/sales',
				'title': 'Sales Order',
				// 'caret': 'true',
				
			}, {
				'url': '/menu/2',
				'title': 'Menu 1.2'
			}, {
				'url': '/menu/3',
				'title': 'Menu 1.3'
			}]
		},
		{
			'icon': 'fa fa-sitemap',
			'title': 'Quick links',
			'url': '/quick-links',
			'img': 'assets/images/quick-links.svg',
		},];

		// {
		// 	'icon': 'fa fa-align-left',
		// 	'title': 'Calls',
		// 	'url': '/calls',
		// 	'img': 'assets/images/phone.svg',
		// 	'caret': 'true',
		// 	'submenu': [{
		// 		'url': '/menu/1',
		// 		'title': 'Menu 1.1',
		// 		'caret': 'true',
		// 		'submenu': [{
		// 			'url': '/menu/1/1',
		// 			'title': 'Menu 2.1',
		// 			'caret': 'true',
		// 			'submenu': [{
		// 				'url': '/menu/1/1/1',
		// 				'title': 'Menu 3.1',
		// 			}, {
		// 				'url': '/menu/1/1/2',
		// 				'title': 'Menu 3.2'
		// 			}]
		// 		}, {
		// 			'url': '/menu/1/2',
		// 			'title': 'Menu 2.2'
		// 		}, {
		// 			'url': '/menu/1/3',
		// 			'title': 'Menu 2.3'
		// 		}]
		// 	}, {
		// 		'url': '/menu/2',
		// 		'title': 'Menu 1.2'
		// 	}, {
		// 		'url': '/menu/3',
		// 		'title': 'Menu 1.3'
		// 	}]
		// },
	}
}