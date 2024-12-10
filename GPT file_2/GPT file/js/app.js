import { PropertyPresenter } from './presenters/propertyPresenter.js';
import { FavoritePresenter } from './presenters/favoritePresenter.js';
import { PropertyController } from './controllers/propertyController.js';

document.addEventListener("DOMContentLoaded", () => {
    const propertyPresenter = new PropertyPresenter();
    const favoritePresenter = new FavoritePresenter();
    const propertyController = new PropertyController();

    // Инициализация
    propertyPresenter.init();
    favoritePresenter.init();
    propertyController.init();

    // Обработчик кнопки добавления нового объекта
    document.getElementById('add-property-button').addEventListener('click', () => {
        const name = document.getElementById('property-name').value;
        const area = document.getElementById('property-area').value;
        const rooms = document.getElementById('property-rooms').value;
        const type = document.getElementById('property-type').value;

        // Создание нового объекта недвижимости
        const newProperty = {
            id: (new Date()).getTime().toString(), // Генерация уникального ID
            name,
            area: parseInt(area),
            rooms: parseInt(rooms),
            type,
            isFavorite: false
        };

        propertyPresenter.addProperty(newProperty); // Добавление нового объекта
    });

    // Обработчик для кнопки поиска
    document.getElementById('search-button').addEventListener('click', () => {
        const type = document.getElementById('search-type').value;
        const rooms = document.getElementById('search-rooms').value;
        const area = document.getElementById('search-area').value;

        const criteria = {
            type: type || null,
            rooms: rooms ? parseInt(rooms) : null,
            area: area ? parseInt(area) : null
        };

        propertyPresenter.searchProperties(criteria); // Вызываем метод поиска
    });

    // Обработчик событий для добавления в избранное
    document.addEventListener('addToFavorites', (event) => {
        favoritePresenter.addFavorite(event.detail.id);
    });

    // Обработчик событий для удаления из избранного
    document.addEventListener('removeFavorite', (event) => {
        favoritePresenter.removeFavorite(event.detail.id);
    });

    // Обработчик событий для удаления объекта
    document.addEventListener('removeProperty', (event) => {
        propertyController.removeProperty(event.detail.id);
    });
});