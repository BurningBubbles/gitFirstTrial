import React, {Component} from 'react';
import {connect} from 'react-redux';
import './InputImage.css'
import Button from "@material-ui/core/Button/Button";
import Input from "@material-ui/core/Input/Input";
import {deleteActiveImage, imageAdded} from "../../actions";


class InputImage extends Component {
    constructor(props) {
        super(props);
        this.imgRef = React.createRef();
        this.state = {
            imgName: ''
        }
    }


    render() {

        return (
            <div>Bild:
                <div>
                    <Button variant="contained"
                            color="primary"
                            className="upload-btn"
                    >Bild Hochladen</Button>
                    <span>
                      <Input placeholder="Name des Bilds"
                             onChange={event => {
                                 this.setState({imgName: event.target.value})
                             }}
                             value={this.state.imgName}
                      />
                    </span>
                    <Button
                        variant="contained"
                        color="primary"
                        className="upload-btn"
                        onClick={() => this.uploadImg()}
                    >
                        Bestätigen
                    </Button>
                </div>
                <div>
                    <Button variant="contained"
                            color="primary"
                            className="upload-btn"

                    >Bild wählen</Button>
                </div>
                <div className="img-display">
                    {this.checkActiveImage()}
                </div>

                <div className="img-delete">
                    <Button variant="contained"
                            color="primary"
                            className="delete-btn"
                            onClick={() => this.deleteImage()}
                    >Löschen</Button>
                </div>

            </div>
        )
    };

    addImage = (url, name) => {
        this.props.imageAdded(url, name);
    };

    deleteImage = () => {
        this.setState({imgName: ''});
        this.props.deleteActiveImage();
    };

    uploadImg = () => {
        this.addImage('https://images.dog.ceo/breeds/cotondetulear/IMG_20160830_202631573.jpg', this.state.imgName);

    };

    checkActiveImage = () => {
        if (this.props.activeImage) {
            const actImg = this.props.activeImage;
            return (
                <div>
                    <img className="img-display-img"
                         alt="placeholder"
                         src={this.props.activeImage.url}
                         ref={this.imgRef}
                         width={100}
                         height={100}
                    />

                    <span className="img-details">
                        <div>url: {actImg.url}</div>
                        <div>name: {actImg.name}</div>
                     </span>
                </div>
            )
        }
        else {
            return (
                <span>NO IMAGE ADDED</span>
            )
        }
    }

}

const mapStateToProps = (state) => ({
    activeImage: state.activeImage
});

export default connect(mapStateToProps, {imageAdded, deleteActiveImage})(InputImage);