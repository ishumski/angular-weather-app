import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-presentation',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarPresentationComponent {
  @Input() title: string | null | undefined = '';
  @Input() temp: number | null | undefined = 0;
  @Input() weatherStateName: string | null | undefined = '';
  @Input() selectWeatherStateAbbr: string | null | undefined = '';
  @Input() currentDate!: string | null | undefined;

  buttonStyles = {
    width: '161px',
    height: '40px',
    fontWeight: '500',
    fontSize: '18px',
    border: 'none',
    fontFamily: 'Raleway',
    color: '#e7e7eb',
    background: '#6e707a',
    boxShadow: '0px 4px 4px 0.3',
    cursor: 'pointer',
  };

  badgeStyles = {
    background: '#585676',
  };

  showMessage() {
    console.log('live fast die clown');
  }

  getGeoposition() {}
}
