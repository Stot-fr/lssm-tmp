"use client";
import { Button } from "@lssm/libs.feat-design-system/components/Button";

const Page = () => {
  return (
    <>
      <Button
        label="Primary"
        type="primary"
        onPress={() => {
          console.log("hey bitch");
        }}
      />
      <Button
        label="Secondary"
        type="secondary"
        onPress={() => {
          console.log("frites merguez");
        }}
      />
    </>
  );
};

export default Page;
