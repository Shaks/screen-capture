import React, { Component } from 'react';
import html2canvas from 'html2canvas';
import FileSaver from 'file-saver';
import './Form.css';

class Form extends Component {
    constructor (props) {
        super(props);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleDropdownInput = this.handleDropdownInput.bind(this);
        this.handleRadioInput = this.handleRadioInput.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            name: '',
            email: '',
            city: null,
            option: ''
        }
    }

    handleUserInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    handleRadioInput = e => {
        this.setState({
            email_frequency: e.target.value
         });
    }

    handleDropdownInput = e => {
        this.setState({
           city: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();

    }

    handleFormSubmit = e => {
        e.preventDefault();
        // html2canvas(document.querySelector("#root"))
        // .then(canvas => { document.body.appendChild(canvas)})
        // .catch(err => {
        //     console.error('oops, something went wrong!', err);
        // });

        html2canvas(document.querySelector("#root"))
            .then(canvas => { canvas.toBlob(blob => {
                FileSaver.saveAs(blob, 'file.txt')
            })})
            .catch(err => {
            console.error('oops, something went wrong!', err);
        });
    }

    render() {
        return (
            <form className="form-horizontal" noValidate onSubmit={this.handleFormSubmit}>

                <div className="form-group">
                    <label className="control-label col-sm-2">Full Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="name_id" name="name" value={this.state.name} onChange={(event) => this.handleUserInput(event)} />
                    </div>  
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-2">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="email_id" name="email" value={this.state.email} onChange={(event) => this.handleUserInput(event)} />
                        <p className="help-text">We value your privacy and will never sell your email address.</p>
                    </div>  
                </div>

                <div className="form-group">
                        <label className="control-label col-sm-2">City</label>
                    <select className="col-sm-10" name="city" selectedcity={this.state.city} onChange={(event) => this.handleDropdownInput(event)} >
                        <option value="london">London</option>
                        <option value="birmingham">Birmingham</option>
                        <option value="reading">Reading</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="checkbox-inline"><input type="checkbox" name="option" /> Option 1 </label>
                    <label className="checkbox-inline"><input type="checkbox" name="option" /> Option 2</label>
                    <label className="checkbox-inline"><input type="checkbox" name="option" /> Option 3</label>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-2">Email Me</label>
                    <div className="col-sm-10">
                        <div className="radio">
                            <label className="radio">
                                <input name="email_frequency" type="radio" value="day" />
                                Daily
                            </label>
                        </div>
                        <div className="radio">
                            <label className="radio">
                                <input name="email_frequency" type="radio" value="week" />
                                Weekly
                            </label>
                        </div>	
                        <div className="radio">
                            <label className="radio">
                                <input name="email_frequency" type="radio" value="month" />
                                Monthly
                            </label>
                        </div>											
                    </div>
                </div>							
                
                <div className="form-group">
                    <div className="col-sm-10 col-sm-offset-2">                     
                        <button type="submit" className="btn btn-primary">Get Updates!</button>
                    </div>
                </div>   

                <div className="form-group">
                    <label>Example textarea</label>
                    <textarea className="form-control" rows="3"></textarea>
                </div>     
            </form> 
        );
    }
}

export default Form;