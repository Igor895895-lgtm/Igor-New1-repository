const fs = require('fs-extra');

module.exports = (on, config) => {
  on('task', {
    saveUrlsToJson({ filePath, urls }) {
      fs.writeJsonSync(filePath, urls, { spaces: 2 });
      return null;
    },
  });
};