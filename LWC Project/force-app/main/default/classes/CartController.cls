
public with sharing class CartController {

    // Get all cart items
    @AuraEnabled(cacheable=true)
    public static List<Add_to_Cart__c> getCartItems() {
        return [
            SELECT Id, Name, Product__c, Product__r.Name,
                   Product__r.Price__c, Quantity__c
            FROM Add_to_Cart__c
        ];
    }

    // Add product to cart
    @AuraEnabled
    public static void addToCart(Id productId) {
        Add_to_Cart__c item = new Add_to_Cart__c(
            Product__c = productId,
            Quantity__c = 1
        );
        insert item;
    }

    // Update quantity
    @AuraEnabled
    public static void updateQuantity(Id cartItemId, Integer qty) {
        Add_to_Cart__c item = new Add_to_Cart__c(
            Id = cartItemId,
            Quantity__c = qty
        );
        update item;
    }

    // Delete cart item
    @AuraEnabled
    public static void removeFromCart(Id cartItemId) {
        delete [SELECT Id FROM Add_to_Cart__c WHERE Id = :cartItemId];
    }
}