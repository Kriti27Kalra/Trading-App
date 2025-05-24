import React, { useState } from 'react';
import AlertMessage from '../components/User/AlertMessage';
import DynamicForm from '../components/User/DynamicForm';

const MyForm = () => {
  const [alertMessage, setAlertMessage] = useState('');

  const formFields = [
    { name: 'text', label: 'Text', type: 'text', placeholder: 'Johnny Brown' },
    { name: 'search', label: 'Search', type: 'search', placeholder: 'Search Here' },
    { name: 'email', label: 'Email', type: 'email', defaultValue: 'bootstrap@example.com' },
    { name: 'url', label: 'URL', type: 'url', defaultValue: 'https://getbootstrap.com' },
    { name: 'tel', label: 'Telephone', type: 'tel', defaultValue: '1-(111)-111-1111' },
    { name: 'password', label: 'Password', type: 'password', defaultValue: 'password' },
    { name: 'number', label: 'Number', type: 'number', defaultValue: '100' },
    { name: 'datetime', label: 'Date and time', type: 'text', className: 'datetimepicker', placeholder: 'Choose Date and time' },
    { name: 'date', label: 'Date', type: 'text', className: 'date-picker', placeholder: 'Select Date' },
    { name: 'month', label: 'Month', type: 'text', className: 'month-picker', placeholder: 'Select Month' },
    { name: 'time', label: 'Time', type: 'text', className: 'time-picker', placeholder: 'Select time' },
    { name: 'color', label: 'Color', type: 'color', defaultValue: '#563d7c' },
    { name: 'range', label: 'Input Range', type: 'range', defaultValue: '50' },
    {
      name: 'select',
      label: 'Select',
      type: 'select',
      options: [
        { label: 'Select Option', value: '' },
        { label: 'One', value: 'One' },
        { label: 'Two', value: 'Two' },
        { label: 'Three', value: 'Three' },
      ]
    },
  ];

  const initialValues = {
    text: '',
    search: '',
    email: 'bootstrap@example.com',
    url: 'https://getbootstrap.com',
    tel: '1-(111)-111-1111',
    password: 'password',
    number: '100',
    datetime: '',
    date: '',
    month: '',
    time: '',
    color: '#563d7c',
    range: '50',
    select: '',
  };

  const handleFormSubmit = (formData) => {
    setAlertMessage(`Form submitted successfully:\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div className="main-container">
      <div className="pd-ltr-20 xs-pd-20-10">
        <div className="min-height-200px">
          <div className="page-header">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="title">
                  <h4> MyForm</h4>
                </div>
                <nav aria-label="breadcrumb" role="navigation">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/" className="text-dark" style={{ fontWeight: '400' }}>Home</a>
                    </li>
                    <li className="breadcrumb-item text-primary active" aria-current="page"> My Form</li>
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
                <h4 className="text-primary h4">My form</h4>
                <p className="mb-30">Form made using DynamicForm</p>
                
              </div>
               <div className="pull-right">
                            <a href="#basic-form1" className="btn btn-primary btn-sm scroll-click" rel="content-y"  data-toggle="collapse" role="button"><i className="fa fa-code"></i> Source Code</a>
                        </div>

            </div>
            

            {/* Alert Message */}
            <AlertMessage message={alertMessage} type="success" />

             {/* Dynamic Form */}
            <DynamicForm
              fields={formFields}
              initialValues={initialValues}
              onSubmit={handleFormSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyForm;    