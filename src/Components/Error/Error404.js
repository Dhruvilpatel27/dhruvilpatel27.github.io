import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Error404.css';

const Error404 = () => (
  <section className="page-section error-page">
    <Helmet>
      <title>Page not found · Dhruvil Patel</title>
    </Helmet>
    <p className="eyebrow">404</p>
    <h1 className="error-title">This page doesn&apos;t exist.</h1>
    <Link className="btn btn-primary" to="/">Back to the homepage</Link>
  </section>
);

export default Error404;
