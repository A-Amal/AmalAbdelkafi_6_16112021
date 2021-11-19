export default class Photographer {
    constructor(data) {
        this._id = data.id;
        this._name = data.name;
        this._city = data.city;
        this._country = data.country;
        this._tagline = data.tagline;
        this._price = data.price;
        this._portrait = data.portrait;
        this._media = [];
    }
    get firstname() {
        return this._name.split(' ')[0];
    }
    get lastname() {
        return this._name.split(' ')[1];
    }
    get city(){
        return this._city;
    }
    get country(){
        return this._country;
    }
    get tagline(){
        return this._tagline;
    }
    get price(){
        return this._price;
    }
    get portrait(){
        return this._portrait;
    }
}