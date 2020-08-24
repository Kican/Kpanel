import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersManagerService} from '../../../services/users-manager.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {RolePartialDto} from '../../../models/role-partial-dto';
import {ToastService} from '@ngx-k/components/toast';

@Component({
	selector: 'lib-dialog-set-user-roles',
	templateUrl: './dialog-set-user-roles.component.html',
	styleUrls: ['./dialog-set-user-roles.component.scss']
})
export class DialogSetUserRolesComponent implements OnInit {

	form: FormGroup;
	userId: number;
	roles: RolePartialDto[];

	constructor(
		private usersService: UsersManagerService,
		private modal: NgbActiveModal,
		private toastService: ToastService,
		private formBuilder: FormBuilder
	) {
		this.form = formBuilder.group({
			roles: [null, [Validators.required]]
		});
	}

	getRoles(): void {
		this.usersService.getRoles().subscribe(value => {
			this.roles = value;
			this.usersService.getUserRoles(this.userId).subscribe(userRoles => {
				this.form.patchValue({roles: userRoles});
			});
		});
	}

	ngOnInit(): void {
		this.getRoles();
	}

	submit(): void {
		this.usersService.setRoles(this.userId, this.form.value.roles).subscribe(value => {
			this.toastService.success({message: 'نقش ها با موفقیت ثبت شد', position: 'left-down', action: null, title: null});
			this.modal.close(true);
		});
	}
}
