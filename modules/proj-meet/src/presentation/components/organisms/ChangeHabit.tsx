import { Button } from '@lssm/lib-service.ui-kit/ui/button';
import { Input, InputField } from '@lssm/lib-service.ui-kit/ui/input';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@lssm/lib-service.ui-kit/ui/modal';
import React from 'react';
import { Text } from 'react-native';

import commonStyles from '../../styles/common';

const ChangeHabit: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>
          <Text style={commonStyles.h3}>Change content</Text>
        </ModalHeader>
        <ModalBody>
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
        </ModalBody>
        <ModalFooter>
          <Button onPress={onClose}>Modify</Button>
          <Button onPress={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ChangeHabit;
