import SignIn from './SignIn'
import SignUp from './SignUp' 
import SignOut from './SignOut'

///gets URL passed in from Home i.e. url="http://localhost:5000/"
///So you need to define the url which is used in FetchUser...
//could be in User Class

var LoginBox = function(options) {
	this.currentUser = null;
}

LoginBox.prototype = {
	// react:
 // setUser(user){
 //    this.setState({currentUser:user, favlist:[]})
 //  }

  fetchUser(){
    console.log("fetching user")
    const request = new XMLHttpRequest()
    request.open("GET", this.props.url + "users.json")
    request.setRequestHeader("Content-Type", "application/json")
    request.withCredentials = true

    request.onload = () => {
      if (request.status === 200){
        console.log('request.responseText', request.responseText)
        const receivedUser = JSON.parse(request.responseText)
        this.setUser(receivedUser)
      }else if(request.status === 401){
        this.setUser(null)
      }
    }
    request.send(null)
  }

//react:
  componentDidMount(){
    this.fetchUser()
  }
}

export default LoginBox