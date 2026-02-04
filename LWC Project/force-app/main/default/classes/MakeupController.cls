 
public with sharing class MakeupController {
 
    @AuraEnabled(cacheable=true)
    public static List<MakeupLine__c> filterByPrice(Decimal minPrice, Decimal maxPrice) {
 
        // CASE 1 → No Min and No Max → Return all products
        if (minPrice == null && maxPrice == null) {
            return [
                SELECT Id, Name, Price__c, Brand__c, Category__c
                FROM MakeupLine__c
                ORDER BY Price__c ASC
            ];
        }
 
        // CASE 2 → Both Min and Max given
        if (minPrice != null && maxPrice != null) {
            return [
                SELECT Id, Name, Price__c, Brand__c, Category__c
                FROM MakeupLine__c
                WHERE Price__c >= :minPrice
                AND Price__c <= :maxPrice
                ORDER BY Price__c ASC
            ];
        }
 
        // CASE 3 → Only Min given
        if (minPrice != null) {
            return [
                SELECT Id, Name, Price__c, Brand__c, Category__c
                FROM MakeupLine__c
                WHERE Price__c >= :minPrice
                ORDER BY Price__c ASC
            ];
        }
 
        // CASE 4 → Only Max given
        return [
            SELECT Id, Name, Price__c, Brand__c, Category__c
            FROM MakeupLine__c
            WHERE Price__c <= :maxPrice
            ORDER BY Price__c ASC
        ];
    }
}