import { LightningElement, track } from 'lwc';
import filterByPrice from '@salesforce/apex/MakeupController.filterByPrice';
 
export default class makeupSearchBar extends LightningElement {
    @track products = [];
 
    handlePrice(event){
        const { min, max } = event.detail;
 
        filterByPrice({ minPrice: min, maxPrice: max })
        .then(result => {
            this.products = result;
        })
        .catch(error => {
            console.log('Apex Error:', error);
        });
    }
}