import videojs from 'video.js';
import vhs from '@videojs/http-streaming';
import 'videojs-mux';

const initTime = Date.now();

const player = window.player = document.getElementById('player');

const vjsPlayer = videojs(player, {
  plugins: {
    mux: {
      data: {
        property_key: 'a2chm9ktrjn6v2n6m14k9eadf',
        player_name: 'video.js | vhs',
        player_init_time: initTime,
        mux_video_id: 'nHGQIg00LHJ1yKG008cwxBvR49dWdP6olj',
        video_series: 'webinar',
      },
    }
  }
});

vjsPlayer.src({
  src: 'https://stream.mux.com/nHGQIg00LHJ1yKG008cwxBvR49dWdP6olj.m3u8',
  type: 'application/x-mpegURL',
});

vjsPlayer.play();
