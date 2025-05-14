import React from 'react';
 
 function Table() {
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
								<h4>Basic Tables</h4>
							</div>
							<nav aria-label="breadcrumb" role="navigation">
								<ol className="breadcrumb">
									<li className="breadcrumb-item">
                       <a href="/" className="text-dark" style={{ fontWeight: '400' }}>Home</a>
                               </li>
									<li className="breadcrumb-item text-primary active" aria-current="page">Basic Tables</li>
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
            <h4 className="text-primary h4">Striped table</h4>
            <p>Add <code>.table  .table-striped</code> to add zebra-striping to any table row within the <code>&lt;tbody&gt;</code>.</p>
          </div>
         <div className="pull-right">
							<a href="#striped-table" className="btn btn-primary btn-sm scroll-click" rel="content-y"  data-toggle="collapse" role="button"><i className="fa fa-code"></i> Source Code</a>
						</div>
					</div>
					<table className="table table-striped">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">First</th>
								<th scope="col">Last</th>
								<th scope="col">Handle</th>
								<th scope="col">Tag</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>Mark</td>
								<td>Otto</td>
								<td>@mdo</td>
								<td><span className="badge badge-primary">Primary</span></td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>Jacob</td>
								<td>Thornton</td>
								<td>@fat</td>
								<td><span className="badge badge-secondary">Secondary</span></td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td>Larry</td>
								<td>the Bird</td>
								<td>@twitter</td>
								<td><span className="badge badge-success">Success</span></td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>Jacob</td>
								<td>Thornton</td>
								<td>@fat</td>
								<td><span className="badge badge-secondary">Secondary</span></td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td>Larry</td>
								<td>the Bird</td>
								<td>@twitter</td>
								<td><span className="badge badge-success">Success</span></td>
							</tr>
						</tbody>
					</table>
					<div className="collapse collapse-box" id="striped-table">
						<div className="code-box">
							<div className="clearfix">
								<a href="#" className="btn btn-primary btn-sm code-copy pull-left"  data-clipboard-target="#striped-table-code"><i className="fa fa-clipboard"></i> Copy Code</a>
								<a href="#striped-table" className="btn btn-primary btn-sm pull-right" rel="content-y"  data-toggle="collapse" role="button"><i className="fa fa-eye-slash"></i> Hide Code</a>
							</div>
							<pre><code className="xml copy-pre" id="striped-table-code">
<table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
    </tr>
  </tbody>
</table>
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
export default Table;