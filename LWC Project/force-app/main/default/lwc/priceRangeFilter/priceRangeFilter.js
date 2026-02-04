
import { LightningElement } from 'lwc';

export default class PriceRangeFilter extends LightningElement {
    min = null;
    max = null;

    handleMin(event) {
        this.min = event.target.value === '' ? null : Number(event.target.value);
    }

    handleMax(event) {
        this.max = event.target.value === '' ? null : Number(event.target.value);
    }

    applyFilter() {
        this.dispatchEvent(
            new CustomEvent('pricefilterchange', {
                detail: { min: this.min, max: this.max }
            })
        );
    }
}
 