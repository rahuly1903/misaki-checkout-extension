import {
  TextBlock,
  Text,
  Image,
  View,
  BlockStack,
  reactExtension,
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension("purchase.checkout.block.render", () => (
  <Extension />
));

function Extension() {
  return (
    <View border="base" cornerRadius="base" padding="base" spacing="xtight">
      <BlockStack inlineAlignment="center">
        <Image source="https://cdn.shopify.com/s/files/1/0018/7754/0919/files/linkls_new.jpg?v=1657084397" />
        <View>
          <TextBlock size="large" inlineAlignment="center">
            FREE Worldwide Shipping
          </TextBlock>
          <TextBlock size="large" inlineAlignment="center">
            30 Days product quality guarantee
          </TextBlock>
        </View>
      </BlockStack>
    </View>
  );
}
