export class PropertyModel {
    constructor() {
        this.properties = []; // Массив для хранения объектов недвижимости
    }

    addProperty(property) {
        this.properties.push(property); // Добавление объекта в массив
    }

    getProperties() {
        return this.properties; // Возвращаем список объектов
    }

    removeProperty(propertyId) {
        this.properties = this.properties.filter(prop => prop.id !== propertyId); // Удаление объекта по ID
    }

    searchProperties(criteria) {
        return this.properties.filter(property => {
            return (
                (criteria.type ? property.type === criteria.type : true) &&
                (criteria.rooms ? property.rooms === criteria.rooms : true) &&
                (criteria.area ? property.area >= criteria.area : true)
            );
        });
    }
}
