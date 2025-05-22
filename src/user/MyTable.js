import React from 'react';
import DynamicTable from '../components/User/DynamicTable'; 

function UserTable() {
    
  const columns = [
    { label: '#', accessor: 'id' },
    { label: 'First', accessor: 'firstName' },
    { label: 'Last', accessor: 'lastName' },
    { label: 'Handle', accessor: 'handle' },
    { label: 'Tag', accessor: 'tag' },
  ];

  const data = [
    { id: 1, firstName: 'Mark', lastName: 'Otto', handle: '@mdo', tag: <span className="badge badge-primary">Primary</span> },
    { id: 2, firstName: 'Jacob', lastName: 'Thornton', handle: '@fat', tag: <span className="badge badge-secondary">Secondary</span> },
    { id: 3, firstName: 'Larry', lastName: 'the Bird', handle: '@twitter', tag: <span className="badge badge-success">Success</span> },
    { id: 4, firstName: 'Jacob', lastName: 'Thornton', handle: '@fat', tag: <span className="badge badge-secondary">Secondary</span> },
    { id: 5, firstName: 'Larry', lastName: 'the Bird', handle: '@twitter', tag: <span className="badge badge-success">Success</span> },
  ];

  return (
    <>
      <div className="mobile-menu-overlay"></div>
      <div className="main-container">
        <div className="pd-ltr-20 xs-pd-20-10">
          <div className="min-height-200px">
            <div className="page-header">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="title">
                    <h4>My Table</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/" className="text-dark" style={{ fontWeight: '400' }}>Home</a>
                      </li>
                      <li className="breadcrumb-item text-primary active" aria-current="page">My Table</li>
                    </ol>
                  </nav>
                </div>
                <div className="col-md-6 col-sm-12 text-right">
                  <div className="dropdown">
                    <a className="btn btn-primary dropdown-toggle" href="#" role="button" data-toggle="dropdown">
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
              <div className="clearfix mb-20">
                <div className="pull-left">
                  <h4 className="text-primary h4">My Table</h4>
                  <p>Add <code>.table-bordered .table-hover</code> to style table.</p>
                </div>
                <div className="pull-right">
                  <a href="#striped-table" className="btn btn-primary btn-sm scroll-click" rel="content-y" data-toggle="collapse" role="button">
                    <i className="fa fa-code"></i> Source Code
                  </a>
                </div>
              </div>

              {/* Dynamic Table */}
              <DynamicTable columns={columns} data={data} />

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserTable;
