import { Injectable } from '@angular/core';

@Injectable()
export class WordDocumentService {

  constructor() { }

  AddMergeField(fieldName: string) {
    var me = this;
    Word.run(function (context) {
      var fieldXml = me.getFieldXml(fieldName);
      Office.context.document.setSelectedDataAsync(fieldXml, { coercionType: 'ooxml' });
      return context.sync();
    }).catch(me.errorHandler);
  }
  private getFieldXml(fieldName: string) {
    let myXML = this.getMergeFieldXml(),
      re = /FieldName/g;
    myXML = myXML.replace(re, fieldName);
    return myXML;
  }
  private getMergeFieldXml(){
    var myOOXMLRequest = new XMLHttpRequest();
    myOOXMLRequest.open('GET', '../../assets/MergeField.xml', false);
    myOOXMLRequest.send();
    if (myOOXMLRequest.status !== 200) {
      throw 'Error al recuperar el xml del MergeField';
    }
    return myOOXMLRequest.responseText || '';
  }  
  private errorHandler(error: any) {
    console.log("Error: " + error);
    if (error instanceof OfficeExtension.Error) {
      console.log("Debug info: " + JSON.stringify(error.debugInfo));
    }
  }
}
