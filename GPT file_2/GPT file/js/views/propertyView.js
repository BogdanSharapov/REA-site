export class PropertyView {
    constructor() {
        this.propertyList = document.querySelector("#property-list");
    }

    render(properties) {
        this.propertyList.innerHTML = ""; // Очистка перед рендерингом
        properties.forEach(property => {
            const card = document.createElement("div");
            card.classList.add("property-card");
            card.innerHTML = `
                <h3>${property.name}</h3>
                <p>Площадь: ${property.area} кв.м</p>
                <p>Количество комнат: ${property.rooms}</p>
                <p>Тип сделки: ${property.type}</p>
                <button class="add-to-favorites" data-id="${property.id}">В избранное</button>
                <button class="remove-property" data-id="${property.id}">Удалить</button>
            `;

            // Добавляем обработчики событий для кнопок
            const addButton = card.querySelector(".add-to-favorites");
            addButton.addEventListener("click", () => {
                this.addToFavorites(property.id); // Метод для добавления в избранное
            });

            const removeButton = card.querySelector(".remove-property");
            removeButton.addEventListener("click", () => {
                this.removeProperty(property.id); // Метод для удаления объекта
            });

            this.propertyList.appendChild(card); // Добавляем карточку в список
        });
    }

    addToFavorites(propertyId) {
        const event = new CustomEvent('addToFavorites', { detail: { id: propertyId } });
        document.dispatchEvent(event); // Генерация события для добавления в избранное
    }

    removeProperty(propertyId) {
        const event = new CustomEvent('removeProperty', { detail: { id: propertyId } });
        document.dispatchEvent(event); // Генерация события для удаления
    }
}
