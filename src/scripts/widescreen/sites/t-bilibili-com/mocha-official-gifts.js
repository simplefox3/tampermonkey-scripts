import { load } from '@/utils/ready-state'
import { sleep } from '@/utils/base'
import { parseToDOM } from '@/utils/dom'
import { $ } from '@/utils/selector'
import styles from './mocha-official-gifts.lazy.scss'

load(async () => {
  const MochaId = '212535360'

  if (location.href.includes('space.bilibili.com/' + MochaId)) {
    youAreNotAlone()
    return
  }

  await sleep(1000)
  const uploader = $('.main-content .user-name a[href]')?.href
  if (!uploader) return
  const isMocha = uploader.match(/\/(\d+)\//)?.[1] === MochaId
  if (!isMocha) return

  youAreNotAlone()
})

function youAreNotAlone() {
  styles.use()
  document.body.append(parseToDOM(strawberry)[0])
}

/*
  墨茶最爱吃的
  🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓
  🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓
  🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓
*/
const strawberry = '<svg class="mocha-strawberry" t="1611323249307" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3471" width="200" height="200"><path d="M799 780c-27.5 27.5-100.4 64.8-188.8 97.1 1.6-0.6 3.3-1.2 4.9-1.8-24.2-40.7-66.3-22.5-91.9-58.4-25.6-35.9 72.6-132.4 10.2-205S403.5 576 348 571.8c-55.5-4.3-114.5-75.2-147.8-120.5-13.9-18.9-20.7-54.3-23.8-89 17.6-41.9 37-78 56.7-104.7 2.6 32.6 19.6 94.1 64.7 102.9 117 23.1 184.3-39.1 256.3-6.8 17.7 7.9 29.5 22.5 38 40.8 13.9 29.6 19.6 68.9 29 105.2 9.2 35.4 21.9 68.1 49.1 86.4 64.5 43.2 132.2 49.4 187.3 9.6 3.9-2.8 7.7-5.8 11.4-9 11.4 86.1-26.6 150.1-69.9 193.3z" fill="#F9724C" p-id="3472"></path><path d="M615.2 875.3c-51.8 19.1-104.7 35.2-158.5 47.7-53.5 12.4-108.3 21.7-163.4 22.7-31 0.6-62.7-1.3-92.6-10 6 1.7 12.9 4.4 19.1 3.7 5-0.6 9.9-1.4 14.8-2.6 10.2-2.4 20.1-6.2 29.4-11.2 21.8-11.6 40.8-29.7 54.5-50.2 22.8-34.3 8.2-74.7-10.6-107.1-26.5-45.7-62.2-85.5-94.1-127.3-14.6-19.1-28.1-37.9-36.5-60.6-8-21.7-12.2-44.6-14.2-67.5-4-44.3-0.3-89.2 6.8-132.9 1-6.2 4.1-12 6.6-17.8 2.4 26.4 5.7 55.1 17.8 79.1 6.1 12 15.4 22.6 23.7 33.1 8.5 10.7 17.3 21.1 26.6 31.1 18 19.5 37.9 38.1 60.9 51.5 11.1 6.5 23.3 11.7 36.1 13.9 13.8 2.3 28 1 41.8-0.4 28-2.9 56.3-7.5 84.2-1 25.6 6 47.4 21.2 64.5 40.7 18 20.5 24.8 46 21.6 73-3.3 27.7-15 53.3-24.8 79.1-4.6 12.2-9.9 25.3-10 38.5-0.2 12.9 8.1 22.7 18.2 29.8 20.4 14.4 48.2 13.2 67 30.7 4.3 4.2 8 8.9 11.1 14z" fill="#ED4233" p-id="3473"></path><path d="M316.5 878.4c-14 19.3-31.6 36.3-52.8 47.5-10.5 5.5-21.8 9.6-33.4 11.9-5.1 1-10.7 2.4-15.8 1.4-6.2-1.2-12.4-3-18.5-4.9-21.7-6.9-41.9-18.1-56.7-35.8-15-18-24.2-40.2-30.3-62.6-13.1-47.9-13.6-99-10.4-148.3 3.3-50.4 11.3-100.5 22.4-149.7 12.4-54.9 29-108.6 49.4-161 0 3.9-1.3 8.2-1.9 12-0.6 4.2-1.2 8.4-1.8 12.7-1.2 8.9-2.2 17.9-3 26.9-1.7 18.9-2.5 37.9-2.1 56.9 0.7 36.2 5.6 73.4 20.5 106.7 7.4 16.5 18 30.7 28.9 45.1 11.1 14.7 22.6 29.2 34 43.6 22.2 28.2 45.1 56.4 63.1 87.5 9.7 16.7 18.3 34.8 21.3 54.1 3.1 19.9-1.1 39.7-12.9 56z" fill="#D10305" p-id="3474"></path><path d="M869 586.6c-21.1 18.3-46.9 30.9-74.7 34.5-28.2 3.6-56.8-1.9-82.9-12.7-24.7-10.3-50-24.3-65.3-47-15.9-23.6-23-52.2-29.3-79.6-6.4-28-11.4-57-22.9-83.5-5.1-11.8-11.8-23-21.1-31.9-9.4-9-21.1-14.6-33.6-18.1-28.7-8-58.4-2.6-87 3.4-29.1 6.1-58.2 12.5-88.1 13.8-15 0.7-30.1 0.1-45.1-1.6-13.7-1.6-27.9-3.3-39.9-10.7-22.2-13.8-34.1-40.2-40.6-64.6-1.8-6.9-3.3-13.8-4.3-20.9-0.4-2.8-1.5-6.5-1.1-9.2 0.3-2.1 1.8-3.4 3.1-5.2 8.7-11.3 18.4-21.5 29-31 21-19 44.3-35.6 70.2-47.1 26.7-11.8 55.6-17.8 84.8-17.3 29.2 0.5 58 7.3 85.2 17.7 54.5 20.9 103 55.3 147.2 92.9 44.4 37.8 86.1 79.6 122.6 125.1 36.3 45.2 68.4 95.7 84.9 151.6 4 13.6 7.1 27.5 8.9 41.4z" fill="#F7B696" p-id="3475"></path><path d="M621.2 499.7c-22.3 2.4-37.4 2.1-37.4 2.1s-10.2-48.5 8.4-107.4c13.9 29.7 19.6 68.9 29 105.3z" fill="#ED4233" p-id="3476"></path><path d="M870.8 606.2c-4.4-3.3-8.8-6.9-13.1-10.5-47.8-40.3-92.7-100.2-92.7-151.8-38.7 38.7-103 51.6-143.7 55.9-9.4-36.4-15.1-75.6-29-105.2 8.5-26.8 22.9-55.8 47.1-83.4-101.2 0-150.5-92.4-178.2-148.6 0.5 0.1 1 0.2 1.4 0.3 1.3 0.3 2.7 0.6 4 0.9 0.6 0.1 1.2 0.3 1.7 0.4 1.6 0.4 3.3 0.8 4.9 1.2 0.5 0.1 1 0.2 1.4 0.4 2 0.5 4.1 1.1 6.2 1.7 0.7 0.2 1.3 0.4 2 0.6 2.1 0.6 4.2 1.3 6.3 1.9 0.7 0.2 1.4 0.4 2.1 0.7 1.1 0.4 2.3 0.8 3.4 1.2 0.8 0.3 1.7 0.6 2.5 0.9 2.6 0.9 5.3 1.9 7.9 2.9 1 0.4 2.1 0.8 3.1 1.2 2.6 1 5.2 2.1 7.8 3.2 1 0.4 2.1 0.9 3.1 1.3 0.2 0.1 0.3 0.1 0.5 0.2 0.9 0.4 1.9 0.8 2.9 1.3 1.4 0.6 2.7 1.2 4.1 1.9 1.2 0.6 2.4 1.1 3.6 1.7 1.2 0.6 2.4 1.1 3.6 1.7 1.3 0.6 2.5 1.2 3.8 1.9 1.1 0.5 2.1 1.1 3.2 1.6 2.6 1.3 5.3 2.8 8 4.2 1.3 0.7 2.5 1.4 3.8 2.1 0.1 0.1 0.3 0.2 0.4 0.2 1.1 0.6 2.3 1.3 3.4 1.9 1.2 0.7 2.4 1.4 3.6 2 0.1 0.1 0.2 0.1 0.2 0.1 2.5 1.5 5.1 3 7.7 4.5 1.4 0.8 2.8 1.7 4.2 2.5 1.2 0.7 2.4 1.5 3.6 2.2 2.6 1.6 5.2 3.3 7.9 5l5.1 3.3c1 0.7 1.9 1.3 2.9 1.9 1.3 0.9 2.7 1.8 4 2.7s2.7 1.9 4 2.8c2.7 1.9 5.4 3.8 8.1 5.8 0.2 0.2 0.4 0.3 0.7 0.5 1.1 0.8 2.3 1.7 3.4 2.5 1.4 1 2.7 2 4.1 3 1.4 1 2.8 2.1 4.1 3.1 1.1 0.9 2.3 1.8 3.4 2.6 0.3 0.2 0.6 0.5 0.9 0.7 1.3 1 2.7 2.1 4 3.1l0.2 0.2c1.3 1.1 2.7 2.1 4 3.2 1.4 1.1 2.8 2.3 4.2 3.4 1.4 1.1 2.7 2.2 4.1 3.3 0.2 0.2 0.4 0.3 0.7 0.5 1.3 1 2.5 2.1 3.8 3.2 1.4 1.2 2.9 2.4 4.3 3.6 1.4 1.2 2.9 2.4 4.3 3.7 1.4 1.2 2.9 2.5 4.3 3.7 1.4 1.3 2.9 2.5 4.4 3.8s2.9 2.6 4.4 3.9c2.9 2.6 5.8 5.2 8.7 7.9 0.1 0.1 0.2 0.2 0.4 0.3 2.7 2.5 5.5 5 8.2 7.6l0.5 0.5c3 2.8 6 5.7 9 8.6 1.4 1.4 2.9 2.8 4.3 4.1l0.3 0.3c2.7 2.6 5.4 5.3 8.2 8l1 1 4.6 4.6c3.5 3.5 7 7.1 10.4 10.6 0.9 0.9 1.7 1.8 2.5 2.6 0.8 0.9 1.7 1.7 2.5 2.6 2.5 2.6 5 5.2 7.4 7.8 0.1 0.1 0.2 0.3 0.4 0.4 1.5 1.6 2.9 3.2 4.4 4.7 1.6 1.7 3.2 3.5 4.7 5.2 0.8 0.9 1.5 1.7 2.3 2.6 2.3 2.5 4.6 5.1 6.8 7.6 0.7 0.8 1.5 1.7 2.2 2.5s1.5 1.7 2.2 2.5c11.4 13.3 21.9 26.2 31.3 38.9 0.6 0.7 1.1 1.5 1.6 2.2 9.3 12.5 17.6 24.7 25 36.6 0.4 0.7 0.9 1.4 1.3 2 0.5 0.7 0.9 1.5 1.4 2.2 0.8 1.3 1.6 2.7 2.4 4 1.7 2.8 3.3 5.5 4.8 8.3 3.1 5.5 6.1 10.9 8.9 16.2 0.7 1.3 1.4 2.7 2 4 1.4 2.7 2.7 5.3 3.9 7.9 0.6 1.2 1.1 2.4 1.7 3.5 0.1 0.3 0.3 0.5 0.4 0.8 0.4 0.8 0.8 1.7 1.1 2.5 0.3 0.6 0.6 1.2 0.8 1.8 0.5 1 0.9 2 1.4 3.1 0.5 1.2 1 2.3 1.5 3.5s1 2.4 1.5 3.5c0.3 0.8 0.6 1.5 0.9 2.3 0.4 0.9 0.7 1.8 1.1 2.7 0.4 1.1 0.9 2.3 1.3 3.4 0.5 1.3 1 2.5 1.4 3.8 0.9 2.5 1.8 5 2.6 7.5 0.4 1.1 0.7 2.2 1.1 3.3 0.1 0.2 0.1 0.3 0.2 0.5 0.4 1.2 0.8 2.4 1.1 3.5v0.1c0.3 0.8 0.5 1.7 0.8 2.5 0.2 0.6 0.4 1.3 0.6 1.9 0.3 1 0.6 1.9 0.8 2.9 0.3 1.2 0.7 2.3 1 3.4 0 0.1 0.1 0.2 0.1 0.4 0.6 2.3 1.2 4.5 1.7 6.7 1.2 4.8 2.2 9.6 3.1 14.3 0.2 1.2 0.4 2.3 0.6 3.5 0.2 1.1 0.4 2.3 0.6 3.4 0.2 1.1 0.4 2.3 0.5 3.4 0.2 1.1 0.3 2.3 0.5 3.4 1 6.5 1.6 13 1.9 19.4z" fill="#F9724C" p-id="3477"></path><path d="M773.1 282.7c56-33.2 84.3-95.3 85.7-98.4 4.1-9.1 0-19.9-9.2-23.9-9.1-4.1-19.9 0-23.9 9.2-0.1 0.2-8.6 19-25.3 40.3-12.6 16-31.9 36-57 47.5C671.9 74.2 523.7 95 427.5 105.7c24.6 45.7 71.7 174.8 191.3 174.8-77.1 88.1-55.5 190.7-55.5 190.7s121.4 1.8 181.1-58c0 84.4 120.2 190.9 176.4 197.9 3-89.4 23.5-269.7-147.7-328.4z" fill="#91AB48" p-id="3478"></path><path d="M800.4 209.8c16.7-21.3 25.2-40.1 25.3-40.3 4.1-9.1 14.8-13.2 23.9-9.1 3 1.3 5.4 3.3 7.2 5.8 0.1-0.2 0.2-0.4 0.2-0.5 3.9-8.8 0-19.1-8.8-23.1-8.8-3.9-19.1 0-23.1 8.8-0.1 0.2-8.3 18.3-24.4 38.8-12.1 15.5-30.8 34.7-54.9 45.8C677 59.6 534.2 79.6 441.6 89.9c2.1 3.9 4.4 8.5 6.9 13.5 95.6-10.3 228.5-16.3 295 154 25-11.6 44.4-31.5 56.9-47.6zM794.1 268c-6.5 5.3-13.5 10.2-21 14.7C868.6 315.4 904.5 386 917 457.5c-6.9-72.9-33.8-150.4-122.9-189.5zM273.4 213.6c-2.8 2.8-5.5 5.8-8.3 9 50.9-46.5 112.7-75.2 190.9-61-4-7.2-7.6-14.2-10.9-20.9-70-4.9-125.6 26.8-171.7 72.9z" fill="#FFFFFF" p-id="3479"></path><path d="M911.2 431c-0.3 24.1-6.3 42-23.5 42-53 0-67.3-87.7-96.7-59s-52.2-18.5-62.4-29.7-63.2 1-90.9-37.8c-27.7-38.7 46-97.9 28.2-130.5S522.4 182.6 551 132.4c7.4-13 23-20.4 41.9-24.1 58.6 16 114.3 56.5 150.5 149 25.1-11.5 44.4-31.5 57-47.5 16.7-21.3 25.2-40.1 25.3-40.3 4.1-9.1 14.8-13.2 23.9-9.1 9.1 4.1 13.2 14.8 9.2 23.9-1.4 3.1-29.7 65.2-85.7 98.4 83.7 28.7 121.6 86.4 138.1 148.3z" fill="#A6BF4C" p-id="3480"></path><path d="M270 213.3c2.9 0 5.8-1.2 7.8-3.3 56.7-56.8 116.8-78.8 183.8-67.4 3.1 1.4 6.8 1.4 9.9-0.3 0.8-0.4 1.5-0.9 2.1-1.5 1.9-1.6 3.3-3.8 3.8-6.5 0.5-2.9-0.1-5.8-1.7-8.2-0.4-0.6-0.9-1.2-1.4-1.7-5.3-9.8-10-19.3-14.2-27.7l-2.1-4.3c-0.8-1.7-1.6-3.3-2.4-4.9 33.6-3.7 77.4-7.8 119-0.6 50.2 8.7 89.4 32.1 119.9 71.4 2 2.7 5.2 4.3 8.7 4.3 2.5 0 4.8-0.8 6.8-2.4 2.3-1.7 3.8-4.3 4.2-7.1 0.4-2.9-0.4-5.9-2.2-8.3-34.2-44.2-78.3-70.2-134.8-79.8-47.6-8-95.4-2.7-133.8 1.7l-5.9 0.7c-3.5 0.3-6.6 2.5-8.5 5.6-1.8 3.1-1.9 7-0.2 10.4l0.1 0.1c2.3 4.2 4.7 9.2 7.5 14.9l3.4 6.9c2 4.1 4.2 8.5 6.5 13.1-66.8-5.8-127.3 19.2-184.1 76l-0.1 0.1c-4.1 4.3-4.1 11.2 0 15.4 2.1 2.2 4.9 3.4 7.9 3.4zM841.6 671.9c-2.5-1.5-5.4-2-8.3-1.3-2.9 0.7-5.3 2.5-6.8 4.9-9.9 16.3-22.3 31.9-36.9 46.5-17.7 17.7-58.5 41.3-111.9 64.7-56.6 24.8-122.5 47.4-185.5 63.6-72.1 18.6-138.1 28.5-191 28.6H300c-59.9 0-102.2-12-125.9-35.6-18.1-18.1-30.8-46.7-37.7-85-6.5-36.1-7.8-79.5-3.7-129.1 7.5-91.4 33-198.3 68.2-286.1 1.2-2.8 1.2-5.8 0-8.5s-3.3-4.8-6-5.9c-2.7-1.1-5.7-1.1-8.4 0-2.7 1.2-4.8 3.3-5.9 6-36 89.7-62.1 199-69.7 292.5-4.2 51.6-2.9 96.9 4 134.8 7.7 42.8 22.4 75.3 43.8 96.7 28 27.9 75.6 42.1 141.4 42.1h0.2l0.4 0.1h0.6c54.8-0.2 122.7-10.4 196.4-29.4 131.1-33.9 266.2-92.8 307.5-134.1 15.9-15.9 29.4-32.9 40.1-50.5 3.1-5.1 1.5-11.8-3.7-15zM913.9 381.1c-9.8-32.5-25.1-60.5-45.4-83-19.4-21.6-43.8-38.9-72.7-51.5 46-35.5 69.1-87.3 69.4-87.9 6.4-14.3-0.1-31.3-14.4-37.7-6.8-3.1-14.6-3.3-21.9-0.6-7 2.7-12.7 8.1-15.8 15v0.1c-0.9 1.8-8.7 18.4-23.1 36.7-10.7 13.7-28.3 32.3-51 42.7-2.7 1.2-4.7 3.5-5.7 6.2-1 2.8-0.9 5.8 0.4 8.4 1.2 2.7 3.5 4.7 6.2 5.7 2.8 1 5.8 0.9 8.4-0.4 26.7-12.3 46.9-33.5 59.1-49.2 15.6-19.9 24.1-37.6 25.8-41.1l0.1-0.1c0.8-1.7 2-2.8 3.6-3.5 1.2-0.5 3-0.8 5 0.1 3.3 1.5 4.7 5.3 3.3 8.6l-0.1 0.2c-4.7 10.1-30.7 61.6-78.3 89.9-3.6 2.2-5.7 6.3-5.3 10.5 0.4 4.3 3.1 7.9 7.4 9.4 34.2 11.7 62.3 29.6 83.4 53.3 18.2 20.3 31.9 45.6 40.8 75.1 16.4 54.7 13.8 115.1 11.9 159.1-0.1 1.9-0.2 3.8-0.2 5.7-11.3-3.7-24.6-10.8-39-20.6-4.9-3.3-11.7-2-15.2 2.9l-0.1 0.1c-3.3 4.9-2 11.7 3 15.2 23.1 15.7 44 25 60.5 27.1h1.3c2.4 0 4.8-0.8 6.8-2.3l0.3-0.2c2.3-1.9 3.7-4.8 3.9-7.9v-0.2c0.1-5.3 0.3-11 0.6-17.1l0.1-2.4c1.8-45.7 4.4-108.2-13.1-166.3z" fill="#934A19" p-id="3481"></path></svg>'
