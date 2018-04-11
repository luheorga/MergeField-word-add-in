import { Component } from '@angular/core';

declare const Word: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  insertEmersonQuoteAtSelection() {
    Word.run(async (context) => {
      var thisDocument = context.document;
      var range = thisDocument.getSelection();
      range.insertText('"Hitch your wagon to a star."\n', Word.InsertLocation.replace);
      await context.sync().then(function () {
        console.log('Added a quote from Ralph Waldo Emerson.');
      });
    });
  }
  insertChekhovQuoteAtTheBeginning() {
    Word.run(async (context) => {
      var body = context.document.body;
      body.insertText('"Knowledge is of no value unless you put it into practice."\n', Word.InsertLocation.start);
      await context.sync().then(function () {
        console.log('Added a quote from Anton Chekhov.');
      });
    });
  }
  insertChineseProverbAtTheEnd() {
    Word.run(async (context) => {
      var body = context.document.body;
      body.insertText('"To know the road ahead, ask those coming back."\n', Word.InsertLocation.end);
      await context.sync().then(function () {
        console.log('Added a quote from a Chinese proverb.');
      });
    });
  }  
}
