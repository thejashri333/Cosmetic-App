
import { LightningElement, track } from 'lwc';
import getCategories from '@salesforce/apex/MakeupController.getCategories';

export default class MakeupCategorySearchBar extends LightningElement {
    @track selectedCategory = 'All';
    @track categoryOptions = [];

    connectedCallback() {
        getCategories().then(list => {
            this.categoryOptions = list.map(item => ({
                label: item,
                value: item
            }));
        });
    }

    handleChange(event) {
        this.selectedCategory = event.target.value;
        this.dispatchEvent(
            new CustomEvent('categorychange', {
                detail: this.selectedCategory
            })
        );
    }
}
