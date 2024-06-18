import * as React from 'react';
import { Link } from 'gatsby';

function NotFoundPage() {
  return (
    <main>
      <h1>Not found</h1>
      <Link to="/">Go home</Link>
    </main>
  );
}

export default NotFoundPage;
