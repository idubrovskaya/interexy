import '../../public/index.html';

import '../assets/style.scss';

const button = document.getElementById('button');
button.addEventListener('click', () => {
  const worker = new Worker(new URL('./worker.tsx', import.meta.url));

  const arr1 = Array.from({ length: 100000 }, () =>
    Math.floor(Math.random() * 100000)
  );
  const arr2 = Array.from({ length: 100000 }, () =>
    Math.floor(Math.random() * 100000)
  );

  worker.postMessage({ arr1, arr2 });

  worker.onmessage = messages;
});

function messages(event: { data: any }) {
  console.log(event.data);
}
