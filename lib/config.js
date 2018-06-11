const NETWORK_PRESETS = {
  'Good2G': {
    'offline': false,
    'downloadThroughput': 450 * 1024 / 8,
    'uploadThroughput': 150 * 1024 / 8,
    'latency': 150
  },
  'Regular3G': {
    'offline': false,
    'downloadThroughput': 750 * 1024 / 8,
    'uploadThroughput': 250 * 1024 / 8,
    'latency': 100
  },
  'Good3G': {
    'offline': false,
    'downloadThroughput': 1.5 * 1024 * 1024 / 8,
    'uploadThroughput': 750 * 1024 / 8,
    'latency': 40
  },
  'Regular4G': {
    'offline': false,
    'downloadThroughput': 4 * 1024 * 1024 / 8,
    'uploadThroughput': 3 * 1024 * 1024 / 8,
    'latency': 20
  },
  'DSL': {
    'offline': false,
    'downloadThroughput': 2 * 1024 * 1024 / 8,
    'uploadThroughput': 1 * 1024 * 1024 / 8,
    'latency': 5
  },
  'WiFi': {
    'offline': false,
    'downloadThroughput': 30 * 1024 * 1024 / 8,
    'uploadThroughput': 15 * 1024 * 1024 / 8,
    'latency': 2
  },
};

const PORT = 3000;

module.exports = { NETWORK_PRESETS, PORT };
