import { makeStyles, withTheme } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({

    // Home Section 

    root: {
        flexGrow: 1
    },
    homePage: {
        backgroundImage: "linear-gradient(#131d47,55%,#ffffff)",
        height: "100vh",
    },

    imgClass: {
        height:"120px",
    },


    //  Event Overview Page Section


    dateStyle: {
        backgroundColor: '#2b43a1',
        color:'black',
        // marginTop: 21.875,
        marginBottom: 21.875,
        // marginRight: 21.875,
        padding: 21.875,
        // borderRadius: 8,
        fontSize: 12,
        fontWeight: 'bold',
        position: 'absolute',
        
    },
    textSize: {
        fontSize:12,
        alignContent:"center",
        alignItems:"center",
        justifyContent:"center",
        // borderColor: 'pink',
        // borderStyle: 'solid',
    },
    gridHeight: {
        minHeight:500,
    },

    

}));