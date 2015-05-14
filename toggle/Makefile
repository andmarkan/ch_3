browserify:
	browserify ./app/main.js > ./static/bundle.js

ext:
	browserify -r ./app/main.js:app > ./static/bundle.js

server:
	ss static
