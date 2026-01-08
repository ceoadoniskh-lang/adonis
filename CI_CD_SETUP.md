# CI/CD Setup Guide

## Автоматичний деплой на Firebase

Проект налаштований для автоматичного деплою на Firebase Hosting при пуше в гілку `main` або `master`.

### Налаштування GitHub Actions

**ВАЖЛИВО:** Для роботи CI/CD потрібно налаштувати секрет `FIREBASE_TOKEN` в GitHub.

#### Крок 1: Отримайте Firebase Token

Виконайте наступну команду локально (потрібен встановлений Firebase CLI):

```bash
firebase login:ci
```

Ця команда:
1. Відкриє браузер для авторизації
2. Після успішної авторизації поверне токен, наприклад:
   ```
   1//0abc123def456...
   ```

**Збережіть цей токен!** Він потрібен для наступного кроку.

#### Крок 2: Додайте секрет в GitHub

1. Перейдіть в ваш репозиторій на GitHub
2. Натисніть **Settings** (вгорі справа)
3. В лівому меню виберіть **Secrets and variables** → **Actions**
4. Натисніть **New repository secret**
5. Заповніть форму:
   - **Name:** `FIREBASE_TOKEN` (точно так, як написано)
   - **Secret:** вставте токен з кроку 1
6. Натисніть **Add secret**

#### Крок 3: Перевірка

1. Зробіть будь-який push в гілку `main` (або запустіть workflow вручну)
2. Перейдіть в **Actions** на GitHub
3. Виберіть останній workflow run
4. Перевірте, що всі кроки успішно виконані (зелені галочки)

### Ручний запуск деплою

Ви також можете запустити деплой вручну:
- Перейдіть в **Actions** на GitHub
- Виберіть workflow "Build and Deploy to Firebase"
- Натисніть **Run workflow** (справа вгорі)
- Виберіть гілку та натисніть **Run workflow**

### Ручний запуск деплою

Ви також можете запустити деплой вручну:
- Перейдіть в Actions на GitHub
- Виберіть workflow "Build and Deploy to Firebase"
- Натисніть "Run workflow"

### Майбутній деплой на реальний хостинг

Для додавання деплою на реальний хостинг:

1. Додайте новий job в `.github/workflows/deploy.yml`
2. Налаштуйте секрети для доступу до хостингу
3. Додайте кроки для деплою після успішного деплою на Firebase

Приклад структури:
```yaml
jobs:
  build-and-deploy:
    # ... існуючі кроки ...
    
  deploy-to-production:
    needs: build-and-deploy
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Deploy to Production
        # ... кроки для деплою на реальний хостинг ...
```

