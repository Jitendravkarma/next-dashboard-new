import Seo from '@/shared/layout-components/seo/seo';
import Link from 'next/link';
import { Fragment } from 'react';

export default function NotFound() {
  return (
    <Fragment>
      <html>
        <Seo title={"Page Not Found"}/>
        <body>
          <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
            <h1 className="text-6xl font-bold text-blue-500 mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
            <p className="text-gray-600 mb-6 text-center">
              Oops! The page you are looking for does not exist.
            </p>
            <div>
              <Link href="/">
                <span className="px-6 py-3 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition">
                  Go Back to Home
                </span>
              </Link>
            </div>
          </div>
        </body>
      </html>
    </Fragment>
  );
}
