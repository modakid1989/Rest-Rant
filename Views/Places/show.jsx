const React = require('react')
const Def = require('../default')


function show ({place, id}) {
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
                <p>No comments yet!</p>
              </div>
             </div>
             <div className="card">
              <div className="card-body">
              <a href={`/places/${id}/edit`} className="btn btn-warning"><i class="bi bi-pencil"></i> 
                 Edit
              </a>     
              <form method="POST" action={`/places/${id}?_method=DELETE`}> 
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
