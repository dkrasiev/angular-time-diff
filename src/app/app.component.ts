import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  time: string = '';
  targetTime = dayjs().hour(19).minute(5).second(0).millisecond(0);
  diff: number = 0;

  getTime(time: number = 0): string {
  	return dayjs(time).format('hh:mm:ss:SSS');
  }
	
  updateTime(): string {
    const diff = this.targetTime.diff(dayjs(), 'second');
    
  	return diff.toString();
  }

  ngOnInit() {
  	setInterval(() => {
  	  // this.diff = dayjs().diff(this.targetTime);
  	  this.time = this.getTime();
  	}, 1);
  }
}
