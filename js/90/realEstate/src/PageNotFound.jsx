import { NavLink } from 'react-router';
import './PageNotFound.css';

export default function NotFound() {
  return (
    <main className="notfound">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>

      <NavLink to="/" className="home-link">
        Go Back Home
      </NavLink>
    </main>
  );
}
