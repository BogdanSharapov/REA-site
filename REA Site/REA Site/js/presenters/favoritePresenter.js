import { FavoriteModel } from '../models/favoriteModel.js';
import { FavoriteView } from '../views/favoriteView.js';

export class FavoritePresenter {
    constructor() {
        this.model = new FavoriteModel();
        this.view = new FavoriteView();
    }

    init() {
        const favorites = this.model.getFavorites(); // Получаем избранные объекты
        this.view.render(favorites); // Отображаем их в представлении
    }

    addFavorite(property) {
        this.model.addFavorite(property); // Добавляем в модель
        this.view.render(this.model.getFavorites()); // Обновляем представление
    }

    removeFavorite(propertyId) {
        this.model.removeFavorite(propertyId); // Удаляем из модели
        this.view.render(this.model.getFavorites()); // Обновляем представление
    }
}
