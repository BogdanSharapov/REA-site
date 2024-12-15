import { PropertyModel } from '../models/propertyModel.js';
import { PropertyView } from '../views/propertyView.js';
import { ApiService } from '../services/apiService.js';

//Будет отвечать за обращение к БД (к мок). И связывать БД с UI пользователя
export class PropertyController {
    constructor() {
        this.model = new PropertyModel();
        this.view = new PropertyView();
    }

    init() {
        ApiService.fetchProperties()
            .then(properties => {
                this.model.properties = properties; // Сохраняем данные в модель
                this.view.render(properties); // Отображаем данные на странице
            })
            .catch(error => {
                console.error('Ошибка при загрузке объектов:', error);
            });
    }

    addProperty(property) {
        this.model.addProperty(property); // Добавляем объект в модель
        this.view.render(this.model.getProperties()); // Обновляем представление
    }

    removeProperty(propertyId) {
        this.model.removeProperty(propertyId); // Удаляем объект по ID
        this.view.render(this.model.getProperties()); // Обновляем представление
    }

    searchProperties(criteria) {
        const filteredProperties = this.model.searchProperties(criteria); // Фильтруем по критериям
        this.view.render(filteredProperties); // Отображаем отфильтрованные результаты
    }
}
