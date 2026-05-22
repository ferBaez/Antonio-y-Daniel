import fs from 'fs';
import path from 'path';

// Helper function to recursively copy a folder
const copyDir = (src, dest) => {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    // Skip server files in the static docs folder
    if (entry.name === 'server.cjs' || entry.name === 'server.cjs.map') {
      continue;
    }

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

try {
  console.log('Copying build from ./dist to ./docs...');
  
  if (fs.existsSync('./dist')) {
    // Recreate docs directory
    if (fs.existsSync('./docs')) {
      fs.rmSync('./docs', { recursive: true, force: true });
    }
    fs.mkdirSync('./docs', { recursive: true });

    // Copy built files
    copyDir('./dist', './docs');

    // Ensure .nojekyll is present in docs
    fs.writeFileSync('./docs/.nojekyll', '');

    console.log('Successfully prepared ./docs folder for GitHub Pages branch deployment!');
  } else {
    console.error('Build output "dist" directory not found.');
  }
} catch (err) {
  console.error('Failed to copy build files to docs folder:', err);
}
