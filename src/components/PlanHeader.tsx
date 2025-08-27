
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { useContext, JSX } from "react";

import { PlanContext } from "../contexts/index";

const PlanHeader = (): JSX.Element | null => {
  const planData = useContext(PlanContext);
  if (!planData) return null;

  return (
    <CardHeader
      title={
        <Typography
          variant="h4"
          component="h2"
          id="plan-title"
          fontWeight={700}
          color="text.primary"
          sx={{
            fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
          }}
        >
          {planData.name}
        </Typography>
      }
      subheader={
        <Box sx={{ mt: 1 }}>
          <Typography
            variant="h3"
            component="span"
            fontWeight="bold"
            color="primary.main"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            {planData.price}
          </Typography>
          <Typography
            variant="body1"
            component="span"
            color="text.secondary"
            sx={{
              fontSize: { xs: "1rem", sm: "1.125rem" },
              fontWeight: 500,
            }}
          >
            {planData.period}
          </Typography>
        </Box>
      }
      sx={{
        textAlign: "center",
        padding: { xs: 3, sm: 4 },
        paddingBottom: 2,
      }}
    />
  );
};

export default PlanHeader;
