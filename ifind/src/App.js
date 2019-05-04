import React, { Component } from 'react'
import './App.css'
import ImageUpload from 'react-images-upload';
import Out from './out.js';
import Axios from 'axios';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pictures: [],
            files:[],
            uploading:true
        };
        this.onDrop = this.onDrop.bind(this);
        this.next = this.next.bind(this);
    }

    onDrop(picture) {
        console.log(picture)
        this.setState({
            pictures: this.state.pictures.concat(picture),
        },function(){
            this.state.pictures.forEach(pic => {
                this.setState({
                    files: this.state.files.concat(URL.createObjectURL(pic))
                });
            });
        });
        
        
        document.getElementById('next_button').innerText = 'Continue';
    }
    next(e){
        if(this.state.pictures.length==0)
        {
            e.currentTarget.innerText = "Please Upload Images First";
        }
        else {
            this.setState({uploading:false});
            Axios.post(window.location.origin+'/upload',{
                car_image: this.state.pictures[0]
              })
            .then(res=>{
                console.log(res)
            });
        }
    }
    render() {

        return (
            <div>
            {this.state.uploading?
            <div className="d-flex p-5 justify-content-center flex-wrap">
            <div className="p-4 col-12 d-flex justify-content-center">
            <ImageUpload className="col-6" withIcon={true}
                    buttonText='Choose images'
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                    singleImage={true}></ImageUpload>
                    {this.state.pictures.length==0?'':<div className="col-5 d-flex flex-wrap">
                    {this.state.files.map(
                        (file,i)=>{
                            console.log(file)
                            return (<div key={i} className="col-4 p-3">
                            <img alttext="" width="100%" src={file}></img>
                            </div>)
                            })
                            }
                    </div>}
            </div>
            <div className="p-3">
                <button id="next_button" onClick={this.next} className="btn btn-primary">Continue</button>
            </div>
            </div>:
            <Out/>}
            </div>
        )
    }
}
