import { random, sample } from 'lodash';

const delay = ms => new Promise(res => setTimeout(res, ms));
const player = window.player;

const actions = [
  {
    name: 'seek',
    fun: async () => (
      player.currentTime = random(0, player.duration)
    ),
  },
  {
    name: 'seek',
    fun: async () => (
      player.currentTime = random(player.currentTime, player.duration)
    ),
  },
  {
    name: 'pause:play',
    fun: async () => {
      await player.pause();
      await delay(random(0, 2000));
      return await player.play();
    },
  },
  {
    name: 'pause:play',
    fun: async () => {
      await player.pause();
      await delay(random(0, 1000));
      return await player.play();
    },
  },
  {
    name: 'delay',
    fun: () => delay(random(5000, 15000)),
  },
  {
    name: 'delay',
    fun: () => delay(random(5000, 15000)),
  },
  {
    name: 'trigger-network',
    fun: () => console.log('--network_change--'),
  },
];

const randomAction = async () => {
  const action = sample(actions);
  console.log(`${action.name} -- started.`);
  await action.fun();
  console.log(`${action.name} -- ended.`);
}

(async () => {
  const interval = await setInterval(randomAction, random(3000, 10000));

  player.onended = () => {
    clearInterval(interval);
    console.log('--finished--');
  }
})();
