import React, {Component} from 'react';
import './UrlDropDown.css'
import NativeSelect from "@material-ui/core/NativeSelect/NativeSelect";
import Input from "@material-ui/core/Input/Input";
import Button from "@material-ui/core/Button/Button";

class UrlDropDown extends Component {
    render() {
        return (
            <div className="url">
                <div className="url-text">
                    Link zum Produkt:
                </div>
                <NativeSelect
                    className="urltype-select"
                    name="Url Type"
                >
                    <option

                    >Url Type:
                    </option>
                    <option>Landing Page</option>
                    <option>Product Url</option>

                </NativeSelect>
                <Input className="url-input"
                       placeholder="Url eingeben"
                />
                <span className="url-btn">
                <Button
                    variant="contained"
                    color="primary"
                    className="url-btn"
                    size="small"

                >
                    Check Url
                </Button>
                </span>
            </div>
        )
    }
}

export default UrlDropDown;