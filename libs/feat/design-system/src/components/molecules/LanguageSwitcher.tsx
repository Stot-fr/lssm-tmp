// import { GlobeIcon, Icon } from '@lssm/lib-service.ui-kit/ui/icon';
import { useTranslation } from '@lssm/lib-feat.translation';
import Icon from '@lssm/lib-service.icons-kit';
import { Avatar } from '@lssm/lib-service.ui-kit/ui/avatar';
import {
  Menu,
  MenuItem,
  MenuItemLabel,
} from '@lssm/lib-service.ui-kit/ui/menu';
import { Pressable } from '@lssm/lib-service.ui-kit/ui/pressable/index';
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
          <Pressable {...triggerProps}>
            <Avatar className="h-9 w-9">
              <Icon name="Languages" className="stroke-white" />
            </Avatar>

            {/*<ButtonText>{t('common:i18n.switchLanguage')}</ButtonText>*/}
          </Pressable>
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
      <MenuItem key="en" textValue={t('common:i18n.languages.en')}>
        <MenuItemLabel size="sm">{t('common:i18n.languages.en')}</MenuItemLabel>
      </MenuItem>
      <MenuItem key="fr" textValue={t('common:i18n.languages.fr')}>
        <MenuItemLabel size="sm">{t('common:i18n.languages.fr')}</MenuItemLabel>
      </MenuItem>
    </Menu>
  );
};
