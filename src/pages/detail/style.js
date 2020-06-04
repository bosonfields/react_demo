import styled from 'styled-components';
import { withStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Slider from "@material-ui/core/Slider";
import MobileStepper from "@material-ui/core/MobileStepper";



export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
    height: 300px;
    // background: red;
`;

export const CustomSlider = styled.div`
    width: 960px;
    height: 10px;
    background: linear-gradient(to right, green, red);
    border-radius: 15px;
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

export const TmpSlider = withStyles({
    root: {
      color: "#EFCA68",
      height: 8,
    },
    progress: {
      color: "#EFECE4 !important",
      width: "100%",
      height: "11px",
    },
    barColorPrimary: {
      color: "red",
    },
  })(MobileStepper);
  