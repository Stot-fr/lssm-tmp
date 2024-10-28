import { useTranslation } from '@lssm/lib-feat.translation';
import Icon from '@lssm/lib-service.icons-kit';
import { Button, ButtonText } from '@lssm/lib-service.ui-kit/ui/button';
import {
  Menu,
  MenuItem,
  MenuItemLabel,
} from '@lssm/lib-service.ui-kit/ui/menu';
import React from 'react';

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng);
  };

  return (
    <Menu
      placement="top"
      offset={5}
      trigger={({ ...triggerProps }) => {
        return (
          <Button {...triggerProps}>
            {/*<Icon as={GlobeIcon} size="sm" className="mr-2" />*/}

            <Icon name="Globe" className="bg-primary-0" />
            <ButtonText>{t('common:i18n.switchLanguage')}</ButtonText>
          </Button>
        );
      }}
      selectionMode="single"
      onSelectionChange={(key) => {
        const isFr = typeof key === 'object' && key.has('fr');
        if (isFr) {
          void changeLanguage('fr');
        } else {
          void changeLanguage('en');
        }
      }}
    >
      <MenuItem key="en" textValue="English">
        {/*<Icon as={GlobeIcon} size="sm" className="mr-2" />*/}
        <MenuItemLabel size="sm">English</MenuItemLabel>
      </MenuItem>
      <MenuItem key="fr" textValue="French">
        {/*<Icon as={GlobeIcon} size="sm" className="mr-2" />*/}
        <MenuItemLabel size="sm">French</MenuItemLabel>
      </MenuItem>
      {/*<MenuItem key="Add account" textValue="Add account">*/}
      {/*  <Icon as={AddIcon} size="sm" className="mr-2" />*/}
      {/*  <MenuItemLabel size="sm">Add account</MenuItemLabel>*/}
      {/*</MenuItem>*/}
      {/*<MenuItem key="Community" textValue="Community">*/}
      {/*  <Icon as={GlobeIcon} size="sm" className="mr-2" />*/}
      {/*  <MenuItemLabel size="sm">Community</MenuItemLabel>*/}
      {/*</MenuItem>*/}
      {/*<MenuItem key="Plugins" textValue="Plugins">*/}
      {/*  <Icon as={PlayIcon} size="sm" className="mr-2" />*/}
      {/*  <MenuItemLabel size="sm">Plugins</MenuItemLabel>*/}
      {/*</MenuItem>*/}
      {/*<MenuItem key="Settings" textValue="Settings">*/}
      {/*  <Icon as={SettingsIcon} size="sm" className="mr-2" />*/}
      {/*  <MenuItemLabel size="sm">Settings</MenuItemLabel>*/}
      {/*</MenuItem>*/}
    </Menu>
  );
};
