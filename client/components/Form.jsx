import React from 'react'
import { connect } from 'react-redux'
import {postUserRequest} from '../actions/emails'
var regEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newUser: {},
        }
        this.validationFunction = this.validationFunction.bind(this)
    }

// If the validaion function does not return false, it will be allowed to post the data to the database

    submitUser(e) {
        console.log("submit", this.state.newUser)
        e.preventDefault()
        this.validationFunction()
        if (this.validationFunction() !== false){
            this.props.dispatch(postUserRequest(this.state.newUser))
            window.alert("Thanks for submitting your details!")
        }
        console.log(this.validationFunction()
    )     
    }

// this function updates the 'newUser' part of the state every time something is entered into a field

    updateUserDetails(e){
        console.log("update", this.state.newUser)
        let newUser = this.state.newUser
        newUser[e.target.name] = e.target.value
        this.setState({newUser})
    } 

 validationFunction(){
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value;
    var colour = document.getElementById("colour").value;
    var bear = document.getElementById("bear")
    var tiger = document.getElementById("tiger")
    var snake = document.getElementById("snake")
    var donkey = document.getElementById("donkey")
    var tigerType = document.getElementById("tiger_type")

//The following if/else statement evaluates whether the text entered into the field is a valid email address using a regular expression & prompts the user to fix it if it is not a valid email address

if(!regEx.test(email)){   
    document.getElementById("emailid").innerHTML = "Please enter a valid email address";
    document.getElementById("emailid").parentElement.classList.add('error')
    return false
}
else 
    
    document.getElementById("emailid").innerHTML = "";
    document.getElementById("emailid").parentElement.classList.remove('error');

// This if/else statement evaluates whether the text entered into the field is shorter than 8 characters and if it is, a prompt is sent to the user to make it longer

    if(password.length < 8){
        document.getElementById("passwordid").innerHTML = "Please enter a password of at least 8 characters";
        document.getElementById("passwordid").parentElement.classList.add('error')
        return false
    }
    else 
        document.getElementById("passwordid").innerHTML = "";
        document.getElementById("passwordid").parentElement.classList.remove('error');

// The following if/else statement  evaluates whether the value of the 'colour' field has a value or not. If it indeed has no value, the user is prompted to choose one.

if(colour == "") {
    document.getElementById("colourid").innerHTML = "Please choose a colour";
    document.getElementById("colourid").parentElement.classList.add('error')   
    console.log(document.getElementById("colourid").parentElement.classList)  
    return false
}
else 
    document.getElementById("colourid").innerHTML = "";
    document.getElementById("colourid").parentElement.classList.remove('error');

// The following if/else statement  evaluates whether the user has selected at least two animals. This is a kind of a clumsy/hacky solution and could definately do with some re-tooling but for the current code, it does the job.

    if(
    (bear.checked == false && tiger.checked == false && snake.checked == false && donkey.checked ==false)
    || (bear.checked == false && tiger.checked == false && snake.checked == false) 
    || (bear.checked == false && tiger.checked == false && donkey.checked == false) 
    || (bear.checked == false && donkey.checked == false && snake.checked == false) 
    || (donkey.checked == false && tiger.checked == false && snake.checked == false)){
        console.log(document.getElementById("selectionid").parentElement.classList) 
        document.getElementById("selectionid").innerHTML = "Please choose two options";
        document.getElementById("selectionid").parentElement.classList.add('error')
        return false
    }
    else 
        document.getElementById("selectionid").innerHTML = "";
        document.getElementById("selectionid").parentElement.classList.remove('error');

// The following if/else statement evaluates whether anything has been entered into the field. It uses a regular expression to account for white space, so if a user just taps the space bar a number of times, the form will not be able to submit and they will be met with the prompt to enter a valid name.

    if(tiger.checked == true && tigerType.value.replace(/\s/g, '').length == 0){
        document.getElementById("tigerid").innerHTML = "Please give your tiger a name";
        return false
    }
    else document.getElementById("tigerid").innerHTML = "";
   
}

    render(){
    return (
        <div>
            <form  onSubmit={this.submitUser.bind(this)} >
                <h1>Fill Out This Awesome Form</h1>
                <fieldset>
                    <div>
                        <h3>Your Details</h3>
                        <p>
                            <input onChange={this.updateUserDetails.bind(this)} id="email" type='text' placeholder="Email*" name='email'/>
                            <span className="prompt" id="emailid"></span>
                        </p>
                        <p id="passowordfield">         
                            <input onChange={this.updateUserDetails.bind(this)}placeholder="Password*" id="password" className='error' type='password' name='password'/>
                            <br/>
                            <span className="prompt"  id="passwordid"></span>
                         </p>
                    </div>
                </fieldset>
                <fieldset>
                    <h3>Your Animal</h3>
                    <p>
                        <select onChange={this.updateUserDetails.bind(this)} name='colour' id='colour' >
                            <option value=''>Choose colour*</option>
                            <option value='blue'>Blue</option>
                            <option value='green'>Green</option>
                            <option value='red'>Red</option>
                            <option value='black'>Black</option>
                            <option value='brown'>Brown</option>
                        </select>
                        <br/>
                        <span className="prompt" id="colourid"></span>
                    </p>
                    <div id="checkboxes">         
                        <input onChange={this.updateUserDetails.bind(this)} type='checkbox' name='bear' value='selected' id='bear'/>
                        <label className="checkbox" htmlFor='bear'>
                            Bear
                        </label>
                        <input onChange={this.updateUserDetails.bind(this)} type='checkbox' name='tiger' value='selected' id='tiger'/>
                        <label className="checkbox"htmlFor='tiger'>
                            Tiger
                        </label>
                        <input onChange={this.updateUserDetails.bind(this)} type='checkbox' name='snake' value='selected' id='snake'/>
                        <label className="checkbox" htmlFor='snake'>
                            Snake
                        </label>
                        <input onChange={this.updateUserDetails.bind(this)} type='checkbox' name='donkey' value='selected' id='donkey'/>
                        <label className="checkbox" htmlFor='donkey'>
                            Donkey
                        </label>
                        <br/>
                        <span className="prompt" id="selectionid"></span>
                    </div>
                    <p className="tiger">  
                        <input placeholder="Type of tiger (if applicable)" type='text' name='tigername' onChange={this.updateUserDetails.bind(this)} id='tiger_type'/>
                        <br/>
                        <span className="prompt" id="tigerid"></span>
                    </p>
                </fieldset>
                <fieldset>
                    <p>
                        <input  id="submitbutton" type='submit' value='CREATE ACCOUNT'/>
                    </p>
                </fieldset>
                
            </form>
        </div>  
    )
    }
}

function mapStateToProps(state){     
    return {
    }
}
export default 
connect(mapStateToProps)(Form)