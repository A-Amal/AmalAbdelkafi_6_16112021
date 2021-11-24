export default class Media {
    constructor(data) {
        this._id = data.id;
        this._photographer = {id: data.photographerId};
        this._title = data.title;
        this._alt = data.alt;
        this._likes = data.likes;
        this._date = data.date;
        this._price = data.price;
        this._type = 'media';
    }
}