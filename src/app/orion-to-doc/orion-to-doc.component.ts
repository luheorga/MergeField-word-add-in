import { Component } from '@angular/core';
import { WordDocumentService } from '../services/word-document/word-document.service';

@Component({
  selector: 'app-orion-to-doc',
  templateUrl: './orion-to-doc.component.html',
  styleUrls: ['./orion-to-doc.component.scss']
})
export class OrionToDocComponent {
  constructor(private wordDocument: WordDocumentService) { }

  SetMergeField(fieldName: string) {
    this.wordDocument.AddMergeField(fieldName);
  }



}
