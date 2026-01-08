# CI/CD Setup Guide

## Автоматичний деплой на Firebase

Проект налаштований для автоматичного деплою на Firebase Hosting при пуше в гілку `main` або `master`.

### Налаштування GitHub Actions

1. **Отримайте Firebase Token:**
   ```bash
   firebase login:ci
   ```
   Ця команда поверне токен, який потрібно зберегти як секрет в GitHub.

2. **Додайте секрет в GitHub:**
   - Перейдіть в репозиторій на GitHub
   - Settings → Secrets and variables → Actions
   - Натисніть "New repository secret"
   - Name: `FIREBASE_TOKEN`
   - Value: вставте токен з кроку 1
   - Натисніть "Add secret"

3. **Перевірка:**
   - Зробіть push в гілку `main`
   - Перейдіть в Actions на GitHub
   - Перевірте, що workflow запустився і успішно завершився

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

