"use client";
import { Button, ButtonText } from "@/ui-kit/ui/button";
import { VStack } from "@/ui-kit/ui/vstack";

const Page = () => {
  return (
    <VStack className="m-2" space="xl">
      <Button
        onPress={() => {
          console.log("test");
        }}
      >
        <ButtonText>Test</ButtonText>
      </Button>
    </VStack>
  );
};

export default Page;
