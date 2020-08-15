import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RolePartialDto} from '../models/role-partial-dto';

@Injectable({
	providedIn: 'root'
})
export class UsersManagerService {

	constructor(private http: HttpClient) {
	}

	setPassword(userId: number, password: string): Observable<any> {
		return this.http.put(`api/UsersManager/${userId}/$password`, {password});
	}

	getRoles(): Observable<RolePartialDto[]> {
		return this.http.get<RolePartialDto[]>('api/UsersManager/$roles');
	}

	getUserRoles(userId: number): Observable<RolePartialDto[]> {
		return this.http.get<RolePartialDto[]>(`api/UsersManager/${userId}/$roles`);
	}

	setRoles(userId: number, roles: string[]): Observable<any> {
		return this.http.put(`api/UsersManager/${userId}/$roles`, {roleNames: roles});
	}
}
