
public with sharing class CustomerController {

    @AuraEnabled
    public static Id saveCustomer(
        String fullName, 
        String phone, 
        String street, 
        String city, 
        String postalCode, 
        String country
    ) {

        Account acc = new Account(
            Name = fullName,
            Phone = phone,
            BillingStreet = street,
            BillingCity = city,
            BillingPostalCode = postalCode,
            BillingCountry = country
        );
        insert acc;

        Contact con = new Contact(
            FirstName = fullName,
            LastName = 'Customer',
            Phone = phone,
            MailingStreet = street,
            MailingCity = city,
            MailingPostalCode = postalCode,
            MailingCountry = country,
            AccountId = acc.Id
        );
        insert con;

        return acc.Id;
    }
}
