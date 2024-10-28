import { ModalDefault } from '@lssm/lib-feat.design-system/components/templates/modals/ModalDefault';
import { useTranslation } from '@lssm/lib-feat.translation';
import { Input, InputField } from '@lssm/lib-service.ui-kit/ui/input';
import React from 'react';

export const ChangeHabit: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  return (
    <ModalDefault
      isOpen={isOpen}
      onClose={onClose}
      textTitle="Change content"
      textActionNext={t('common:actions.save')}
    >
      <Input
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="Name" />
      </Input>
      <Input
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="Duration" />
      </Input>
      <Input
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="Ideal Time" />
      </Input>
      <Input
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="Repeat Day" />
      </Input>
      <Input
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="Next Date" />
      </Input>
    </ModalDefault>
  );
};
