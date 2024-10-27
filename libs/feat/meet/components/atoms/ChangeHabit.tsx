import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '@lssm/ui-kit/ui/button';
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@lssm/ui-kit/ui/modal';
import { Input, InputField } from '@lssm/ui-kit/ui/input';
import styles from '../../style';

const ChangeHabit: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>
          <Text style={styles.h3}>Change content</Text>
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
