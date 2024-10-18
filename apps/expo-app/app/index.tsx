import React from "react";
import { Button } from "@/design-system/components/Button";

const index = () => {
  return (
    <Button
      onPress={() => {
        console.log("test");
      }}
      label={"Test"}
    />
  );
};

export default index;
