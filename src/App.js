import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import './App.css';
import SearchBar from './components/SearchBar';
import VideoDetails from './components/VideoDetails';
import VideoList from './components/VideoList';
import youtube from './api/youtube'


class App extends Component {

  state = { videos: [], selectedVideo: null }

  // Default search to display when app first loads
  componentDidMount(){
    const defaultSearchTerm='most beautiful waterfalls'
    this.handleTermSubmit(defaultSearchTerm)
  }

  // Call to YT API with search term in params
  handleTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: { q: term }
    })
    this.setState({
      // list of videos retrieved from API to be sent down to VideoList component
      videos: response.data.items,
      // by default, we display the first video in the list inside the iframe
      selectedVideo: response.data.items[0]
    })
  }

  // Displays selected video in iframe
  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className='ui container'>
        <SearchBar handleFormSubmit={this.handleTermSubmit} />
        {this.state.videos.length} video(s) found.
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetails
                video={this.state.selectedVideo}
              />
            </div>
            <div className='five wide column'>
              <VideoList
                videos={this.state.videos}
                handleVideoSelect={this.handleVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
