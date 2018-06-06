const users = (state = [], action) => {
    // let newState = [...state]
    switch (action.type) {
      
      case 'ADD_USER':
      console.log("reducer", action.user)
        return action.user
        
      default:
        return state
    }
  }
  
  export default users