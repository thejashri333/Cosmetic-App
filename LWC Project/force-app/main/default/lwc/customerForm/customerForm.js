
import { LightningElement, track } from 'lwc';
import saveCustomerApex from '@salesforce/apex/CustomerController.saveCustomer';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CustomerForm extends LightningElement {

    // These are variables that hold the values from the form
    @track fullName = '';
    @track phone = '';
    @track street = '';
    @track city = '';
    @track postalCode = '';
    @track country = '';

    // These methods update each variable when the user types in the input
    handleName(event) {
        this.fullName = event.target.value;
    }

    handlePhone(event) {
        this.phone = event.target.value;
    }

    handleStreet(event) {
        this.street = event.target.value;
    }

    handleCity(event) {
        this.city = event.target.value;
    }

    handlePostalCode(event) {
        this.postalCode = event.target.value;
    }

    handleCountry(event) {
        this.country = event.target.value;
    }

    // This method is called when the user clicks the Submit button
    saveCustomer() {

        // Call the Apex method and pass the form values
        saveCustomerApex({
            fullName: this.fullName,
            phone: this.phone,
            street: this.street,
            city: this.city,
            postalCode: this.postalCode,
            country: this.country
        })
        .then((result) => {

            // If Apex successfully creates the customer
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success!',
                    message: 'Customer Created. Account Id: ' + result,
                    variant: 'success'
                })
            );
        })
        .catch((error) => {

            // If something goes wrong (validation, error)
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: error.body.message,
                    variant: 'error'
                })
            );
        });
    }
}
