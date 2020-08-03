import {login} from './login';
import {menuItems} from './menu-items';
import {navBar} from './nav-bar';
import {breadcrumbs} from './breadcrumbs';
import {commons} from './commons';
import {degree} from './degree';
import {datatableHeaders} from './dt-headers';
import {field} from './field';
import {fieldGroup} from './field-group';
import {semester} from './semester';
import {course} from './course';
import {courseType} from './course-types';
import {roles} from './roles';
import {profile} from './profile';
import {user} from './user';
import {timeSheet} from './time-sheet';
import {weekDay} from './week-day';
import {presentation} from './presentation';

export const FA = {
	...commons,
	...login,
	...menuItems,
	...navBar,
	...breadcrumbs,
	...degree,
	...datatableHeaders,
	...fieldGroup,
	...field,
	...semester,
	...course,
	...courseType,
	...roles,
	...profile,
	...user,
	...timeSheet,
	...weekDay,
	...presentation
};
