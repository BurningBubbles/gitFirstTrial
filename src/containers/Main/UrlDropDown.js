import React, {Component} from 'react';
import './UrlDropDown.css'
import NativeSelect from "@material-ui/core/NativeSelect/NativeSelect";
import Input from "@material-ui/core/Input/Input";
import Button from "@material-ui/core/Button/Button";
import {connect} from 'react-redux';
import {addLink} from "../../actions";

class UrlDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link: 'landingPage',
            url: ''
        }
    }

    render() {
        return (
            <div className="url">
                <div className="url-text">
                    Link zum Produkt:
                </div>
                <div className="url-select">
                    <NativeSelect
                        className="urltype-select"
                        name="Url Type"
                        onChange={event => {
                            (this.handleChange(event.target.value, this.state.url))
                        }}
                    >
                        <option disabled
                        >Url Type:
                        </option>
                        <option value="landingPage">Landing Page</option>
                        <option value="productUrl">Product Url</option>
                    </NativeSelect>
                    <Input className="url-input"
                           placeholder="Url eingeben"
                           onChange={event => {
                               (this.handleChange(this.state.link, event.target.value))
                           }}
                    />
                </div>
                <div className="url-buttons">
                        <span className="check-btn">
                         <Button
                             variant="contained"
                             color="primary"
                             className="url-btn"
                             size="small"

                         >
                    Check Url
                          </Button>
                        </span>
                    <Button
                        variant="contained"
                        color="primary"
                        className="url-btn"
                        size="small"

                    >
                        Bestätigen
                    </Button>
                </div>
            </div>
        )
    }

    handleChange(link, url) {
        this.setState({link, url});
        this.props.addLink({link, url});
    }
}


const mapStateToProps = (state) => ({
    title: state.activeMessage
});
export default connect(mapStateToProps, {addLink})(UrlDropDown);