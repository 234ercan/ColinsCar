public with sharing class createRecord{
@AuraEnabled
        public static void createRecord1 (Vulnerable_Form__c reg){  
                if(reg != null){
                    insert reg;
            } 
            
        }
    }