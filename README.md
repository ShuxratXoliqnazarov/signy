# Signy — сайт ЭДО и цифровой подписи

Командный проект. Вёрстка по макету Figma:
https://www.figma.com/design/kLVhw23xA9CpEWjCdxd3IC/Signy----Copy-?node-id=0-1

**Стек:** React 19 + Vite + TypeScript, Tailwind CSS v4, React Router v7, Zod + React Hook Form, Swiper (слайдеры), Prettier, Oxlint.
**Архитектура:** [Feature-Sliced Design](https://feature-sliced.design/ru/).

---

## Запуск

```bash
npm install
npm run dev        # http://localhost:5173
```

| Команда              | Что делает                                 |
| -------------------- | ------------------------------------------ |
| `npm run dev`        | дев-сервер                                 |
| `npm run build`      | проверка типов + сборка                    |
| `npm run lint`       | линтер (oxlint)                            |
| `npm run format`     | Prettier (сортирует и tailwind-классы)     |
| `npm run typecheck`  | только проверка типов                      |

**Перед каждым пушем:** `npm run format && npm run lint && npm run build` — всё должно проходить без ошибок.

---

## Структура (FSD)

Слои сверху вниз. **Импортировать можно только из слоёв НИЖЕ своего.**
`pages → widgets → features → entities → shared`

```
src/
├── app/                  # инициализация: роутер, layout, глобальные стили
│   ├── layouts/MainLayout.tsx   # Header + <Outlet/> + Footer + поп-ап демо
│   ├── router/index.tsx         # все маршруты
│   └── styles/index.css         # Tailwind + дизайн-токены (цвета, шрифт, брейкпоинты)
│
├── pages/                # страницы — только СОБИРАЮТ виджеты, без своей вёрстки блоков
│   ├── home/  blog/  article/  videos/  faq/  about/  contacts/  not-found/
│
├── widgets/              # крупные самостоятельные блоки страниц (секции)
│   ├── header/ footer/ mobile-menu/ subscribe-section/ attention-notice/
│   ├── hero-slider/ advantages/ product-showcase/ tariffs-section/ documents-counter/
│   ├── partners-slider/ articles-section/ video-section/ popular-questions/
│   ├── blog-articles/ seo-text/ article-content/ article-navigation/
│   └── videos-grid/ faq-list/ about-content/ contacts-info/ contacts-map/
│
├── features/             # действия пользователя (формы, переключатели)
│   ├── order-demo/         # поп-ап «Заказать демо» (+ useDemoModal)
│   ├── subscribe/  contact-form/  ask-question/
│   ├── language-switcher/  filter-articles/  share-article/
│
├── entities/             # бизнес-сущности: типы + карточки
│   ├── article/ (ArticleCard, ArticleCardLarge)   video/ (VideoCard)
│   ├── tariff/ (TariffCard)   faq/ (FaqItem)   partner/ (PartnerLogo)
│
└── shared/               # переиспользуемое, ничего не знает о бизнесе
    ├── config/   # ROUTES, NAV_ITEMS, CONTACTS
    ├── lib/      # cn(), общие zod-схемы (email, phone)
    ├── ui/       # UI-kit: Button, Container, Section, Breadcrumbs, PageTitle,
    │             #         Input, Textarea, Modal, Accordion, Tabs, Pagination, PlayButton
    └── assets/   # картинки и иконки из Figma
```

### Устройство слайса

```
widgets/hero-slider/
├── ui/HeroSlider.tsx   # компоненты
├── model/              # типы, схемы, хуки, моки данных (если нужно)
└── index.ts            # публичный API — экспортируем только то, что нужно снаружи
```

Импорт — **только через `index.ts`** слайса и через алиас `@/`:

```ts
import { Button } from '@/shared/ui/button'          // ✅
import { ArticleCard } from '@/entities/article'     // ✅
import { ArticleCard } from '@/entities/article/ui/ArticleCard' // ❌
import { Header } from '../../widgets/header'        // ❌
```

Слайсы одного слоя друг друга **не импортируют** (widget не тянет другой widget). Если нужно общее — опускайте в `entities` / `shared`.

---

## Заглушки

Все блоки уже созданы и подключены на страницы, но пока показывают `<Placeholder />` (пунктирная рамка с названием).
**Ваша задача** — открыть файл своего блока и заменить `<Placeholder />` на вёрстку по макету.
Страницы и роутинг трогать не нужно — блок сразу появится на своём месте.

Уже работают: роутинг всех страниц, временная шапка с навигацией, базовые `Button`, `Container`, `Section`, `Breadcrumbs`, `PageTitle`, `Input`, `Textarea`, открытие/закрытие поп-апа демо.

---

## Что взято из макета (Figma)

**UI-kit лежит во фрейме `Frame 28`** (самый верхний слева): логотип, цвета, кнопки, формы, иконки, табы, пагинация. Начинайте с него.

| Что | Значение | Токен / класс |
|---|---|---|
| Основной синий | `#1064E5` | `bg-primary`, `text-primary` |
| Active кнопок (dark_blue) | `#0046B0` | `bg-primary-dark` |
| Текст и футер | `#061224` (текст с opacity 90%) | `text-dark`, `bg-dark` |
| Вторичный текст (dark_grey) | `#595A5B` | `text-gray` |
| Светло-голубой (карточки тарифов, блок вопросов) | `#DEEEFC` | `bg-sky` |
| Светло-мятный (секции) | `#D8F1F0` | `bg-mint` |
| Ошибка / успех в формах | `#B70101` / `#01B754` | `text-error`, `text-success` |
| Заголовки | IBM Plex Serif 500; h1 десктоп 40/42, планшет 34/48 | `font-serif font-medium` |
| Текст | IBM Plex Sans 400, 16px, line-height 130% | `font-sans` (по умолчанию) |
| Меню и кнопки | IBM Plex Sans 500, 14px, капслок, letter-spacing 19% | `caps` |
| Кнопки | высота 40px, padding 11/32, полностью скруглённые | `<Button>` |
| Поля ввода | высота 50px, полностью скруглённые, рамка 1px синяя | `<Input>` |
| Карточки | скругление 4px | `rounded-card` |
| Ширина | фрейм 1440, контент 1230 (отступы 105px), сетки `12_desck` / `8_tablet` / `4_mob` | `<Container>` |

**Шапка:** телефон ▾ (0 800 750 643, +380 44 334 56 43, +380 44 338 86 43 — Frame 31) · ПРО НАС ▾ (Блог, Видео, Вопросы — Frame 29) · ЦЕНЫ (→ тарифы на главной) · КОНТАКТЫ · [ВХОД] · [РЕГИСТРАЦИЯ] · РУС ▾ (УКР / РУС).
**Футер (`#061224`):** Про нас, Цены, Вход, Регистрация · Блог, Контакты · infosmartsign@smarttender.biz, Facebook · пр-т Миколи Бажана, 14 А, Київ, 02072 + телефоны · © 2020 Signy, Договір оферти, Безпека сервісу.
**Тарифы («Пакеты цифровых подписей»):** Demo — 0 грн/місяць, Business — 1 000 грн/рік, Pro — 9 000 грн/рік, Individual — без цены. Валюта — **гривна**, не сум.
**Телефон в формах:** маска `+38 0XX XXX XX XX`, ошибка «Введи корректный номер телефона».
**Подписка** в макете на **белом** фоне (не на мятном, как в ТЗ); после отправки — состояние «Отлично!» (Frame 37).

Все эти данные уже лежат в `shared/config/site.ts` (`NAV_ITEMS`, `FOOTER_LINKS`, `CONTACTS`, `LANGUAGES`) — берите оттуда, не копируйте руками.

Как смотреть размеры в Figma (файл открыт только на просмотр): выделите элемент с **Ctrl+клик** → справа во вкладке **Properties** будут шрифт, размеры и цвет.

---

## Правила вёрстки

- **Цвета и размеры — только токены** из `src/app/styles/index.css`: `bg-primary`, `bg-sky`, `bg-mint`, `bg-dark`, `text-gray`, `rounded-card`, `caps`… Не пишите `bg-[#1064E5]`. Если нужен новый цвет — добавьте токен и скажите команде.
- **Адаптив:** mobile-first. Брейкпоинты: `md` = 768 (планшет), `lg` = 1024, `xl` = 1440 (десктоп). Без горизонтального скролла.
- **Секции с фоном** — через `<Section bg="mint | sky | white">`.
- **Классы склеивать** через `cn()` из `@/shared/lib`.
- **Ссылки** — `<Link to={ROUTES.BLOG}>`, пути только из `ROUTES`.
- **Формы:** `react-hook-form` + `zodResolver(схема)`. Схемы лежат в `features/*/model/schema.ts`, общие правила — `shared/lib/validation.ts`.
- **Поп-ап демо** из любого места: `const { open } = useDemoModal()`.
- **Слайдеры** — Swiper (`swiper/react`).
- **Картинки** из Figma — в `src/shared/assets/images` (или в `assets` своего слайса, если используется только там). Экспорт — WebP/SVG.
- Имена: компоненты `PascalCase.tsx`, папки слайсов `kebab-case`.

---

## Работа в Git

1. `main` — всегда рабочая. Напрямую в неё не пушим.
2. Своя ветка на задачу: `feat/hero-slider`, `feat/footer`, `fix/header-menu`.
3. Перед PR: `git pull origin main`, `npm run format && npm run lint && npm run build`.
4. Pull Request → ревью хотя бы одного участника → merge.
5. Трогаете **чужой** или **общий** файл (`shared/ui`, `shared/config`, `app/`, токены) — предупредите в чате.

---

## Распределение задач

Отметьте своё имя напротив блока. Ориентир — фреймы в Figma (desktop / `tablet_…` / `m…`).

### 0. Общее / UI-kit (делать первым — от него зависят все)
| Блок | Файл | Кто |
|---|---|---|
| Токены цветов, шрифт, радиусы (сверить с Figma) | `app/styles/index.css` | |
| Button (primary / outline, hover / active / disabled) | `shared/ui/button` | |
| Input, Textarea (+ состояние ошибки) | `shared/ui/input`, `shared/ui/textarea` | |
| Modal, Accordion, Tabs, Pagination, PlayButton | `shared/ui/*` | |
| Breadcrumbs, PageTitle, Section, Container | `shared/ui/*` | |

### 1. Шапка, футер, меню
| Блок | Файл | Кто |
|---|---|---|
| Header + выпадающее подменю | `widgets/header` | |
| LanguageSwitcher | `features/language-switcher` | |
| MobileMenu (tablet — панель, mobile — fullscreen) | `widgets/mobile-menu` | |
| Footer | `widgets/footer` | |
| SubscribeSection + SubscribeForm | `widgets/subscribe-section`, `features/subscribe` | |
| AttentionNotice «Внимание!» | `widgets/attention-notice` | |

### 2. Главная
| Блок | Файл | Кто |
|---|---|---|
| HeroSlider (3 слайда) | `widgets/hero-slider` | |
| Advantages | `widgets/advantages` | |
| ProductShowcase (текст + скриншот) | `widgets/product-showcase` | |
| TariffsSection + TariffCard | `widgets/tariffs-section`, `entities/tariff` | |
| DocumentsCounter (анимация счёта) | `widgets/documents-counter` | |
| PartnersSlider + PartnerLogo | `widgets/partners-slider`, `entities/partner` | |
| ArticlesSection + ArticleCard | `widgets/articles-section`, `entities/article` | |
| VideoSection | `widgets/video-section` | |
| PopularQuestions | `widgets/popular-questions` | |

### 3. Блог и статья
| Блок | Файл | Кто |
|---|---|---|
| ArticleCardLarge (главная статья) | `entities/article` | |
| BlogArticles + ArticlesFilter + пагинация | `widgets/blog-articles`, `features/filter-articles` | |
| SeoText «Подробнее» | `widgets/seo-text` | |
| ArticleContent (2 колонки) | `widgets/article-content` | |
| ShareArticle | `features/share-article` | |
| ArticleNavigation (пред. / след.) | `widgets/article-navigation` | |

### 4. Видео, FAQ, О нас, Контакты, 404, Поп-ап
| Блок | Файл | Кто |
|---|---|---|
| VideosGrid + VideoCard | `widgets/videos-grid`, `entities/video` | |
| FaqList + FaqItem | `widgets/faq-list`, `entities/faq` | |
| AskQuestionForm | `features/ask-question` | |
| AboutContent | `widgets/about-content` | |
| ContactsInfo + ContactForm | `widgets/contacts-info`, `features/contact-form` | |
| ContactsMap | `widgets/contacts-map` | |
| NotFoundPage (иллюстрация с НЛО) | `pages/not-found` | |
| DemoModal + состояние «Готово» | `features/order-demo` | |

---

## Маршруты

| Страница | Путь |
|---|---|
| Главная | `/` |
| Блог | `/blog` |
| Статья | `/blog/:slug` |
| Видеоинструкции | `/videos` |
| Вопросы и ответы | `/faq` |
| О нас | `/about` |
| Контакты | `/contacts` |
| 404 | любой другой путь |
