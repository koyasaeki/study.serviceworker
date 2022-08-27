/**
 * コンソールの表示をわかりやすくする.
 */
const url = `https://unpkg.com/@gauntface/logger@3.0.13/build/browser-globals.js`;
importScripts(url);
logger.setPrefix(`service worker`);

const notification = (title, body) => {
  self.registration.showNotification(title, { body, tag: Math.random() });
};

self.addEventListener(`push`, (event) => {
  notification(`サービスワーカーからのプッシュ通知`, event.data.text());
});
