const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9w2n3j',
  e2e: {
    baseUrl: 'http://localhost/'
  },
});
