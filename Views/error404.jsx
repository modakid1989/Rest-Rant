const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
              <img height="300" width="500" src="/images/cassetteTape404.jpg" alt="Cassette Tape 404" />
              <div>
                Photo by <a href="https://unsplash.com/@etiennegirardet">Etienne Girardet</a> <a href="https://unsplash.com/s/photos/404">Unsplash</a>
              </div>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404