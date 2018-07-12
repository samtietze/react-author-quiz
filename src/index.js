import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import registerServiceWorker from './registerServiceWorker';

const authors = [
  { name: 'Mark Twain' },
];

ReactDOM.render(<AuthorQuiz />, document.getElementById('root'));
registerServiceWorker();
