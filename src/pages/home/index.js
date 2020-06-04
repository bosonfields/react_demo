import React, { Component } from 'react';
import { HomeWrapper, PortfolioBox, PortfolioCard, PortfolioType } from './style';

import Typography from '@material-ui/core/Typography';



class Home extends Component {

    render () {
        return (
            <div>
                <HomeWrapper>
                    <Typography variant="h5" component="h2" style={{marginTop: "20px", marginBottom: "50px", color: "#817D7D"}}>Create Portfolio</Typography>
                    <PortfolioBox
                        bgcolor="#EFCA68"
                        border='2px solid #EFCA68'
                        style={{ margin: "20px auto" }}
                    >
                        <PortfolioCard>
                            <div>
                                <PortfolioType style={{marginBottom: "5px"}}>
                                    I already have a portfolio
                                </PortfolioType>
                                <div 
                                    style={{
                                        display: "flex",
                                        marginLeft: 0
                                    }}
                                >
                                    <PortfolioType style={{fontWeight: 500, marginRight: "3px", marginTop: "5px"}}>
                                        Import
                                    </PortfolioType>
                                    <PortfolioType style={{marginLeft: "3px", marginTop: "5px"}}>
                                        directly from my trading account
                                    </PortfolioType>
                                </div>
                            </div>
                        </PortfolioCard>
                    </PortfolioBox>

                    <PortfolioBox
                        bgcolor="#EFCA68"
                        border='2px solid #EFCA68'
                        style={{ margin: "20px auto" }}
                    >
                        <PortfolioCard>
                            <div>
                                <PortfolioType style={{marginBottom: "5px"}}>
                                    I already have a portfolio
                                </PortfolioType>
                                <div 
                                    style={{
                                        display: "flex",
                                        marginLeft: 0
                                    }}
                                >
                                    <PortfolioType style={{fontWeight: 500, marginRight: "3px", marginTop: "5px"}}>
                                        Manually add
                                    </PortfolioType>
                                    <PortfolioType style={{marginLeft: "3px", marginTop: "5px"}}>
                                        from my trading account
                                    </PortfolioType>
                                </div>
                            </div>
                        </PortfolioCard>
                    </PortfolioBox>

                    <PortfolioBox
                        bgcolor="#9EB714"
                        border='2px solid #9EB714'
                        style={{ margin: "20px auto" }}
                    >
                        <PortfolioCard>
                            <div>
                                <PortfolioType style={{marginBottom: "5px"}}>           
                                    I do not have a portfolio
                                </PortfolioType>
                                <div 
                                    style={{
                                        display: "flex",
                                        marginLeft: 0
                                    }}
                                >
                                    <PortfolioType style={{marginRight: "3px", marginTop: "5px"}}>
                                        Tenjin will 
                                    </PortfolioType>
                                    <PortfolioType style={{fontWeight: 500, margin: "5px 3px 5px 3px"}}>
                                        guide
                                    </PortfolioType>
                                    <PortfolioType style={{marginLeft: "3px", marginTop: "5px"}}>
                                        you step by step
                                    </PortfolioType>
                                </div>
                            </div>
                        </PortfolioCard>
                    </PortfolioBox>
                </HomeWrapper>
            </div>
        );
    }
}

export default Home;