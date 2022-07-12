import react from "react";


export default function button() {



    return (

        <div>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>AdminLTE 3 | Buttons</title>
            {/* Google Font: Source Sans Pro */}
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
            {/* Font Awesome */}
            <link rel="stylesheet" href="../../plugins/fontawesome-free/css/all.min.css" />
            {/* Theme style */}
            <link rel="stylesheet" href="../../dist/css/adminlte.min.css" />
            <div className="wrapper">
                {/* Navbar */}
                <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                    {/* Left navbar links */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="../../index3.html" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="#" className="nav-link">Contact</a>
                        </li>
                    </ul>
                    {/* Right navbar links */}
                    <ul className="navbar-nav ml-auto">
                        {/* Navbar Search */}
                        <li className="nav-item">
                            <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                                <i className="fas fa-search" />
                            </a>
                            <div className="navbar-search-block">
                                <form className="form-inline">
                                    <div className="input-group input-group-sm">
                                        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                        <div className="input-group-append">
                                            <button className="btn btn-navbar" type="submit">
                                                <i className="fas fa-search" />
                                            </button>
                                            <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                                <i className="fas fa-times" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>
                        {/* Messages Dropdown Menu */}
                        <li className="nav-item dropdown">
                            <a className="nav-link" data-toggle="dropdown" href="#">
                                <i className="far fa-comments" />
                                <span className="badge badge-danger navbar-badge">3</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <a href="#" className="dropdown-item">
                                    {/* Message Start */}
                                    <div className="media">
                                        <img src="../../dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                                        <div className="media-body">
                                            <h3 className="dropdown-item-title">
                                                Brad Diesel
                                                <span className="float-right text-sm text-danger"><i className="fas fa-star" /></span>
                                            </h3>
                                            <p className="text-sm">Call me whenever you can...</p>
                                            <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                                        </div>
                                    </div>
                                    {/* Message End */}
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    {/* Message Start */}
                                    <div className="media">
                                        <img src="../../dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                        <div className="media-body">
                                            <h3 className="dropdown-item-title">
                                                John Pierce
                                                <span className="float-right text-sm text-muted"><i className="fas fa-star" /></span>
                                            </h3>
                                            <p className="text-sm">I got your message bro</p>
                                            <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                                        </div>
                                    </div>
                                    {/* Message End */}
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    {/* Message Start */}
                                    <div className="media">
                                        <img src="../../dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                        <div className="media-body">
                                            <h3 className="dropdown-item-title">
                                                Nora Silvester
                                                <span className="float-right text-sm text-warning"><i className="fas fa-star" /></span>
                                            </h3>
                                            <p className="text-sm">The subject goes here</p>
                                            <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                                        </div>
                                    </div>
                                    {/* Message End */}
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
                            </div>
                        </li>
                        {/* Notifications Dropdown Menu */}
                        <li className="nav-item dropdown">
                            <a className="nav-link" data-toggle="dropdown" href="#">
                                <i className="far fa-bell" />
                                <span className="badge badge-warning navbar-badge">15</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <span className="dropdown-item dropdown-header">15 Notifications</span>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    <i className="fas fa-envelope mr-2" /> 4 new messages
                                    <span className="float-right text-muted text-sm">3 mins</span>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    <i className="fas fa-users mr-2" /> 8 friend requests
                                    <span className="float-right text-muted text-sm">12 hours</span>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    <i className="fas fa-file mr-2" /> 3 new reports
                                    <span className="float-right text-muted text-sm">2 days</span>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                                <i className="fas fa-expand-arrows-alt" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                                <i className="fas fa-th-large" />
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* /.navbar */}
                {/* Main Sidebar Container */}
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    {/* Brand Logo */}
                    <a href="../../index3.html" className="brand-link">
                        <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                        <span className="brand-text font-weight-light">AdminLTE 3</span>
                    </a>
                    {/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar user (optional) */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img src="../../dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                            </div>
                            <div className="info">
                                <a href="#" className="d-block">Alexander Pierce</a>
                            </div>
                        </div>
                        {/* SidebarSearch Form */}
                        <div className="form-inline">
                            <div className="input-group" data-widget="sidebar-search">
                                <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                                <div className="input-group-append">
                                    <button className="btn btn-sidebar">
                                        <i className="fas fa-search fa-fw" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Sidebar Menu */}
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-tachometer-alt" />
                                        <p>
                                            Dashboard
                                            <i className="right fas fa-angle-left" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="../../index.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Dashboard v1</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../../index2.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Dashboard v2</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../../index3.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Dashboard v3</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="../widgets.html" className="nav-link">
                                        <i className="nav-icon fas fa-th" />
                                        <p>
                                            Widgets
                                            <span className="right badge badge-danger">New</span>
                                        </p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-copy" />
                                        <p>
                                            Layout Options
                                            <i className="fas fa-angle-left right" />
                                            <span className="badge badge-info right">6</span>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="../layout/top-nav.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Top Navigation</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../layout/top-nav-sidebar.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Top Navigation + Sidebar</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../layout/boxed.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Boxed</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../layout/fixed-sidebar.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Fixed Sidebar</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../layout/fixed-sidebar-custom.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Fixed Sidebar <small>+ Custom Area</small></p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../layout/fixed-topnav.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Fixed Navbar</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../layout/fixed-footer.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Fixed Footer</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../layout/collapsed-sidebar.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Collapsed Sidebar</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-chart-pie" />
                                        <p>
                                            Charts
                                            <i className="right fas fa-angle-left" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="../charts/chartjs.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>ChartJS</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../charts/flot.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Flot</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../charts/inline.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Inline</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../charts/uplot.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>uPlot</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item menu-open">
                                    <a href="#" className="nav-link active">
                                        <i className="nav-icon fas fa-tree" />
                                        <p>
                                            UI Elements
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="../UI/general.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>General</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../UI/icons.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Icons</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../UI/buttons.html" className="nav-link active">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Buttons</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../UI/sliders.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Sliders</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../UI/modals.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Modals &amp; Alerts</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../UI/navbar.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Navbar &amp; Tabs</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../UI/timeline.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Timeline</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../UI/ribbons.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Ribbons</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-edit" />
                                        <p>
                                            Forms
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="../forms/general.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>General Elements</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../forms/advanced.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Advanced Elements</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../forms/editors.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Editors</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../forms/validation.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Validation</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-table" />
                                        <p>
                                            Tables
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="../tables/simple.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Simple Tables</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../tables/data.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>DataTables</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../tables/jsgrid.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>jsGrid</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-header">EXAMPLES</li>
                                <li className="nav-item">
                                    <a href="../calendar.html" className="nav-link">
                                        <i className="nav-icon far fa-calendar-alt" />
                                        <p>
                                            Calendar
                                            <span className="badge badge-info right">2</span>
                                        </p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="../gallery.html" className="nav-link">
                                        <i className="nav-icon far fa-image" />
                                        <p>
                                            Gallery
                                        </p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="../kanban.html" className="nav-link">
                                        <i className="nav-icon fas fa-columns" />
                                        <p>
                                            Kanban Board
                                        </p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-envelope" />
                                        <p>
                                            Mailbox
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="../mailbox/mailbox.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Inbox</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../mailbox/compose.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Compose</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../mailbox/read-mail.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Read</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-book" />
                                        <p>
                                            Pages
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="../examples/invoice.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Invoice</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../examples/profile.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Profile</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../examples/e-commerce.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>E-commerce</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../examples/projects.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Projects</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../examples/project-add.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Project Add</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../examples/project-edit.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Project Edit</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../examples/project-detail.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Project Detail</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../examples/contacts.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Contacts</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../examples/faq.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>FAQ</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../examples/contact-us.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Contact us</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-plus-square" />
                                        <p>
                                            Extras
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>
                                                    Login &amp; Register v1
                                                    <i className="fas fa-angle-left right" />
                                                </p>
                                            </a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item">
                                                    <a href="../examples/login.html" className="nav-link">
                                                        <i className="far fa-circle nav-icon" />
                                                        <p>Login v1</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="../examples/register.html" className="nav-link">
                                                        <i className="far fa-circle nav-icon" />
                                                        <p>Register v1</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="../examples/forgot-password.html" className="nav-link">
                                                        <i className="far fa-circle nav-icon" />
                                                        <p>Forgot Password v1</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="../examples/recover-password.html" className="nav-link">
                                                        <i className="far fa-circle nav-icon" />
                                                        <p>Recover Password v1</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>
                                                    Login &amp; Register v2
                                                    <i className="fas fa-angle-left right" />
                                                </p>
                                            </a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item">
                                                    <a href="../examples/login-v2.html" className="nav-link">
                                                        <i className="far fa-circle nav-icon" />
                                                        <p>Login v2</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="../examples/register-v2.html" className="nav-link">
                                                        <i className="far fa-circle nav-icon" />
                                                        <p>Register v2</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="../examples/forgot-password-v2.html" className="nav-link">
                                                        <i className="far fa-circle nav-icon" />
                                                        <p>Forgot Password v2</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="../examples/recover-password-v2.html" className="nav-link">
                                                        <i className="far fa-circle nav-icon" />
                                                        <p>Recover Password v2</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../examples/lockscreen.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Lockscreen</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../examples/legacy-user-menu.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Legacy User Menu</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../examples/language-menu.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Language Menu</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../examples/404.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Error 404</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../examples/500.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Error 500</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../examples/pace.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Pace</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../examples/blank.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Blank Page</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../../starter.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Starter Page</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-search" />
                                        <p>
                                            Search
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="../search/simple.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Simple Search</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="../search/enhanced.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Enhanced</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-header">MISCELLANEOUS</li>
                                <li className="nav-item">
                                    <a href="../../iframe.html" className="nav-link">
                                        <i className="nav-icon fas fa-ellipsis-h" />
                                        <p>Tabbed IFrame Plugin</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://adminlte.io/docs/3.1/" className="nav-link">
                                        <i className="nav-icon fas fa-file" />
                                        <p>Documentation</p>
                                    </a>
                                </li>
                                <li className="nav-header">MULTI LEVEL EXAMPLE</li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="fas fa-circle nav-icon" />
                                        <p>Level 1</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-circle" />
                                        <p>
                                            Level 1
                                            <i className="right fas fa-angle-left" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Level 2</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>
                                                    Level 2
                                                    <i className="right fas fa-angle-left" />
                                                </p>
                                            </a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        <i className="far fa-dot-circle nav-icon" />
                                                        <p>Level 3</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        <i className="far fa-dot-circle nav-icon" />
                                                        <p>Level 3</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        <i className="far fa-dot-circle nav-icon" />
                                                        <p>Level 3</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Level 2</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="fas fa-circle nav-icon" />
                                        <p>Level 1</p>
                                    </a>
                                </li>
                                <li className="nav-header">LABELS</li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-circle text-danger" />
                                        <p className="text">Important</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-circle text-warning" />
                                        <p>Warning</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-circle text-info" />
                                        <p>Informational</p>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        {/* /.sidebar-menu */}
                    </div>
                    {/* /.sidebar */}
                </aside>
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Buttons</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">Buttons</li>
                                    </ol>
                                </div>
                            </div>
                        </div>{/* /.container-fluid */}
                    </section>
                    {/* Main content */}
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card card-primary card-outline">
                                        <div className="card-header">
                                            <h3 className="card-title">
                                                <i className="fas fa-edit" />
                                                Buttons
                                            </h3>
                                        </div>
                                        <div className="card-body pad table-responsive">
                                            <p>Various types of buttons. Using the base class <code>.btn</code></p>
                                            <table className="table table-bordered text-center">
                                                <tbody><tr>
                                                    <th>Normal</th>
                                                    <th>Large <code>.btn-lg</code></th>
                                                    <th>Small <code>.btn-sm</code></th>
                                                    <th>Extra Small <code>.btn-xs</code></th>
                                                    <th>Flat <code>.btn-flat</code></th>
                                                    <th>Disabled <code>.disabled</code></th>
                                                </tr>
                                                    <tr>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-default">Default</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-default btn-lg">Default</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-default btn-sm">Default</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-default btn-xs">Default</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-default btn-flat">Default</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-default disabled">Default</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-primary">Primary</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-primary btn-lg">Primary</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-primary btn-sm">Primary</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-primary btn-xs">Primary</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-primary btn-flat">Primary</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-primary disabled">Primary</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-secondary">Secondary</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-secondary btn-lg">Secondary</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-secondary btn-sm">Secondary</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-secondary btn-xs">Secondary</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-secondary btn-flat">Secondary</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-secondary disabled">Secondary</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-success">Success</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-success btn-lg">Success</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-success btn-sm">Success</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-success btn-xs">Success</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-success btn-flat">Success</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-success disabled">Success</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-info">Info</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-info btn-lg">Info</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-info btn-sm">Info</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-info btn-xs">Info</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-info btn-flat">Info</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-info disabled">Info</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-danger">Danger</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-danger btn-lg">Danger</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-danger btn-sm">Danger</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-danger btn-xs">Danger</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-danger btn-flat">Danger</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-danger disabled">Danger</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-warning">Warning</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-warning btn-lg">Warning</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-warning btn-sm">Warning</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-warning btn-xs">Warning</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-warning btn-flat">Warning</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-warning disabled">Warning</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-light">Light</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-light btn-lg">Light</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-light btn-sm">Light</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-light btn-xs">Light</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-light btn-flat">Light</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-light disabled">Light</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-dark">Dark</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-dark btn-lg">Dark</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-dark btn-sm">Dark</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-dark btn-xs">Dark</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-dark btn-flat">Dark</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-dark disabled">Dark</button>
                                                        </td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                        {/* /.card */}
                                    </div>
                                </div>
                                {/* /.col */}
                            </div>
                            {/* ./row */}
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card card-primary card-outline">
                                        <div className="card-header">
                                            <h3 className="card-title">
                                                <i className="fas fa-edit" />
                                                Outline Buttons
                                            </h3>
                                        </div>
                                        <div className="card-body pad table-responsive">
                                            <p>Various types of buttons. Using the base class <code>.btn</code></p>
                                            <table className="table table-bordered text-center">
                                                <tbody><tr>
                                                    <th>Normal</th>
                                                    <th>Large <code>.btn-lg</code></th>
                                                    <th>Small <code>.btn-sm</code></th>
                                                    <th>Extra Small <code>.btn-xs</code></th>
                                                    <th>Flat <code>.btn-flat</code></th>
                                                    <th>Disabled <code>.disabled</code></th>
                                                </tr>
                                                    <tr>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-primary">Primary</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-primary btn-lg">Primary</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-primary btn-sm">Primary</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-primary btn-xs">Primary</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-primary btn-flat">Primary</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-primary disabled">Primary</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-secondary">Secondary</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-secondary btn-lg">Secondary</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-secondary btn-sm">Secondary</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-secondary btn-xs">Secondary</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-secondary btn-flat">Secondary</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-secondary disabled">Secondary</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-success">Success</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-success btn-lg">Success</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-success btn-sm">Success</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-success btn-xs">Success</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-success btn-flat">Success</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-success disabled">Success</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-info">Info</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-info btn-lg">Info</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-info btn-sm">Info</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-info btn-xs">Info</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-info btn-flat">Info</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-info disabled">Info</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-danger">Danger</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-danger btn-lg">Danger</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-danger btn-sm">Danger</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-danger btn-xs">Danger</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-danger btn-flat">Danger</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-danger disabled">Danger</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-warning">Warning</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-warning btn-lg">Warning</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-warning btn-sm">Warning</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-warning btn-xs">Warning</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-warning btn-flat">Warning</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-warning disabled">Warning</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-light">Light</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-light btn-lg">Light</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-light btn-sm">Light</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-light btn-xs">Light</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-light btn-flat">Light</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-light disabled">Light</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-dark">Dark</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-dark btn-lg">Dark</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-dark btn-sm">Dark</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-dark btn-xs">Dark</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-dark btn-flat">Dark</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-outline-dark disabled">Dark</button>
                                                        </td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                        {/* /.card */}
                                    </div>
                                </div>
                                {/* /.col */}
                            </div>
                            {/* ./row */}
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card card-primary card-outline">
                                        <div className="card-header">
                                            <h3 className="card-title">
                                                <i className="fas fa-edit" />
                                                Gradient Buttons (bg-gradient-*)
                                            </h3>
                                        </div>
                                        <div className="card-body pad table-responsive">
                                            <p>Various types of buttons. Using the base class <code>.btn</code></p>
                                            <table className="table table-bordered text-center">
                                                <tbody><tr>
                                                    <th>Normal</th>
                                                    <th>Large <code>.btn-lg</code></th>
                                                    <th>Small <code>.btn-sm</code></th>
                                                    <th>Extra Small <code>.btn-xs</code></th>
                                                    <th>Flat <code>.btn-flat</code></th>
                                                    <th>Disabled <code>.disabled</code></th>
                                                </tr>
                                                    <tr>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-primary">Primary</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-primary btn-lg">Primary</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-primary btn-sm">Primary</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-primary btn-xs">Primary</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-primary btn-flat">Primary</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-primary disabled">Primary</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-secondary">Secondary</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-secondary btn-lg">Secondary</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-secondary btn-sm">Secondary</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-secondary btn-xs">Secondary</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-secondary btn-flat">Secondary</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-secondary disabled">Secondary</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-success">Success</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-success btn-lg">Success</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-success btn-sm">Success</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-success btn-xs">Success</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-success btn-flat">Success</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-success disabled">Success</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-info">Info</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-info btn-lg">Info</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-info btn-sm">Info</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-info btn-xs">Info</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-info btn-flat">Info</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-info disabled">Info</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-danger">Danger</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-danger btn-lg">Danger</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-danger btn-sm">Danger</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-danger btn-xs">Danger</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-danger btn-flat">Danger</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-danger disabled">Danger</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-warning">Warning</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-warning btn-lg">Warning</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-warning btn-sm">Warning</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-warning btn-xs">Warning</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-warning btn-flat">Warning</button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-block bg-gradient-warning disabled">Warning</button>
                                                        </td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                        {/* /.card */}
                                    </div>
                                </div>
                                {/* /.col */}
                            </div>
                            {/* ./row */}
                            <div className="row">
                                <div className="col-md-6">
                                    {/* Buttons with Icons */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Buttons with Icons</h3>
                                        </div>
                                        <div className="card-body row">
                                            <div className="col-md-6">
                                                <button type="button" className="btn btn-primary btn-block"><i className="fa fa-bell" /> .btn-block</button>
                                                <button type="button" className="btn btn-info btn-block btn-flat"><i className="fa fa-bell" /> .btn-block .btn-flat</button>
                                                <button type="button" className="btn btn-danger btn-block btn-sm"><i className="fa fa-bell" /> .btn-block .btn-sm</button>
                                            </div>
                                            <div className="col-md-6">
                                                <button type="button" className="btn btn-outline-primary btn-block"><i className="fa fa-bell" /> .btn-block</button>
                                                <button type="button" className="btn btn-outline-info btn-block btn-flat"><i className="fa fa-book" /> .btn-block .btn-flat</button>
                                                <button type="button" className="btn btn-outline-danger btn-block btn-sm"><i className="fa fa-book" /> .btn-block .btn-sm</button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /.card */}
                                    {/* Block buttons */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Block Buttons</h3>
                                        </div>
                                        <div className="card-body">
                                            <button type="button" className="btn btn-default btn-block">.btn-block</button>
                                            <button type="button" className="btn btn-default btn-block btn-flat">.btn-block .btn-flat</button>
                                            <button type="button" className="btn btn-default btn-block btn-sm">.btn-block .btn-sm</button>
                                        </div>
                                    </div>
                                    {/* /.card */}
                                    {/* Horizontal grouping */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Horizontal Button Group</h3>
                                        </div>
                                        <div className="card-body table-responsive pad">
                                            <p>
                                                Horizontal button groups are easy to create with bootstrap. Just add your buttons
                                                inside <code>&lt;div class="btn-group"&gt;&lt;/div&gt;</code>
                                            </p>
                                            <table className="table table-bordered">
                                                <tbody><tr>
                                                    <th>Button</th>
                                                    <th>Icons</th>
                                                    <th>Flat</th>
                                                    <th>Dropdown</th>
                                                </tr>
                                                    {/* Default */}
                                                    <tr>
                                                        <td>
                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-default">Left</button>
                                                                <button type="button" className="btn btn-default">Middle</button>
                                                                <button type="button" className="btn btn-default">Right</button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-default">
                                                                    <i className="fas fa-align-left" />
                                                                </button>
                                                                <button type="button" className="btn btn-default">
                                                                    <i className="fas fa-align-center" />
                                                                </button>
                                                                <button type="button" className="btn btn-default">
                                                                    <i className="fas fa-align-right" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-default btn-flat">
                                                                    <i className="fas fa-align-left" />
                                                                </button>
                                                                <button type="button" className="btn btn-default btn-flat">
                                                                    <i className="fas fa-align-center" />
                                                                </button>
                                                                <button type="button" className="btn btn-default btn-flat">
                                                                    <i className="fas fa-align-right" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-default">1</button>
                                                                <button type="button" className="btn btn-default">2</button>
                                                                <div className="btn-group">
                                                                    <button type="button" className="btn btn-default dropdown-toggle dropdown-icon" data-toggle="dropdown">
                                                                    </button>
                                                                    <div className="dropdown-menu">
                                                                        <a className="dropdown-item" href="#">Dropdown link</a>
                                                                        <a className="dropdown-item" href="#">Dropdown link</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    {/* ./default */}
                                                    {/* Info */}
                                                    <tr>
                                                        <td>
                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-info">Left</button>
                                                                <button type="button" className="btn btn-info">Middle</button>
                                                                <button type="button" className="btn btn-info">Right</button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-info">
                                                                    <i className="fas fa-align-left" />
                                                                </button>
                                                                <button type="button" className="btn btn-info">
                                                                    <i className="fas fa-align-center" />
                                                                </button>
                                                                <button type="button" className="btn btn-info">
                                                                    <i className="fas fa-align-right" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-info btn-flat">
                                                                    <i className="fas fa-align-left" />
                                                                </button>
                                                                <button type="button" className="btn btn-info btn-flat">
                                                                    <i className="fas fa-align-center" />
                                                                </button>
                                                                <button type="button" className="btn btn-info btn-flat">
                                                                    <i className="fas fa-align-right" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-info">1</button>
                                                                <button type="button" className="btn btn-info">2</button>
                                                                <div className="btn-group">
                                                                    <button type="button" className="btn btn-info dropdown-toggle dropdown-icon" data-toggle="dropdown">
                                                                    </button>
                                                                    <div className="dropdown-menu">
                                                                        <a className="dropdown-item" href="#">Dropdown link</a>
                                                                        <a className="dropdown-item" href="#">Dropdown link</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    {/* /. info */}
                                                    {/* /.danger */}
                                                    <tr>
                                                        <td>
                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-danger">Left</button>
                                                                <button type="button" className="btn btn-danger">Middle</button>
                                                                <button type="button" className="btn btn-danger">Right</button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-danger">
                                                                    <i className="fas fa-align-left" />
                                                                </button>
                                                                <button type="button" className="btn btn-danger">
                                                                    <i className="fas fa-align-center" />
                                                                </button>
                                                                <button type="button" className="btn btn-danger">
                                                                    <i className="fas fa-align-right" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-danger btn-flat">
                                                                    <i className="fas fa-align-left" />
                                                                </button>
                                                                <button type="button" className="btn btn-danger btn-flat">
                                                                    <i className="fas fa-align-center" />
                                                                </button>
                                                                <button type="button" className="btn btn-danger btn-flat">
                                                                    <i className="fas fa-align-right" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-danger">1</button>
                                                                <button type="button" className="btn btn-danger">2</button>
                                                                <div className="btn-group">
                                                                    <button type="button" className="btn btn-danger dropdown-toggle dropdown-icon" data-toggle="dropdown">
                                                                    </button>
                                                                    <div className="dropdown-menu">
                                                                        <a className="dropdown-item" href="#">Dropdown link</a>
                                                                        <a className="dropdown-item" href="#">Dropdown link</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    {/* /.danger */}
                                                    {/* warning */}
                                                    <tr>
                                                        <td>
                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-warning">Left</button>
                                                                <button type="button" className="btn btn-warning">Middle</button>
                                                                <button type="button" className="btn btn-warning">Right</button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-warning">
                                                                    <i className="fas fa-align-left" />
                                                                </button>
                                                                <button type="button" className="btn btn-warning">
                                                                    <i className="fas fa-align-center" />
                                                                </button>
                                                                <button type="button" className="btn btn-warning">
                                                                    <i className="fas fa-align-right" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-warning btn-flat">
                                                                    <i className="fas fa-align-left" />
                                                                </button>
                                                                <button type="button" className="btn btn-warning btn-flat">
                                                                    <i className="fas fa-align-center" />
                                                                </button>
                                                                <button type="button" className="btn btn-warning btn-flat">
                                                                    <i className="fas fa-align-right" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-warning">1</button>
                                                                <button type="button" className="btn btn-warning">2</button>
                                                                <div className="btn-group">
                                                                    <button type="button" className="btn btn-warning dropdown-toggle dropdown-icon" data-toggle="dropdown">
                                                                    </button>
                                                                    <div className="dropdown-menu">
                                                                        <a className="dropdown-item" href="#">Dropdown link</a>
                                                                        <a className="dropdown-item" href="#">Dropdown link</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    {/* /.warning */}
                                                    {/* success */}
                                                    <tr>
                                                        <td>
                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-success">Left</button>
                                                                <button type="button" className="btn btn-success">Middle</button>
                                                                <button type="button" className="btn btn-success">Right</button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-success">
                                                                    <i className="fas fa-align-left" />
                                                                </button>
                                                                <button type="button" className="btn btn-success">
                                                                    <i className="fas fa-align-center" />
                                                                </button>
                                                                <button type="button" className="btn btn-success">
                                                                    <i className="fas fa-align-right" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-success btn-flat">
                                                                    <i className="fas fa-align-left" />
                                                                </button>
                                                                <button type="button" className="btn btn-success btn-flat">
                                                                    <i className="fas fa-align-center" />
                                                                </button>
                                                                <button type="button" className="btn btn-success btn-flat">
                                                                    <i className="fas fa-align-right" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group">
                                                                <button type="button" className="btn btn-success">1</button>
                                                                <button type="button" className="btn btn-success">2</button>
                                                                <div className="btn-group">
                                                                    <button type="button" className="btn btn-success dropdown-toggle dropdown-icon" data-toggle="dropdown">
                                                                    </button>
                                                                    <div className="dropdown-menu">
                                                                        <a className="dropdown-item" href="#">Dropdown link</a>
                                                                        <a className="dropdown-item" href="#">Dropdown link</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    {/* /.success */}
                                                </tbody></table>
                                        </div>
                                    </div>
                                    {/* /.card */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Appended Buttons</h3>
                                        </div>
                                        <div className="card-body">
                                            <strong>With dropdown</strong>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                                        Action
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                        <div className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">Separated link</a>
                                                    </div>
                                                </div>
                                                {/* /btn-group */}
                                                <input type="text" className="form-control" />
                                            </div>
                                            {/* /input-group */}
                                            <strong>Normal</strong>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <button type="button" className="btn btn-danger">Action</button>
                                                </div>
                                                {/* /btn-group */}
                                                <input type="text" className="form-control" />
                                            </div>
                                            {/* /input-group */}
                                            <strong>Flat</strong>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control rounded-0" />
                                                <span className="input-group-append">
                                                    <button type="button" className="btn btn-info btn-flat">Go!</button>
                                                </span>
                                            </div>
                                            {/* /input-group */}
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                    {/* split buttons box */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Split buttons</h3>
                                        </div>
                                        <div className="card-body">
                                            {/* Split button */}
                                            <p className="mb-1">Normal split buttons:</p>
                                            <div className="margin">
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-default">Action</button>
                                                    <button type="button" className="btn btn-default dropdown-toggle dropdown-icon" data-toggle="dropdown">
                                                        <span className="sr-only">Toggle Dropdown</span>
                                                    </button>
                                                    <div className="dropdown-menu" role="menu">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                        <div className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">Separated link</a>
                                                    </div>
                                                </div>
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-info">Action</button>
                                                    <button type="button" className="btn btn-info dropdown-toggle dropdown-icon" data-toggle="dropdown">
                                                        <span className="sr-only">Toggle Dropdown</span>
                                                    </button>
                                                    <div className="dropdown-menu" role="menu">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                        <div className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">Separated link</a>
                                                    </div>
                                                </div>
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-danger">Action</button>
                                                    <button type="button" className="btn btn-danger dropdown-toggle dropdown-icon" data-toggle="dropdown">
                                                        <span className="sr-only">Toggle Dropdown</span>
                                                    </button>
                                                    <div className="dropdown-menu" role="menu">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                        <div className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">Separated link</a>
                                                    </div>
                                                </div>
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-success">Action</button>
                                                    <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown">
                                                        <span className="sr-only">Toggle Dropdown</span>
                                                    </button>
                                                    <div className="dropdown-menu" role="menu">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                        <div className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">Separated link</a>
                                                    </div>
                                                </div>
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-warning">Action</button>
                                                    <button type="button" className="btn btn-warning dropdown-toggle dropdown-icon" data-toggle="dropdown">
                                                        <span className="sr-only">Toggle Dropdown</span>
                                                    </button>
                                                    <div className="dropdown-menu" role="menu">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                        <div className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">Separated link</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* flat split buttons */}
                                            <p className="mt-3 mb-1">Flat split buttons:</p>
                                            <div className="margin">
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-default btn-flat">Action</button>
                                                    <button type="button" className="btn btn-default btn-flat dropdown-toggle dropdown-icon" data-toggle="dropdown">
                                                        <span className="sr-only">Toggle Dropdown</span>
                                                    </button>
                                                    <div className="dropdown-menu" role="menu">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                        <div className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">Separated link</a>
                                                    </div>
                                                </div>
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-info btn-flat">Action</button>
                                                    <button type="button" className="btn btn-info btn-flat dropdown-toggle dropdown-icon" data-toggle="dropdown">
                                                        <span className="sr-only">Toggle Dropdown</span>
                                                    </button>
                                                    <div className="dropdown-menu" role="menu">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                        <div className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">Separated link</a>
                                                    </div>
                                                </div>
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-danger btn-flat">Action</button>
                                                    <button type="button" className="btn btn-danger btn-flat dropdown-toggle dropdown-icon" data-toggle="dropdown">
                                                        <span className="sr-only">Toggle Dropdown</span>
                                                    </button>
                                                    <div className="dropdown-menu" role="menu">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                        <div className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">Separated link</a>
                                                    </div>
                                                </div>
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-success btn-flat">Action</button>
                                                    <button type="button" className="btn btn-success btn-flat dropdown-toggle dropdown-icon" data-toggle="dropdown">
                                                        <span className="sr-only">Toggle Dropdown</span>
                                                    </button>
                                                    <div className="dropdown-menu" role="menu">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                        <div className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">Separated link</a>
                                                    </div>
                                                </div>
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-warning btn-flat">Action</button>
                                                    <button type="button" className="btn btn-warning btn-flat dropdown-toggle dropdown-icon" data-toggle="dropdown">
                                                        <span className="sr-only">Toggle Dropdown</span>
                                                    </button>
                                                    <div className="dropdown-menu" role="menu">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                        <div className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">Separated link</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Split button */}
                                            <p className="mt-3 mb-1">Hoverable split buttons:</p>
                                            <div className="margin">
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-default">Action</button>
                                                    <button type="button" className="btn btn-default dropdown-toggle dropdown-hover dropdown-icon" data-toggle="dropdown">
                                                        <span className="sr-only">Toggle Dropdown</span>
                                                    </button>
                                                    <div className="dropdown-menu" role="menu">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                        <div className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">Separated link</a>
                                                    </div>
                                                </div>
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-info">Action</button>
                                                    <button type="button" className="btn btn-info dropdown-toggle dropdown-hover dropdown-icon" data-toggle="dropdown">
                                                        <span className="sr-only">Toggle Dropdown</span>
                                                    </button>
                                                    <div className="dropdown-menu" role="menu">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                        <div className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">Separated link</a>
                                                    </div>
                                                </div>
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-danger">Action</button>
                                                    <button type="button" className="btn btn-danger dropdown-toggle dropdown-hover dropdown-icon" data-toggle="dropdown">
                                                        <span className="sr-only">Toggle Dropdown</span>
                                                    </button>
                                                    <div className="dropdown-menu" role="menu">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                        <div className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">Separated link</a>
                                                    </div>
                                                </div>
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-success">Action</button>
                                                    <button type="button" className="btn btn-success dropdown-toggle dropdown-hover dropdown-icon" data-toggle="dropdown">
                                                        <span className="sr-only">Toggle Dropdown</span>
                                                    </button>
                                                    <div className="dropdown-menu" role="menu">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                        <div className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">Separated link</a>
                                                    </div>
                                                </div>
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-warning">Action</button>
                                                    <button type="button" className="btn btn-warning dropdown-toggle dropdown-hover dropdown-icon" data-toggle="dropdown">
                                                        <span className="sr-only">Toggle Dropdown</span>
                                                    </button>
                                                    <div className="dropdown-menu" role="menu">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                        <div className="dropdown-divider" />
                                                        <a className="dropdown-item" href="#">Separated link</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* end split buttons box */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-6">
                                    {/* Application buttons */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Application Buttons</h3>
                                        </div>
                                        <div className="card-body">
                                            <p>Add the classes <code>.btn.btn-app</code> to an <code>&lt;a&gt;</code> tag to achieve the following:</p>
                                            <a className="btn btn-app">
                                                <i className="fas fa-edit" /> Edit
                                            </a>
                                            <a className="btn btn-app">
                                                <i className="fas fa-play" /> Play
                                            </a>
                                            <a className="btn btn-app">
                                                <i className="fas fa-pause" /> Pause
                                            </a>
                                            <a className="btn btn-app">
                                                <i className="fas fa-save" /> Save
                                            </a>
                                            <a className="btn btn-app">
                                                <span className="badge bg-warning">3</span>
                                                <i className="fas fa-bullhorn" /> Notifications
                                            </a>
                                            <a className="btn btn-app">
                                                <span className="badge bg-success">300</span>
                                                <i className="fas fa-barcode" /> Products
                                            </a>
                                            <a className="btn btn-app">
                                                <span className="badge bg-purple">891</span>
                                                <i className="fas fa-users" /> Users
                                            </a>
                                            <a className="btn btn-app">
                                                <span className="badge bg-teal">67</span>
                                                <i className="fas fa-inbox" /> Orders
                                            </a>
                                            <a className="btn btn-app">
                                                <span className="badge bg-info">12</span>
                                                <i className="fas fa-envelope" /> Inbox
                                            </a>
                                            <a className="btn btn-app">
                                                <span className="badge bg-danger">531</span>
                                                <i className="fas fa-heart" /> Likes
                                            </a>
                                            <p>Application Buttons with Custom Colors</p>
                                            <a className="btn btn-app bg-secondary">
                                                <span className="badge bg-success">300</span>
                                                <i className="fas fa-barcode" /> Products
                                            </a>
                                            <a className="btn btn-app bg-success">
                                                <span className="badge bg-purple">891</span>
                                                <i className="fas fa-users" /> Users
                                            </a>
                                            <a className="btn btn-app bg-danger">
                                                <span className="badge bg-teal">67</span>
                                                <i className="fas fa-inbox" /> Orders
                                            </a>
                                            <a className="btn btn-app bg-warning">
                                                <span className="badge bg-info">12</span>
                                                <i className="fas fa-envelope" /> Inbox
                                            </a>
                                            <a className="btn btn-app bg-info">
                                                <span className="badge bg-danger">531</span>
                                                <i className="fas fa-heart" /> Likes
                                            </a>
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                    {/* Vertical grouping */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Vertical Button Group</h3>
                                        </div>
                                        <div className="card-body table-responsive pad">
                                            <p>
                                                Vertical button groups are easy to create with bootstrap. Just add your buttons
                                                inside <code>&lt;div class="btn-group-vertical"&gt;&lt;/div&gt;</code>
                                            </p>
                                            <table className="table table-bordered">
                                                <tbody><tr>
                                                    <th>Button</th>
                                                    <th>Icons</th>
                                                    <th>Flat</th>
                                                    <th>Dropdown</th>
                                                </tr>
                                                    {/* Default */}
                                                    <tr>
                                                        <td>
                                                            <div className="btn-group-vertical">
                                                                <button type="button" className="btn btn-default">Top</button>
                                                                <button type="button" className="btn btn-default">Middle</button>
                                                                <button type="button" className="btn btn-default">Bottom</button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group-vertical">
                                                                <button type="button" className="btn btn-default">
                                                                    <i className="fas fa-align-left" />
                                                                </button>
                                                                <button type="button" className="btn btn-default">
                                                                    <i className="fas fa-align-center" />
                                                                </button>
                                                                <button type="button" className="btn btn-default">
                                                                    <i className="fas fa-align-right" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group-vertical">
                                                                <button type="button" className="btn btn-default btn-flat">
                                                                    <i className="fas fa-align-left" />
                                                                </button>
                                                                <button type="button" className="btn btn-default btn-flat">
                                                                    <i className="fas fa-align-center" />
                                                                </button>
                                                                <button type="button" className="btn btn-default btn-flat">
                                                                    <i className="fas fa-align-right" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group-vertical">
                                                                <button type="button" className="btn btn-default">1</button>
                                                                <button type="button" className="btn btn-default">2</button>
                                                                <div className="btn-group">
                                                                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                                                    </button>
                                                                    <ul className="dropdown-menu">
                                                                        <li><a className="dropdown-item" href="#">Dropdown link</a></li>
                                                                        <li><a className="dropdown-item" href="#">Dropdown link</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    {/* ./default */}
                                                    {/* Info */}
                                                    <tr>
                                                        <td>
                                                            <div className="btn-group-vertical">
                                                                <button type="button" className="btn btn-info">Top</button>
                                                                <button type="button" className="btn btn-info">Middle</button>
                                                                <button type="button" className="btn btn-info">Bottom</button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group-vertical">
                                                                <button type="button" className="btn btn-info">
                                                                    <i className="fas fa-align-left" />
                                                                </button>
                                                                <button type="button" className="btn btn-info">
                                                                    <i className="fas fa-align-center" />
                                                                </button>
                                                                <button type="button" className="btn btn-info">
                                                                    <i className="fas fa-align-right" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group-vertical">
                                                                <button type="button" className="btn btn-info btn-flat">
                                                                    <i className="fas fa-align-left" />
                                                                </button>
                                                                <button type="button" className="btn btn-info btn-flat">
                                                                    <i className="fas fa-align-center" />
                                                                </button>
                                                                <button type="button" className="btn btn-info btn-flat">
                                                                    <i className="fas fa-align-right" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group-vertical">
                                                                <button type="button" className="btn btn-info">1</button>
                                                                <button type="button" className="btn btn-info">2</button>
                                                                <div className="btn-group">
                                                                    <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown">
                                                                    </button>
                                                                    <ul className="dropdown-menu">
                                                                        <li><a className="dropdown-item" href="#">Dropdown link</a></li>
                                                                        <li><a className="dropdown-item" href="#">Dropdown link</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    {/* /. info */}
                                                    {/* /.danger */}
                                                    <tr>
                                                        <td>
                                                            <div className="btn-group-vertical">
                                                                <button type="button" className="btn btn-danger">Top</button>
                                                                <button type="button" className="btn btn-danger">Middle</button>
                                                                <button type="button" className="btn btn-danger">Bottom</button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group-vertical">
                                                                <button type="button" className="btn btn-danger">
                                                                    <i className="fas fa-align-left" />
                                                                </button>
                                                                <button type="button" className="btn btn-danger">
                                                                    <i className="fas fa-align-center" />
                                                                </button>
                                                                <button type="button" className="btn btn-danger">
                                                                    <i className="fas fa-align-right" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group-vertical">
                                                                <button type="button" className="btn btn-danger btn-flat">
                                                                    <i className="fas fa-align-left" />
                                                                </button>
                                                                <button type="button" className="btn btn-danger btn-flat">
                                                                    <i className="fas fa-align-center" />
                                                                </button>
                                                                <button type="button" className="btn btn-danger btn-flat">
                                                                    <i className="fas fa-align-right" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group-vertical">
                                                                <button type="button" className="btn btn-danger">1</button>
                                                                <button type="button" className="btn btn-danger">2</button>
                                                                <div className="btn-group">
                                                                    <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown">
                                                                    </button>
                                                                    <ul className="dropdown-menu">
                                                                        <li><a className="dropdown-item" href="#">Dropdown link</a></li>
                                                                        <li><a className="dropdown-item" href="#">Dropdown link</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    {/* /.danger */}
                                                    {/* warning */}
                                                    <tr>
                                                        <td>
                                                            <div className="btn-group-vertical">
                                                                <button type="button" className="btn btn-warning">Top</button>
                                                                <button type="button" className="btn btn-warning">Middle</button>
                                                                <button type="button" className="btn btn-warning">Bottom</button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group-vertical">
                                                                <button type="button" className="btn btn-warning">
                                                                    <i className="fas fa-align-left" />
                                                                </button>
                                                                <button type="button" className="btn btn-warning">
                                                                    <i className="fas fa-align-center" />
                                                                </button>
                                                                <button type="button" className="btn btn-warning">
                                                                    <i className="fas fa-align-right" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group-vertical">
                                                                <button type="button" className="btn btn-warning btn-flat">
                                                                    <i className="fas fa-align-left" />
                                                                </button>
                                                                <button type="button" className="btn btn-warning btn-flat">
                                                                    <i className="fas fa-align-center" />
                                                                </button>
                                                                <button type="button" className="btn btn-warning btn-flat">
                                                                    <i className="fas fa-align-right" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group-vertical">
                                                                <button type="button" className="btn btn-warning">1</button>
                                                                <button type="button" className="btn btn-warning">2</button>
                                                                <div className="btn-group">
                                                                    <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown">
                                                                    </button>
                                                                    <ul className="dropdown-menu">
                                                                        <li><a className="dropdown-item" href="#">Dropdown link</a></li>
                                                                        <li><a className="dropdown-item" href="#">Dropdown link</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    {/* /.warning */}
                                                    {/* success */}
                                                    <tr>
                                                        <td>
                                                            <div className="btn-group-vertical">
                                                                <button type="button" className="btn btn-success">Top</button>
                                                                <button type="button" className="btn btn-success">Middle</button>
                                                                <button type="button" className="btn btn-success">Bottom</button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group-vertical">
                                                                <button type="button" className="btn btn-success">
                                                                    <i className="fas fa-align-left" />
                                                                </button>
                                                                <button type="button" className="btn btn-success">
                                                                    <i className="fas fa-align-center" />
                                                                </button>
                                                                <button type="button" className="btn btn-success">
                                                                    <i className="fas fa-align-right" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group-vertical">
                                                                <button type="button" className="btn btn-success btn-flat">
                                                                    <i className="fas fa-align-left" />
                                                                </button>
                                                                <button type="button" className="btn btn-success btn-flat">
                                                                    <i className="fas fa-align-center" />
                                                                </button>
                                                                <button type="button" className="btn btn-success btn-flat">
                                                                    <i className="fas fa-align-right" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="btn-group-vertical">
                                                                <button type="button" className="btn btn-success">1</button>
                                                                <button type="button" className="btn btn-success">2</button>
                                                                <div className="btn-group">
                                                                    <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown">
                                                                    </button>
                                                                    <ul className="dropdown-menu">
                                                                        <li><a className="dropdown-item" href="#">Dropdown link</a></li>
                                                                        <li><a className="dropdown-item" href="#">Dropdown link</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    {/* /.success */}
                                                </tbody></table>
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                    {/* Radio Buttons */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Radio Button Group</h3>
                                        </div>
                                        <div className="card-body table-responsive pad">
                                            <p className="mb-1">Radio Button Group with <code>.btn-secondary</code></p>
                                            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                                <label className="btn btn-secondary active">
                                                    <input type="radio" name="options" id="option_a1" autoComplete="off" defaultChecked /> Active
                                                </label>
                                                <label className="btn btn-secondary">
                                                    <input type="radio" name="options" id="option_a2" autoComplete="off" /> Radio
                                                </label>
                                                <label className="btn btn-secondary">
                                                    <input type="radio" name="options" id="option_a3" autoComplete="off" /> Radio
                                                </label>
                                            </div>
                                            <p className="mt-3 mb-1">Radio Button Group with <code>.bg-olive</code></p>
                                            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                                <label className="btn bg-olive active">
                                                    <input type="radio" name="options" id="option_b1" autoComplete="off" defaultChecked /> Active
                                                </label>
                                                <label className="btn bg-olive">
                                                    <input type="radio" name="options" id="option_b2" autoComplete="off" /> Radio
                                                </label>
                                                <label className="btn bg-olive">
                                                    <input type="radio" name="options" id="option_b3" autoComplete="off" /> Radio
                                                </label>
                                            </div>
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /. row */}
                        </div>{/* /.container-fluid */}
                    </section>
                    {/* /.content */}
                </div>
                {/* /.content-wrapper */}
                <footer className="main-footer">
                    <div className="float-right d-none d-sm-block">
                        <b>Version</b> 3.2.0
                    </div>
                    <strong>Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
                </footer>
                {/* Control Sidebar */}
                <aside className="control-sidebar control-sidebar-dark">
                    {/* Control sidebar content goes here */}
                </aside>
                {/* /.control-sidebar */}
            </div>
            {/* ./wrapper */}
            {/* jQuery */}
            {/* Bootstrap 4 */}
            {/* AdminLTE App */}
            {/* AdminLTE for demo purposes */}
        </div>
    )





}