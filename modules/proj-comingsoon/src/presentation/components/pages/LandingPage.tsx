import { OnePageTemplate } from '../templates/app/OnePageTemplate';
import { DefaultLandingTemplate } from '../templates/landing/DefaultLandingTemplate';

export const LandingPage = () => {
  return (
    <OnePageTemplate title="Home!">
      <DefaultLandingTemplate />
    </OnePageTemplate>
  );
};
