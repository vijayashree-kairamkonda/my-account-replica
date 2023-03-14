import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { StyledElement } from "../../AccountTab/AccBillingPref";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Stack, styled } from "@mui/material";

export const OfferCard = ({card}:any) => {
  return (
   <>
      <StyledOfferCard>
        <StyledCardBox>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <h3>Get faster internet on special pricing.{card}</h3>
            <Typography
              variant="body2"
              color="text.secondary"
              component="p"
              marginY={2}
            >
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua.
            </Typography>
            <Stack direction="row" width="100%" spacing={2} marginY={2}>
              <StyledElement variant="inherit">Learn more</StyledElement>
              <StyledElement>
                <ArrowForwardIosIcon fontSize="small" />
              </StyledElement>
            </Stack>
          </CardContent>
        </StyledCardBox>
        <CardMedia
          component="img"
          sx={{ width: "45%" }}
          image="https://cdn.sanity.io/images/7g6d2cj1/production/b0fe71e059c2d7a619d7f720a4c67cd4d467b16b-1280x720.jpg?h=720&q=70&auto=format"
          alt="Live from space album cover"
        />
      </StyledOfferCard>
      </>

    
  );
};

export const StyledOfferCard = styled(Card)(({ theme }) => ({
  display: "flex",
  margin: "auto 0.5rem",
}));

export const StyledCardBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "0.5rem",
}));


  {/* <StyledOfferCard>
        <StyledCardBox>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <h3>Upgrade to higher speed for just $15/mo</h3>
            <Typography
              variant="body2"
              color="text.secondary"
              component="p"
              marginY={2}
            >
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur.
            </Typography>
            <Stack direction="row" width="100%" spacing={2} marginY={2}>
              <StyledElement variant="inherit">Learn more</StyledElement>
              <StyledElement>
                <ArrowForwardIosIcon fontSize="small" />
              </StyledElement>
            </Stack>
          </CardContent>
        </StyledCardBox>
        <CardMedia
          component="img"
          sx={{ width: "45%" }}
          image="https://www.hp.com/ca-en/shop/html/local/campaigns/tech-at-work/top-10-gaming-tips-and-tricks-pro.jpg"
          alt="Live from space album cover"
        />
      </StyledOfferCard>

      <StyledOfferCard>
        <StyledCardBox>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <h3>$20/mo</h3>
            <h3>Reliable speeds upto 50Mbps Upload and Download.</h3>
            <Typography
              variant="body2"
              color="text.secondary"
              component="p"
              marginY={2}
            >
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur.
            </Typography>
            <Stack direction="row" width="100%" spacing={2} marginY={2}>
              <StyledElement variant="inherit">Learn more</StyledElement>
              <StyledElement>
                <ArrowForwardIosIcon fontSize="small" />
              </StyledElement>
            </Stack>
          </CardContent>
        </StyledCardBox>
        <CardMedia
          component="img"
          sx={{ width: "40%" }}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6CYJolWSd_blODAm-ko1BMfxto0S4kb-avw&usqp=CAU"
          alt="Live from space album cover"
        />
      </StyledOfferCard>

      <StyledOfferCard>
        <StyledCardBox>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <h3>Upgrade to higher speed for just $15/mo</h3>
            <Typography
              variant="body2"
              color="text.secondary"
              component="p"
              marginY={2}
            >
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur.
            </Typography>
            <Stack direction="row" width="100%" spacing={2} marginY={2}>
              <StyledElement variant="inherit">Learn more</StyledElement>
              <StyledElement>
                <ArrowForwardIosIcon fontSize="small" />
              </StyledElement>
            </Stack>
          </CardContent>
        </StyledCardBox>
        <CardMedia
          component="img"
          sx={{ width: "45%" }}
          image="https://www.hp.com/ca-en/shop/html/local/campaigns/tech-at-work/top-10-gaming-tips-and-tricks-pro.jpg"
          alt="Live from space album cover"
        />
      </StyledOfferCard> */}