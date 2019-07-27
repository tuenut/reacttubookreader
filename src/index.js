import React from 'react';
import ReactDOM from 'react-dom';

import ContentsPane from './table_of_contents';
import BookContent from './book_content';

import * as serviceWorker from './serviceWorker';


function App() {
  return (
    <div className="d-flex justify-content-center">
      <header className="w-25 d-none d-md-flex">
        <ContentsPane/>
      </header>
      <main role="main" className="ml-4 w-100">
        <BookContent/>
      </main>
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
