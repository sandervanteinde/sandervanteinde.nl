import { Component } from '@angular/core';
import { MenuItemComponent } from './components/menu-item/menu-item.component';

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [
    MenuItemComponent
  ],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss'
})
export class TopMenuComponent {

}
