import { Notify } from 'notiflix/build/notiflix-notify-aio';
export function onError(message) {
  Notify.failure(message, {
    position: 'center-center',
  });
}

export function onSuccess(message) {
  Notify.success(message, {
    position: 'center-center',
  });
}
