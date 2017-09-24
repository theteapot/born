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
			{ id: 1, content: 'item 1', title: 'title 1', start: '2013-04-20' },
			{ id: 2, content: 'item 2', start: '2013-04-14' },
			{ id: 3, content: 'item 3', start: '2013-04-18' },
			{ id: 4, content: 'item 4', start: '2013-04-16', end: '2013-04-19' },
			{ id: 5, content: 'item 5', start: '2013-04-25' },
			{ id: 6, content: 'item 6', start: '2013-04-27' }
		]);
		const timelineContainer = document.getElementById('myTimeline');
		const timeline = new Timeline(timelineContainer, items, {});
	}
}
