
import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Helmet>
        <title>Page Not Found | Nile Wellness</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>

      <div className="text-center">
        <h1 className="text-6xl font-bold text-nile-600 mb-6">404</h1>
        <h2 className="text-3xl font-medium text-gray-700 mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          We're sorry, the page you requested could not be found.
        </p>
        <Button asChild className="bg-nile-600 hover:bg-nile-700">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
