import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

const styles = theme => ({
  root: {
    width: "90%",
  },
  button: {
    marginRight: theme.spacing.unit
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  icon: {
    color: "primary",
    "&$activeIcon": {
      color: "green"
    },
    "&$completedIcon": {
      color: "green"
    }
  },
  activeIcon: {
    // color: "green"
  },
  completedIcon: {
    // color: "green"
  }
});

const getSteps = () => (
    ['Details', 'Portfolio Type', 'Select Assets', 'Optimization']
)

const ManuallyStepper = (props) => {

    const { classes, activeStep } = props;
    const steps = getSteps();

    return (
        <Stepper
          variant="progress"
          steps={4}
          position="static"
          activeStep={activeStep}
          alternativeLabel
        >
          {steps.map((label, index) => {
            const props = {};
            // const labelProps = {};
            return (
              <Step key={label} {...props}>
                <StepLabel
                  // {...labelProps}
                  StepIconProps={{
                    classes: {
                      root: classes.icon,
                      active: classes.activeIcon,
                      completed: classes.completedIcon
                    }
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
    );
}

export default withStyles(styles)(ManuallyStepper);
