import React from 'react';
import "./Footer.css"

function Footer() {
  return (
    <footer>
      <div className="social-links">
      <p>Follow me on&ensp;</p>
        <a href="https://github.com/asaggse" target="_blank" rel="noreferrer">
          <i class="devicon-github-original"></i>
        </a>
        <a href="https://www.linkedin.com/in/alessandro-saggese/" target="_blank" rel="noreferrer">
          <i class="devicon-linkedin-plain"></i>
        </a>
        <a href="https://twitter.com/asaggese_" target="_blank" rel="noreferrer">
          <i class="devicon-twitter-original"></i>
        </a>
      </div>
      <p className='made-with'>This site was made with: HTML, CSS, JavaScript, and React. </p>
      <p>&copy; Copyright Alessandro Saggese 2023</p>
    </footer>
  );
}

export default Footer;
