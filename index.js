const mineflayer = require('mineflayer');

// Подключение к серверу Minecraft
const bot = mineflayer.createBot({
  host: 'AlphaGames35.aternos.me', // IP-адрес сервера
  port: 25565, // Порт сервера (обычно 25565)
  username: 'YourBotUsername', // Имя пользователя бота на сервере
});

// Обработчик события подключения к серверу
bot.on('login', () => {
  console.log('Bot connected to Minecraft server');
});

// Обработчик события ошибки подключения
bot.on('error', (err) => {
  console.error('Error connecting to Minecraft server:', err);
});

// Обработчик события выхода из игры
bot.on('end', () => {
  console.log('Bot disconnected from Minecraft server');
});
