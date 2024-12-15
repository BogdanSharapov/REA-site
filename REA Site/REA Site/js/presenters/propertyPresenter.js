import { ApiService } from '../services/apiService.js';
import { PropertyModel } from '../models/propertyModel.js';
import { PropertyView } from '../views/propertyView.js';

export class PropertyPresenter {
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
        console.log("PropertyPresenter.addPropert");
        this.model.addProperty(property); // Добавляем объект в модель
        this.view.render(this.model.getProperties()); // Обновляем представление
    }

    removeProperty(propertyId) {
        console.log("PropertyPresenter.removeProperty");
        this.model.removeProperty(propertyId); // Удаляем объект по ID
        this.view.render(this.model.getProperties()); // Обновляем представление
    }

    searchProperties(criteria) {
        const filteredProperties = this.model.searchProperties(criteria); // Фильтруем по критериям
        this.view.render(filteredProperties); // Отображаем отфильтрованные результаты
    }
}
