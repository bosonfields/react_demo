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
export default function Details(props) {
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
    const handleChange = (event, newValue) => {
        setPayload((prev) => {
            return { ...prev, riskTolerance: newValue / 100 };
        });
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
        <div className={classes.TabpanelContent}>
            <div style={{ paddingBottom: "30px" }}>
                <Typography className={classes.detailtitle}> Portfolio Details</Typography>

                <Typography className={classes.firsttabtitle}> Portfolio Name</Typography>
                <BootstrapInput
                    style={{ width: "100%" }}
                    id="outlined-helperText"
                    label="Portfolio Name"
                    placeholder="please enter the portfolio name"
                    variant="outlined"
                    onChange={(e) => {
                        handleChangeInput(e);
                    }}
                />
            </div>

            <Typography className={classes.firsttabtitle}> Brokerage </Typography>
            <Typography className={classes.secondtabtitle}> Search your brokerage or choose from the list above </Typography>
            <div>
                <FormControl className={classes.margin}>
                    <NativeSelect
                        id="demo-customized-select-native"
                        value={brokerage}
                        onChange={handleChangeSelectBrokerage}
                        input={<BootstrapInput />}
                    >
                        <option value="">Please select the brokerage</option>
                        {brokerages &&
                            brokerages.map((item, index) => {
                                return (
                                    <option key={index} value={item.id}>
                                        {item.name}
                                    </option>
                                );
                            })}
                    </NativeSelect>
                </FormControl>
            </div>
            <div
                style={{ paddingTop: "33px", display: "flex", paddingBottom: "35px" }}
            >
                {brokerages &&
                    brokerages.length > 0 &&
                    brokerages
                        .filter((i, index) => index < 4)
                        .map((item, index) => {
                            return (
                                <BrokerageItemWrapper
                                    key={index}
                                    style={{
                                        textAlign: "center",
                                        paddingTop: "21px",
                                        marginLeft: "20px",
                                        overflow: "hidden",
                                        cursor: "pointer"
                                    }}
                                    onClick={() => {
                                        handleClickBrokerage(item.id)
                                    }}
                                >
                                    {item.name}
                                </BrokerageItemWrapper>
                            );
                        })}
            </div>
            {/* <div style={{ paddingBottom: "7px", fontWeght: "bold" }}>
                Enter the securities owned
      </div>
            <div style={{ paddingBottom: "33px" }}>
                You can define a separate risk level to this portfolio apart for your
                personal risk measure.
      </div>
            <FormControl className={classes.margin}>
                <NativeSelect
                    id="demo-customized-select-native"
                    value={asset}
                    onChange={handleChangeSelect}
                    input={<BootstrapInput />}
                >
                    <option value="">Please select the stock</option>
                    {assets &&
                        assets.map((item, index) => {
                            return (
                                <option key={index} value={item.name}>
                                    {item.name}
                                </option>
                            );
                        })}
                </NativeSelect>
            </FormControl>
            <TableContainer
                component={Paper}
                style={{ overflow: "hidden", marginTop: "15px" }}
            >
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Company Name</TableCell>
                            <TableCell>Symbol</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Value</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {selectedAsset.length > 0 &&
                            selectedAsset.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell>{row.symbol}</StyledTableCell>
                                    <StyledTableCell>
                                        <TextField
                                            onChange={handleTableValueChange}
                                            className="text-filed"
                                            name="unitsHeld"
                                        />
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <TextField
                                            onChange={handleTableValueChange}
                                            className="text-filed"
                                            name="unitCost"
                                        />
                                    </StyledTableCell>
                                    <StyledTableCell
                                        style={{ cursor: "pointer" }}
                                        onClick={() => {
                                            addOwnedAssets(row);
                                        }}
                                    >
                                        <Add style={{ color: green[500] }} />
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <TableContainer
                component={Paper}
                style={{ overflow: "hidden", marginTop: "15px" }}
            >
                <Table className={classes.table} aria-label="simple table">
                    <TableBody>
                        {addedOwnedassets.length > 0 &&
                            addedOwnedassets.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell>{row.ticker}</StyledTableCell>
                                    <StyledTableCell>{row.unitsHeld}</StyledTableCell>
                                    <StyledTableCell>{row.unitCost}</StyledTableCell>
                                    <StyledTableCell
                                        style={{ cursor: "pointer" }}
                                        onClick={() => {
                                            deleteOwnedAsset(row.name);
                                        }}
                                    >
                                        <Delete style={{ color: red[500] }} />
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer> */}
        </div>
    );
}

