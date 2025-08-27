
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { useContext, JSX } from "react";

import { PlanContext } from "../contexts/index";

import SelectPlanButton from "./SelectPlanButton";

const PlanActions = (): JSX.Element | null => {
  const planData = useContext(PlanContext);
  if (!planData) return null;

  return (
    <>
      <CardActions sx={{ padding: { xs: 3, sm: 4 } }}>
        <SelectPlanButton />
      </CardActions>

      <Typography
        variant="caption"
        color="text.secondary"
        id="plan-selection-description"
        sx={{
          textAlign: "center",
          display: "block",
          px: { xs: 3, sm: 4 },
          pb: 2
        }}
      >
        {planData?.additionalInfo}
      </Typography>
    </>
  );
};

export default PlanActions;
