import { Link } from 'react-router-dom';

import { ApplicationLayout } from '../components/application-layout.tsx';

function About() {
  return (
    <ApplicationLayout>
      <h1>
        <Link className="app-link" to="/">
          Back Home
        </Link>
      </h1>
      <h2>Hello, i'm a static blocklet</h2>
    </ApplicationLayout>
  );
}

export default About;
