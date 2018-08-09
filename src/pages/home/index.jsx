import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <p>Go to jobs page to see lazy load feature</p>
      <Link to="/jobs">jobs</Link>
    </div>
  );
}

export default Home;
