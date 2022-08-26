public class accountInsert {
    @AuraEnabled
    public static void insertAcc(account acc){
        // return [select id,name,site from account where id=:acc.id];
        try{
            insert ACC;
        }catch(Exception ex){
            throw new AuraHandledException(ex.getMessage());
        }
    }
}