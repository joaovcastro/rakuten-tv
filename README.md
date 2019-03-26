# rakuten-tv
A small frontend clone of rakuten tv's web app.

## Interfaces

### Home
- Home with some lists of movies
![Home](https://image.prntscr.com/image/IIx72eXOSrKwxgwGcghbEA.png)
-  Each list should contain a title and should be scrollable horizontally by clicking on some buttons.

### Movie
![Details](https://i.ibb.co/rdZ8mkc/info-min.pngg)
- Each movie has a detail page. Users can visit this detail page by clicking on the artwork of each movie. 
- There is a button and by clicking this button, users can reproduce the trailer.

- There is a nav bar component that renders either “Rakuten TV” or the title of the movie in case of users visiting any movie.

### Instructions

#### Run in dev mode 

1. clone repository
`git clone https://github.com/joaovcastro/rakuten-tv.git`

2. go to directory
`cd rakuten-tv`

3. install dependencies
`npm install`

4. run locally
`npm start`

### Technologies and Libraries

#### API
This application consumes RakutenTv's public API, with the following verbs

 ##### Get movie list 
`GET /v3/lists/{id}`
 
 ##### Movie
 `GET /v3/movies/{id}`
 
 ##### Trailer
`POST /v3/streamings`

#### Technologies
- React
- Redux
- Webpack
- React router dom

### Libraries
- react-lazyload
- styled-components

### Next steps
- Use recompose (remove states)
- Fix routing issues
- Improve responsiveness
