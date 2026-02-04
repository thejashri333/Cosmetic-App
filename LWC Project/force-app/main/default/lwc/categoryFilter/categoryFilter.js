

import { LightningElement, track } from 'lwc';
 
export default class MakeupCategorySearchBar extends LightningElement {
 
    @track selectedCategory = 'All';
 
    // You can modify or add categories later
    get categoryOptions() {
        return [
            { label: 'All', value: 'All' },
            { label: 'Eyes', value: 'Eyes' },
            { label: 'Lips', value: 'Lips' },
            { label: 'Face', value: 'Face' },
            { label: 'Skin', value: 'Skin' },
        ];
    }
 
    handleCategoryChange(event) {
        this.selectedCategory = event.detail.value;
 
        // Pass selected category to parent component
        this.dispatchEvent(
            new CustomEvent('categorychange', {
                detail: this.selectedCategory
            })
        );
    }
}




