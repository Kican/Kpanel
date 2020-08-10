import {
	Component,
	ElementRef,
	EventEmitter, Inject,
	Input,
	OnChanges,
	OnInit,
	Output,
	SimpleChanges,
	ViewChild
} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {DataTableConfig} from "../../../classes/data-table-config";

@Component({
	selector: 'data-table-search',
	templateUrl: './data-table-search.component.html',
	styleUrls: ['./data-table-search.component.scss'],
})
export class DataTableSearchComponent implements OnInit {
	@Input()
	searchStatus: boolean;

	@Output()
	searchChange = new EventEmitter<string>();

	@ViewChild('searchInput', {static: true})
	searchInput: ElementRef<HTMLInputElement>;

	search = new FormControl(['']);

	constructor(@Inject(DataTableConfig) private config: DataTableConfig) {
	}

	ngOnInit() {
		this.search.valueChanges.pipe(debounceTime(this.config.filterDebounceTime)).subscribe(value => {
			this.searchChange.emit(value);
		});
	}

	inputCheck() {
		if (this.searchStatus) {
			this.searchInput.nativeElement.focus();
		} else {
			this.searchInput.nativeElement.blur();
		}
	}
}
