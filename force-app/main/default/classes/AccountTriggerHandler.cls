public class AccountTriggerHandler {
    public static void accountInsertion(List<Account> accList){
        List<Vulnerable_Form__c> vlnList = new List<Vulnerable_Form__c>();
        for(Account acc:[SELECT Id, Name FROM Account WHERE Id IN : Trigger.new]){
            Vulnerable_Form__c vln = new Vulnerable_Form__c(Customer_Name__c=acc.Id);
            	vlnList.add(vln);
        }
        insert vlnList;
    }
}