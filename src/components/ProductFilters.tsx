import React, { useState } from "react";
import {
  Collapse,
  Grid,
  Box,
  Typography,
  List,
  ListItem,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";

export default function ProductFilters({
  dataSource,
  updateFilters,
  selectedFilters,
  resetFilters,
}) {
  const { categories, colors, materials } = dataSource;
  const [open, setOpen] = useState(false);

  return (
    <>
      <Collapse in={open}>
        <Grid container justify="center">
          <Grid item>
            <Box m={3} marginBottom={0}>
              <Typography>Category</Typography>
              <List>
                {categories.map(({ name, slug }) => (
                  <ListItem key={slug}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={
                            selectedFilters.category &&
                            selectedFilters.category.includes(slug)
                          }
                          onChange={({ target: { name } }) => {
                            updateFilters("category", name);
                          }}
                          name={slug}
                          color="primary"
                        />
                      }
                      label={name}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>

          <Grid item>
            <Box m={3} marginBottom={0}>
              <Typography>Color</Typography>
              <List>
                {colors.map(({ name }) => (
                  <ListItem key={name}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={
                            selectedFilters.colors &&
                            selectedFilters.colors.includes(name)
                          }
                          onChange={({ target: { name } }) => {
                            updateFilters("colors", name);
                          }}
                          name={name}
                          color="primary"
                        />
                      }
                      label={name}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>

          <Grid item>
            <Box m={3} marginBottom={0}>
              <Typography>Material</Typography>
              <List>
                {materials.map(({ name }) => (
                  <ListItem key={name}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={
                            selectedFilters.materials &&
                            selectedFilters.materials.includes(name)
                          }
                          onChange={({ target: { name } }) => {
                            updateFilters("materials", name);
                          }}
                          name={name}
                          color="primary"
                        />
                      }
                      label={name}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>

        <Box marginBottom={3}>
          <Button
            onClick={() => {
              resetFilters();
              setOpen((o) => !o);
            }}
          >
            Reset All
          </Button>
        </Box>
      </Collapse>
      <Button onClick={() => setOpen((o) => !o)}>
        {!open ? "Show filters" : "Close filters"}
      </Button>
    </>
  );
}
