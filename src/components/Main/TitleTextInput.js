import React,{Component} from 'react';
import './TitleTextInput.css'
import Input from "@material-ui/core/Input/Input";

class TitleTextInput extends Component{
    render(){
        return(
            <div>Uberschrift:
                <Input className="title-input"
                       placeholder="Uberschrift eingeben"

                />
            </div>
        )
    }
}

export default TitleTextInput;