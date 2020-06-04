import styled from 'styled-components';
import { withStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';



export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    height: 300px;
    // background: red;
`;

export const PortfolioBox = withStyles({
    root:{
        padding: '0 0 0 0',
        margin: '0 auto',
        width: '363px',
        height: '85px',
        boxShadow: '3px 2px 2px #C0C0C0',
    }
})(Box);

export const PortfolioCard = withStyles({
    root:{
        float: 'right',
        padding: '0 0',
        margin: '0 0',
        width: '351px',
        height: '85px',
        borderRadius: '2px',
    }
})(Card);

export const PortfolioType = withStyles({
    root:{
        margin: '10px 10px',
        padding: '0 auto',
        fontSize: '16px',
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
    }
})(Typography);


