import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  public static timeFormat = 'HH:mm:ss';
  public static timeFormatWithMs = 'HH:mm:ss:SSS';

  public getNextTarget() {
    return dayjs().startOf('day').hour(20).minute(30);
  }
}
