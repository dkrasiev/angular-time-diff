import { Component, OnInit } from '@angular/core';
import { TimeService } from './shared/time.service';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public time: string = '';
  public currentTime: string = '';
  public targetTime: string = '';

  constructor(private timeService: TimeService) {}

  public ngOnInit() {
    setInterval(() => {
      const nextTarget = this.timeService.getNextTarget();
      this.time = dayjs
        .utc(nextTarget.diff())
        .format(TimeService.timeFormatWithMs);
      this.targetTime = nextTarget.format(TimeService.timeFormat);
      this.currentTime = dayjs().format(TimeService.timeFormat);
    });
  }
}
