import { Link } from 'react-router-dom';

import logo from '../logo.svg';

function Home() {
  return (
    <header>
      <img src={logo} className="h-6 w-6" alt="logo" />
      <div className="btn btn-primary">Test daisyui</div>
      <pre style={{ textAlign: 'left' }}>
        <code>window.blocklet = {JSON.stringify(window.blocklet, null, 2)}</code>
      </pre>
      <Link to="/about">About</Link>
      <a className="app-link" href="https://developer.blocklet.io/docs/" target="_blank" rel="noopener noreferrer">
        Learn Blocklet
      </a>
    </header>
  );
}

export default Home;
