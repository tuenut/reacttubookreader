import React from 'react';
import ReactDOM from 'react-dom';

import ContentsPane from './table_of_contents';
import BookContent from './book_content';
import NavigationBar from './navbar';

import * as serviceWorker from './serviceWorker';


function App() {
  return (
    <div className="bg-light">
      <NavigationBar/>
      <div className="container-fluid" >
        <div className="row flex-xl-nowrap">
          <ContentsPane/>
          <main className="col-12 col-md-8 col-xl-8 py-md-3 pl-md-5" role="main">
            <BookContent/>
          </main>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
