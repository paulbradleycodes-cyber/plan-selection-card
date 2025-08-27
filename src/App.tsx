import { ThemeProvider } from "@mui/material";
import { JSX } from "react";

import BillingCard from "./components/BillingCard";
import { PlanContext } from "./contexts/index";
import plan from "./data/plan";
import { theme } from "./theme/theme";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <PlanContext value={plan}>
        <BillingCard />
      </PlanContext>
    </ThemeProvider>
  );
}

export default App;
