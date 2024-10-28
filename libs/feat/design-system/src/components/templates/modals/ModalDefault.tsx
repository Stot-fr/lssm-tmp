import { useTranslation } from '@lssm/lib-feat.translation';
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@lssm/lib-service.ui-kit/ui/modal';
import type { MaybeArray } from '@lssm/lib-util.typescript';
import React from 'react';
import { Text } from 'react-native';

import { Button } from '../../atoms/Fields/Button';
import { Heading } from '../../atoms/Heading';

export type ModalDefaultProps = {
  isOpen: boolean;
  onClose: () => void;
  disableClose?: boolean;
  children: MaybeArray<React.ReactNode>;
  textTitle: string;
  textActionNext: string;
};

export const ModalDefault = (props: ModalDefaultProps) => {
  const { t } = useTranslation('common');

  const allowClosing = !props.disableClose;

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      closeOnOverlayClick={allowClosing}
    >
      <ModalBackdrop />
      <ModalContent className="gap-4 bg-secondary-500">
        <ModalHeader>
          <Heading size="lg">{props.textTitle}</Heading>
          <ModalCloseButton />
        </ModalHeader>

        <ModalBody className="gap-4">{props.children}</ModalBody>

        <ModalFooter className="justify-end	">
          {allowClosing && <Button label={t('actions.cancel')} />}
          <Button label={props.textActionNext} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
