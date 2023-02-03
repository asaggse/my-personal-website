import React from 'react';
import "./Footer.css"

function Footer() {
  return (
    <footer>
      <div className="social-links">
      <p>Seguimi su:&ensp;</p>
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
      <p>Copyright &copy; Alessandro Saggese 2023</p>
    </footer>
  );
}

export default Footer;
