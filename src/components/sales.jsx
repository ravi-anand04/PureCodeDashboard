import { ShoppingCart, TrendingUp } from "@mui/icons-material";
import { Box, Grid, useTheme } from "@mui/material";
import MoneyIcon from "../icons/MoneyIcon";
import EarningCard from "./Sales/EarningsCard";
import OrderStats from "./Sales/OrderStats";
import PopularProducts from "./Sales/PopularProducts";
import RevenueStatistics from "./Sales/RevenueStatistics";
import SalesCard from "./Sales/SalesCard";
import SalesProductDetails from "./Sales/SalesProductDetails";
import TotalSales from "./Sales/TotalSales";

const Sales = () => {
  const theme = useTheme();
  const salesList = [
    {
      id: 1,
      amount: 785000,
      Icon: ShoppingCart,
      title: "Total Orders",
      color: theme.palette.primary.main,
    },
    {
      id: 2,
      amount: 32654,
      Icon: MoneyIcon,
      title: "Orders Completed",
      color: theme.palette.success.main,
    },
    {
      id: 3,
      amount: 1200,
      Icon: TrendingUp,
      title: "Orders Cancelled",
      color: theme.palette.error.main,
    },
  ];
  return (
    <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        <Grid item md={8} xs={12}>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <EarningCard />
            </Grid>

            <Grid item md={12} xs={12}>
              <SalesCard list={salesList} />
            </Grid>

            <Grid item md={12} xs={12}>
              <RevenueStatistics />
            </Grid>

            <Grid item md={12} xs={12}>
              <PopularProducts />
            </Grid>
          </Grid>
        </Grid>

        {/* <Grid item md={6} xs={12}>
         <SalesCard list={salesList} />
        </Grid> */}

        {/* <Grid item md={8} xs={12}>
         <RevenueStatistics />
        </Grid> */}

        <Grid item md={4} xs={12}>
          <Grid container spacing={3}>
            <Grid item md={12}>
              <TotalSales />
            </Grid>
            <Grid item md={12}>
              <SalesProductDetails />
            </Grid>
            <Grid item md={12}>
              <OrderStats />
            </Grid>
          </Grid>
        </Grid>

        {/* <Grid item md={8} xs={12}>
         <PopularProducts />
        </Grid> */}

        {/* <Grid item md={4} xs={12}>
         <OrderStats />
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default Sales;
