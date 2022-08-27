const notification = (title, body) => {
  self.registration.showNotification(title, { body, tag: Math.random() });
};

self.addEventListener(`push`, (event) => {
  notification(`サービスワーカーからのプッシュ通知`, event.data.text());
});
