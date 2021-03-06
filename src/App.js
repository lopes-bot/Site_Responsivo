import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  
  constructor(props){
    super(props)
    this.state ={
      photos:[]
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=1').then(res=> res.json())
    .then(json => this.setState({photos: json}))
  }
  
  render() {
    return (
      <div className="container-fluid p-0">
  
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      
          <button className="navbar-toggler" type ="button" data-toggle="collapse"
              data-target="#navbarMainToggle" aria-controls="navbarMainToggle" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button> 
  
          <a className="navbar-brand" href="#"><i className="fas fa-cog"></i>&nbsp; DEV</a>
  
           
  
          <div className="collapse navbar-collapse" id="navbarMainToggle">
  
              <div className="navbar-nav ml-auto pr-3">
              
                <a className="nav-item nav-link" href="#">Home</a>
                <a className="nav-item nav-link" href="#">Channel</a>
                <a className="nav-item nav-link" href="#">Login</a>
              </div>
              <form className="form-inline" >
                <div className="input-group">
                  <div className="input-group-prepend">
                      <span className="input-group-text">@</span>
                  </div>
                  <input type="text" className="form-control" placeholder="Username"></input>
                </div>
                <button className="btn btn-outline-success m-1" type="submit">Login</button>
              </form>
  
          </div>
          
        
      </nav>
  
            <div id="carouselExampleIndicators" className="carousel slide m-2" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
                 <div className="carousel-inner">

                    {
                      this.state.photos.map(photo =>{
                        return(
                          <div className="carousel-item active" key={photo.id}>
                          <img className="d-block w-100 " src={photo.url} alt="First slide"/>

                          </div>
                        );
                      })
                    }
                    
                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
            </div>

        <section className="container p-2">


        
          
                <ul className="list-unstyled">
                {
                  this.state.photos.map(photo=>{
                    return(
                      <div key={photo.id}>
                          <li className="media mt-2">
                            <img src={photo.thumbnailUrl} alt="" className="mr-3"/>
                            <div className="media-body">
                              <h5 className="mt-0 mb-1">{photo.title}</h5>
                            <p>{photo.id}-{photo.albumId}titulo: {photo.title} <br></br> link: {photo.url}</p>
                            </div>
                          </li>
                      </div>
                    )
                  })
                }
                  
                
                </ul>
  
        </section>
  
  
              <footer>
                  <div className=" footer bg-dark text-light text-center">
                  <div className="container col-6 col-lg-4 d-flex pt-3 justify-content-around ">
                      <i className="fab fa-facebook-square"></i>
                      <i className="fab fa-whatsapp-square"></i>
                      <i className="fab fa-linkedin"></i>
                      <i className="fab fa-instagram-square"></i>
          
                  </div>
                  
                </div>
              </footer>
      
        
  
      
  
      </div>
    );
  }
}





