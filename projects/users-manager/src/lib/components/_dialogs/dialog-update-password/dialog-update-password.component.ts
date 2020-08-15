import {Component, OnInit} from '@angular/core';
import {UsersManagerService} from '../../../services/users-manager.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'lib-dialog-update-password',
	templateUrl: './dialog-update-password.component.html',
	styleUrls: ['./dialog-update-password.component.scss']
})
export class DialogUpdatePasswordComponent implements OnInit {

	form: FormGroup;
	userId: number;

	constructor(
		private usersService: UsersManagerService,
		private modal: NgbActiveModal,
		private formBuilder: FormBuilder
	) {
		this.form = formBuilder.group({
			password: [null, [Validators.required, Validators.minLength(5)]]
		});
	}

	ngOnInit(): void {
	}

	submit(): void {
		this.usersService.setPassword(this.userId, this.form.value.password).subscribe(value => {
			console.log(value);
			this.modal.close(true);
		});
	}
}
