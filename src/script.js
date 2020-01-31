const movies = {
  "batman": {
    "id": 'batman',
    "title": "Batman",
    "subtitle": "Batman",
    "description": `The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker, who has seized control of Gotham's underworld.`,
    "largeImgSrc": `url('https://image.tmdb.org/t/p/w780/2blmxp2pr4BhwQr74AdCfwgfMOb.jpg')`,
    "smallImgSrc": 'https://image.tmdb.org/t/p/w185/2blmxp2pr4BhwQr74AdCfwgfMOb.jpg',
    "coverImgSrc": 'https://image.tmdb.org/t/p/original/kBf3g9crrADGMc2AMAMlLBgSm2h.jpg',
    "releaseDate": 'June 19 1989',
    "duration": '2hr 06min',
    "genre": 'Action, Fantasy',
    "trailerPath": 'https://www.youtube.com/embed/dgC9Q0uhX70',
    "favorite": false
  },
  "batman_returns": {
    "id": 'batman_returns',
    "title": "Batman Returns",
    "subtitle": "Batman Returns",
    "description": `Having defeated the Joker, Batman now faces the Penguin—a warped and deformed individual who is intent on being accepted into Gotham society, with the help of Max Schreck, a crooked businessman, whom he coerces into helping him run for the position of Mayor of Gotham, while they both attempt to frame Batman in a different light. Batman must attempt to clear his name, all while also deciding just what must be done with the mysterious Catwoman slinking about..`,
    "largeImgSrc": `url('https://image.tmdb.org/t/p/w780/wNIE5dpkiHU2csDRptMutFjAGiV.jpg')`,
    "smallImgSrc": 'https://image.tmdb.org/t/p/w185/wNIE5dpkiHU2csDRptMutFjAGiV.jpg',
    "coverImgSrc": 'https://image.tmdb.org/t/p/original/jKBjeXM7iBBV9UkUcOXx3m7FSHY.jpg',
    "releaseDate": 'June 19 1992',
    "duration": '2hr 06min',
    "genre": 'Action, Fantasy',
    "trailerPath": 'https://www.youtube.com/embed/TlbtLfWvFbo',
    "favorite": false
  },
  "batman_forever": {
    "id": 'batman_forever',
    "title": "Batman Forever",
    "subtitle": "Batman Forever",
    "description": `The Dark Knight of Gotham City confronts a dastardly duo: Two-Face and the Riddler. Formerly District Attorney Harvey Dent, Two-Face believes Batman caused the courtroom accident which left him disfigured on one side. And Edward Nygma, computer-genius and former employee of millionaire Bruce Wayne, is out to get the philanthropist; as The Riddler. Former circus acrobat Dick Grayson, his family killed by Two-Face, becomes Wayne's ward and Batman's new partner Robin.`,
    "largeImgSrc": `url('https://image.tmdb.org/t/p/w780/gVTTtYgKIBurNvkGiGC6735b8y.jpg')`,
    "smallImgSrc": 'https://image.tmdb.org/t/p/w185/gVTTtYgKIBurNvkGiGC6735b8y.jpg',
    "coverImgSrc": 'https://image.tmdb.org/t/p/original/eTMrHEhlFPHNxpqGwpGGTdAa0xV.jpg',
    "releaseDate": 'June 9 1995',
    "duration": '2hr 01min',
    "genre": 'Action, Fantasy, Crime',
    "trailerPath": 'https://www.youtube.com/embed/b_KllgySsPo',
    "favorite": false
  },
  "batman_and_robin": {
    "id": 'batman_and_robin',
    "title": "Batman & Robin",
    "subtitle": "Batman & Robin",
    "description": `Along with crime-fighting partner Robin and new recruit Batgirl, Batman battles the dual threat of frosty genius Mr. Freeze and homicidal horticulturalist Poison Ivy. Freeze plans to put Gotham City on ice, while Ivy tries to drive a wedge between the dynamic duo.`,
    "largeImgSrc": `url('https://image.tmdb.org/t/p/w780/GesgsgLb2e3q7sKRgRCAQAOrXc.jpg')`,
    "smallImgSrc": 'https://image.tmdb.org/t/p/w185/GesgsgLb2e3q7sKRgRCAQAOrXc.jpg',
    "coverImgSrc": 'https://image.tmdb.org/t/p/original/79AYCcxw3kSKbhGpx1LiqaCAbwo.jpg',
    "releaseDate": 'June 12 1997',
    "duration": '2hr 05min',
    "genre": 'Action, Fantasy, Comedy, Science Fiction',
    "trailerPath": 'https://www.youtube.com/embed/YH9ju47g4x0',
    "favorite": false
  },
  "batman_begins": {
    "id": 'batman_begins',
    "title": "Batman Begins",
    "subtitle": "Batman Begins",
    "description": `Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City. Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.`,
    "largeImgSrc": `url('https://image.tmdb.org/t/p/w780/65JWXDCAfwHhJKnDwRnEgVB411X.jpg')`,
    "smallImgSrc": 'https://image.tmdb.org/t/p/w185/65JWXDCAfwHhJKnDwRnEgVB411X.jpg',
    "coverImgSrc": 'https://image.tmdb.org/t/p/original/dr6x4GyyegBWtinPBzipY02J2lV.jpg',
    "releaseDate": 'June 6 2005',
    "duration": '2hr 20min',
    "genre": 'Action, Crime, Drama', 
    "trailerPath": 'https://www.youtube.com/embed/neY2xVmOfUM',
    "favorite": false
  },
  "the-dark-knight": {
    "id": 'the-dark-knight',
    "title": "The Dark Knight",
    "subtitle": "The Dark Knight",
    "description": `Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.`,
    "smallImgSrc": 'https://image.tmdb.org/t/p/w185/hqkIcbrOHL86UncnHIsHVcVmzue.jpg',
    "largeImgSrc": `url('https://image.tmdb.org/t/p/w780/hqkIcbrOHL86UncnHIsHVcVmzue.jpg')`,
    "coverImgSrc": 'https://image.tmdb.org/t/p/original/pKKvCaL1TPTVtbI6EeliyND3api.jpg',
    "releaseDate": 'July 14 2008',
    "duration": '2hr 32min',
    "genre": 'Drama, Action, Crime, Thriller',
    "trailerPath": 'https://www.youtube.com/embed/kmJLuwP3MbY',
    "favorite": false
  },
  "the-dark-knight-rises": {
    "id": 'the-dark-knight-rises',
    "title": "The Dark Knight Rises",
    "subtitle": "TDKR",
    "description": `Batman encounters the mysterious Selina Kyle and the villainous Bane, a new terrorist leader who overwhelms Gotham's finest. The Dark Knight resurfaces to protect a city that has branded him an enemy.`,
    "smallImgSrc": 'https://image.tmdb.org/t/p/w185/3bgtUfKQKNi3nJsAB5URpP2wdRt.jpg',
    "largeImgSrc": `url('https://image.tmdb.org/t/p/w780/3bgtUfKQKNi3nJsAB5URpP2wdRt.jpg')`,
    "coverImgSrc": 'https://image.tmdb.org/t/p/original/dEYnvnUfXrqvqeRSqvIEtmzhoA8.jpg',
    "releaseDate": 'July 20 2012',
    "duration": '2hr 44min',
    "genre": 'Action, Thriller',
    "trailerPath": 'https://www.youtube.com/embed/g8evyE9TuYk',
    "favorite": false
  },  
  "batman-v-superman": {
    "id": 'batman-v-superman',
    "title": "Batman v Superman",
    "subtitle": "Dawn of Justice",
    "description": `Fearing the actions of a god-like Super Hero left unchecked, Gotham City’s own formidable, forceful vigilante takes on Metropolis’s most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it’s ever known before.`,
    "smallImgSrc": 'https://image.tmdb.org/t/p/w185/8qywm7dggUZOCRtUCasF0nq2iJV.jpg',
    "largeImgSrc": `url('https://image.tmdb.org/t/p/w780/8qywm7dggUZOCRtUCasF0nq2iJV.jpg')`,
    "coverImgSrc": 'https://image.tmdb.org/t/p/original/lQUFeo0oRvtiLKlT5zkQkuCW4jA.jpg',
    "releaseDate": 'March 20 2016',
    "duration": '2hr 31min',
    "genre": 'Action, Adventure, Fantasy',
    "trailerPath": 'https://www.youtube.com/embed/0WWzgGyAH6Y',    
   "favorite": false
  }
}

// 1. Define route components.
const Intro = {
  template: `
    <div class="hero-body" style="background: #1e1d1d">
      <div class="container has-text-centered">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter vertical-align">
            <h1 class="home-intro">
              BatFlix
            </h1>
            <p class="home-subintro">Select a movie below from the list of Batman films.</p>
          </div>
        </div>
      </div>
    </div>`
}

const Movie = {
  template: 
    `<div :class="[{ 'favorite-shadow': selectedMovie.favorite }, 'hero-body']" :style="{ 'background-image': selectedMovie.largeImgSrc }">
        <header class="nav">
          <div class="container">
            <div class="nav-left">
              <a class="nav-item">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </a>
              <router-link to="/" class="nav-item is-active">
                Home
              </router-link>
              <a class="nav-item is-active">
                <span class="tag is-rounded">
                Films
                </span>
              </a>
              
            </div>
            <div class="nav-right desktop">
              <span class="nav-item">
                <router-link to="/"  class="title">
                  BatFlix
                </router-link>
              </span>
            </div>
          </div>
        </header>
        <div class="container description-container">
          <div class="columns">
            <div class="column is-three-quarters">
              <h1 class="title">
                {{ selectedMovie.title }}
              </h1>
              <h4 class="subtitle">
                <p class="subtitle-tag">{{ selectedMovie.duration }} |</p>
                <p class="subtitle-tag">{{ selectedMovie.genre }} |</p>
                <p class="subtitle-tag">{{ selectedMovie.releaseDate }}</p>
              </h4>
              <p class="description">{{ selectedMovie.description }}</p>
              <div class="links">
                <router-link :to="{path: '/' + $route.params.id + '/trailer'}" class="button play-button">Play <i class="fa fa-play"></i></router-link>
                <router-link :to="{path: '/' + $route.params.id + '/cover'}" class="button play-button">Cover <i class="fa"></i></router-link>
                <a class="button is-link favorites-button" @click="addToFavorites(selectedMovie)">
                  <span :class="[{ 'hide': selectedMovie.favorite }]">Add to</span><span :class="[{ 'hide': !selectedMovie.favorite }]">Remove from </span>&nbsp;favorites <i class="fa fa-plus-square-o"></i>
                </a>
                
              </div>
              
            </div>
          </div>
        </div>
    </div>`,
  data () {
    return {
      selectedMovie: movies[this.$route.params.id]
    }
  },
  watch: {
    $route () {
      this.selectMovie()
    }
  },
  methods: {
    selectMovie () {
      this.selectedMovie = movies[this.$route.params.id]
    },
    addToFavorites (selectedMovie) {
      movies[this.$route.params.id].favorite = !movies[this.$route.params.id].favorite
    }
  }
}

const MovieTrailer = {
  template: `
    <div class="trailer-body" style="background: #1e1d1d">
      <div class="has-text-centered">
        <div class="columns">
          <div class="column vertical-align">
            <iframe
              allowFullScreen
              frameborder="0"
              height="590"
              :src="trailerUrlPath"
              style="width: 100%; min-width: 536px"
            />
          </div>
        </div>
      </div>
    </div>`,
  data () {
    return {
      trailerUrlPath: movies[this.$route.params.id].trailerPath
    }
  }
}

const MovieCover = {
  template: `
    <div style="margin: auto;">
      <div>
        <img :src="coverUrlPath" width=380>
      </div>
    </div>`,
  data () {
    return {
      coverUrlPath: movies[this.$route.params.id].coverImgSrc
    }
  }
}



// 2. Define routes
const routes = [
  { path: '/', component: Intro },
  { path: '/:id', component: Movie },
  { path: '/:id/trailer', component: MovieTrailer },
  { path: '/:id/cover', component: MovieCover }
]

const router = new VueRouter({
  routes
})

const rootApp = new Vue({
  el: '#app',
  router: router,
  data () {
    return {
      movieChoices: movies
    }
  },
})