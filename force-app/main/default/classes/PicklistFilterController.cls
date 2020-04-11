public with sharing class PicklistFilterController {
    

    @AuraEnabled
    public static List<Account> getAccountsByIndustry(String industry){
        return [SELECT Id FROM Account WHERE Industry=:industry];
    }
}
