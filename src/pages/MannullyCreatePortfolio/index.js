import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Details from './components/Details';
import {
    HomeWrapper,
    MannulStepper,
    MannulStep,
    BootstrapButton
} from './style';
import Stepper from '@material-ui/core/Stepper';

import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ManuallyStepper from './components/ManuallyStepper';
import SelectPortfolio from './components/SelectPortfolio';
import AddAssets from './components/AddAssets';
import Optimization from './components/Optimization'
import { Hidden } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    stepper: {
        width: '70%',
    },
    backButton: {
        //   marginRight: theme.spacing(1),
        // color: "white",
        // backgroundColor: "green"
    },
    nextButton: {
        //   marginRight: theme.spacing(1),
        color: "white",
        backgroundColor: "#9EB714",
        size: "large",
        type: "button",
        marginRight: 10,
        float: "right",
    },
    instructions: {
        marginTop: "20px",
        marginBottom: "20px",
        marginLeft: "8%",
        fontSize: "24px",
        color: "#817D7D"
    },
    details: {
        marginTop: 20,
        marginLeft: "6%",
        float: "left",
        position: "relative",
    },
    backandnext: {
        clear: "both",
        overflow: "hidden",
        marginLeft: "10%",
        marginRight: "30%",
    }
}));

const getSteps = () => (
    ['Details', 'Portfolio Type', 'Select Assets', 'Optimization']
)

const getStepContent = (stepIndex) => {
    switch (stepIndex) {
        case 0:
            return 'Details';
        case 1:
            return 'Portfolio Type';
        case 2:
            return 'Select Assets';
        case 3:
            return 'Optimization';
        default:
            return 'Unknown stepIndex';
    }
}


const ManuallyCreatePortfolio = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const classes = useStyles();
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const showMiddle = (activeStep, steps) => {
        console.log("output activeStep ", activeStep);
        console.log("output step ", steps);
        switch (activeStep){
            case 0:
                return ( <div className={classes.details}> <Details /> </div> );
            case 1:
                return ( <div className={classes.details}> <SelectPortfolio /> </div> );
            case 2:
                return ( <div className={classes.details}> <AddAssets /> </div> );
            case 3:
                return ( <div className={classes.details}> <Optimization /> </div> );
            default:
                return null;
        }   
    }

    return (
        <div>
            <HomeWrapper>
                <Typography className={classes.instructions}> Manually Create Portfolio</Typography>
                <div className={classes.stepper}><ManuallyStepper activeStep={activeStep} /></div>
                {showMiddle(activeStep, steps)}
                {/* <div className={classes.details}> <Details /> </div> */}

                <div className={classes.backandnext}>
                    {activeStep === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>All steps completed</Typography>
                            <Button onClick={handleReset}>Reset</Button>
                        </div>
                    ) : (
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.backButton}
                                >
                                    Back
                                </Button>
                                <BootstrapButton variant="contained" className={classes.nextButton} onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </BootstrapButton>
                            </div>
                        )}
                </div>

            </HomeWrapper>

        </div>
    )
}

export default ManuallyCreatePortfolio;