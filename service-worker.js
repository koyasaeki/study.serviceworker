const notification = (title, body) => {
  self.registration.showNotification(title, { body });
};

self.addEventListener(`push`, (event) => {
  notification(`サービスワーカーからのプッシュ通知`, `こんにちは、世界！`);
});
