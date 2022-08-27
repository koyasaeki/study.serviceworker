const serviceWorker = navigator.serviceWorker;

/**
 * サービスワーカーを登録する.
 */
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

/**
 * PUSH 通知を購読する.

 * @returns サブスクリプション
 */
const subscribe = async () => {
  const worker = await serviceWorker.ready;
  const applicationServerKey = `BDd3_hVL9fZi9Ybo2UUzA284WG5FZR30_95YeZJsiApwXKpNcF1rRPF3foIiBHXRdJI2Qhumhf6_LFTeZaNndIo`;

  return worker.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey,
  });
};

// TODO.
const requestNotification = async () => {
  await window.Notification.requestPermission();
};

/**
 * DOM 読込完了後の処理.
 */
document.addEventListener(`DOMContentLoaded`, async () => {
  await requestNotification();
  await registerServiceWorker();
  const subscription = await subscribe();

  /**
   * ボタンクリック時にプッシュ通知する.
   */
  const btn = document.getElementById("btn");
  btn.addEventListener(`click`, () => {
    fetch("https://web-push-server.vercel.app/api/send", {
      method: "POST",
      body: JSON.stringify({ subscription, payload: { title: `HELLO WORLD` } }),
    });
  });
});
