import { Box, Card, Rating } from "@mui/material";
import FlexBox from "../../components/flexbox/FlexBox";
import { H5, Small } from "../../components/Typography";
import { useTranslation } from "react-i18next";

const TopSelling = () => {
  const {
    t
  } = useTranslation();
  return <Card sx={{
    padding: "2rem",
    height: "100%"
  }}>
      <H5>{t("Top selling Products")}</H5>

      {productList.map((product, index) => <FlexBox key={index} mt="1.2rem">
          <img src={product.image} alt="Men Keds" width="90px" />

          <Box display="flex" flexDirection="column" ml="1rem">
            <Small>{product.title}</Small>
            <Rating name="read-only" size="small" defaultValue={product.rating} readOnly sx={{
          my: "3px"
        }} />
            <Small fontWeight={600}>${product.price}</Small>
          </Box>
        </FlexBox>)}
    </Card>;
};

const productList = [{
  title: "Nike airmax 170",
  image: "/static/products/black-keds.png",
  price: 567,
  rating: 5
}, {
  title: "Nike airmax 170",
  image: "/static/products/green-keds.png",
  price: 200,
  rating: 5
}, {
  title: "Nike airmax 170",
  image: "/static/products/yellow-keds.png",
  price: 400,
  rating: 5
}];
export default TopSelling;