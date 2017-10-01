import { Component, OnInit } from '@angular/core';
import { DataSet, Timeline } from 'vis';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'app';

	public ngOnInit(): void {
		// Create timeline
		const items = new DataSet([
			{ id: 1, content: 'item 1', title: 'title 1', start: '2013-04-20', end: '2013-04-21', group: 1, className: 'inpatientItem' },
			{ id: 2, content: 'item 2', start: '2013-04-14', end: '2013-04-15', group: 3, className: 'midwifeItem' },
			{ id: 3, content: 'item 3', start: '2013-04-18', end: '2013-04-19', group: 4, className: 'deliverItem'},
			{ id: 4, content: 'item 4', start: '2013-04-16', end: '2013-04-19', group: 2, className: 'outpatientItem' },
			{ id: 5, content: 'item 5', start: '2013-04-25', end: '2013-04-26' },
			{ id: 6, content: 'item 6', start: '2013-04-27', end: '2013-04-28' }
		]);

		const groups = new DataSet([
			{ id: 1, content: 'Inpatient' },
			{ id: 2, content: 'Outpatient' },
			{ id: 3, content: 'Midwife' },
			{ id: 4, content: 'Delivery' },
		]);

		const options = {
			showMinorLabels: true,
			zoomable: false,
			orientation: 'top',
		};

		const timelineContainer = document.getElementById('myTimeline');
		const timeline = new Timeline(timelineContainer, items, groups, options);
	}
}
