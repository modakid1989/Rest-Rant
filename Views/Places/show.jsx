const React = require('react')
const Def = require('../default')

function show ({place, id}) {
  let comments = (
    <h3 className="inactive">No comments yet!</h3>
  )
  let rating = (
    <h3 className="inactive">Not yet rated</h3>
  )
  if (place.comments.length) {
    let sumRatings = place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += '⭐️'
    }
    rating = (
      <h3>
        {stars}
      </h3>
    )
    comments = place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant!😡' : 'Rave😻!'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
          {/* { rating } */}
          {/* <form method="POST" action={`/places/${place.id}/comment/${c.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger"><i class="bi bi-trash"></i> Delete Comment</button>
         </form> */}
        </div>
      )
    })
  }
  return (
    <Def>
      <main className="container">          
            <h1>{ place.name }</h1>
            <img src={ place.pic } alt={ place.name } />
            <h3>Located in {place.city}, {place.state}</h3>
          
          <div className="col-md-6">
            <div>
              <h1>Rating:</h1>
              { rating }
            </div>
            
            <div>
              <h1>Description:</h1>
              <h2>{place.showEstablished()}</h2>
              <h3>Serving {place.cuisines}</h3>
            </div>

            <div>
              <div className="comments">
              <h1>Comments:</h1>
              {comments}
             
            </div>
            </div>

            <div>
            <div className="card-body-buttons">
              <div className="newCommentbutton">
              <a href={`/places/${place.id}/comment`} className="blue-btn mt-3"><i class="bi bi-pencil"></i>Add New Comment</a>
              </div>
              <a href={`/places/${place.id}/edit`} className="btn btn-warning text-white mt-3"><i class="bi bi-pencil"></i> Edit Place</a>
              <form method="POST" action={`/places/${place.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger mt-3"><i class="bi bi-trash"></i> Delete Place</button>
              </form>
              </div>
            </div>
          </div>
      </main>
    </Def>
  )
}

module.exports = show


  