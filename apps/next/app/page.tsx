"use client";
import { Button } from "@/design-system/components/atoms/Fields/Button";

const Page = () => {
  return (
    <Button
      onPress={() => {
        console.log("test");
      }}
      label={"Test"}
    />
  );
};

export default Page;
