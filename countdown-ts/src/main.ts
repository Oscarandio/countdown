const SECOND: number = 1000;
const MINUTE: number = SECOND * 60;
const HOUR: number = MINUTE * 60;
const DAY: number = HOUR * 24;

const getElement = <T extends HTMLSpanElement>(selector: string): T | null => {
  return document.querySelector<T>(selector);
};

const updateCountdown = (
  days: HTMLElement | null,
  hours: HTMLElement | null,
  minutes: HTMLElement | null,
  seconds: HTMLElement | null,
  date: number
) => {
  const now = Date.now();
  const diff = date - now;

  if (days) {
    days.innerText = Math.floor(diff / DAY).toString();
  }

  if (hours) {
    hours.innerText = Math.floor((diff % DAY) / HOUR).toString();
  }

  if (minutes) {
    minutes.innerText = Math.floor((diff % HOUR) / MINUTE).toString();
  }

  if (seconds) {
    seconds.innerText = Math.floor((diff % MINUTE) / SECOND).toString();
  }
};

const init = () => {
  const $countdown = getElement<HTMLElement>('[data-date]');
  if (!$countdown) return;

  const $days = getElement<HTMLElement>('[data-days]');
  const $hours = getElement<HTMLElement>('[data-hours]');
  const $minutes = getElement<HTMLElement>('[data-minutes]');
  const $seconds = getElement<HTMLElement>('[data-seconds]');

  const timestamp = $countdown.getAttribute('data-date');
  if (!timestamp) return;

  const date = new Date(+timestamp).getTime();

  setInterval(() => {
    updateCountdown($days, $hours, $minutes, $seconds, date);
  }, SECOND);
};

init();
