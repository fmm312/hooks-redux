import React from 'react';
import CourseList from './CourseList';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store} >
      <CourseList />
    </Provider>
  );
}

export default App;
