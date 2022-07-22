import React, { Component, useState } from 'react'
import Widgets from './Widgets';
import { Link } from 'react-router-dom';
import Directchat from './Directchat';
import { General } from './UI/genral';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Topnavigate from './LayoutOption/Topnavigate';
import Topnav from './LayoutOption/Topnav';
import Boxed from './LayoutOption/Boxed';
import Fixedbar from './LayoutOption/Fixedbar';
import Chart from './charts/Chart';





// nav-pills



export default function Menu() {
    const [heighlight, setHeighlight] = useState("")


    function refreshPage() {
        window.location.reload(false);
    }


    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4 ">
                {/* Brand Logo */}
                <a href="index3.html" className="brand-link">
                    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: 8 }} />
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </a>

                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />



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
                    <nav className="mt-2" >
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false" >
                            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other  iconfont library */}
                            <Link to="/dashboard" >
                                <li className="nav-item"  >
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-chart-pie" />
                                        <p style={{ position: "relative", left: "5px", }} >
                                            Dashboard </p>
                                        <i className="right fas fa-angle-left" />

                                    </a>
                                </li>
                            </Link>
                            <Link to="/widgets">
                                <li class="nav-item">
                                    <a href="pages/.html" class="nav-link">
                                        <i class="nav-icon fas fa-th"></i>

                                        <p style={{ position: "relative", left: "5px" }}>
                                            Widgets </p>
                                        <span class="right badge badge-danger">New</span>


                                    </a>
                                </li>
                            </Link>


                            {/* <Link to="/General">
                                <li className="nav-item" active>
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-chart-pie" />
                                        <p style={{ position: "relative", left: "5px" }}>
                                            General  </p>
                                        <i className="right fas fa-angle-left" />

                                    </a>
                                </li>
                            </Link> */}


                            <Dropdown>
                                <li class="nav-item" active >
                                    <Dropdown.Toggle id="" variant="">
                                        <li class="nav-item" style={{
                                            position: "absolute",
                                            bottom: "17px",
                                            left: "8px"
                                        }}>









                                            <a href="#" class="nav-link" >
                                                <div style={{
                                                    position: "absolute",
                                                    right: "110px"
                                                }}>

                                                    <i class="nav-icon fas fa-copy" ></i>
                                                    <p style={{ position: "relative", left: "5px" }}>
                                                        Layout Options
                                                    </p>
                                                </div>
                                                <i class="fas fa-angle-left right" ></i>
                                                <span class="badge badge-info right">6</span>


                                            </a>
                                        </li>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu variant="dark" style={{

                                        backgroundColor: "#343a40",
                                    }}>

                                        <ul class="nav nav-treeview" style={{
                                            display: "block",
                                            backgroundColor: "#",
                                        }}>
                                            <Dropdown.Item href="#/" active>
                                                <Link to="/Topnav" >
                                                    <li class="nav-item">
                                                        <a href="#" class="nav-link">
                                                            <i class="far fa-circle nav-icon"></i>
                                                            <p>Top Navigation</p>
                                                        </a>
                                                    </li>
                                                </Link>
                                            </Dropdown.Item>


                                            <Dropdown.Item href="#">
                                                <Link to="/Topnavigate" >
                                                    <li class="nav-item">
                                                        <a href="#" class="nav-link">
                                                            <i class="far fa-circle nav-icon"></i>
                                                            <p>Top Navigation + Sidebar</p>
                                                        </a>
                                                    </li>
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#">
                                                <Link to="/Boxed">
                                                    <li class="nav-item">
                                                        <a href="#" class="nav-link">
                                                            <i class="far fa-circle nav-icon"></i>
                                                            <p>Boxed</p>
                                                        </a>
                                                    </li>
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#">
                                                <Link to="/Fixedbar">
                                                    <li class="nav-item">
                                                        <a href="layout/fixed-sidebar.html" class="nav-link">
                                                            <i class="far fa-circle nav-icon"></i>
                                                            <p>Fixed Sidebar</p>
                                                        </a>
                                                    </li>
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#">
                                                <Link to="/Fixedsidebar">
                                                    <li class="nav-item">
                                                        <a href="layout/fixed-sidebar-custom.html" class="nav-link">
                                                            <i class="far fa-circle nav-icon"></i>
                                                            <p>Fixed Sidebar <small>+ Custom Area</small></p>
                                                        </a>
                                                    </li>
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="#/action-3">
                                                <li class="nav-item">
                                                    <a href="layout/fixed-topnav.html" class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Fixed Navbar</p>
                                                    </a>
                                                </li>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">
                                                <li class="nav-item">
                                                    <a href="layout/fixed-footer.html" class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Fixed Footer</p>
                                                    </a>
                                                </li>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">
                                                <li class="nav-item">
                                                    <a href="layout/collapsed-sidebar.html" class="nav-link">
                                                        <i class="far fa-circle nav-icon"></i>
                                                        <p>Collapsed Sidebar</p>
                                                    </a>
                                                </li>
                                            </Dropdown.Item>
                                        </ul>
                                    </Dropdown.Menu>
                                </li>

                            </Dropdown>




























                            {/* <li class="nav-item">
                                <a href="pages/.html" class="nav-link">
                                    <i class="nav-icon fas fa-th"></i>
                                                                                                                                              
                                                                                                                                                
                                                                                                                                                         
                                    <p>                                                                                                                         
                                            
                                        Profile Widgets
                                        <span class="right badge badge-danger">New</span>

                                    </p>
                                </a>
                            </li> */}




                            <nav className="mt-2">
                                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                    {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}


                                    <Dropdown>


                                        <li className="nav-item" active>

                                            <Dropdown.Toggle id="" variant="">
                                                <li class="nav-item" style={{
                                                    position: "absolute",
                                                    bottom: "-5px",
                                                    left: "-70px"
                                                }}>
                                                    <a href="#" className="nav-link">
                                                        <i className="nav-icon fas fa-chart-pie" />
                                                        <p style={{
                                                            position: "relative",
                                                            left: "7px"
                                                        }}>
                                                            Charts
                                                            <i className="right fas fa-angle-left" style={{
                                                                position: "relative",
                                                                right: "-130px",
                                                                top: "-1px",
                                                            }} />
                                                        </p>
                                                    </a>
                                                </li>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu variant="dark" style={{

                                                backgroundColor: "#343a40",
                                            }}>
                                                <ul className="nav nav-treeview" style={{
                                                    display: "block",
                                                    backgroundColor: "#",
                                                }}>
                                                    <Dropdown.Item href="#">
                                                        <Link to="/Chart">
                                                            <li className="nav-item">
                                                                <a href="pages/charts/chartjs.html" className="nav-link">
                                                                    <i className="far fa-circle nav-icon" />
                                                                    <p>ChartJS</p>
                                                                </a>
                                                            </li>
                                                        </Link>
                                                    </Dropdown.Item>

                                                    <Dropdown.Item href="#">
                                                        <Link to="/Flot">
                                                            <li className="nav-item">
                                                                <a href="pages/charts/flot.html" className="nav-link">
                                                                    <i className="far fa-circle nav-icon" />
                                                                    <p>Flot</p>
                                                                </a>
                                                            </li>
                                                        </Link>
                                                    </Dropdown.Item>

                                                    <Dropdown.Item href="#">
                                                        <li className="nav-item">
                                                            <a href="pages/charts/inline.html" className="nav-link">
                                                                <i className="far fa-circle nav-icon" />
                                                                <p>Inline</p>
                                                            </a>
                                                        </li>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#">
                                                        <li className="nav-item">
                                                            <a href="pages/charts/uplot.html" className="nav-link">
                                                                <i className="far fa-circle nav-icon" />
                                                                <p>uPlot</p>
                                                            </a>
                                                        </li>
                                                    </Dropdown.Item>
                                                </ul>
                                            </Dropdown.Menu>
                                        </li>
                                    </Dropdown>
                                    <Dropdown>
                                        <li class="nav-item" active ></li>
                                        <Dropdown.Toggle id="" variant="">
                                            <li class="nav-item" style={{
                                                position: "absolute",
                                                bottom: "-5px",
                                                left: "-52px"
                                            }}>
                                                <a href="#" className="nav-link">
                                                    <i className="nav-icon fas fa-tree" />
                                                    <p style={{
                                                        position: "relative",
                                                        left: "7px"
                                                    }}>
                                                        UI Elements
                                                        <i className="fas fa-angle-left right" style={{
                                                            position: "relative",
                                                            right: "-97px",
                                                            top: "-1px",
                                                        }} />
                                                    </p>
                                                </a>
                                            </li>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu variant="dark" style={{

                                            backgroundColor: "#343a40",
                                        }}>
                                            <ul className="nav nav-treeview " style={{
                                                display: "block",
                                                backgroundColor: "#",
                                            }}>
                                                <li className="nav-item">
                                                    <Link to="/General">
                                                        <a href="pages/UI/general.html" className="nav-link">
                                                            <i className="far fa-circle nav-icon" />
                                                            <p>General</p>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="pages/UI/icons.html" className="nav-link">
                                                        <i className="far fa-circle nav-icon" />
                                                        <p>Icons</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/Button">
                                                        <a href="pages/UI/buttons.html" className="nav-link">
                                                            <i className="far fa-circle nav-icon" />
                                                            <p>Buttons</p>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="pages/UI/sliders.html" className="nav-link">
                                                        <i className="far fa-circle nav-icon" />
                                                        <p>Sliders</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="pages/UI/modals.html" className="nav-link">
                                                        <i className="far fa-circle nav-icon" />
                                                        <p>Modals &amp; Alerts</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="pages/UI/navbar.html" className="nav-link">
                                                        <i className="far fa-circle nav-icon" />
                                                        <p>Navbar &amp; Tabs</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="pages/UI/timeline.html" className="nav-link">
                                                        <i className="far fa-circle nav-icon" />
                                                        <p>Timeline</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="pages/UI/ribbons.html" className="nav-link">
                                                        <i className="far fa-circle nav-icon" />
                                                        <p>Ribbons</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </Dropdown.Menu>

                                    </Dropdown>
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
                                                <a href="pages/forms/general.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>General Elements</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/forms/advanced.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Advanced Elements</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/forms/editors.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Editors</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/forms/validation.html" className="nav-link">
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
                                                <a href="pages/tables/simple.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Simple Tables</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/tables/data.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>DataTables</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/tables/jsgrid.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>jsGrid</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-header">EXAMPLES</li>
                                    <li className="nav-item">
                                        <a href="pages/calendar.html" className="nav-link">
                                            <i className="nav-icon far fa-calendar-alt" />
                                            <p>
                                                Calendar
                                                <span className="badge badge-info right">2</span>
                                            </p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/gallery.html" className="nav-link">
                                            <i className="nav-icon far fa-image" />
                                            <p>
                                                Gallery
                                            </p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/kanban.html" className="nav-link">
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
                                                <a href="pages/mailbox/mailbox.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Inbox</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/mailbox/compose.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Compose</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/mailbox/read-mail.html" className="nav-link">
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
                                                <a href="pages/examples/invoice.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Invoice</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/profile.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Profile</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/e-commerce.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>E-commerce</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/projects.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Projects</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/project-add.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Project Add</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/project-edit.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Project Edit</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/project-detail.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Project Detail</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/contacts.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Contacts</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/faq.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>FAQ</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/contact-us.html" className="nav-link">
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
                                                        <a href="pages/examples/login.html" className="nav-link">
                                                            <i className="far fa-circle nav-icon" />
                                                            <p>Login v1</p>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="pages/examples/register.html" className="nav-link">
                                                            <i className="far fa-circle nav-icon" />
                                                            <p>Register v1</p>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="pages/examples/forgot-password.html" className="nav-link">
                                                            <i className="far fa-circle nav-icon" />
                                                            <p>Forgot Password v1</p>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="pages/examples/recover-password.html" className="nav-link">
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
                                                        <a href="pages/examples/login-v2.html" className="nav-link">
                                                            <i className="far fa-circle nav-icon" />
                                                            <p>Login v2</p>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="pages/examples/register-v2.html" className="nav-link">
                                                            <i className="far fa-circle nav-icon" />
                                                            <p>Register v2</p>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="pages/examples/forgot-password-v2.html" className="nav-link">
                                                            <i className="far fa-circle nav-icon" />
                                                            <p>Forgot Password v2</p>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="pages/examples/recover-password-v2.html" className="nav-link">
                                                            <i className="far fa-circle nav-icon" />
                                                            <p>Recover Password v2</p>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/lockscreen.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Lockscreen</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/legacy-user-menu.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Legacy User Menu</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/language-menu.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Language Menu</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/404.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Error 404</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/500.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Error 500</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/pace.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Pace</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/blank.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Blank Page</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="starter.html" className="nav-link">
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
                                                <a href="pages/search/simple.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Simple Search</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/search/enhanced.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Enhanced</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-header">MISCELLANEOUS</li>
                                    <li className="nav-item">
                                        <a href="iframe.html" className="nav-link">
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











                            {/* 

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
                                        <a href="layout/top-nav.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Top Navigation</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="layout/top-nav-sidebar.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Top Navigation + Sidebar</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="layout/boxed.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Boxed</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="layout/fixed-sidebar.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Fixed Sidebar</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="layout/fixed-sidebar-custom.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Fixed Sidebar <small>+ Custom Area</small></p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="layout/fixed-topnav.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Fixed Navbar</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="layout/fixed-footer.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Fixed Footer</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="layout/collapsed-sidebar.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Collapsed Sidebar</p>
                                        </a>
                                    </li>
                                </ul>
                            </li> */}

























                            <link to="/DirectChat"></link>

                            <li class="nav-item">
                                <a href="DirectChat" class="nav-link">
                                    <i class="nav-icon fas fa-th"></i>

                                    <p>
                                        Direct chat
                                        <span class="right badge badge-danger">New</span>

                                    </p>
                                </a>
                            </li>

                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside >
        </div >

    )
}
