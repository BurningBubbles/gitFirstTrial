import React, {Component} from 'react';
import './UrlDropDown.css'
import NativeSelect from "@material-ui/core/NativeSelect/NativeSelect";
import Input from "@material-ui/core/Input/Input";
import Button from "@material-ui/core/Button/Button";

class UrlDropDown extends Component {
    render() {
        return (
            <div>
                <NativeSelect
                    className="urltype-select"
                    name="Url Type"
                >
                    <option

                    >Url Type:</option>
                    <option>Landing Page</option>
                    <option>Product Url</option>

                </NativeSelect>
                <Input className="url-input"
                       placeholder="Url eingeben"
                />
                <Button
                    variant="contained"
                    color="primary"
                    className="upload-btn"

                >
                    Check Url
                </Button>
            </div>
        )
    }
}

export default UrlDropDown;