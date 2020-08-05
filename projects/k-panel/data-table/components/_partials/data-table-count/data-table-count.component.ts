import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
	selector: 'data-table-count',
	templateUrl: './data-table-count.component.html',
	styleUrls: ['./data-table-count.component.scss']
})
export class DataTableCountComponent implements OnInit {
	@Output()
	valueChange = new EventEmitter<number>();

	count = new FormControl([8]);

	constructor() {
	}

	ngOnInit(): void {
		this.count.valueChanges.subscribe(value => {
			this.valueChange.emit(value);
		});
	}

}
