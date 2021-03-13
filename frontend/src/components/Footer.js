import React from 'react';
import { useHistory } from 'react-router';

export default function Footer() {
  const history = useHistory();

  const handleHomeClick = e => {
    e.preventDefault();
    history.push('/');
  };

  return (
    <footer className="footer">
      <div className="home-footer">
        <a href="/"
           onClick={handleHomeClick}
        >
          Home
        </a>
      </div>
      <div className="github-footer">
        <a href="http://example.com"
           target="_blank"
           rel="noreferrer"
        >
          GitHub Repo
        </a>
      </div>
      <div className="features-footer">
        <a href="http://example.com"
           target="_blank"
           rel="noreferrer"
        >
          Future Features
        </a>
      </div>
      <div className="design-footer">
        <a href="https://docs.google.com/document/d/1bNDlD3cltQWNMKD8wUQqrc_DwlkMb8OiI5BMXg9YKTQ/edit?usp=sharing"
           target="_blank"
           rel="noreferrer"
        >
          Design Document
        </a>
      </div>
    </footer>
  )
}