public with sharing class PicklistFilterController {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsByIndustry(String industry){
        return [SELECT Id, Name, Type FROM Account WHERE Industry=:industry];
    }
}