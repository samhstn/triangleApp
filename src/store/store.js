import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/index.js';

const createStoreWithMiddleware = applyMiddleware()(createStore);
export default createStoreWithMiddleware(reducers)
