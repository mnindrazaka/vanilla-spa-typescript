type ProductItemProps = {
  title: string;
};

function ProductItem(props: ProductItemProps) {
  const titleText = document.createElement("p");
  titleText.textContent = props.title;
  return titleText;
}

export default ProductItem;
