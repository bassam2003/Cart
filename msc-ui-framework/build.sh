rm -rf ./dist
NODE_ENV=production babel src/lib --out-dir dist --copy-files --ignore __tests__,spec.js,test.js,__snapshots__
cp ./temp/package.json ./dist/package.json
NODE_ENV=production npx postcss ./src/style/index.css -p tailwind -o ./dist/global.css
cd ./dist 
npm link