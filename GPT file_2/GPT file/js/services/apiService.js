export class ApiService {
    static fetchProperties() {
        return fetch('https://675819e460576a194d0ed478.mockapi.io/real-estate') // URL для получения объектов
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка сети');
                }
                return response.json(); // Возвращает данные в формате JSON
            });
    }

    static addProperty(property) {
        return fetch('https://675819e460576a194d0ed478.mockapi.io/real-estate', {
            method: 'POST',
            body: JSON.stringify(property), // Отправляем объект в формате JSON
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => {
            if (!response.ok) {
                throw new Error('Не удалось добавить объект');
            }
            return response.json(); // Возвращаем добавленный объект
        });
    }

    static removeProperty(propertyId) {
        return fetch(`https://675819e460576a194d0ed478.mockapi.io/real-estate/${propertyId}`, {
            method: 'DELETE'
        }).then(response => {
            if (!response.ok) {
                throw new Error('Не удалось удалить объект');
            }
        });
    }
}
