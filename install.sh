#/bin/sh
printf 'Type new project folder name\n'
read answer

PROJECT_NAME="$answer"
TEMP_DIR="${PROJECT_NAME}-tmp"

# Проверка существования папки проекта
if [ -d "$PROJECT_NAME" ]; then
  echo "Ошибка: Папка '$PROJECT_NAME' уже существует"
  exit 1
fi

echo "\nСоздание проекта '$PROJECT_NAME'...\n"

echo "\nКлонирование шаблона...\n"
git clone --depth 1 https://github.com/fullalive/node-template.git "$TEMP_DIR"

echo "\nОчистка git-истории...\n"
rm -rf "${TEMP_DIR}/.git"

echo "\nСоздание структуры проекта...\n"
mv "$TEMP_DIR" "$PROJECT_NAME"

echo "\nИнициализация нового git-репозитория...\n"
cd "$PROJECT_NAME" && git init

echo "\nГотово! Проект создан в папке: $PROJECT_NAME\n"
