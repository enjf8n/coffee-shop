# ROSTERY — лендинг городской спешелти-кофейни

Лендинг для портфолио. Чистый HTML5 / CSS3 / vanilla JS, без фреймворков и сборщиков.

## Стек

- HTML5 + семантические теги
- CSS3 — кастомные свойства (CSS variables), Grid + Flexbox, clamp() для типографики, backdrop-filter
- Vanilla JS — IntersectionObserver для fade-in анимаций, лёгкий parallax, sticky-nav, smooth-scroll
- Google Fonts (Cormorant Garamond + Manrope + Caveat)
- Картинки с Unsplash (можно заменить на свои)

## Структура

```
coffee-shop/
├── index.html         # разметка
├── styles.css         # стили
├── script.js          # интерактив
└── README.md
```

## Запуск локально

```bash
cd coffee-shop
python3 -m http.server 8000
# открыть http://localhost:8000
```

## Деплой на GitHub Pages

1. Создать новый публичный репозиторий, например `coffee-shop` или `rostery-coffee`
2. Залить туда содержимое этой папки
3. В настройках репозитория: **Settings → Pages → Source → main branch → / (root)**
4. Через 1-2 минуты сайт будет доступен по адресу `https://<твой-username>.github.io/coffee-shop/`

## Адаптив

- Десктоп — 1024px+
- Планшет — 768-1024px
- Мобильный — до 768px (отдельная вёрстка для меньше 480px)
