import React from 'react'
import PropTypes from 'prop-types';
import { Link, browserHistory } from 'react-router'
import Sandwich from './Sandwich'

class Listing extends React.Component {

  constructor(props) {
    super(props)
    this.doSearch = this.doSearch.bind(this)
    this.state = { 
      searchQuery: '', 
      sandwiches: [] 
    }
  }

  componentDidMount(){
    var url = 'http://localhost:5000/api/sandwiches'
    var request = new XMLHttpRequest()
    request.open('GET', url)

    request.setRequestHeader('Content-Type', "application/json")
    request.withCredentials = true

    request.onload = () => {
       if(request.status === 200){
        console.log("request: ", request.responseText)
        var data = JSON.parse(request.responseText)
        this.setState( { sandwiches: data } )
       } else{
        console.log("Uh oh you're not logged in!")
        browserHistory.goBack()
       }
    }
    request.send(null)
  }

  doSearch(event){
    this.setState({searchQuery: event.target.value})
  }

  render(){
    return(
      <div className="listing">
        <nav>
          <Link to='/' className='title'>SandwichBay</Link>
          <input className='search-box' type='text' placeholder='Search...' value={this.state.searchQuery} onChange={this.doSearch} />
        </nav>

        <div className='sandwiches-container'>
          {
            this.state.sandwiches.filter((sandwich) => `${sandwich.title} ${sandwich.description}`.toUpperCase().indexOf(this.state.searchQuery.toUpperCase()) >= 0)
             .map((sandwich) => (
              <Sandwich { ...sandwich } key={sandwich.programmeID}/>
            ))

          }
        </div>
      
      </div>
    )
  }

}

export default Listing