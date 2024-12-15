export class FavoriteView {
    constructor() {
        this.favoriteList = document.querySelector("#favorites");
    }

    render(favorites) {
        this.favoriteList.innerHTML = ""; // Очистка списка перед рендерингом
        favorites.forEach(property => {
            const card = document.createElement("div");
            card.classList.add("favorite-card");
            card.innerHTML = `
                <h3>${property.name}</h3>
                <p>Площадь: ${property.area} кв.м</p>
                <p>Количество комнат: ${property.rooms}</p>
                <button class="remove-favorite" data-id="${property.id}">Удалить</button>
            `;

            // Добавляем обработчик события для кнопки удаления
            const removeButton = card.querySelector(".remove-favorite");
            removeButton.addEventListener("click", () => {
                this.removeFavorite(property.id);
            });

            this.favoriteList.appendChild(card);
        });
    }

    removeFavorite(propertyId) {
        const event = new CustomEvent('removeFavorite', { detail: { id: propertyId } });
        document.dispatchEvent(event); // Генерируем событие для удаления
    }
}
