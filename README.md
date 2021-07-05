# Решил Дима как-то выполнить тестовое задание
И получил в ответ от тимлида "код можно было оформить проще, контекст и редьюсер там не нужен, тесты не написаны, с тестовым заданием не справился"

# Описание выполненной работы
1. Компонент поддерживает количество шагов от 2 до 5, при не равном условии HOC 'Form' будет выкидывать ошибку;
2. При клике на "поинты" компонент будет переходить строго на один шаг вперед/назад. При клике на 2 поинта вперед, переход будет совершен на один шаг;
3. Написан простенький тест для проверки изменения состояния. Проверяем именно UI, как он реагирует на изменение состояние, ведь нам не важна реализация самого состояния;
4. Добавил кнопочки для навигации. Просто показательный кейс, как атомарный компонент прогресса реагирует на контроль из других компонентов;
5. С "внутрянкой" тимлиды поди разберутся?
Готовый компонент:
![изображение](https://user-images.githubusercontent.com/30467732/124377030-0df0e280-dcd4-11eb-996d-7974aa6ca1f8.png)

# Какие задачи стояли

Make a step progress component.

![alt](https://cloud.githubusercontent.com/assets/123278/24402232/8b001ca2-13af-11e7-9028-c8e46e6f2ccb.png)

### 📖 Spec

- Number of steps is dynamic
- There's a minimum step of two and a maximum of five
- You can't jump over a step
- Write a simple test to check if the state has changed after click

### 🔥 tips

- Make use of ES6
- Use stateless components where possible
- Demostrate the understanding of React components' life cycle
- Enhancing the component with simple animations is a nice to have

### 📦 Deliverables

- Please send the repo URL or a zip file to dmtr.mikheev@gmail.com
- Provide an easy setup `npm install` and `npm start`
- Tell us how much time you spent on the task
