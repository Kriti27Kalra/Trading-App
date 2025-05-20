import React from 'react';

const AdminForm = () => {
  return (
  <>
    <div className="mobile-menu-overlay"/>

    <div className="main-container">
        <div className="pd-ltr-20 xs-pd-20-10">
            <div className="min-height-200px">
                <div className="page-header">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="title">
                                <h4>Form</h4>
                            </div>
                            <nav aria-label="breadcrumb" role="navigation">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                       <a href="/" className="text-dark" style={{ fontWeight: '400' }}>Home</a>
                               </li>

                                    <li className="breadcrumb-item text-primary active" aria-current="page">Form Basic</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6 col-sm-12 text-right">
                            <div className="dropdown">
                                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                    January 2018
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#">Export List</a>
                                    <a className="dropdown-item" href="#">Policies</a>
                                    <a className="dropdown-item" href="#">View Assets</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                


<div className="pd-20 card-box mb-30">
                    <div className="clearfix">
                        <div className="pull-left">
                            <h4 className="text-primary h4">Default Basic Forms</h4>
                            <p className="mb-30">All bootstrap element classies</p>
                        </div>
                        <div className="pull-right">
                            <a href="#basic-form1" className="btn btn-primary btn-sm scroll-click" rel="content-y"  data-toggle="collapse" role="button"><i className="fa fa-code"></i> Source Code</a>
                        </div>
                    </div>
                    <form>
                        <div className="form-group row">
                            <label className="col-sm-12 col-md-2 col-form-label">Text</label>
                            <div className="col-sm-12 col-md-10">
                                <input className="form-control" type="text" placeholder="Johnny Brown"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-12 col-md-2 col-form-label">Search</label>
                            <div className="col-sm-12 col-md-10">
                                <input className="form-control" placeholder="Search Here" type="search"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-12 col-md-2 col-form-label">Email</label>
                            <div className="col-sm-12 col-md-10">
                                <input className="form-control" defaultValue="bootstrap@example.com" type="email"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-12 col-md-2 col-form-label">URL</label>
                            <div className="col-sm-12 col-md-10">
                                <input className="form-control" defaultValue="https://getbootstrap.com" type="url"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-12 col-md-2 col-form-label">Telephone</label>
                            <div className="col-sm-12 col-md-10">
                                <input className="form-control" defaultValue="1-(111)-111-1111" type="tel"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-12 col-md-2 col-form-label">Password</label>
                            <div className="col-sm-12 col-md-10">
                                <input className="form-control" defaultValue="password" type="password"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-12 col-md-2 col-form-label">Number</label>
                            <div className="col-sm-12 col-md-10">
                                <input className="form-control" defaultValue="100" type="number"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="example-datetime-local-input" className="col-sm-12 col-md-2 col-form-label">Date and time</label>
                            <div className="col-sm-12 col-md-10">
                                <input className="form-control datetimepicker" placeholder="Choose Date anf time" type="text"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-12 col-md-2 col-form-label">Date</label>
                            <div className="col-sm-12 col-md-10">
                                <input className="form-control date-picker" placeholder="Select Date" type="text"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-12 col-md-2 col-form-label">Month</label>
                            <div className="col-sm-12 col-md-10">
                                <input className="form-control month-picker" placeholder="Select Month" type="text"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-12 col-md-2 col-form-label">Time</label>
                            <div className="col-sm-12 col-md-10">
                                <input className="form-control time-picker" placeholder="Select time" type="text"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-12 col-md-2 col-form-label">Select</label>
                            <div className="col-sm-12 col-md-10">
                                <select className="custom-select col-12" defaultValue="">
                                        <option value="">Choose...</option>
                                         <option value="1">One</option>
                                          <option value="2">Two</option>
                                              <option value="3">Three</option>
                                            </select>

                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-12 col-md-2 col-form-label">Color</label>
                            <div className="col-sm-12 col-md-10">
                                <input className="form-control" defaultValue="#563d7c" type="color"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-12 col-md-2 col-form-label">Input Range</label>
                            <div className="col-sm-12 col-md-10">
                                <input className="form-control" defaultValue="50" type="range"/>
                            </div>
                        </div>
                    </form>
                    <div className="collapse collapse-box" id="basic-form1" >
                        <div className="code-box">
                            <div className="clearfix">
                                <a href="#" className="btn btn-primary btn-sm code-copy pull-left"  data-clipboard-target="#copy-pre"><i className="fa fa-clipboard"></i> Copy Code</a>
                                <a href="#basic-form1" className="btn btn-primary btn-sm pull-right" rel="content-y"  data-toggle="collapse" role="button"><i className="fa fa-eye-slash"></i> Hide Code</a>
                            </div>
                            <pre><code className="xml copy-pre" id="copy-pre">
<form>
    <div className="form-group row">
        <label className="col-sm-12 col-md-2 col-form-label">Text</label>
        <div className="col-sm-12 col-md-10">
            <input className="form-control" type="text" placeholder="Johnny Brown"/>
        </div>
    </div>
    <div className="form-group row">
        <label className="col-sm-12 col-md-2 col-form-label">Search</label>
        <div className="col-sm-12 col-md-10">
            <input className="form-control" placeholder="Search Here" type="search"/>
        </div>
    </div>
    <div className="form-group row">
        <label className="col-sm-12 col-md-2 col-form-label">Email</label>
        <div className="col-sm-12 col-md-10">
            <input className="form-control" defaultValue="bootstrap@example.com" type="email"/>
        </div>
    </div>
    <div className="form-group row">
        <label className="col-sm-12 col-md-2 col-form-label">URL</label>
        <div className="col-sm-12 col-md-10">
            <input className="form-control" defaultValue="https://getbootstrap.com" type="url"/>
        </div>
    </div>
    <div className="form-group row">
        <label className="col-sm-12 col-md-2 col-form-label">Telephone</label>
        <div className="col-sm-12 col-md-10">
            <input className="form-control" defaultValue="1-(111)-111-1111" type="tel"/>
        </div>
    </div>
    <div className="form-group row">
        <label className="col-sm-12 col-md-2 col-form-label">Password</label>
        <div className="col-sm-12 col-md-10">
            <input className="form-control" defaultValue="password" type="password"/>
        </div>
    </div>
    <div className="form-group row">
        <label className="col-sm-12 col-md-2 col-form-label">Number</label>
        <div className="col-sm-12 col-md-10">
            <input className="form-control" defaultValue="100" type="number"/>
        </div>
    </div>
    <div className="form-group row">
        <label htmlFor="example-datetime-local-input" className="col-sm-12 col-md-2 col-form-label">Date and time</label>
        <div className="col-sm-12 col-md-10">
            <input className="form-control datetimepicker" placeholder="Choose Date anf time" type="text"/>
        </div>
    </div>
    <div className="form-group row">
        <label className="col-sm-12 col-md-2 col-form-label">Date</label>
        <div className="col-sm-12 col-md-10">
            <input className="form-control date-picker" placeholder="Select Date" type="text"/>
        </div>
    </div>
    <div className="form-group row">
        <label className="col-sm-12 col-md-2 col-form-label">Month</label>
        <div className="col-sm-12 col-md-10">
            <input className="form-control month-picker" placeholder="Select Month" type="text"/>
        </div>
    </div>
    <div className="form-group row">
        <label className="col-sm-12 col-md-2 col-form-label">Time</label>
        <div className="col-sm-12 col-md-10">
            <input className="form-control time-picker" placeholder="Select time" type="text"/>
        </div>
    </div>
    <div className="form-group row">
        <label className="col-sm-12 col-md-2 col-form-label">Select</label>
        <div className="col-sm-12 col-md-10">
            <select className="custom-select col-12" defaultValue="">
  <option value="">Choose...</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

        </div>
    </div>
    <div className="form-group row">
        <label className="col-sm-12 col-md-2 col-form-label">Color</label>
        <div className="col-sm-12 col-md-10">
            <input className="form-control" defaultValue="#563d7c" type="color"/>
        </div>
    </div>
    <div className="form-group row">
        <label className="col-sm-12 col-md-2 col-form-label">Input Range</label>
        <div className="col-sm-12 col-md-10">
            <input className="form-control" defaultValue="50" type="range"/>
        </div>
    </div>
</form>
                            </code></pre>
                        </div>
                    </div>
            </div>
            </div>
            </div>
            </div>
            
            
            </>
            
                
                 );
}

export default AdminForm;