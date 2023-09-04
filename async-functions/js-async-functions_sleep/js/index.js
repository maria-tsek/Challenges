const icon = document.querySelector('[data-js="icon"]');
const button3 = document.querySelector('[data-js="sleep-3-button"]');
const button5 = document.querySelector('[data-js="sleep-5-button"]');
const button10 = document.querySelector('[data-js="sleep-10-button"]');
const body = document.body;

function toggleDarkMode(enable) {
  if (enable) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
}

button3.addEventListener("click", async () => {
  icon.textContent = "💤";
  toggleDarkMode(true);
  await sleep(3);
  toggleDarkMode(false);
  icon.textContent = "⏰";
});

button5.addEventListener("click", async () => {
  toggleDarkMode(true);
  icon.textContent = "💤";
  await sleep(5);
  toggleDarkMode(false);
  icon.textContent = "⏰";
});

async function handleSleepFor10Button() {
  toggleDarkMode(true);
  icon.textContent = "💤";
  await sleep(10);
  toggleDarkMode(false);
  icon.textContent = "⏰";
}

button10.addEventListener("click", handleSleepFor10Button);

// --^-- code here --^--

// returns a Promise that resolves after x seconds
function sleep(seconds) {
  const sleepPromise = new Promise((resolve) => {
    setTimeout(() => resolve(), seconds * 1000);
  });
  return sleepPromise;
}
