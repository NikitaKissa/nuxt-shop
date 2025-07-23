const cartLS = 'cart';

    // id: number,
    // amount: number,
    // name: string,
    // description: string,
    // price: number,
    // img:String

export const useCartStore = defineStore("cart", {
    state: () => ({
        items: [],
        empty: true,
        // expirationDate: ,

    }),
    actions: {
        add(product, amount) {
            const found = this.items.find(element => element.id === product.id)
            if(found)
                found.amount += amount;
            else{
                this.items.push({...product, amount});
            }

            this.saveToLocalStorage();
        },

        remove(id) {
            this.items = this.items.filter(element => element.id !== id)

            this.saveToLocalStorage();
        },

        update(id, amount) {
            const item = this.items.find(element => element.id === id);

            if(item){
                item.amount = amount;
                if(amount <= 0)
                    this.remove(id);
            }

            this.saveToLocalStorage();
        },

        saveToLocalStorage(){
            this.empty = this.items.length === 0;
            localStorage.setItem(cartLS, JSON.stringify(this.items))
        },

        loadFromLocalStorage(){
            const saved = localStorage.getItem(cartLS);
            if(saved){
                this.items = JSON.parse(saved);
                this.empty = this.items.length === 0;
            }
            else
                this.empty = true;

        }
    }
})