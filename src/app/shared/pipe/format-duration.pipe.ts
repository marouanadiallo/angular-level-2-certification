import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'toDuration',
    standalone: true
})
export class FormatDurationPipe implements PipeTransform {
    transform(duration: number | string, ...args: string[]): string {
        if(isNaN(+duration)) throw new Error("Duration has to be number");
        const hour = +duration/60;
        const fr = (hour * 10) % 10 / 10;
        const int = hour - fr;
        return Math.round(int) + "h " + Math.round((fr*60)) +"min";
    }

}