import { LightningElement, wire } from 'lwc';
import FirstName_FIELD from '@salesforce/schema/Vulnerable_Form__c.Name__c';
import saveRegRecord from '@salesforce/apex/createRecord.createRecord1';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import AccountName from '@salesforce/schema/Vulnerable_Form__c.Customer_Name__c';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

export default class NewVulnerableCustomerForm extends LightningElement {
  regRecord = {
    fName : FirstName_FIELD
};
  regAccount = {
    AccName : [AccountName]
  }; 
handleChange(event) {
    const field = event.target.name;
    if (field === 'txtFname') {
        console.log(event.target.value);
        this.regRecord.fName = event.target.value;            
    } 
}
saveRecord(event)
{   
    saveRegRecord({reg : this.regRecord})
    .then(result => {
        // Clear the user enter values
        console.log(this.regRecord)
        this.conrec = {};            
        window.console.log('result ===> '+result);
        alert('record inserted');
    })
    .catch(error => {
        this.error = error.message;
        console.log('error==>'+this.error);
        alert('record not inserted');
    });
}
saveAccount(event)
{   
    saveAccRecord({acc : this.regAccount})
    .then(result => {
        // Clear the user enter values
        console.log(this.regAccount)
        this.conrec = {};            
        window.console.log('result ===> '+result);
        alert('record inserted');
    })
    .catch(error => {
        this.error = error.message;
        console.log('error==>'+this.error);
        alert('record not inserted');
    });
}
filterWord;
@wire(getAccounts,{filter:'$filterWord'}) accountList;
handleSearch(event){
    this.filterWord=event.target.value;
}
}