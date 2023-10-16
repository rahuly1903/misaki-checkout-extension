import {
  View,
  Heading,
  BlockStack,
  TextBlock,
  Text,
  useApi,
  Icon,
  InlineStack,
  useTranslate,
  reactExtension,
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension("purchase.checkout.block.render", () => (
  <Extension />
));

function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();

  return (
    <View border="base" cornerRadius="base" padding="base">
      <BlockStack>
        <Heading level={1} inlineAlignment="center">
          Customer Review
        </Heading>
        <TextBlock size="large">
          I got two boxes and they are just perfect. Purchased the cotton series
          brown contacts. I got my prescription and was skeptical but everything
          went smoothly I can definitely see out of them. Can’t wait to restock!
        </TextBlock>
        <TextBlock inlineAlignment="center">
          <Text size="extraLarge">Rima Renee</Text>
          <InlineStack spacing="tight" inlineAlignment="center">
            <Icon source="success" />
            <Text>Verified Buyer</Text>
          </InlineStack>
        </TextBlock>
      </BlockStack>
    </View>
  );
}
