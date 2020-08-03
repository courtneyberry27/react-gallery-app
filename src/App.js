//react imports
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';

//component imports
import apiKey from './config';
import PhotoContainer from './components/PhotoContainer';
import Nav from './components/Nav';
import SearchForm from './components/SearchForm';
import Error from './components/Error';



class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      flowers: [],
      waterfalls: [],
      sea: [],
      loading: true
    };
  }

  //FOR SEARCHING AND DEFAULT SHOWS FLOWERS
  performSearch = (query = 'flowers') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });    
  }

  //INITIALLY LOADS ALL THREE OF THE PREMADE OPTION BUTTONS
  componentDidMount() {
    
    //FOR INITIAL STATE
    this.performSearch();
    
    //FLOWERS ARRAY OF PHOTOS LOADS
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=flowers&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState( prevState => ({
          ...prevState,
          flowers: response.data.photos.photo,
          loading: false
        }));
             })
             .catch(error => {
              console.log('Error fetching and parsing data', error);
            });

      //WATERFALLS ARRAY OF PHOTOS LOADS      
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=waterfalls&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState( prevState => ({
          ...prevState,
          waterfalls: response.data.photos.photo,
          loading: false
        }));
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
      
      //SEA ARRAY OF PHOTOS LOADS
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sea&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState( prevState => ({
          ...prevState,
          sea: response.data.photos.photo,
          loading: false
        }));
             })
             .catch(error => {
              console.log('Error fetching and parsing data', error);
            });
  }

  render() {
    return (

      //MAKES SURE LOADING IS DISPLAYED IF LOADING STATE IS TRUE FOR ALL ROUTES
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.performSearch} />
          <Nav />
          <Switch>
            <Route exact path='/' render={ () =>
                (this.state.loading)
                ? <p>Loading...</p>
                : <PhotoContainer data={this.state.photos} />
              }   />
            <Route exact path='/search/:query' render={ () =>
                (this.state.loading)
                ? <p>Loading...</p>
                : <PhotoContainer data={this.state.photos} />
              }    />
            <Route exact path='/flowers' render={ () => 
              (this.state.loading)
                ? <p>Loading...</p>
                : <PhotoContainer data={this.state.flowers} />
            } />
            <Route exact path='/waterfalls' render={ () => 
              (this.state.loading)
                ? <p>Loading...</p>
                : <PhotoContainer data={this.state.waterfalls} />
            } />
            <Route exact path='/sea' render={ () => 
              (this.state.loading)
                ? <p>Loading...</p>
                : <PhotoContainer data={this.state.sea} />
            } />
             <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
