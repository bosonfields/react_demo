import React from "react";
import { Slider } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import {
    useStyles,
    BootstrapInput,
    BrokerageItemWrapper,
    BootstrapButton,
} from "../style";
import FormControl from "@material-ui/core/FormControl";

import NativeSelect from "@material-ui/core/NativeSelect";

import Typography from '@material-ui/core/Typography';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';


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
export default function SelectPortfolio(props) {
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

    const selectInvest = (event) => {
        setInvest(event.target.value);
    };

    const selectIRA = (event) => {
        setIra(event.target.value);
    }

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
        <FormControl component="fieldset">
            <div className={classes.TabpanelContent}>
                {/* <div style={{ paddingBottom: "30px" }}> */}
                    <Typography className={classes.detailtitle}> Select Portfolio Type</Typography>

                    <Typography className={classes.firsttabtitle}> Investing </Typography>
                    <div className={classes.firsttabtitle}>
                        <RadioGroup aria-label="investing" name="investing" onChange={setInvest}>
                            <FormControlLabel value="individualBrokerage" control={<Radio />} label="Individual Brokerage" />
                            <FormControlLabel value="jointAccountWROS" control={<Radio />} label="Joint Account WROS" />
                            {/* <FormControlLabel value="other" control={<Radio />} label="Other" />
                            <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
                        </RadioGroup>
                    </div>
                {/* </div> */}
                <Typography className={classes.firsttabtitle}> Retirement </Typography>
                    <div className={classes.firsttabtitle}>
                        <RadioGroup aria-label="retirement" name="retirement" onChange={setIra}>
                            <FormControlLabel value="traditionalIRA" control={<Radio />} label="Traditional IRA" />
                            <FormControlLabel value="BothIRA" control={<Radio />} label="Both IRA" />
                            <FormControlLabel value="RolloverIRA" control={<Radio />} label="Rollover IRA" />
                            <FormControlLabel value="UGMA" control={<Radio />} label="Uniform Transfers to Minors Act (UTMA)/Uniform Gifts to Minors Act (UGMA)" />
                            <FormControlLabel value="SEPIRA" control={<Radio />} label="SEP IRA" />
                            <FormControlLabel value="SimpleIRA" control={<Radio />} label="Simple IRA" />
                            {/* <FormControlLabel value="other" control={<Radio />} label="Other" />
                            <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
                        </RadioGroup>
                    </div>

            </div>
        </FormControl>
    );
}

