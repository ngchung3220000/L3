import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Icon,
  IconButton,
  Tab,
  Tabs,
  Typography,
  makeStyles,
} from "@material-ui/core";
import PropTypes from "prop-types";
import SalaryIncrease from "./FormUpdateEvolutions/SalaryIncrease/SalaryIncrease";
import Promote from "./FormUpdateEvolutions/Promote/Promote";
import ProposalToAdvise from "./FormUpdateEvolutions/ProposalToAdvise/ProposalToAdvise";
import { ValidatorForm } from "react-material-ui-form-validator";
import RegistForm from "app/employeeManagement/components/RegistForm/RegistForm";
import CollapseUpdateEvolutions from "./CollapseUpdateEvolutions/CollapseUpdateEvolutions";
import { useSelector } from "react-redux";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function EmployeeManagementDialog(props) {
  const { dialogUpdate, setDialogUpdate, display, setDisplay } = props;

  const formEmployee = useSelector((state) => state.employee.formEmployee);
  const employee = useSelector((state) => state.employee.employee);

  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClose = () => {
    setDialogUpdate(false);
  };

  return (
    <Dialog fullWidth maxWidth="lg" open={dialogUpdate} onClose={handleClose}>
      <DialogTitle>
        Employee Management
        <IconButton
          style={{ position: "absolute", right: "10px", top: "10px" }}
          onClick={handleClose}
        >
          <Icon color="error">close</Icon>
        </IconButton>
      </DialogTitle>
      <Divider />
      <ValidatorForm onSubmit={() => {}}>
        <DialogContent style={{ overflow: "hidden" }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <RegistForm formEmployee={formEmployee} employee={employee} />
            </Grid>

            <Grid item xs={12} style={{ display: display }}>
              <CollapseUpdateEvolutions />
            </Grid>
          </Grid>
        </DialogContent>
      </ValidatorForm>

      <DialogActions>
        <div className="flex flex-space-between flex-middle m-10">
          <Button variant="contained" className="mr-12" onClick={handleClose}>
            Hủy
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  );
}
