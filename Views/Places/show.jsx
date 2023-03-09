const React = require('react')
const Def = require('../default')


function show ({place, id}) {
  let comments = (
    <h3 className ="inactive">No comments yet!</h3>
  )
  let averageRating = Math.round(sumRatings / place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += '⭐️'
    }
    rating = 
      <h3>
          {stars} 
      </h3>
       comments = place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant!😡'  : 'Rave😻!'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
            {/* { rating } */}
          </div>
        )
      })
    
    return 
      
  return (
    <Def>
      <main className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>{ place.name }</h1>
            <img className="img-fluid" src={ place.pic } alt={ place.name } />
            <h3>Located in {place.city}, {place.state}</h3>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
              </div>
            </div>
           <div className="card">
              <div className="card-body">
                <h1>Rating:</h1>
                <p>Not Rated</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h1>Description:</h1>
                <h2>{place.showEstablished()}</h2>
                <h3>Serving {place.cuisines}</h3>
              </div>
            </div>
            <div className="card comments">
              <div className="card-body">
                <h1>Comments:</h1>
                {comments}

<form method ='POST' action={`/places/${place.id}/comment`}>

<div>  
<label htmlFor="author">Author:</label>
<input className='form-control' id="author" name="author"/>
</div> 

<div className='form-group'>
<label htmlFor="content">Content:</label>
<input className='form-control' id='content' name='content' type='textarea' />
</div>

<div className='form-group'>
<label htmlFor='stars'>Star Rating</label>
<input className='form-control' id='stars' name='stars' type='range' step='0.5' min='0' max='5' />
</div>

<div className='form-group'>
<label htmlFor='rant'>Rant</label>
<input  id='rant' name='rant' type='checkbox' defaultChecked/>
</div> 

<button type="submit">Submit</button>
</form>

              </div>
             </div>
             <div className="card">
              <div className="card-body">
              <a href={`/places/${place.id}/edit`} className="btn btn-warning"><i class="bi bi-pencil"></i>  
                 Edit
              </a>     
              <form method="POST" action={`/places/${place.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger"><i class="bi bi-trash"></i>
                  Delete
                </button>
              </form> 
             </div>
            </div>
          </div>
        </div>
      </main>
    </Def>
  )
}

module.exports = show
