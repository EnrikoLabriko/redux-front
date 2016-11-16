import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import App from './containers/App'
import configureStore from './store/configureStore'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppContainer>
      <App/>
    </AppContainer>
  </Provider>,
  document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
