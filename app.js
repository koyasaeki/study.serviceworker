const registerServiceWorker = async () => {
  const serviceworker = navigator.serviceWorker;
  if (!serviceworker) {
    console.error(`サービスワーカーが存在しません。`);
    return;
  }

  await serviceworker
    .register(`service-worker.js`, { scope: `index` })
    .then(() => {
      console.log(`サービスワーカーを登録しました。`);
    });
};

document.addEventListener(`DOMContentLoaded`, async () => {
  console.log(`DOM を読込終わりました！`);
  await registerServiceWorker();
});
