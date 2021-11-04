import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-presentation',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarPresentationComponent {
  @Input() title: string | null = '';
  @Input() temp: number | null = 0;
  @Input() weatherStateName: string | null = '';
  @Input() selectWeatherStateAbbr: string | null = '';
  @Input() currentDate!: string | null;
}
