import { Box, Grid, Typography } from "@material-ui/core";
import React, { Fragment } from "react";

declare interface ItemProps {
  file: string;
  image: string;
  title: string;
  info: string;
}

const Item: React.FunctionComponent<ItemProps> = ({
  file,
  image,
  title,
  info,
}) => {
  return (
    <Fragment>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ height: "100%" }}
      >
        <Grid item xs={12} md={5}>
          <a rel="ar" href={file}>
            <img
              src={image}
              alt={title + " AR Preview"}
              style={{ maxWidth: "100%", maxHeight: "80vh", float: "right" }}
            />
          </a>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box style={{ overflowY: "scroll", paddingLeft: "2%" }}>
            <Typography variant="h3">{title}</Typography>
            <Typography variant="body1">{info}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Item;
