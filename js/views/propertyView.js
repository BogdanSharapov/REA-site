export class PropertyView {
    constructor() {
        this.propertyList = document.querySelector("#property-list");
    }

    render(properties) {
        this.propertyList.innerHTML = ""; // Очистка перед рендерингом
        properties.forEach(property => {
            const card = document.createElement("div");
            card.classList.add("property-card"); // Добавляем класс для стилизации

            card.innerHTML = `
                <img src="${property.image}" alt="Image" style="width: 100%; border-radius: 8px;"/> <!-- Изображение -->
                <div class="name">${property.name}</div> <!-- Имя/Описание -->
                <div class="address">${property.address}</div> <!-- Адрес -->
                <div class="features">
                    <p>${property.rooms} комнат(ы)</p> <!-- Количество спален -->
                    <p>${property.bathrooms} Bath</p> <!-- Количество ванных комнат -->
                    <p>${property.area} кв м</p> <!-- Площадь -->
                </div>
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
