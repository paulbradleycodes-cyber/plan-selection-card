
import CheckCircle from "@mui/icons-material/CheckCircle";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { useContext, JSX } from "react";

import { PlanContext } from "../contexts/index";

const PlanContent = (): JSX.Element | null => {
  const planData = useContext(PlanContext);
  if (!planData) return null;

  return (
    <CardContent sx={{ padding: { xs: 3, sm: 4 } }}>
      <Typography variant="body1" sx={{ marginBottom: 3 }}>
        {planData.description}
      </Typography>

      <List
        sx={{
          marginBottom: 3,
          paddingY: 0.5,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {planData.features.map((feature, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <CheckCircle />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body2" color="text.primary">
                  {feature}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </CardContent>
  );
};

export default PlanContent;
