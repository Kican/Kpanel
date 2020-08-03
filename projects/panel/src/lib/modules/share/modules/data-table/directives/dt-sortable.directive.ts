import {Directive, ElementRef, EventEmitter, Host, HostListener, Input, OnInit, Output, Renderer2} from '@angular/core';
import {DataTableComponent} from '../components/data-table/data-table.component';
import {filter} from 'rxjs/operators';

@Directive({
	selector: '[dtSortable]'
})
export class DtSortableDirective implements OnInit {
	@Input()
	dtSortable: string;

	@Output()
	sortableClick = new EventEmitter<{ property: string, isDesc: boolean }>();

	checked = false;
	isDesc = true;

	constructor(private el: ElementRef, private renderer: Renderer2, @Host() private table: DataTableComponent) {
	}

	get isChecked() {
		return this.checked;
	}

	ngOnInit(): void {
		this.renderer.addClass(this.el.nativeElement, 'sortable');
		this.table.sortableChange$
			.pipe(
				filter(value => value.property !== this.dtSortable))
			.subscribe(value => this.unset());
	}

	@HostListener('click') onClick() {
		if (this.isChecked) {
			this.toggle();
		} else {
			this.checked = true;
		}
		this.set();

		this.sortableClick.emit({property: this.dtSortable, isDesc: this.isDesc});
		this.table.sortable = this;

		this.table.sortableChange$.next({property: this.dtSortable, isDesc: this.isDesc});
	}

	set() {
		if (this.isDesc) {
			this.renderer.addClass(this.el.nativeElement, 'desc');
			this.renderer.removeClass(this.el.nativeElement, 'asc');
		} else {
			this.renderer.addClass(this.el.nativeElement, 'asc');
			this.renderer.removeClass(this.el.nativeElement, 'desc');
		}
	}

	unset() {
		this.renderer.removeClass(this.el.nativeElement, 'asc');
		this.renderer.removeClass(this.el.nativeElement, 'desc');
		this.checked = false;
		this.isDesc = false;
	}

	toggle() {
		this.isDesc = !this.isDesc;
	}
}
