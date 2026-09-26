## Введение в экосистему Expo
***Это полноценный фреймворк для React Native, который значительно упрощает и ускоряет разработку кроссплатформенных приложений для Android и iOS***.

## Фреймворк «из коробки» предоставляет:

_Файловый роутинг_ (file-based routing).

Стандартную библиотеку готовых нативных модулей.Активное open-source сообщество на GitHub и Discord.

Помимо фреймворка, существует экосистема EAS (Expo Application Services) — это комплекс облачных сервисов, сопровождающих проект на всех этапах разработки (сборка, отправка в сторы, аналитика).Для новичков: Если вы не умеете или не хотите писать код вручную, Expo поддерживает генерацию приложений с помощью ИИ-агентов через специальный туториал Build with AI.
## Системные требования
***Перед началом работы убедитесь***, что ваша машина соответствует базовым критериям:Node.js: строго LTS-версия (рекомендуемая для долгосрочной поддержки).Операционные системы: поддерживаются macOS, Linux, а также Windows (при использовании Powershell или подсистемы WSL 2).
## Развертывание базового проекта
***Для быстрого старта*** разработчики рекомендуют использовать готовый шаблон по умолчанию, создаваемый утилитой create-expo-app. Он уже содержит базовую архитектуру и примеры кода, чтобы можно было сразу увидеть результат.Выполните одну из следующих команд в терминале в зависимости от предпочитаемого пакетного менеджера:npm: 

```npx create-expo-app@latest```

```pnpm create expo-appbun```

```bun create expo```

Если вам не подходит дефолтная структура, вы можете принудительно выбрать другой шаблон разработки, добавив в конец команды флаг --template.
## Старт на основе готовых примеров (Examples)
***Вы можете начать работу*** с небольших демонстрационных приложений от команды Expo, которые показывают интеграцию конкретных функций (например, камеру или виджеты). Вы можете запустить интерактивный выбор каталога через ```npx create-expo-app@latest --example``` или сразу указать конкретный репозиторий, например ```npx create-expo-app@latest --example with-widgets```.
## Интеграция с AI-агентами и LLM
***Новые проекты Expo*** содержат конфигурационные файлы для ИИ-агентов (AGENTS.md, CLAUDE.md, .claude/settings.json) и поддерживают плагины для интеграции. Настроить их можно через CLI-команды для Claude Code или Codex, либо установив Expo Skills и сервер Expo MCP вручную.
## Следующий шаг
***После инициализации*** проекта переходите к настройке локальной среды разработки (Set up your environment).
# Инструменты для разработки
## Локальная разработка и запускExpo CLI (npx expo) 
Встроенный инструмент командной строки. Автоматически идет с проектом. Нужен для запуска сервера, компиляции и управления зависимостями.npx expo start — запуск сервера разработки.npx expo prebuild — генерация нативных папок /android и /ios.npx expo run:android / run:ios — локальная сборка и запуск нативного приложения.npx expo install <package> — безопасная установка библиотек (подбирает совместимые версии).npx expo lint — проверка кода на ошибки с помощью ESLint (не удаляет файлы).
## Облачные сервисы и десктопные утилитыEAS CLI (eas-cli) — 
Устанавливается глобально ```(npm i -g eas-cli)```. Связывает проект с облаком Expo Application Services (EAS).Функции: сборка приложений в облаке (Build), отправка в App Store / Google Play (Submit), выпуск беспроводных обновлений (Update) и управление сертификатами.Expo Orbit — десктопное приложение (macOS / Windows). Позволяет в один клик устанавливать сборки из облака EAS или локальные файлы (.apk, .app) на симуляторы и реальные устройства.
## Диагностика и редакторыExpo Doctor (npx expo-doctor)
Утилита для проверки здоровья проекта. Сканирует package.json, конфигурации и зависимости на ошибки, выдавая советы по исправлению.Expo Tools для VS Code — плагин для редактора кода. Добавляет автозаполнение (IntelliSense) для файлов конфигурации (app.json, eas.json) и позволяет отлаживать код через точки останова (breakpoints).
## Быстрый старт и прототипирование Expo Snack (snack.expo.dev)
Песочница в браузере. Позволяет писать код на React Native и сразу видеть результат без локальной настройки ПК.Expo Go — мобильное приложение для быстрого тестирования кода по QR-коду. Важно: Подходит только для обучения и прототипов. Для серьезных проектов с кастомным нативным кодом нужно использовать Development Builds.expo-go CLI — утилита для скачивания чистых бинарных файлов Expo Go под нужную версию SDK.
## Поиск библиотекReact Native Directory (reactnative.directory)
Внешняя база данных. Помогает найти проверенные сторонние библиотеки, если нужной функции нет в стандартном Expo SDK.
# Навигация в приложениях Expo и React Native
## Главная особенность
В ядре (Core) React Native нет встроенной навигации (как и камеры, карт или локального хранилища).Навигация всегда реализуется с помощью сторонних библиотек. В индустрии есть два главных стандарта: React Navigation и Expo Router.
## Сравнение подходов
**React Navigation (Классический подход)Принцип работы:** 
Навигация на основе компонентов. Вы описываете экраны и переходы между ними прямо в коде (создавая Stack, Tabs или Drawer навигаторы).Плюсы: Высокая кастомизация, плавные нативные анимации и жесты, проверено годами.Минусы: Требует много шаблонного кода (boilerplate), ручной настройки TypeScript-типов и ручной конфигурации глубоких ссылок (Deep Linking).Вариант Б: Expo Router (Современный файловый подход)Принцип работы: Файловая маршрутизация (как в Next.js). Вы просто создаете файлы в папке /app, и структура папок автоматически становится экранами приложения.Плюсы:Устанавливается по умолчанию во все новые проекты (```npx create-expo-app@latest```).Автоматические диплинки (Deep Links) на основе путей к файлам.Автоматическая генерация типов TypeScript.Поддержка динамических маршрутов (например, файл [id].tsx).Отличная оптимизация под Web (статический рендеринг).

# Обучающее: Использование React Native и Expo
> Введение в учебник по React Native о том, как создать универсальное приложение, которое будет работать на Android, iOS и вебе с помощью Expo.
## О React Native и обучающих материалах по Expo
***В ходе курса будут изучены следующие темы:***

1. Старт и настройка: Создание проекта по умолчанию с полной поддержкой TypeScript.
2. Навигация: Реализация нижних вкладок (Tabs) на два экрана с помощью Expo Router.
3. Верстка: Разбор макета приложения и адаптивная адаптация интерфейса через Flexbox.
4. Работа с медиа: Использование нативных системных диалогов для выбора картинок из галереи устройства.
5. Компоненты React Native: Создание модального окна для стикеров с помощью встроенных элементов <Modal> и <FlatList>.
6. Интерактив: Добавление жестов касания для управления стикерами.
7. Сохранение данных: Интеграция сторонних библиотек для создания скриншотов и сохранения готовых изображений на диск.
8. Кроссплатформенность: Обработка различий в поведении кода на Android, iOS и в браузере.
9. Финальный штрих: Настройка статус-бара, кастомного экрана загрузки (splash screen) и иконки приложения.

### Особенности формата обучения
* Минимум теории, максимум практики: Курс делает упор на реальные действия и написание кода.
* Пошаговая структура: Материал разбит на 9 глав. Вы можете прерваться в любой момент и продолжить позже.
* Интерактивные подсказки: В оригинальном руководстве весь изменившийся или важный код подсвечен зеленым цветом. При нажатии или наведении на него можно увидеть детальное объяснение изменений.
* Открытый код: Полный исходный код готового проекта StickerSmash всегда доступен на GitHub.

### Базовый пример структуры компонента (Index.tsx)
Пример простейшего экрана на React Native, с которого начинается погружение в разработку:

tsx

import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

# Expo Tutorial
## Введение

Речь идёт о разработке приложения **StickerSmash** — оно работает на Android, iOS и в браузере из одного и того же кода. Задача туториала — освоить основной набор инструментов Expo SDK:

- создание проекта на базовом шаблоне с TypeScript;
- навигация через Expo Router (стек экранов + нижние вкладки);
- построение интерфейса на Flexbox;
- выбор фото из системной галереи;
- модальное окно для выбора стикера (`<Modal>` + `<FlatList>`);
- жесты (тап, перетаскивание) для взаимодействия со стикером;
- сохранение результата в виде файла-изображения;
- учёт различий между платформами;
- финальная настройка статус-бара, иконки и заставки.

Стартовый пример, с которого обычно начинают знакомство с React Native:

```tsx
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.wrapper}>
      <Text>Hello world!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
```

---

## Создайте свое первое приложение

Проект создаётся командой `create-expo-app` — она генерирует папку с готовой структурой, где уже настроены Expo Router, TypeScript и поддержка трёх платформ одновременно. Стили в React Native — это не CSS-файлы, а обычные JS-объекты, которые описываются через `StyleSheet.create()`.

### Шаги

1. Создание и запуск проекта:

```bash
npx create-expo-app@latest StickerSmash
cd StickerSmash
npx expo start
```

2. После скачивания архива с картинками — заменить стандартные файлы в `assets/images` своими.

3. Очистка шаблона от демонстрационного кода:

```bash
npm run reset-project
```

После этой команды в `src/app` остаются только `index.tsx` и `_layout.tsx`, а старые файлы переносятся в папку `example`.

4. Правки в стартовом экране:

```tsx
import { Text, View, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Главный экран</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: '#1e2126', alignItems: 'center', justifyContent: 'center' },
  title: { color: '#fff' },
});
```

---

## Добавить навигацию
Expo Router строит маршруты на основе файловой структуры: каждый файл в папке app автоматически становится отдельным экраном. Базовые правила:
* _layout.tsx — общий каркас для дочерних экранов (шапка, табы).
* index.tsx — стартовый экран, соответствует адресу /.
* +not-found.tsx — заглушка для несуществующего маршрута.
* (tabs) — группировка экранов без влияния на URL.

### Стек-навигатор

Компонент `<Stack>` отвечает за переходы вперёд/назад между экранами:

```tsx
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Главная' }} />
      <Stack.Screen name="about" options={{ title: 'О приложении' }} />
    </Stack>
  );
}
```

### Переход между экранами

```tsx
import { Link } from 'expo-router';

<Link href="/about">Перейти на страницу "О приложении"</Link>
```

### Маршрут для 404

Файл `+not-found.tsx` показывает запасной экран, если пользователь попал на несуществующий адрес — вместо аварийного завершения приложения.

### Нижняя панель вкладок

Экраны переносятся в подпапку `(tabs)`, для неё создаётся отдельный layout:

```tsx
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#f2c94c' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Главная',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={22} color={color} />,
        }}
      />
    </Tabs>
  );
}
```

Библиотека `@expo/vector-icons` устанавливается отдельно и содержит сразу несколько популярных наборов значков.

---

## Постройте экран

Экран удобно раскладывать на простые блоки: сверху — изображение, снизу — пара кнопок. Для изображений применяется кроссплатформенный компонент `<Image>` из `expo-image`, который принимает либо локальный файл (`require`), либо адрес в сети (`uri`).

Для кликабельных элементов вместо стандартного `<Button>` обычно берут **`<Pressable>`** — он различает не только простое нажатие, но и долгое удержание, момент "нажато"/"отпущено".

### Показ изображения

```tsx
import { Image } from 'expo-image';

const bgImage = require('@/assets/images/background-image.png');

<Image source={bgImage} style={{ width: 300, height: 400, borderRadius: 16 }} />
```

### Компонент кнопки

```tsx
import { Pressable, Text, View } from 'react-native';

type Props = { label: string; onPress?: () => void };

export default function AppButton({ label, onPress }: Props) {
  return (
    <View>
      <Pressable onPress={onPress} style={{ padding: 12 }}>
        <Text style={{ color: '#fff' }}>{label}</Text>
      </Pressable>
    </View>
  );
}
```

Такие "неэкранные" компоненты выносят в отдельную папку `components`, а не держат внутри `app` — иначе Expo Router попытается воспринять их как отдельные маршруты.

### Второй вариант кнопки (primary)

Чтобы у кнопок был разный внешний вид, добавляют проп-переключатель темы:

```tsx
type Props = { label: string; theme?: 'primary' };

export default function AppButton({ label, theme }: Props) {
  const isPrimary = theme === 'primary';
  return (
    <Pressable style={{ backgroundColor: isPrimary ? '#fff' : 'transparent', borderRadius: 10 }}>
      <Text style={{ color: isPrimary ? '#000' : '#fff' }}>{label}</Text>
    </Pressable>
  );
}
```

---

## Используйте набор изображений

Базовые компоненты React Native не умеют открывать системную галерею — для этого подключается библиотека **`expo-image-picker`**.

```bash
npx expo install expo-image-picker
```

### Выбор фото

Метод `launchImageLibraryAsync` открывает системный интерфейс выбора и возвращает объект с массивом `assets`:

```tsx
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

export default function Index() {
  const [photoUri, setPhotoUri] = useState<string | undefined>();

  const choosePhoto = async () => {
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 1,
    });
    if (!res.canceled) {
      setPhotoUri(res.assets[0].uri);
    } else {
      alert('Изображение не выбрано.');
    }
  };

  // ...остальной JSX
}
```

Если результат `canceled: false`, из `res.assets[0].uri` берётся путь к файлу и сохраняется в состоянии компонента (`useState`). Дальше это значение передаётся в компонент показа изображения — вместо картинки-заглушки отображается уже выбранное фото.

---

## Создайте модаль

`<Modal>` — стандартный компонент React Native для показа контента поверх остального интерфейса. Основные пропсы:

- `visible` — открыта модалка или нет;
- `transparent` — прозрачный фон или на весь экран;
- `animationType` — способ появления (`slide`, `fade`, `none`).

### Компонент модалки

```tsx
import { Modal, View, Text, Pressable } from 'react-native';

type Props = { open: boolean; onClose: () => void; children: React.ReactNode };

export default function StickerPicker({ open, onClose, children }: Props) {
  return (
    <Modal visible={open} transparent animationType="slide">
      <View style={{ backgroundColor: '#25292e', padding: 16 }}>
        <Pressable onPress={onClose}>
          <Text style={{ color: '#fff' }}>Закрыть</Text>
        </Pressable>
        {children}
      </View>
    </Modal>
  );
}
```

### Список стикеров

Для перебора вариантов используется `<FlatList>` — он рендерит только видимые элементы, что экономит ресурсы на больших списках:

```tsx
import { FlatList, Pressable, Image } from 'react-native';

<FlatList
  horizontal
  data={stickers}
  keyExtractor={(_, i) => String(i)}
  renderItem={({ item }) => (
    <Pressable onPress={() => selectSticker(item)}>
      <Image source={item} style={{ width: 90, height: 90 }} />
    </Pressable>
  )}
/>
```

### Показ выбранного стикера

Выбор сохраняется в состоянии (`useState`), а затем рендерится поверх основного изображения отдельным компонентом-наклейкой — условно, только если стикер уже выбран (`pickedSticker && <Sticker .../>`).

---

## Добавить жесты

Для распознавания касаний применяется **React Native Gesture Handler**, а для плавных изменений значений — **Reanimated**. Всё дерево компонентов должно быть обёрнуто в `<GestureHandlerRootView>` — без этого жесты не будут работать.

Центральное понятие Reanimated — «общие значения» (`shared values`), которые можно менять напрямую, минуя обычный цикл рендеринга React.

### Жест двойного тапа (масштаб)

```tsx
import { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

function ResizableSticker({ size }: { size: number }) {
  const scale = useSharedValue(size);

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      scale.value = scale.value === size ? size * 2 : size;
    });

  const style = useAnimatedStyle(() => ({
    width: withSpring(scale.value),
    height: withSpring(scale.value),
  }));

  return (
    <GestureDetector gesture={doubleTap}>
      <Animated.Image source={/* ... */} style={style} />
    </GestureDetector>
  );
}
```

### Жест перетаскивания (pan)

```tsx
const x = useSharedValue(0);
const y = useSharedValue(0);

const pan = Gesture.Pan().onChange((e) => {
  x.value += e.changeX;
  y.value += e.changeY;
});

const wrapperStyle = useAnimatedStyle(() => ({
  transform: [{ translateX: x.value }, { translateY: y.value }],
}));
```

Оба жеста оборачивают нужный элемент компонентом `<GestureDetector gesture={...}>`; при желании несколько жестов комбинируют через `Gesture.Simultaneous()`.

---

## Сделайте скриншот

Чтобы сохранить видимую часть экрана как картинку, используются две библиотеки:

- **`react-native-view-shot`** — делает снимок указанного `<View>`;
- **`expo-media-library`** — сохраняет готовый файл в галерею устройства.

```bash
npx expo install react-native-view-shot expo-media-library
```

### Запрос разрешения

Доступ к медиатеке — чувствительное разрешение, поэтому перед сохранением его нужно запросить:

```tsx
const [permission, requestPermission] = ImagePicker.useMediaLibraryPermissions();

useEffect(() => {
  if (!permission?.granted) requestPermission();
}, []);
```

### Ссылка на область захвата

Область, которую нужно сфотографировать, помечается через `ref` с обязательным параметром `collapsable={false}` — иначе React Native может "схлопнуть" этот `View` при оптимизации, и снимок не получится:

```tsx
const viewRef = useRef<View>(null);
```

### Сохранение

```tsx
const saveResult = async () => {
  try {
    const uri = await captureRef(viewRef, { height: 440, quality: 1 });
    await MediaLibrary.saveToLibraryAsync(uri);
    alert('Сохранено!');
  } catch (e) {
    console.log(e);
  }
};
```

---

## Различия по платформам управления

Не все библиотеки одинаково работают на всех платформах: `react-native-view-shot` рассчитан только на Android и iOS, для веба нужен другой инструмент — **`dom-to-image`**, который превращает DOM-элемент в изображение прямо в браузере.

Определить текущую платформу помогает модуль `Platform` из `react-native` — свойство `Platform.OS` возвращает `'ios'`, `'android'` или `'web'`.

### Ветвление логики по платформе

```tsx
import { Platform } from 'react-native';
import domtoimage from 'dom-to-image';

const saveResult = async () => {
  if (Platform.OS === 'web') {
    const dataUrl = await domtoimage.toJpeg(viewRef.current);
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'result.jpeg';
    link.click();
  } else {
    const uri = await captureRef(viewRef);
    await MediaLibrary.saveToLibraryAsync(uri);
  }
};
```

### Типы для dom-to-image

У библиотеки нет готовых типов для TypeScript, поэтому модуль объявляется вручную в файле `types.d.ts`:

```ts
declare module 'dom-to-image';
```

---

## Настройте строку статуса, заставку и иконку
### Теория

Перед публикацией приложения обычно настраивают три визуальных элемента.

### Статус-бар

Библиотека `expo-status-bar` уже включена в стандартный шаблон, остаётся только задать стиль текста (светлый или тёмный):

```tsx
import { StatusBar } from 'expo-status-bar';

<StatusBar style="light" />
```

### Иконка приложения

Задаётся квадратным файлом `assets/images/icon.png` (1024×1024 px), путь к которому прописан в `app.json` в поле `"icon"`. По умолчанию менять ничего не требуется — достаточно заменить сам файл.

### Заставка (splash screen)

Настраивается через плагин `expo-splash-screen` в `app.json`:

```json
{
  "plugins": [
    ["expo-splash-screen", { "image": "./assets/images/splash-icon.png" }]
  ]
}
```

Важный момент: заставку нельзя увидеть в Expo Go — она отображается только в preview- или production-сборке приложения.

---

## Учебные материалы

После завершения туториала для закрепления материала рекомендуется:

- **React** — основы и хуки (`useState`, `useEffect` и другие) из официальной документации React.
- **React Native** — базовые компоненты (`View`, `Text`), платформенный код, Flexbox-вёрстка, работа со списками.
- **Expo Router** — более глубокое изучение файловой маршрутизации: вложенные группы, модальные маршруты, параметры в адресе.
- **Жесты и анимации** — документация React Native Gesture Handler и React Native Reanimated.
- **Сборка и публикация приложения** — как подготовить и выложить приложение в App Store и Google Play.
- **Отладка** — инструменты для поиска и исправления ошибок во время работы приложения.

