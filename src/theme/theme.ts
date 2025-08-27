import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "\"Inter\", \"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      letterSpacing: "0.01em",
      textAlign: "center",
    },
    button: {
      fontWeight: 600,
      fontSize: "0.875rem",
      letterSpacing: "0.025em",
    },
    caption: {
      fontSize: "0.75rem",
      lineHeight: 1.4,
      letterSpacing: "0.02em",
    },
    body2: {
      fontSize: "1rem",
      lineHeight: 1.6,
      letterSpacing: "0.01em",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 3,
          paddingTop: 0,
          paddingBottom: 2,
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: 3,
          paddingTop: 0,
          justifyContent: "center",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "auto",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          marginTop: 0,
          marginBottom: 0,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        caption: {
          textAlign: "center",
          display: "block",
        },
      },
    },
  },
});

export default theme;
