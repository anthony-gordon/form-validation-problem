import React from 'react'
// import { connect } from 'react-redux'
// import Cell from './Cell'
// import {modifyVisibility, createTheBoard, fetchAnimals, clearCellsVisible, moveCellToSolved} from '../actions'


class Form extends React.Component {

    // componentWillReceiveProps(nextProps) {
    //    this.timeout(nextProps)
    //     nextProps.cellvisible.length == 2 && this.checkIfPair(nextProps)
    //     console.log("solced", nextProps.solved.length)
        // this.props.solved.length == 8 && alert("YOU WON!!!!")
    

    // RESEARCH THIS!!!!!!! NEXTPROPS

    // checkIfPair(nextProps) {
    //     console.log("pair?", this.props.cellvisible, nextProps.cellvisible)
    //     if(nextProps.cellvisible[0].text == nextProps.cellvisible[1].text){
            
    //         console.log("theymatch")

    //         this.props.dispatch(moveCellToSolved(nextProps.cellvisible))
    //     } else console.log("theydon't watch")
    // }

    // checkIfGameOver(nextProps){
    //     if(nextProps.solved.length == 16){
    //         alert("YOU WON!!!!")
    //     }
    // }

    // componentDidMount(){
    //     this.props.dispatch(fetchAnimals())
    // }

    // timeout(props) {
        
    //     console.log("clear temp")
    //     if (props.cellvisible.length == 2) {
    //       setTimeout(() => this.clearTemp(), 1000)
    //     } else return
    //   }



    //   clearTemp(){
    //     this.props.dispatch(clearCellsVisible())
    //   }

    // convertArray(){
    //     var arr = this.props.animals
    //     var convertedArray = arr.map(function(el) {
    //         return el.animal
    //     })
    //     return convertedArray
    // }

    // makeArray() {
        
    //     this.props.dispatch(createTheBoard(4, this.convertArray()))
    //     console.log(this.convertArray())
    // }

    // changeVisibility(){
    //     this.props.dispatch(modifyVisibility(this.props.visible))
    // }

    //changVis above is triggered by a button click in the render part. What the function does is it dispatched the action modifyVisibility with the argument "visible".
    // we use this.props.dispatch because everything associated with redux within our component belongs in the props so when we want to use a redux command, we have to preface it with this.props

    render(){
    return (

        <div>
            <form method='post' action='' name="form" onsubmit='return validationFunction()' >
                <h1>Fill Out This Awesome Form</h1>
                <fieldset>
                    <div>
                        <h3>Your Details</h3>
                        <p>
                            <input id="email" type='text' placeholder="Email*" name='email'/>
                            <span className="prompt" id="emailid"></span>
                        </p>
                        <p>         
                            <input placeholder="Password*" id="password" className='error' type='password' name='username'/>
                            <br/>
                            <span className="prompt"  id="passwordid"></span>
                         </p>
                    </div>
                </fieldset>
                <fieldset>
                    <h3>Your Animal</h3>
                    <p>
                        <select name='colour' id='colour' >
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
                        <label className="checkbox" for='bear'>
                            Bear
                        </label>
                        <input  type='checkbox' name='animal' value='tiger' id='tiger'/>
                        <label className="checkbox"for='tiger'>
                            Tiger
                        </label>
                        <input  type='checkbox' name='animal' value='snake' id='snake'/>
                        <label className="checkbox" for='snake'>
                            Snake
                        </label>
                        <input  type='checkbox' name='animal' value='donkey' id='donkey'/>
                        <label className="checkbox" for='donkey'>
                            Donkey
                        </label>
                        <br/>
                        <span className="prompt" id="selectionid"></span>
                    </p>
                    <p>  
                        <input placeholder="Type of tiger (if applicable)" type='text' name='tiger_type' id='tiger_type'/>
                        <br/>
                        <span className="prompt" id="tigerid"></span>
                    </p>
                </fieldset>
                <fieldset>
                    <p>
                        <input  type='submit' value='CREATE ACCOUNT'/>
                    </p>
                </fieldset>
                <button id="sizeUpButton" className="visible" onClick="increaseFontSize()">
                    <h3 className="button-title" >WORDS TOO SMALL? CLICK HERE</h3>
                </button>
                <button id="sizeDownButton" className="invisible" onClick="decreaseFontSize()">
                    <h3 className="button-title">CHANGE WORD SIZE BACK</h3>
                </button>
            </form>
        </div>  

    )
    }
}

// function mapStateToProps(state){     
//     return {
//         visible: state.visible,
//         board: state.board,
//         animals: state.animals,
//         cellvisible: state.cellvisible,
//         solved: state.solvedReducer
//     }
// }
export default 
// connect(mapStateToProps)(
    
    Form
// )