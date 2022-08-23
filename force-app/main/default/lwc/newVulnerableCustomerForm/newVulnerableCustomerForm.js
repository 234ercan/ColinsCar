import { LightningElement } from 'lwc';
import FirstName_FIELD from '@salesforce/schema/Vulnerable_Form__c.Name__c';
import saveRegRecord from '@salesforce/apex/createRecord.createRecord1';

export default class NewVulnerableCustomerForm extends LightningElement {
  regRecord = {
    fName : FirstName_FIELD
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
}