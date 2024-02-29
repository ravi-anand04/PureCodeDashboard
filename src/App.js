import CRM from "./components/crm";
import JobManagement from "./components/job-management";
import LearningManagement from "./components/learning-management";
import ProjectManagement from "./components/project-management";
import ProjectManagementV2 from "./components/project-management-v2";
import SaaS from "./components/saas";
import Sales from "./components/sales";
import SalesV2 from "./components/sales-v2";
import { CssBaseline, ThemeProvider } from "@mui/material";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { createCustomTheme } from "./theme";
import useSettings from "./hooks/useSettings";
import RTL from "./components/RTL";
import routes from "./routes";

import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import DashboardLayout from "./layouts/layout-v3/DashboardLayout";

function App() {
  // const router = createBrowserRouter(routes());
  const { settings } = useSettings();

  const theme = createCustomTheme({
    theme: settings.theme,
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
  });

  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <RTL>
            <CssBaseline />
            <Router>
              <Routes>
                <Route
                  path="/"
                  element={
                    <DashboardLayout>
                      <JobManagement />
                    </DashboardLayout>
                  }
                />
              </Routes>
            </Router>
          </RTL>
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
