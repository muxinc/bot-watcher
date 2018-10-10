# Headless Player Tests

I cobbled these together for a webinar showing the possibility of using Puppeteer and headless Chrome for testing different aspects of players. The example we went with here is trying to stress different adaptive bitrate algorithms, namely VHS and hlsjs.

This isn't a very scientific test. It's interesting and something that I think has a lot of promise, but don't go run these and think you've found The Truth™.

## Usage

We were using [Hyper cron jobs](https://hyper.sh/) to run the tests, but you can check the specifics out in the `scripts` key under package.json.
