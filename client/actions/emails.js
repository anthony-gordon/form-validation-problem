import request from 'superagent'

export const addUser = (user) => {
    return {
        type:'ADD_USER',
        user
    }
}

export function postUserRequest (user) {
    console.log("action", user)
    return (dispatch) => {
      request
        .post('/api/v1')
        .send(user)
        .then(dispatch(addUser(user)))
        .catch(err => {
            dispatch(showError(err.message))
        })
    }
  }