import styled from 'styled-components';
import { withStyles, makeStyles, fade } from "@material-ui/core/styles";


import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Slider from "@material-ui/core/Slider";
import MobileStepper from "@material-ui/core/MobileStepper";
import { Step } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';

import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import { colors } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';



export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin-left: 15px;
    padding-top: 30px; 
    // background: red;
`;


export const MannulStepper = withStyles({
    root: {
        color: "red",
        height: 8,
    },
    progress: {
        color: "red !important",
        width: "100%",
        height: "11px",
    },
    barColorPrimary: {
        color: "red",
    },
})(Stepper);

export const MannulStep = withStyles({
    root: {
        color: "green",
        height: "19px",
    },
})(Step);




export const BootstrapButton = withStyles({
    root: {
        width: ' 175px',
        height: ' 45px',
        boxShadow: "none",
        textTransform: "none",
        fontSize: 16,
        padding: "6px 12px",
        border: "1px solid",
        lineHeight: 1.5,
        backgroundColor: "#0063cc",
        borderColor: "#0063cc",
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
        "&:hover": {
            backgroundColor: "#0069d9",
            borderColor: "#0062cc",
            boxShadow: "none",
        },
        "&:active": {
            boxShadow: "none",
            backgroundColor: "#0062cc",
            borderColor: "#005cbf",
        },
        "&:focus": {
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
        },
    },
})(Button);
export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: "60px",
        top: "25px",
        justifyContent: "center",
        paddingBottom: "50px ",
        backgroundColor: colors.orange[700],
    },
    iconClass: {
        '& > span': {
            margin: theme.spacing(2),
        },
    },
    margin: {
        marginBottom: theme.spacing(1),
        width: "400px",
        fontSize: 16,
        color: "#797979"
    },
    typoColor: {
        color: "white",
    },
    partition: {
        flexGrow: 1,

        width: "100%",
    },
    partition2: {
        flexGrow: 1,
        paddingLeft: "200px",
        paddingBottom: "50px ",
        height: window.height,
        width: "100%",
        paddingTop: "15px",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    table: {
        minWidth: 700,
    },
    paddingBot: {
        paddingBottom: " 31px",
    },
    partSection: {
        display: "flex",
        height: "400px",
        justifyContent: "space-between",
        width: "100%",
        padding: " 0px 60px 0px 60px",
    },
    loginstyle: {
        width: "100%",
    },
    content: {
        display: "flex",
        width: "100%",
        flexGrow: '1',
        padding: '30px',
        flexDirection: 'column'
    },
    contentStyle: {
        width: "25%",
        display: "flex",
        border: "1px solid #707070",
        height: "300px",
        justifyContent: "center",
    },
    dividerOpacity: {
        opacity: "1",
        backgroundColor: "#707070",
        height: '557px'
    },
    textField: {
        width: "45%",
    },
    textFiledParent: {
        paddingTop: "25px",
    },

    TabpanelContent: {
        display: "flex",
        flexDirection: 'column',
        width: "fit-content",
        textAlign: " initial",
        marginBottom: "20px",
        marginLeft: "50px",
    },
    detailtitle: {
        marginTop: "20px",
        marginBottom: "20px",
        fontSize: "24px",
        color: "#817D7D"
    },
    firsttabtitle: {
        marginTop: "10px",
        marginBottom: "10px",
        fontSize: 16,
        color: "#797979"
    },
    secondtabtitle: {
        marginTop: -5,
        marginBottom: 5,
        fontSize: 12,
        color: "#817D7D"
    },
    Cardroot: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        border: " 1px solid #94a8a8"
    },
    switchBase: {
        color: "#ABBF3B",
        '&$checked': {
            //   color: purple[500],
        },
        '&$checked + $track': {
            //   backgroundColor: purple[500],
        },
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export const ImportPortfolioWrapper = styled.div`
  
  .header{
  top: 0px;
left: 0px;

height: 100px;
background: #ED7B41 0% 0% no-repeat padding-box;
opacity: 1;
}
.divider{
  width: 649px;
height: 0px;
border: 1px solid #A2A0A0;
opacity: 1;
margin-bottom:24px;
}
.text-filed{
  width: 50px;
}

  `

export const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #DDDDDD',
        fontSize: 16,
        width: '436px',
        padding: '10px 12px',
        color: "#797979",
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}))(InputBase);


export const BrokerageItemWrapper = styled.div`
background-color:#707070;
width: 77px;
height: 68px;
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #707070;
opacity: 1;
`;


export const GreenSwitch = withStyles({
    switchBase: {
        color: "primary",
        '&$checked': {
            color: "green",
        },
        '&$checked + $track': {
            backgroundColor: "green",
        },
    },
    checked: {},
    track: {},
})(Switch);

export const CustomSlider = styled.div`
    width: 70%;
    height: 10px;
    background: linear-gradient(to right, green, red);
    border-radius: 15px;
    margin-top: 20px;
`;

export const PrettoSlider = withStyles({
    root:{
        float: "top",
        width: "98%",
        color: "transparent",
        margin: "0 1% 0 1%",

    },
    thumb: {
        width: "12px",
        height: "25px",
        borderRadius: "10px",
        backgroundColor: "#9EB714",
        border: "2px solid #9EB714",
        marginTop: "-20px",
        "&:focus, &:hover, &$active": {
            boxShadow: "inherit",
        },
    },
    active: {},
    valueLabel: {
        left: "calc(-50% + 4px)",
    },
    track: {
        width: "579px",
        height: 20,
        borderRadius: 4,
    },
    rail: {
        height: 20,
        borderRadius: 4,
    },
    markLabel: {
        width: "10px",
        top: "55px",
    },
})(Slider);


