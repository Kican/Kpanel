import {
	Component,
	ElementRef,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output,
	SimpleChanges,
	ViewChild
} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {slideToggle} from "../../../../lib/animations/pub-anim";
import {environment} from "../../../../../../../../../../environments/environment";

@Component({
	selector: 'app-data-table-search',
	templateUrl: './data-table-search.component.html',
	styleUrls: ['./data-table-search.component.scss'],
	animations: [slideToggle]
})
export class DataTableSearchComponent implements OnInit {
	@Input()
	searchStatus: boolean;

	@Output()
	searchChange = new EventEmitter<string>();

	@ViewChild('searchInput', {static: true})
	searchInput: ElementRef<HTMLInputElement>;

	search = new FormControl(['']);

	constructor() {
	}

	ngOnInit() {
		this.search.valueChanges.pipe(debounceTime(environment.debounceTime)).subscribe(value => {
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
