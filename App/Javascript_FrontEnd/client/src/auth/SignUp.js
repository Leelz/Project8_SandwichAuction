var LoginBox = function(options) {
  this.email = options.email
  this.password = options.password
  this.passwordConfirmation = options.passwordConfirmation
}

LoginBox.prototype = {
  signUp(event){
    event.preventDefault()
    const request = new XMLHttpRequest()
    request.open("POST", this.props.url)
    request.setRequestHeader("Content-Type", "application/json")
    request.withCredentials = true
    request.onload = () => {
      if (request.status === 201){
        const user = JSON.parse(request.responseText)
        this.props.onSignUp(user)
      }
    }
    const data = {
      user:{
        email:this.state.email,
        password:this.state.password,
        password_confirmation: this.state.passwordConfirmation
      }
    }
    request.send(JSON.stringify(data))
  }

  handleOnChangeEmail(event) {
    this.setState({email: event.target.value})
  }

  handleOnChangePassword(event) {
    this.setState({password: event.target.value})
  }

  handleOnChangePassConf(event) {
    this.setState({passwordConfirmation: event.target.value})
  }
  
}  

export default SignUp