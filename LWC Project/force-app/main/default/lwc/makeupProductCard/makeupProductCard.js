
import { LightningElement, api } from 'lwc';

export default class MakeupProductCard extends LightningElement {
    @api product;

    addToCart() {
        this.dispatchEvent(
            new CustomEvent("addtocart", { detail: this.product.Id })
        );
    }
}
