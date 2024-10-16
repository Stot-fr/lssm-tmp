import React from "react";
import { Button, ButtonText } from "@/ui-kit/ui/button";
import { SafeAreaView } from "@/ui-kit/ui/safe-area-view";
import { VStack } from "@/ui-kit/ui/vstack";

const index = () => {
  return (
    <SafeAreaView className="md:flex flex-col items-center justify-center md:w-full h-full">
      <VStack className="p-2 md:max-w-[440px] w-full" space="xl">
        <Button
          onPress={() => {
            console.log("test");
          }}
        >
          <ButtonText>Test</ButtonText>
        </Button>
      </VStack>
    </SafeAreaView>
  );
};

export default index;
