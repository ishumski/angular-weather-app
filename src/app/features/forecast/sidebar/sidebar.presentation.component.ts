import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-presentation',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarPresentationComponent {
  @Input() title: string | null | undefined = '';
  @Input() temp: number | string | null | undefined = 0;
  @Input() weatherStateName: string | null | undefined = '';
  @Input() selectWeatherStateAbbr: string | null | undefined = '';
  @Input() currentDate!: string | null | undefined;

  showMessage() {}
}
