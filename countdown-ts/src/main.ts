const SECOND: number = 1000;
const MINUTE: number = SECOND * 60;
const HOUR: number = MINUTE * 60;
const DAY: number = HOUR * 24;

const init = () => {
  const $countdown = document.querySelector('[data-date]');
  if (!$countdown) return;

  const $days = $countdown.querySelector('[data-days]');
  const $hours = $countdown.querySelector('[data-hours]');
  const $minutes = $countdown.querySelector('[data-minutes]');
  const $seconds = $countdown.querySelector('[data-seconds]');

  const timestamp = $countdown.getAttribute('data-date');
  if (!timestamp) return;

  const date = new Date(+timestamp).getTime();

  const updateCountdown = () => {
    const now = Date.now();
    const diff = date - now;

    if ($days instanceof HTMLElement) {
      $days.innerText = Math.floor(diff / DAY).toString();
    }

    if ($hours instanceof HTMLElement) {
      $hours.innerText = Math.floor((diff % DAY) / HOUR).toString();
    }

    if ($minutes instanceof HTMLElement) {
      $minutes.innerText = Math.floor((diff % HOUR) / MINUTE).toString();
    }

    if ($seconds instanceof HTMLElement) {
      $seconds.innerText = Math.floor((diff % MINUTE) / SECOND).toString();
    }
  }

  setInterval(updateCountdown, SECOND);
}

init();

