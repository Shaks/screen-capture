import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FileSaver from 'file-saver';
import './Page.css';

class CaptureDom extends Component {
    constructor (props) {
        super(props);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleDropdownInput = this.handleDropdownInput.bind(this);
        this.handleRadioInput = this.handleRadioInput.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            name: '',
            email: '',
            dob: '',
            country: '',
            sex: '',
            meal:'',
            terms: '',
            comments: ''
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
            sex: e.target.value
         });
        // let node = ReactDOM.findDOMNode(e.target);
        // node.hasAttribute('checked') ? node.removeAttribute('checked') : node.setAttribute('checked', 'checked');
    }

    handleDropdownInput = e => {
        this.setState({
           country: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
    }

    handleFormSubmit = e => {
        e.preventDefault();
        let markup = document.getElementsByTagName('html')[0].innerHTML;
        let blob = new Blob([markup], {type: "text/html"});
        FileSaver.saveAs(blob, 'file.html');
    }

    render() {
        return (
            <div className="container">
                <form className="form-horizontal" noValidate onSubmit={this.handleFormSubmit}>
                    <h2>Registration Form</h2> <br />



                    <div className="form-group">
                        <label className="col-sm-3 control-label">Full Name</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" ref={input => this.name = input} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-3 control-label">Name</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" name="name" value={this.state.name} onChange={(event) => this.handleUserInput(event)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-3 control-label">Email</label>
                        <div className="col-sm-9">
                            <input type="email" className="form-control" name="email" value={this.state.email} onChange={(event) => this.handleUserInput(event)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-3 control-label">Date of Birth</label>
                        <div className="col-sm-9">
                            <input type="date" className="form-control" name="dob" value={this.state.dob} onChange={(event) => this.handleUserInput(event)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-3 control-label">Country</label>
                        <div className="col-sm-9">
                            <select className="form-control" name="country" data-selectedcountry={this.state.country} onChange={(event) => this.handleDropdownInput(event)}>
                                <option value="afghanistan">Afghanistan</option>
                                <option value="bahamas">Bahamas</option>
                                <option value="cambodia">Cambodia</option>
                                <option value="denmark">Denmark</option>
                                <option value="ecuador">Ecuador</option>
                                <option value="fiji">Fiji</option>
                                <option value="gabon">Gabon</option>
                                <option value="haiti">Haiti</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-3">Gender</label>
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-4">
                                    <label className="radio-inline">
                                        <input type="radio" name="sex" value="male" checked={this.state.sex === "male" ? true : false} onChange={(event) => this.handleRadioInput(event)} />Male
                                    </label>
                                </div>
                                <div className="col-sm-4">
                                    <label className="radio-inline">
                                        <input type="radio" name="sex" value="female" checked={this.state.sex === "female"} onChange={(event) => this.handleRadioInput(event)} />Female
                                    </label>
                                </div>
                                <div className="col-sm-4">
                                    <label className="radio-inline">
                                        <input type="radio" name="sex" value="unknown" checked={this.state.sex === "unknown" ? true : false} onChange={(event) => this.handleRadioInput(event)} />Unknown
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="form-group">
                        <label className="control-label col-sm-3">Meal Preference</label>
                        <div className="col-sm-9">
                            <div className="col-sm-4">
                                <label className="checkbox-inline">
                                    <input type="checkbox" value={this.state.meal-lowcalorie} />Low calorie
                                </label>
                            </div>
                            <div className="col-sm-4">
                                <label className="checkbox-inline">
                                    <input type="checkbox" value={this.state.meal-lowsalt} />Low salt
                                </label>
                            </div>
                        </div>
                    </div> */}
                    <div className="form-group">
                        <label className="col-sm-3 control-label">Comments</label>
                        <div className="col-sm-9">
                            <textarea className="form-control" name="comments" value={this.state.comments} onChange={(event) => this.handleUserInput(event)} rows="3"></textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-9">
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" name="terms" value={this.state.terms} onChange={(event) => this.handleUserInput(event)} />I accept <a href="">terms</a>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-9 col-sm-offset-3">
                            <button type="submit" className="btn btn-primary btn-block">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default CaptureDom;