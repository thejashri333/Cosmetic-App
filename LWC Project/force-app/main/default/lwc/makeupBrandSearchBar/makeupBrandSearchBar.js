import { LightningElement, track } from 'lwc';
 
export default class MakeupBrandSearchBar extends LightningElement {
 
    @track selectedBrand = 'All';
 
    // Add more brands here as your data grows
    get brandOptions() {
        return [
            { label: 'All', value: 'All' },
            { label: 'Lakme', value: 'Lakme' },
            { label: 'Maybelline', value: 'Maybelline' },
            { label: 'Loreal', value: 'Loreal' },
            { label: 'Estee Lauder', value: 'Estee Lauder' }
        ];
    }
 
    handleBrandChange(event) {
        this.selectedBrand = event.detail.value;
 
        // Send brand selection to parent
        this.dispatchEvent(
            new CustomEvent('brandchange', {
                detail: this.selectedBrand
            })
        );
    }
}