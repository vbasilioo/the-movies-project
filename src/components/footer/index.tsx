import React from 'react';
import Logo from '../logo';
import { Separator } from '../ui/separator';
import facebookLogo from '../../../public/images/facebook-logo.svg';
import twitterLogo from '../../../public/images/twitter-logo.svg';
import instagramLogo from '../../../public/images/instagram-logo.svg';
import Image from 'next/image';
import { LinkPreview } from '../ui/link-preview';
import { PrivacyPolicyDialog } from '../privacy-policy';
import { TermsAndConditionsDialog } from '../terms-condition';

export function Footer() {
  return (
    <div className="bg-primary dark:bg-background px-4 md:px-12 xl:px-28 py-16 space-y-12">
      <Logo color="white" />
      <Separator />
      <div className="flex flex-col gap-20 md:flex-row md:items-center justify-between text-accent dark:text-muted-foreground">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <TermsAndConditionsDialog />

          <PrivacyPolicyDialog />
        </div>

        <div className="flex items-center gap-6">
          <LinkPreview url={'https://facebook.com'}>
            <Image
              src={facebookLogo}
              alt="Facebook logo"
              width={36}
              height={36}
              className="dark:filter dark:brightness-0 dark:invert"
            />
          </LinkPreview>

          <LinkPreview url={'https://x.com'}>
            <Image
              src={twitterLogo}
              alt="Twitter logo"
              width={36}
              height={36}
              className="dark:filter dark:brightness-0 dark:invert"
            />
          </LinkPreview>

          <LinkPreview url={'https://www.instagram.com/vbasilioo/'}>
            <Image
              src={instagramLogo}
              alt="Instagram logo"
              width={36}
              height={36}
              className="dark:filter dark:brightness-0 dark:invert"
            />
          </LinkPreview>
        </div>
      </div>
    </div>
  );
}
