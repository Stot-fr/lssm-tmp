import Icon from '@lssm/lib-service.icons-kit';
import { Alert, AlertText } from '@lssm/lib-service.ui-kit/ui/alert/index';
import { Center } from '@lssm/lib-service.ui-kit/ui/center';

import { AppUnLoggedLayout } from '../../templates/app/AppUnLoggedLayout';

export const ComingSoonPage = () => {
  return (
    <AppUnLoggedLayout title="Home">
      <Center>
        <Alert action="warning" variant="solid">
          <Icon name="Info" />
          <AlertText size="xl">COMING SOON</AlertText>
        </Alert>
      </Center>
    </AppUnLoggedLayout>
  );
};
