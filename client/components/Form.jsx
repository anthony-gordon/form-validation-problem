import React from 'react'
import { connect } from 'react-redux'
import {postUserRequest} from '../actions/emails'
var regEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newUser: {},
            email: '',
            password: '',
            colour: '',
            errorList: [],
        }
    }

    submitUser(e) {
        console.log("submit", this.state.newEmail)
        e.preventDefault()
        const {password, email, colour, animal, tiger_type} = this.state
        if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)) errorLis.push('email')

        if (password.length < 8) errorList.push('password')

        if (colour.length > 0) errorList.push('colour')
        this.setState({
            success: errors.length == 0,
            errors
          })
        if (errorList.length == 0)  
        this.props.dispatch(postUserRequest(this.state.newUser))
    }

    updateEachField(e){
        this.setState({[e.target.name]: e.target.value})
    }

    updateUserDetails(e){
        console.log("update", this.state.newEmail)
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
            <form  onSubmit={this.validationFunction.bind(this)} >
                <h1>Fill Out This Awesome Form</h1>
                <fieldset>
                    <div>
                        <h3>Your Details</h3>
                        <p>
                            <input onChange={this.updateUserDetails.bind(this)} id="email" type='text' placeholder="Email*" name='email'/>
                            <span className="prompt" id="emailid"></span>
                        </p>
                        <p>         
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
                    <p>         
                        <input  type='checkbox' name='animal' value='bear' id='bear'/>
                        <label className="checkbox" htmlFor='bear'>
                            Bear
                        </label>
                        <input  type='checkbox' name='animal' value='tiger' id='tiger'/>
                        <label className="checkbox"htmlFor='tiger'>
                            Tiger
                        </label>
                        <input  type='checkbox' name='animal' value='snake' id='snake'/>
                        <label className="checkbox" htmlFor='snake'>
                            Snake
                        </label>
                        <input  type='checkbox' name='animal' value='donkey' id='donkey'/>
                        <label className="checkbox" htmlFor='donkey'>
                            Donkey
                        </label>
                        <br/>
                        <span className="prompt" id="selectionid"></span>
                    </p>
                    <p>  
                        <input placeholder="Type of tiger (if applicable)" type='text' name='tigername' onChange={this.updateUserDetails.bind(this)} id='tiger_type'/>
                        <br/>
                        <span className="prompt" id="tigerid"></span>
                    </p>
                </fieldset>
                <fieldset>
                    <p>
                        <input  type='submit' value='CREATE ACCOUNT'/>
                    </p>
                </fieldset>
                {/* <button id="sizeUpButton" className="visible" onClick="increaseFontSize()">
                    <h3 className="button-title" >WORDS TOO SMALL? CLICK HERE</h3>
                </button>
                <button id="sizeDownButton" className="invisible" onClick="decreaseFontSize()">
                    <h3 className="button-title">CHANGE WORD SIZE BACK</h3>
                </button> */}
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