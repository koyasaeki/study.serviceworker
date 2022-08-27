const registerServiceWorker = async () => {
  const serviceworker = navigator.serviceWorker;
  if (!serviceworker) {
    throw Error(`サービスワーカーが存在しません。`);
    return;
  }

  serviceworker.register(`service-worker.js`, { scope: `/` });
};

await registerServiceWorker();
