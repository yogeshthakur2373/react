import React from "react";

export default function Chart() {

    return (
        <div>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>AdminLTE 3 | uPlot</title>
            {/* Google Font: Source Sans Pro */}
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
            {/* Font Awesome */}
            <link rel="stylesheet" href="../../plugins/fontawesome-free/css/all.min.css" />
            {/* uPlot */}
            <link rel="stylesheet" href="../../plugins/uplot/uPlot.min.css" />
            {/* Theme style */}
            <link rel="stylesheet" href="../../dist/css/adminlte.min.css" />
            <div className="wrapper">
                {/* Navbar */}

                {/* /.navbar */}
                {/* Main Sidebar Container */}

                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>ChartJS</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">ChartJS</li>
                                    </ol>
                                </div>
                            </div>
                        </div>{/* /.container-fluid */}
                    </section>
                    {/* Main content */}
                    <section className="content">
                        <div className="container-fluid">
                            {/* AREA CHART */}
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Area Chart</h3>
                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                            <i className="fas fa-minus" />
                                        </button>
                                        <button type="button" className="btn btn-tool" data-card-widget="remove">
                                            <i className="fas fa-times" />
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="chart">
                                        <div id="areaChart" style={{ minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%' }} />
                                    </div>
                                </div>
                                {/* /.card-body */}
                            </div>
                            {/* /.card */}
                            {/* LINE CHART */}
                            <div className="card card-info">
                                <div className="card-header">
                                    <h3 className="card-title">Line Chart</h3>
                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                            <i className="fas fa-minus" />
                                        </button>
                                        <button type="button" className="btn btn-tool" data-card-widget="remove">
                                            <i className="fas fa-times" />
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="chart">
                                        <div id="lineChart" style={{ minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%' }} />
                                    </div>
                                </div>
                                {/* /.card-body */}
                            </div>
                            {/* /.card */}
                        </div>{/* /.container-fluid */}
                    </section>
                    {/* /.content */}
                </div>
                {/* /.content-wrapper */}

                {/* Control Sidebar */}
                <aside className="control-sidebar control-sidebar-dark">
                    {/* Add Content Here */}
                </aside>
                {/* /.control-sidebar */}
            </div>
            {/* ./wrapper */}
            {/* jQuery */}
            {/* Bootstrap 4 */}
            {/* uPlot */}
            {/* AdminLTE App */}
            {/* AdminLTE for demo purposes */}
            {/* Page specific script */}
        </div>

    )

}