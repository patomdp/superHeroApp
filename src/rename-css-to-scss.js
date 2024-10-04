const fs = require('fs');
const path = require('path');

const directory = './'; // Cambia esto al directorio de tu proyecto

function renameFiles(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) throw err;

    files.forEach(file => {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        renameFiles(fullPath); // Llamar recursivamente
      } else if (file.endsWith('.css')) {
        const newFilePath = fullPath.replace(/\.css$/, '.scss');
        fs.rename(fullPath, newFilePath, err => {
          if (err) throw err;
          console.log(`Renamed: ${fullPath} to ${newFilePath}`);
        });
      }
    });
  });
}

renameFiles(directory);
