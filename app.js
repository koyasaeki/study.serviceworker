const registerServiceWorker = async () => {
  const serviceworker = navigator.serviceWorker;
  if (!serviceworker) {
    console.error(`サービスワーカーが存在しません。`);
    return;
  }

  await serviceworker.register(`service-worker.js`, { scope: `index` });
};

document.addEventListener(`DOMContentLoaded`, async () => {
  console.log(`DOM を読込終わりました！`);
  await registerServiceWorker();
});
