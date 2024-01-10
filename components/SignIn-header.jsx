import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Spinner } from '@nextui-org/react';

function SignInHeader() {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full items-center flex flex-col">
      {showSpinner ? (
        <Spinner className="mt-20" color="blue" size="lg" />
      ) : (
        <>
          <h2 className="text-white justify-center items-center flex text-4xl md:text-xl mt-20">
            You are not logged in
          </h2>
          <h2 className="text-white justify-center items-center flex text-4xl md:text-xl">
            {' '}
            Click
            <Link
              className="flex text-[rgb(10,156,247)] mx-2 border-b-1 border-[rgb(10,156,247)]"
              href="/auth/signin"
            >
              {' '}
              here
            </Link>
            to sign-in
          </h2>
        </>
      )}
    </div>
  );
}

export default SignInHeader;
