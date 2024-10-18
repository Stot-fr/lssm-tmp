"use client";
import { Button } from "@/design-system/components/Button";

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
