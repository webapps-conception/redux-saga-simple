import 'regenerator-runtime/runtime'
import { store, getUser } from './store'

window.getUser = getUser
window.store = store

/*
 * Cet exercice est à executer dans la console du navigateur :
store.getState()
{userId: 2, user: undefined}
store.dispatch(getUser())
{type: 'getUser'}
saga.js:8 User: {id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv', address: {…}, …}
store.getState()
{userId: 2, user: {…}}
*/
