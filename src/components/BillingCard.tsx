import Card from "@mui/material/Card";
import { JSX } from "react";

import PlanActions from "./PlanActions.tsx";
import PlanContent from "./PlanContent.tsx";
import PlanHeader from "./PlanHeader.tsx";

const BillingCard = (): JSX.Element | null => {
  return (
    <Card
      elevation={8}
      tabIndex={0}
      sx={{
        maxWidth: { xs: 295, sm: 400, md: 450, lg: 500 },
        position: "relative",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 12,
        },
      }}
      role="article"
      aria-labelledby="plan-title"
    >
      <PlanHeader />
      <PlanContent />
      <PlanActions />
    </Card>
  );
};

export default BillingCard;
