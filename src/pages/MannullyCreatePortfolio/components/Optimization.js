import React from "react";
import { Slider } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import {
    useStyles,
    BootstrapInput,
    BrokerageItemWrapper,
    BootstrapButton,
    GreenSwitch,
    PrettoSlider,
    TopicItem,
    CustomSlider
} from "../style";
import FormControl from "@material-ui/core/FormControl";

import NativeSelect from "@material-ui/core/NativeSelect";

import Typography from '@material-ui/core/Typography';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiSlider: {
      // Name of the rule
      root: {
        // Some CSS
        color: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        // borderRadius: 3,
        // border: 0,
        // color: 'white',
        // height: 48,
        // padding: '0 30px',
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
    },
  },
});


const marks = [
    {
      value: 0,
      label: "Preserve Value",
    },
    {
      value: 100,
      label: "Growth",
    },
  ];


let initialPayload = {
    portfolioId: Math.floor(Math.random() * 1000),
    portVersion: 1,
    accountId: Math.floor(Math.random() * 1000),
    isLatest: "Y",
    portName: "",
    portType: "Individual Account",
    riskTolerance: 0.1,
    goal: "iNCOM",
    taxDefer: "T",
};
export default function Optimization(props) {
    const { assetsList, brokerageList } = props;
    const [assets, setAssets] = React.useState("");
    const [addedOwnedassets, setAddedOwnedAssets] = React.useState([]);
    const [brokerages, setBrokerages] = React.useState("");
    const classes = useStyles();
    const [payload, setPayload] = React.useState(initialPayload);
    const [asset, setAsset] = React.useState("");
    const [brokerage, setBrokerage] = React.useState("");
    const [portfolioName, setPortfolioname] = React.useState("");
    const [selectedAsset, setselectedAssets] = React.useState([]);


    const [invest, setInvest] = React.useState('investing');
    const [ira, setIra] = React.useState('retirement');

    const [opt, setOptimization] = React.useState({
        monitored: true,
        premium: false,
      });

    //   React.useEffect(() => {
    //     setAssets(assetsList);
    //   }, [assetsList]);
    //   React.useEffect(() => {
    //     setBrokerages(brokerageList);
    //   }, [brokerageList]);

    //   React.useEffect(() => {
    //     const selectedAsset = assetsList.filter((user) => user.name === asset);
    //     setselectedAssets(selectedAsset);
    //   }, [asset]);

    const handleTableValueChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        let selected = selectedAsset;
        selected[0][name] = value;
    };
    const handleChangeSelect = (event) => {
        setAsset(event.target.value);
    };
    const handleChangeSelectBrokerage = (event) => {
        setBrokerage(event.target.value);
    };
    const handleClickBrokerage = (item) => {
        setBrokerage(item);
    }
    const addOwnedAssets = (data) => {
        const { name, ticker, unitsHeld, unitCost } = data;
        let ownedAsset = {
            name,
            ticker,
            unitsHeld,
            unitCost,
        };
        let addedOwnedassetsData = addedOwnedassets;
        addedOwnedassetsData.push(ownedAsset);
        console.log(addedOwnedassetsData);
        setAddedOwnedAssets(addedOwnedassetsData);
        setselectedAssets([]);
        setAsset("");
    };
    const deleteOwnedAsset = (param) => {
        const ownedAssets = addedOwnedassets;
        const deletedOwnedAssets = ownedAssets.filter(
            (item) => item.name !== param
        );
        setAddedOwnedAssets(deletedOwnedAssets);
    };
    React.useEffect(() => { }, [payload]);
    React.useEffect(() => {
        setPayload((prev) => {
            return { ...prev, portName: portfolioName };
        });
    }, [portfolioName]);
    // const handleChange = (event, newValue) => {
    //     setPayload((prev) => {
    //         return { ...prev, riskTolerance: newValue / 100 };
    //     });
    // };



    const handleChange = (event) => {
        setOptimization({ ...opt, [event.target.name]: event.target.checked });
      };

    const handleChangeInput = (event) => {
        setPortfolioname(event.target.value);
    };
    const handleCreatePortfolio = () => {

        let payData = payload
        payData.brokerageId = brokerage
        console.log(payData, addedOwnedassets)
        props.handleManualCreation(payData, addedOwnedassets);
    }
    return (
        <FormGroup>
            <div className={classes.TabpanelContent}>
                {/* <div style={{ paddingBottom: "30px" }}> */}
                    <Typography className={classes.detailtitle}> Tenjin Optimizations</Typography>

                    <Typography className={classes.firsttitle}> Tenjin has built in tools that allow you to monitor your portfolio and alert you when action is needed. </Typography>

                    <Typography className={classes.firsttitle}> Tenjin can make portfolio changes on your behalf automatically so you dont miss market opportunities. </Typography>
                    
                    <FormControlLabel
                        control={<GreenSwitch checked={opt.monitored} onChange={handleChange} name="monitored" />}
                        label="Monitor and alert me when my portfolio needs optimization"
                    />
                    <FormControlLabel
                        control={<GreenSwitch checked={opt.premium} onChange={handleChange} name="premium" />}
                        label="Let Tenjin do portfolio optimizations on my behalf (Premium)"
                    />
                    
                {/* </div> */}
                <Typography className={classes.firsttabtitle}> Portfolio Profile </Typography>
                <Typography className={classes.secondtitle}> Choose how you would like Tenjin to manage this portfolio. </Typography>


                <div style={{ paddingBottom: "65px" }}>
                <CustomSlider>
                    <PrettoSlider
                            onChange={handleChangeInput}
                            defaultValue={50}
                            // aria-labelledby="discrete-slider-restrict"
                            // ValueLabelComponent="off"
                            // colorPrimary = "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"	
                            // step={null}
                            // valueLabelDisplay="auto"
                            // marks={marks}
                    />
                    {/* <SliderExample /> */}


                            {/* <CustomSlider
                                defaultValue={50}
                                onChange={handleChangeInput}
                                aria-labelledby="continuous-slider"
                            /> */}
                </CustomSlider>
                </div>
            </div>
        </FormGroup>
    );
}

