import { Button } from '@lssm/lib-feat.design-system/components/atoms/Fields/Button';
import { View } from '@lssm/lib-service.ui-kit/ui/view';
import React from 'react';

const index = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => {
          console.log('test');
        }}
        label={'Test'}
        startIcon="AlarmClock"
      />
    </View>
  );
};

export default index;
