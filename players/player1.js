import Hls from 'hls.js';
import mux from 'mux-embed';

const player = window.player = document.getElementById('player');

const muxConfig = {
  Hls,
  data: {
    property_key: 'a2chm9ktrjn6v2n6m14k9eadf',
    player_name: 'hls.js',
    player_init_time: Date.now(),
    mux_video_id: 'nHGQIg00LHJ1yKG008cwxBvR49dWdP6olj',
    video_series: 'webinar',
  },
}

if (Hls.isSupported()) {
  const hls = muxConfig.hlsjs = new Hls();

  hls.loadSource('https://stream.mux.com/nHGQIg00LHJ1yKG008cwxBvR49dWdP6olj.m3u8');
  hls.attachMedia(player);
  hls.on(Hls.Events.MANIFEST_PARSED, () => player.play());

} else if (player.canPlayType('application/vnd.apple.mpegurl')) {
  player.src = 'https://stream.mux.com/nHGQIg00LHJ1yKG008cwxBvR49dWdP6olj.m3u8';
  player.addEventListener('canplay', () => player.play());
}

mux.monitor(player, muxConfig);
