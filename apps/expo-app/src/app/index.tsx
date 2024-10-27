import React from "react";
import { Button } from "@lssm/design-system/components/atoms/Fields/Button";
import { View } from "@lssm/ui-kit/ui/view";

const index = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => {
          console.log("test");
        }}
        label={"Test"}
        startIcon="AlarmClock"
      />
    </View>
  );
};

export default index;