const serviceWorker = navigator.serviceWorker;

const registerServiceWorker = async () => {
  if (!serviceWorker) {
    console.error(`サービスワーカーが存在しません。`);
    return;
  }

  try {
    await serviceWorker.register(`service-worker.js`, { scope: `index` });
  } catch (error) {
    console.error(`サービスワーカーの登録に失敗しました。：${error}`);
  }
};

// TODO.
const requestNotification = async () => {
  await window.Notification.requestPermission();
};

document.addEventListener(`DOMContentLoaded`, async () => {
  await requestNotification();
  await registerServiceWorker();
});
