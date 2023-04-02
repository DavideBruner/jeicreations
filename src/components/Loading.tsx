import React from 'react'
import { Box, Typography } from '@material-ui/core';

export default function Loading({ message }) {
  return (
    <Box alignItems="center" p={8} display="flex" textAlign="center" width="100%">
      <Typography variant="h3">{message}</Typography>
    </Box>
  )
}
