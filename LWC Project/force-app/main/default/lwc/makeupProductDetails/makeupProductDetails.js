
import { LightningElement, api } from 'lwc';

export default class MakeupProductDetails extends LightningElement {

    @api product;

    addToCart() {
        this.dispatchEvent(
            new CustomEvent('addtocart', {
                detail: this.product
            })
        );
    }

    goBack() {
        this.dispatchEvent(
            new CustomEvent('back')
        );
    }
}
