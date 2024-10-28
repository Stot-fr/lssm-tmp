import Icon from '@lssm/lib-service.icons-kit';
import { Alert, AlertText } from '@lssm/lib-service.ui-kit/ui/alert';
import { Center } from '@lssm/lib-service.ui-kit/ui/center';

import { AppUnLoggedLayout } from '../../templates/app/AppUnLoggedLayout';

export const NotFoundPage = () => {
  return (
    <AppUnLoggedLayout title="Home">
      <Center>
        <Alert action="error" variant="solid">
          <Icon name="Info" />
          <AlertText size="xl">Error: page not found</AlertText>
        </Alert>
      </Center>
    </AppUnLoggedLayout>
  );
};
