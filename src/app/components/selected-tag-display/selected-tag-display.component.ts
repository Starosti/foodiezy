import { Component, Input } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-selected-tag-display',
  templateUrl: './selected-tag-display.component.html',
  styleUrls: ['./selected-tag-display.component.css']
})
export class SelectedTagDisplayComponent {
  @Input() selectedTag!:string;
  faClose = faClose
}
