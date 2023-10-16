import {
  TextBlock,
  Text,
  reactExtension,
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension("purchase.checkout.block.render", () => (
  <Extension />
));

function Extension() {
  return (
    <TextBlock inlineAlignment="center" size="extraLarge">
      <Text size="extraLarge">Checkout as Guest</Text>
    </TextBlock>
  );
}
