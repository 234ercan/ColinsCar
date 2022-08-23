trigger AccountTrigger on Account (after insert) {
    if(Trigger.isAfter && Trigger.isInsert){
        AccountTriggerHandler.accountInsertion(Trigger.new);
    }
}