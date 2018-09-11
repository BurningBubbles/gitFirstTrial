import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';


const styles = theme => ({
    button: {
        marginRight: theme.spacing.unit,
        width: 10,
        maxWidth: '30px',
        maxHeight: '30px',
        minWidth: '30px',
        minHeight: '30px'
    },
    extendedIcon: {

        width: '20px',
        height: '20px',

    },
    text: {}

});

function SearchButton(props) {
    const {classes} = props;
    return (
        <div>
            <Button variant="fab"
                    aria-label="Delete"
                    className={classes.button}
                    size="small"
            >
                <SearchIcon className={classes.extendedIcon}/>
            </Button>
        </div>
    );
}

SearchButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchButton);