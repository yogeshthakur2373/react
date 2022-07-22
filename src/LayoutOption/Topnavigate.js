import React from 'react';

function Topnavigate() {
    return (
        <div>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>AdminLTE 3 | Top Navigation + Sidebar</title>
            {/* Google Font: Source Sans Pro */}
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
            {/* Font Awesome Icons */}
            <link rel="stylesheet" href="../../plugins/fontawesome-free/css/all.min.css" />
            {/* Theme style */}
            <link rel="stylesheet" href="../../dist/css/adminlte.min.css" />
            <div className="wrapper">
                {/* Navbar */}

                {/* /.navbar */}
                {/* Main Sidebar Container */}

                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <div className="content-header">
                        <div className="container">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0"> Top Navigation <small>Example 3.0</small></h1>
                                </div>{/* /.col */}
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item"><a href="#">Layout</a></li>
                                        <li className="breadcrumb-item active">Top Navigation</li>
                                    </ol>
                                </div>{/* /.col */}
                            </div>{/* /.row */}
                        </div>{/* /.container-fluid */}
                    </div>
                    {/* /.content-header */}
                    {/* Main content */}
                    <div className="content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">
                                                Some quick example text to build on the card title and make up the bulk of the card's
                                                content.
                                            </p>
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                    <div className="card card-primary card-outline">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">
                                                Some quick example text to build on the card title and make up the bulk of the card's
                                                content.
                                            </p>
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>{/* /.card */}
                                </div>
                                {/* /.col-md-6 */}
                                <div className="col-lg-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="card-title m-0">Featured</h5>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="card-title">Special title treatment</h6>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                    <div className="card card-primary card-outline">
                                        <div className="card-header">
                                            <h5 className="card-title m-0">Featured</h5>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="card-title">Special title treatment</h6>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                                {/* /.col-md-6 */}
                            </div>
                            {/* /.row */}
                        </div>{/* /.container-fluid */}
                    </div>
                    {/* /.content */}
                </div>
                {/* /.content-wrapper */}
                {/* Control Sidebar */}
                <aside className="control-sidebar control-sidebar-dark">
                    {/* Control sidebar content goes here */}
                </aside>
                {/* /.control-sidebar */}
                {/* Main Footer */}

            </div>
            {/* ./wrapper */}
            {/* REQUIRED SCRIPTS */}
            {/* jQuery */}
            {/* Bootstrap 4 */}
            {/* AdminLTE App */}
            {/* AdminLTE for demo purposes */}
        </div>


    )
}
export default Topnavigate; 