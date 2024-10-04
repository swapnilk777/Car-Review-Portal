import { Grid, Typography } from '@material-ui/core';
import {
  Paper
} from "@mui/material";
import Container from '@mui/material/Container';
const Footer = () => {
  return (
    <Container maxWidth="lg">
    <Paper sx={{ p: 2, textAlign: "center" }}>
      <Typography variant="body1">Page Footer</Typography>
    </Paper>
    </Container>
  );
};

export default Footer;