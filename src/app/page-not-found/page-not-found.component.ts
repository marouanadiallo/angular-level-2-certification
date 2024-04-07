import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [NgOptimizedImage, RouterModule],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageNotFoundComponent {
  
}
