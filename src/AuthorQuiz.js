import React, { Component } from 'react';
import logo from './logo.svg';
import './AuthorQuiz.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class AuthorQuiz extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Hero />
        <Turn />
        <Continue />
      </div>
    );
  }
}

export default AuthorQuiz;
