import { AppUnLoggedLayout } from '../../templates/app/AppUnLoggedLayout';
import { DefaultLandingTemplate } from '../../templates/landing/DefaultLandingTemplate';

export const UnloggedHomePage = () => {
  return (
    <AppUnLoggedLayout>
      <DefaultLandingTemplate />
    </AppUnLoggedLayout>
  );
};
