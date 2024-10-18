import React from "react";
import {Button} from "@/design-system/components/Button";
import {View} from "@/ui-kit/ui/view";

const index = () => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button
                onPress={() => {
                    console.log("test");
                }}
                label={"Test"}
            />
        </View>
    );
};

export default index;
