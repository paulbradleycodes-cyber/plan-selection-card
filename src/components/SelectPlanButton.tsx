import Button from "@mui/material/Button";
import { useCallback, useContext, useState, JSX } from "react";

import { PlanContext } from "../contexts";

const SelectPlanButton = (): JSX.Element | null => {
  const plan = useContext(PlanContext);
  const [isProcessing, setIsProcessing] = useState(false);
  
  if (!plan) {
    return null;
  }
  
  const { name } = plan;

  const handleSelect = useCallback(async () => {
    setIsProcessing(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert(`Plan selected: ${name}`);
      // Handle plan selection logic here
    } finally {
      setIsProcessing(false);
    }
  }, [name]);

  const handleEnter = useCallback((e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter') {
      handleSelect();
    }
  }, [handleSelect]);
  
  return (
    <Button
      variant="contained"
      size="large"
      fullWidth
      onClick={handleSelect}
      onKeyDown={handleEnter}
      disabled={isProcessing}
      sx={{
        py: { xs: 1.5, sm: 2 },
        px: { xs: 3, sm: 4 },
        fontSize: { xs: "1rem", sm: "1.125rem" },
        borderRadius: 2,
        textTransform: "uppercase",
        boxShadow: 4,
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: 8,
        },
        "&:focus": {
          boxShadow: "0 0 0 3px rgba(25, 118, 210, 0.3)",
        },
      }}
      aria-label={`Select ${name} plan`}
      aria-disabled={isProcessing}
      aria-busy={isProcessing}
      aria-describedby="plan-selection-description"
    >
      {isProcessing ? "Processing..." : "Select Plan"}
    </Button>
  );
};

export default SelectPlanButton;
