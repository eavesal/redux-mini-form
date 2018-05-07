import React from 'react'
import {Provider} from 'react-redux'

export default (store) => (getStory) => (
  <Provider store={store}>
    {getStory()}
  </Provider>
)
