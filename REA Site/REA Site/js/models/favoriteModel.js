export class FavoriteModel {
    constructor() {
        this.favorites = []; // Массив для хранения избранных объектов
    }

    addFavorite(property) {
        // Проверка на уникальность
        if (!this.favorites.some(prop => prop.id === property.id)) {
            this.favorites.push(property); // Добавляем объект в избранное
        }
    }

    removeFavorite(propertyId) {
        this.favorites = this.favorites.filter(prop => prop.id !== propertyId); // Удаляем объект по ID
    }

    getFavorites() {
        return this.favorites; // Возвращаем список избранных объектов
    }
}
