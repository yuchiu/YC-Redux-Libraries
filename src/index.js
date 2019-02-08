import React from 'react'
import ReactDOM from 'react-dom'
import { createStore} from './lib/yc-redux'
import { counter } from './reducers'
import { Provider } from './lib/yc-react-redux';
import Counter from './components/Counter'

const store = createStore(counter)

const App = (<Provider store={store}>
                <Counter />
            </Provider>)
ReactDOM.render(App, document.getElementById('root'))

