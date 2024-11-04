'use client';

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { UnloggedHomePage } from '@lssm/module.proj-meet/presentation/components/pages/unlogged/UnloggedHomePage';

const Page = () => {
  if ((42 as number) === 42) {
    return (
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    );
  }

  return <UnloggedHomePage />;
};

export default Page;
