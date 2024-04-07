import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'formatBudget',
    standalone: true
})
export class FormatBudgetPipe implements PipeTransform {
    transform(budget: string | number, ...args: string[]): string {
        if(typeof budget === 'string') {
            if (budget.includes("-")) {
                const intervals = budget.split("-")
                if( intervals.length !== 2 || isNaN(+intervals[0]) || isNaN(+intervals[1])) {
                    throw new Error("Invalid budget interval. the expected interval format is number-number");
                }
            } else if(isNaN(+budget)) {
                throw new Error("Invalid budget, please provide number.");
            }
        }
        return `$ ${budget} million`;
    }

}