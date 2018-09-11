import React, {Component, Fragment} from 'react';
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
            imgName: '',
            imageSelected: false
        }
    }


    render() {

        return (
            <div className="img-input">
                <div className="img-upload">
                    <span className="img-text">Bild:</span>
                    <span className="upload-btn">
                      <Button variant="contained"
                              color="primary"
                              size="small"
                              onClick={() => this.uploadImg()}
                      >Bild Hochladen</Button>
                    </span> <span>{this.checkActiveImage()}</span>
                    {this.state.imageSelected
                        ?
                        <span className="img-details">
                        <div className="img-name">
                        <Input placeholder="Name des Bilds"
                               onChange={event => {
                                   this.setState({imgName: event.target.value})
                               }}
                               value={this.state.imgName}

                        />
                    </div>
                            <div className="confirm-btn">
                               <Button
                                   variant="contained"
                                   color="primary"
                                   className="upload-btn"
                                   size="small"
                                   onClick={() => this.uploadImg()}
                               >
                        Bestätigen
                                </Button>
                        </div>
                        </span>
                        : <Fragment> </Fragment>
                    }

                </div>
                <div className="img-options">
                    <div className="choose-btn">
                        <Button variant="contained"
                                color="primary"
                                className="upload-btn"
                                size="small"

                        >Bild wählen</Button>
                    </div>
                    {this.state.imageSelected
                        ?
                        <div className="delete-btn">
                            <Button variant="contained"
                                    color="primary"
                                    className="delete-btn"
                                    size="small"
                                    onClick={() => this.deleteImage()}
                            >Löschen</Button>
                        </div>
                        :
                        <Fragment> </Fragment>
                    }

                </div>
            </div>
        )
    };

    addImage = (url, name) => {
        this.setState({imageSelected: true});
        this.props.imageAdded(url, name);
    };

    deleteImage = () => {
        this.setState({imgName: '', imageSelected: false});
        this.props.deleteActiveImage();
    };

    uploadImg = () => {
        this.addImage('https://images.dog.ceo/breeds/cotondetulear/IMG_20160830_202631573.jpg', this.state.imgName);
    };

    checkActiveImage = () => {
        if (this.props.activeImage) {

            //const actImg = this.props.activeImage;
            return (
                <div>
                    <img className="img-display-img"
                         alt="placeholder"
                         src={this.props.activeImage.url}
                         ref={this.imgRef}
                         width={100}
                         height={100}
                    />

                    {/*<span className="img-details">*/}
                    {/*<div>url: {actImg.url}</div>*/}
                    {/*<div>name: {actImg.name}</div>*/}
                    {/*</span>*/}
                </div>
            )
        }
        else {
            return (
                <img className="img-display-img"
                     src="http://placehold.jp/100x100?text=No Image Added"
                     alt="No Image Added"
                     width={100}
                     height={100}
                />
            )
        }
    }

}

const mapStateToProps = (state) => ({
    activeImage: state.activeImage
});

export default connect(mapStateToProps, {imageAdded, deleteActiveImage})(InputImage);