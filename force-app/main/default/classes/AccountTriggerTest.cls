@isTest
private class AccountTriggerTest {
    @isTest static void AccountTestMethod(){
        List<Account> accList = new List<Account>();
        for(Integer i=0; i<200; i++){
            Account acc = new Account(Name='Test'+i);
            accList.add(acc);
        }
        insert accList;
    }
}