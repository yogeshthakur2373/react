import React, { useEffect, useState } from "react";
// import $ from 'jquery'

import classNames from 'classnames'


// import axios from 'axios'

export default function Widgets() {
    const [shadow, setShadow] = useState("info-box");
    // const [shado, setShado] = useState(false);
    const [color, setColor] = useState("info-box bg-info");
    const [color1, setColor1] = useState(false);
    const [box, setBox] = useState("small-box bg-info");


    classNames('foo', 'bar');





    // const onClickShadow = () => {
    //     setShadow(!shadow)
    // }


    // const [color, setColor] = useState("")

    // const [over, setover] = useState("")

    // const [abilities, setAbilities] = useState("")

    //






    // async function postName(e) {
    //     e.preventDefault()

    //     try {
    //         await axios.post("http://localhost:4000/post_name", {
    //             shadow
    //         })
    //     } catch (error) {
    //         console.log(error)

    //     }
    // }






    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await fetch('http://localhost:4000/shadow')
    //         const jsonResult = result.json();
    //         setShadow(jsonResult)
    //     }
    //     fetchData()
    // }, [])








    // const submitAuthour = async () => {
    //     const myData = {
    //         className: "info-box shadow-none"



    //     }
    // }







    // $('input[name="none"]').on('change', function(){
    //     selected = $('input[name="none"]:')
    // })

























    // function none() {

    //     alert("wuodgfc")
    //     document.getElementsById("none").onClick = () => {
    //         document.getElementsByClassName("row mb-2").style.color = "blue";
    //     }
    // }


    // function small() {

    //     alert("hlo")
    //     document.getElementsById("none").onClick = () => {
    //         document.getElementsByClassName("row mb-2").style.color = "blue";
    //     }
    // }
    // function regular() {

    //     alert("hlo")
    //     document.getElementsById("none").onClick = () => {
    //         document.getElementsByClassName("row mb-2").style.color = "blue";
    //     }
    // }
    // function large() {

    //     alert("hlo")
    //     document.getElementsById("none").onClick = () => {
    //         document.getElementsByClassName("row mb-2").style.color = "blue";
    //     }
    // }

    function store(data) {

        console.log(data);
    }




    return (

        <div>




            <div>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>AdminLTE 3 | Widgets</title>
                {/* Google Font: Source Sans Pro */}
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
                {/* Font Awesome */}
                <link rel="stylesheet" href="../plugins/fontawesome-free/css/all.min.css" />
                {/* Ionicons */}
                <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
                {/* Theme style */}
                <link rel="stylesheet" href="../dist/css/adminlte.min.css" />
            </div>





            {/* 

            <form>
                <input type="text" id="input"/>
                <button id='get'></button>
                <button id="post"></button>
            </form> */}












            <div className="wrapper">
                {/* Navbar */}

                {/* Main Sidebar Container */}

                {/* Sidebar Menu */}

                {/* Content Wrapper. Contains page content */}

                <div className="content-wrapper">
                    {/* Content Header (Page header) */}

                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Widgets</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">Widgets</li>
                                    </ol>
                                </div>
                            </div>
                        </div>{/* /.container-fluid */}
                    </section>
                    {/* Main content */}

                    <section className="content">

                        {/* <div>
                            <input type="radio" id="none" value="shadow" name="none" onClick={() => { setShadow() }} />
                            <label for="none">none</label>
                            <input type="radio" id="small" value="shadow" name="small" onClick={() => { setSmall(true) }} />
                            <label for="none">small</label>
                            <input type="radio" id="Ragular" value="shadow" name="ragular" onClick={() => { setSmall(false) }} />
                            <label for="none">Regular</label>
                            <input type="radio" id="large" value="shadow" name="large" onClick={() => { setShadow(true) }} />
                            <label for="none">large</label>
                        </div> */}
                        <div>
                            <input type="radio" id="html" name="fav_language" value="none" onClick={() => { setShadow("info-box shadow-none") }} />
                            <label htmlFor="html">none</label>
                            <input type="radio" id="css" name="fav_language" onClick={() => { setShadow("info-box shadow-sm") }} />
                            <label htmlFor="css">Small</label>
                            <input type="radio" id="javascript" name="fav_language" onClick={() => { setShadow("info-box shadow") }} />
                            <label htmlFor="javascript">regular</label>
                            <input type="radio" id="javascript" name="fav_language" onClick={() => { setShadow("info-box shadow-lg") }} />
                            <label htmlFor="javascript" >large</label>
                        </div>
                        {/* <input action="../../post" method="post" type="radio" value="shadow" id="none"
                                name="shadow" onClick={onClickShadow}
                                onDoubleClick={ } /> */}
                        {/* <label for="none" type="submit">none</label>
                                   
                            <input type="radio" value="small" id="small"
                                name="shadow" onClick={ }
                                onDoubleClick={ } />
                            <label for="small">small</label>
                            <input type="radio" value="regular" id="regular"
                                onChange={""} name="shadow" onClick={ }
                                onDoubleClick={ } />
                            <label for="regular">regular</label>
                            <input type="radio" value="larger" id="large"
                                onChange={""} name="shadow" onClick={ }
                                onDoubleClick={ } />
                            <label for="large">large</label> */}













                        <div className="container-fluid">
                            <h5 className="mb-2">Info Box</h5>
                            <div className="row">
                                <div className="col-md-3 col-sm-6 col-12" >
                                    <div className={shadow} id="yogesh" >

                                        <span className="info-box-icon bg-info"><i className="far fa-envelope" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">Messages</span>
                                            <span className="info-box-number">1,410</span>


                                        </div>



                                        {/* /.info-box-content */}
                                    </div>


                                    {/* /.info-box */}
                                </div>


                                {/* /.col */}

                                {/* /.col */}

                                {/* /.col */}
                            </div>
                            {/* /.row */}
                            {/* =========================================================== */}

                            {/* /.row */}
                            {/* =========================================================== */}


                            <h5 className="mt-4 mb-2" id="abhishek">Info Box With <code>bg-*</code></h5>
                            {/* <div>

                                <input type="radio" value="none" id="none"
                                    name="shadow" onClick={() => { setColor(document.getElementById("blue").className = "info-box bg-gradient-info ") }} />
                                <label for="none">skyblue</label>

                                <input type="radio" value="small" id="small"
                                    name="shadow" onClick={() => { setColor(document.getElementById("blue").className = "info-box bg-gradient-success") }} />
                                <label for="small">light green</label>
                                <input type="radio" value="regular" id="regular"
                                    onChange={() => { setColor(document.getElementById("blue").className = "info-box bg-gradient-warning") }} name="shadow" onClick={""} />
                                <label for="regular">light yellow</label>
                                <input type="radio" value="larger" id="large"
                                    onChange={""} name="shadow" onClick={() => { setColor(document.getElementById("blue").className = "info-box bg-gradient-danger") }} />
                                <label for="large">light red</label>


                            </div> */}
                            <div>
                                <input type="radio" id="html" name="fav_language" onClick={() => { setColor("info-box bg-info") }} />
                                <label htmlFor="html">none</label>
                                <input type="radio" id="css" name="fav_language" defaultValue="CSS" onClick={() => { setColor("info-box bg-success") }} />
                                <label htmlFor="css">color2</label>
                                <input type="radio" id="javascript" name="fav_language" onClick={() => { setColor("info-box bg-warning") }} />
                                <label htmlFor="javascript">color3</label>
                                <input type="radio" id="javascript" name="fav_language" onClick={() => { setColor("info-box bg-danger") }} />
                                <label htmlFor="javascript" >color4</label>
                            </div>

                            <div className="row">
                                <div className="col-md-3 col-sm-6 col-12" >
                                    <div className={color} id="blue">
                                        <span className="info-box-icon" ><i className="far fa-bookmark" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">Bookmarks</span>
                                            <span className="info-box-number">41,410</span>
                                            <div className="progress">
                                                <div className="progress-bar" style={{ width: '70%' }} />
                                            </div>
                                            <span className="progress-description">
                                                70% Increase in 30 Days
                                            </span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>
                                    {/* /.info-box */}
                                </div>
                                {/* /.col */}

                                {/* /.col */}
                            </div>





                            {/* /.row */}
                            {/* =========================================================== */}
                            {/* Small Box (Stat card) */}
                            <h5 className="mb-2 mt-4">Small Box</h5>


                            <div>
                                <input type="radio" id="html" name="fav_language" onClick={() => { setBox("small-box bg-info") }} />
                                <label htmlFor="html">color1</label>
                                <input type="radio" id="css" name="fav_language" defaultValue="CSS" onClick={() => { setBox("small-box bg-success") }} />
                                <label htmlFor="css">color2</label>
                                <input type="radio" id="javascript" name="fav_language" onClick={() => { setBox(" small-box bg-warning ") }} />
                                <label htmlFor="javascript">color3</label>
                                <input type="radio" id="javascript" name="fav_language" onClick={() => { setBox("small-box bg-danger") }} />
                                <label htmlFor="javascript" >color4</label>
                            </div>


                            {/* <div>

                                <input type="radio" value="none" id="none"
                                    name="shadow" onClick={""} />
                                <label for="none">none</label>

                                <input type="radio" value="small" id="small"
                                    name="shadow" onClick={() => { setover(document.getElementById("overlay").className = "overlay info-box bg-gradient-info col-md-3 col-sm-6 col-12") }} />
                                <label for="small">new order</label>
                                <input type="radio" value="regular" id="regular"
                                    onChange={""} name="shadow" onClick={""} />
                                <label for="regular">bounce rate</label>

                            </div> */}
                            <div className="row" >
                                <div className="col-lg-3 col-6" id="overlay">
                                    {/* small card */}
                                    <div className={box} >
                                        <div className="inner">
                                            <h3>150</h3>
                                            <p>New Orders</p>
                                        </div>
                                        <div className="icon">
                                            <i className="fas fa-shopping-cart" />
                                        </div>
                                        <a href="#" className="small-box-footer">
                                            More info <i className="fas fa-arrow-circle-right" />
                                        </a>
                                    </div>
                                </div>
                                {/* ./col */}
                                {/* ./col */}
                            </div>
                            {/* /.row */}
                            {/* Small Box (Stat card) */}
                            <div className="row">
                                <div className="col-lg-3 col-6">
                                    {/* small card */}
                                    <div className="small-box bg-info">
                                        {/* Loading (remove the following to stop the loading)*/}
                                        <div className="overlay" id="overlay">
                                            <i className="" />
                                        </div>
                                        {/* end loading */}
                                        <div className="inner">
                                            <h3>150</h3>
                                            <p>New Orders</p>
                                        </div>
                                        <div className="icon">
                                            <i className="fas fa-shopping-cart" />
                                        </div>
                                        <a href="#" className="small-box-footer">
                                            More info <i className="fas fa-arrow-circle-right" />
                                        </a>
                                    </div>
                                </div>
                                {/* ./col */}
                                <div className="col-lg-3 col-6">
                                    {/* small card */}
                                    <div className="small-box bg-success">
                                        {/* Loading (remove the following to stop the loading)*/}
                                        <div className="overlay dark">
                                            <i className="fas fa-3x fa-sync-alt" />
                                        </div>
                                        {/* end loading */}
                                        <div className="inner">
                                            <h3>53<sup style={{ fontSize: 20 }}>%</sup></h3>
                                            <p>Bounce Rate</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-stats-bars" />
                                        </div>
                                        <a href="#" className="small-box-footer">
                                            More info <i className="fas fa-arrow-circle-right" />
                                        </a>
                                    </div>
                                </div>
                                {/* ./col */}
                            </div>
                            {/* /.row */}
                            {/* =========================================================== */}
                            <h4 className="mb-2 mt-4">Cards</h4>
                            <h5 className="mb-2">Abilities</h5>




                            {/* <div>

                                <input type="radio" value="none" id="none"
                                    name="" onClick={() => { setAbilities(document.getElementById("cardd").className = "") }} />
                                <label for="none">Expandable</label>

                                <input type="radio" value="small" id="small"
                                    name="" onClick={""} />
                                <label for="small">Collapsable</label>
                                <input type="radio" value="regular" id="regular"
                                    onChange={""} name="shadow" onClick={""} />

                                <label for="regular">Removable</label>

                                <input type="radio" value="regular" id="regular"
                                    onChange={""} name="shadow" onClick={""} />

                                <label for="regular">Maximizable</label>

                            </div> */}







                            <div className="row">
                                <div className="col-md-3" id="cardd" >
                                    <div className="card card-primary collapsed-card " id="card" >
                                        <div className="card-header">
                                            <h3 className="card-title">Expandable</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse" ><i className="fas fa-plus" />
                                                </button>
                                            </div>
                                            {/* /.card-tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            The body of the card
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-3">
                                    <div className="card card-success">
                                        <div className="card-header">
                                            <h3 className="card-title">Collapsable</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                                                </button>
                                            </div>
                                            {/* /.card-tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            The body of the card
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-3">
                                    <div className="card card-warning">
                                        <div className="card-header">
                                            <h3 className="card-title">Removable</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" />
                                                </button>
                                            </div>
                                            {/* /.card-tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            The body of the card
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-3">
                                    <div className="card card-danger">
                                        <div className="card-header">
                                            <h3 className="card-title">Maximizable</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="maximize"><i className="fas fa-expand" />
                                                </button>
                                            </div>
                                            {/* /.card-tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            The body of the card
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row */}
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card card-primary">
                                        <div className="card-header">
                                            <h3 className="card-title">Card Refresh</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="card-refresh" data-source="widgets.html" data-source-selector="#card-refresh-content">
                                                    <i className="fas fa-sync-alt" />
                                                </button>
                                            </div>
                                            {/* /.card-tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            The body of the card
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                    <div className="d-none" id="card-refresh-content">
                                        The body of the card after card refresh
                                    </div>
                                </div>
                                {/* /.col */}
                                <div className="col-md-3">
                                    <div className="card card-success">
                                        <div className="card-header">
                                            <h3 className="card-title">All together</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="card-refresh" data-source="widgets.html" data-source-selector="#card-refresh-content" data-load-on-init="false">
                                                    <i className="fas fa-sync-alt" />
                                                </button>
                                                <button type="button" className="btn btn-tool" data-card-widget="maximize">
                                                    <i className="fas fa-expand" />
                                                </button>
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                    <i className="fas fa-minus" />
                                                </button>
                                                <button type="button" className="btn btn-tool" data-card-widget="remove">
                                                    <i className="fas fa-times" />
                                                </button>
                                            </div>
                                            {/* /.card-tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            The body of the card
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-3">
                                    <div className="card card-warning">
                                        <div className="card-header">
                                            <h3 className="card-title">Loading state</h3>
                                        </div>
                                        <div className="card-body">
                                            The body of the card
                                        </div>
                                        {/* /.card-body */}
                                        {/* Loading (remove the following to stop the loading)*/}
                                        <div className="overlay">
                                            <i className="fas fa-2x fa-sync-alt" />
                                        </div>
                                        {/* end loading */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-3">
                                    <div className="card card-danger">
                                        <div className="card-header">
                                            <h3 className="card-title">Loading state (dark)</h3>
                                        </div>
                                        <div className="card-body">
                                            The body of the card
                                        </div>
                                        {/* /.card-body */}
                                        {/* Loading (remove the following to stop the loading)*/}
                                        <div className="overlay dark">
                                            <i className="fas fa-2x fa-sync-alt" />
                                        </div>
                                        {/* end loading */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row */}
                            {/* =========================================================== */}
                            <h5 className="mb-2">Custom Shadows Variations <small><i>Using Bootstrap's Shadow Utility</i></small></h5>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card card-primary shadow-none">
                                        <div className="card-header">
                                            <h3 className="card-title">Shadow - None</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                    <i className="fas fa-minus" />
                                                </button>
                                            </div>
                                            {/* /.card-tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            The body of the card
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-3">
                                    <div className="card card-success shadow-sm">
                                        <div className="card-header">
                                            <h3 className="card-title">Shadow - Small</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                    <i className="fas fa-minus" />
                                                </button>
                                            </div>
                                            {/* /.card-tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            The body of the card
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-3">
                                    <div className="card card-warning shadow">
                                        <div className="card-header">
                                            <h3 className="card-title">Shadow - Regular</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" />
                                                </button>
                                            </div>
                                            {/* /.card-tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            The body of the card
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-3">
                                    <div className="card card-danger shadow-lg">
                                        <div className="card-header">
                                            <h3 className="card-title">Shadow - Large</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="maximize"><i className="fas fa-expand" />
                                                </button>
                                            </div>
                                            {/* /.card-tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            The body of the card
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row */}
                            {/* =========================================================== */}
                            <h5 className="mb-2">Colors Variations</h5>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card card-primary">
                                        <div className="card-header">
                                            <h3 className="card-title">Primary</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                    <i className="fas fa-minus" />
                                                </button>
                                            </div>
                                            {/* /.card-tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            The body of the card
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-3">
                                    <div className="card card-success">
                                        <div className="card-header">
                                            <h3 className="card-title">Success</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" />
                                                </button>
                                            </div>
                                            {/* /.card-tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            The body of the card
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-3">
                                    <div className="card card-warning">
                                        <div className="card-header">
                                            <h3 className="card-title">Warning</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                    <i className="fas fa-minus" />
                                                </button>
                                            </div>
                                            {/* /.card-tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            The body of the card
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-3">
                                    <div className="card card-danger">
                                        <div className="card-header">
                                            <h3 className="card-title">Danger</h3>
                                        </div>
                                        <div className="card-body">
                                            The body of the card
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row */}
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card card-outline card-primary">
                                        <div className="card-header">
                                            <h3 className="card-title">Primary Outline</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                    <i className="fas fa-minus" />
                                                </button>
                                            </div>
                                            {/* /.card-tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            The body of the card
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-3">
                                    <div className="card card-outline card-success">
                                        <div className="card-header">
                                            <h3 className="card-title">Success Outline</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" />
                                                </button>
                                            </div>
                                            {/* /.card-tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            The body of the card
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-3">
                                    <div className="card card-outline card-warning">
                                        <div className="card-header">
                                            <h3 className="card-title">Warning Outline</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                    <i className="fas fa-minus" />
                                                </button>
                                            </div>
                                            {/* /.card-tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            The body of the card
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-3">
                                    <div className="card card-outline card-danger">
                                        <div className="card-header">
                                            <h3 className="card-title">Danger Outline</h3>
                                        </div>
                                        <div className="card-body">
                                            The body of the card
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row */}
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card bg-primary">
                                        <div className="card-header">
                                            <h3 className="card-title">Primary</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                    <i className="fas fa-minus" />
                                                </button>
                                            </div>
                                            {/* /.card-tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            The body of the card
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-3">
                                    <div className="card bg-success">
                                        <div className="card-header">
                                            <h3 className="card-title">Success</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" />
                                                </button>
                                            </div>
                                            {/* /.card-tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            The body of the card
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-3">
                                    <div className="card bg-warning">
                                        <div className="card-header">
                                            <h3 className="card-title">Warning</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                    <i className="fas fa-minus" />
                                                </button>
                                            </div>
                                            {/* /.card-tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            The body of the card
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-3">
                                    <div className="card bg-danger">
                                        <div className="card-header">
                                            <h3 className="card-title">Danger</h3>
                                        </div>
                                        <div className="card-body">
                                            The body of the card
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row */}
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card bg-gradient-primary">
                                        <div className="card-header">
                                            <h3 className="card-title">Primary Gradient</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                    <i className="fas fa-minus" />
                                                </button>
                                            </div>
                                            {/* /.card-tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            The body of the card
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-3">
                                    <div className="card bg-gradient-success">
                                        <div className="card-header">
                                            <h3 className="card-title">Success Gradient</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" />
                                                </button>
                                            </div>
                                            {/* /.card-tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            The body of the card
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-3">
                                    <div className="card bg-gradient-warning">
                                        <div className="card-header">
                                            <h3 className="card-title">Warning Gradient</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                    <i className="fas fa-minus" />
                                                </button>
                                            </div>
                                            {/* /.card-tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            The body of the card
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-3">
                                    <div className="card bg-gradient-danger">
                                        <div className="card-header">
                                            <h3 className="card-title">Danger Gradient</h3>
                                        </div>
                                        <div className="card-body">
                                            The body of the card
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row */}
                            {/* =========================================================== */}
                            {/* Direct Chat */}
                            <h4 className="mt-4 mb-2">Direct Chat</h4>
                            <div className="row">
                                <div className="col-md-3">
                                    {/*/.direct-chat */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-3">
                                    {/* DIRECT CHAT SUCCESS */}
                                    <div className="card card-success card-outline direct-chat direct-chat-success">
                                        <div className="card-header">
                                            <h3 className="card-title">Direct Chat</h3>
                                            <div className="card-tools">
                                                <span title="3 New Messages" className="badge bg-success">3</span>
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                    <i className="fas fa-minus" />
                                                </button>
                                                <button type="button" className="btn btn-tool" title="Contacts" data-widget="chat-pane-toggle">
                                                    <i className="fas fa-comments" />
                                                </button>
                                                <button type="button" className="btn btn-tool" data-card-widget="remove">
                                                    <i className="fas fa-times" />
                                                </button>
                                            </div>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            {/* Conversations are loaded here */}
                                            <div className="direct-chat-messages">
                                                {/* Message. Default to the left */}
                                                <div className="direct-chat-msg">
                                                    <div className="direct-chat-infos clearfix">
                                                        <span className="direct-chat-name float-left">Alexander Pierce</span>
                                                        <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                                                    </div>
                                                    {/* /.direct-chat-infos */}
                                                    <img className="direct-chat-img" src="../dist/img/user1-128x128.jpg" alt="Message User Image" />
                                                    {/* /.direct-chat-img */}
                                                    <div className="direct-chat-text">
                                                        Is this template really for free? That's unbelievable!
                                                    </div>
                                                    {/* /.direct-chat-text */}
                                                </div>
                                                {/* /.direct-chat-msg */}
                                                {/* Message to the right */}
                                                <div className="direct-chat-msg right">
                                                    <div className="direct-chat-infos clearfix">
                                                        <span className="direct-chat-name float-right">Sarah Bullock</span>
                                                        <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                                                    </div>
                                                    {/* /.direct-chat-infos */}
                                                    <img className="direct-chat-img" src="../dist/img/user3-128x128.jpg" alt="Message User Image" />
                                                    {/* /.direct-chat-img */}
                                                    <div className="direct-chat-text">
                                                        You better believe it!
                                                    </div>
                                                    {/* /.direct-chat-text */}
                                                </div>
                                                {/* /.direct-chat-msg */}
                                            </div>
                                            {/*/.direct-chat-messages*/}
                                            {/* Contacts are loaded here */}
                                            <div className="direct-chat-contacts">
                                                <ul className="contacts-list">
                                                    <li>
                                                        <a href="#">
                                                            <img className="contacts-list-img" src="../dist/img/user1-128x128.jpg" alt="User Avatar" />
                                                            <div className="contacts-list-info">
                                                                <span className="contacts-list-name">
                                                                    Count Dracula
                                                                    <small className="contacts-list-date float-right">2/28/2015</small>
                                                                </span>
                                                                <span className="contacts-list-msg">How have you been? I was...</span>
                                                            </div>
                                                            {/* /.contacts-list-info */}
                                                        </a>
                                                    </li>
                                                    {/* End Contact Item */}
                                                </ul>
                                                {/* /.contatcts-list */}
                                            </div>
                                            {/* /.direct-chat-pane */}
                                        </div>
                                        {/* /.card-body */}
                                        <div className="card-footer">
                                            <form action="#" method="post">
                                                <div className="input-group">
                                                    <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                                                    <span className="input-group-append">
                                                        <button type="submit" className="btn btn-success">Send</button>
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
                                        {/* /.card-footer*/}
                                    </div>
                                    {/*/.direct-chat */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-3">
                                    {/* DIRECT CHAT WARNING */}
                                    <div className="card card-warning direct-chat direct-chat-warning">
                                        <div className="card-header">
                                            <h3 className="card-title">Direct Chat</h3>
                                            <div className="card-tools">
                                                <span title="3 New Messages" className="badge bg-danger">3</span>
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                    <i className="fas fa-minus" />
                                                </button>
                                                <button type="button" className="btn btn-tool" title="Contacts" data-widget="chat-pane-toggle">
                                                    <i className="fas fa-comments" />
                                                </button>
                                                <button type="button" className="btn btn-tool" data-card-widget="remove">
                                                    <i className="fas fa-times" />
                                                </button>
                                            </div>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            {/* Conversations are loaded here */}
                                            <div className="direct-chat-messages">
                                                {/* Message. Default to the left */}
                                                <div className="direct-chat-msg">
                                                    <div className="direct-chat-infos clearfix">
                                                        <span className="direct-chat-name float-left">Alexander Pierce</span>
                                                        <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                                                    </div>
                                                    {/* /.direct-chat-infos */}
                                                    <img className="direct-chat-img" src="../dist/img/user1-128x128.jpg" alt="Message User Image" />
                                                    {/* /.direct-chat-img */}
                                                    <div className="direct-chat-text">
                                                        Is this template really for free? That's unbelievable!
                                                    </div>
                                                    {/* /.direct-chat-text */}
                                                </div>
                                                {/* /.direct-chat-msg */}
                                                {/* Message to the right */}
                                                <div className="direct-chat-msg right">
                                                    <div className="direct-chat-infos clearfix">
                                                        <span className="direct-chat-name float-right">Sarah Bullock</span>
                                                        <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                                                    </div>
                                                    {/* /.direct-chat-infos */}
                                                    <img className="direct-chat-img" src="../dist/img/user3-128x128.jpg" alt="Message User Image" />
                                                    {/* /.direct-chat-img */}
                                                    <div className="direct-chat-text">
                                                        You better believe it!
                                                    </div>
                                                    {/* /.direct-chat-text */}
                                                </div>
                                                {/* /.direct-chat-msg */}
                                            </div>
                                            {/*/.direct-chat-messages*/}
                                            {/* Contacts are loaded here */}
                                            <div className="direct-chat-contacts">
                                                <ul className="contacts-list">
                                                    <li>
                                                        <a href="#">
                                                            <img className="contacts-list-img" src="../dist/img/user1-128x128.jpg" alt="User Avatar" />
                                                            <div className="contacts-list-info">
                                                                <span className="contacts-list-name">
                                                                    Count Dracula
                                                                    <small className="contacts-list-date float-right">2/28/2015</small>
                                                                </span>
                                                                <span className="contacts-list-msg">How have you been? I was...</span>
                                                            </div>
                                                            {/* /.contacts-list-info */}
                                                        </a>
                                                    </li>
                                                    {/* End Contact Item */}
                                                </ul>
                                                {/* /.contatcts-list */}
                                            </div>
                                            {/* /.direct-chat-pane */}
                                        </div>
                                        {/* /.card-body */}
                                        <div className="card-footer">
                                            <form action="#" method="post">
                                                <div className="input-group">
                                                    <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                                                    <span className="input-group-append">
                                                        <button type="submit" className="btn btn-warning">Send</button>
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
                                        {/* /.card-footer*/}
                                    </div>
                                    {/*/.direct-chat */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-3">
                                    {/* DIRECT CHAT DANGER */}
                                    <div className="card card-danger direct-chat direct-chat-danger">
                                        <div className="card-header">
                                            <h3 className="card-title">Direct Chat</h3>
                                            <div className="card-tools">
                                                <span title="3 New Messages" className="badge">3</span>
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                    <i className="fas fa-minus" />
                                                </button>
                                                <button type="button" className="btn btn-tool" title="Contacts" data-widget="chat-pane-toggle">
                                                    <i className="fas fa-comments" />
                                                </button>
                                                <button type="button" className="btn btn-tool" data-card-widget="remove">
                                                    <i className="fas fa-times" />
                                                </button>
                                            </div>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            {/* Conversations are loaded here */}
                                            <div className="direct-chat-messages">
                                                {/* Message. Default to the left */}
                                                <div className="direct-chat-msg">
                                                    <div className="direct-chat-infos clearfix">
                                                        <span className="direct-chat-name float-left">Alexander Pierce</span>
                                                        <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                                                    </div>
                                                    {/* /.direct-chat-infos */}
                                                    <img className="direct-chat-img" src="../dist/img/user1-128x128.jpg" alt="Message User Image" />
                                                    {/* /.direct-chat-img */}
                                                    <div className="direct-chat-text">
                                                        Is this template really for free? That's unbelievable!
                                                    </div>
                                                    {/* /.direct-chat-text */}
                                                </div>
                                                {/* /.direct-chat-msg */}
                                                {/* Message to the right */}
                                                <div className="direct-chat-msg right">
                                                    <div className="direct-chat-infos clearfix">
                                                        <span className="direct-chat-name float-right">Sarah Bullock</span>
                                                        <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                                                    </div>
                                                    {/* /.direct-chat-infos */}
                                                    <img className="direct-chat-img" src="../dist/img/user3-128x128.jpg" alt="Message User Image" />
                                                    {/* /.direct-chat-img */}
                                                    <div className="direct-chat-text">
                                                        You better believe it!
                                                    </div>
                                                    {/* /.direct-chat-text */}
                                                </div>
                                                {/* /.direct-chat-msg */}
                                            </div>
                                            {/*/.direct-chat-messages*/}
                                            {/* Contacts are loaded here */}
                                            <div className="direct-chat-contacts">
                                                <ul className="contacts-list">
                                                    <li>
                                                        <a href="#">
                                                            <img className="contacts-list-img" src="../dist/img/user1-128x128.jpg" alt="User Avatar" />
                                                            <div className="contacts-list-info">
                                                                <span className="contacts-list-name">
                                                                    Count Dracula
                                                                    <small className="contacts-list-date float-right">2/28/2015</small>
                                                                </span>
                                                                <span className="contacts-list-msg">How have you been? I was...</span>
                                                            </div>
                                                            {/* /.contacts-list-info */}
                                                        </a>
                                                    </li>
                                                    {/* End Contact Item */}
                                                </ul>
                                                {/* /.contatcts-list */}
                                            </div>
                                            {/* /.direct-chat-pane */}
                                        </div>
                                        {/* /.card-body */}
                                        <div className="card-footer">
                                            <form action="#" method="post">
                                                <div className="input-group">
                                                    <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                                                    <span className="input-group-append">
                                                        <button type="submit" className="btn btn-danger">Send</button>
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
                                        {/* /.card-footer*/}
                                    </div>
                                    {/*/.direct-chat */}
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row */}
                            {/* =========================================================== */}
                            <h5 className="mb-2">Custom Shadows Variations <small><i>Using Bootstrap's Shadow Utility</i></small></h5>
                            <div className="row">
                                <div className="col-md-3">
                                    {/* DIRECT CHAT PRIMARY */}
                                    <div className="card card-primary card-outline direct-chat direct-chat-primary shadow-none">
                                        <div className="card-header">
                                            <h3 className="card-title">Shadow - None</h3>
                                            <div className="card-tools">
                                                <span title="3 New Messages" className="badge bg-primary">3</span>
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                    <i className="fas fa-minus" />
                                                </button>
                                                <button type="button" className="btn btn-tool" title="Contacts" data-widget="chat-pane-toggle">
                                                    <i className="fas fa-comments" />
                                                </button>
                                                <button type="button" className="btn btn-tool" data-card-widget="remove">
                                                    <i className="fas fa-times" />
                                                </button>
                                            </div>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            {/* Conversations are loaded here */}
                                            <div className="direct-chat-messages">
                                                {/* Message. Default to the left */}
                                                <div className="direct-chat-msg">
                                                    <div className="direct-chat-infos clearfix">
                                                        <span className="direct-chat-name float-left">Alexander Pierce</span>
                                                        <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                                                    </div>
                                                    {/* /.direct-chat-infos */}
                                                    <img className="direct-chat-img" src="../dist/img/user1-128x128.jpg" alt="Message User Image" />
                                                    {/* /.direct-chat-img */}
                                                    <div className="direct-chat-text">
                                                        Is this template really for free? That's unbelievable!
                                                    </div>
                                                    {/* /.direct-chat-text */}
                                                </div>
                                                {/* /.direct-chat-msg */}
                                                {/* Message to the right */}
                                                <div className="direct-chat-msg right">
                                                    <div className="direct-chat-infos clearfix">
                                                        <span className="direct-chat-name float-right">Sarah Bullock</span>
                                                        <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                                                    </div>
                                                    {/* /.direct-chat-infos */}
                                                    <img className="direct-chat-img" src="../dist/img/user3-128x128.jpg" alt="Message User Image" />
                                                    {/* /.direct-chat-img */}
                                                    <div className="direct-chat-text">
                                                        You better believe it!
                                                    </div>
                                                    {/* /.direct-chat-text */}
                                                </div>
                                                {/* /.direct-chat-msg */}
                                            </div>
                                            {/*/.direct-chat-messages*/}
                                            {/* Contacts are loaded here */}
                                            <div className="direct-chat-contacts">
                                                <ul className="contacts-list">
                                                    <li>
                                                        <a href="#">
                                                            <img className="contacts-list-img" src="../dist/img/user1-128x128.jpg" alt="User Avatar" />
                                                            <div className="contacts-list-info">
                                                                <span className="contacts-list-name">
                                                                    Count Dracula
                                                                    <small className="contacts-list-date float-right">2/28/2015</small>
                                                                </span>
                                                                <span className="contacts-list-msg">How have you been? I was...</span>
                                                            </div>
                                                            {/* /.contacts-list-info */}
                                                        </a>
                                                    </li>
                                                    {/* End Contact Item */}
                                                </ul>
                                                {/* /.contatcts-list */}
                                            </div>
                                            {/* /.direct-chat-pane */}
                                        </div>
                                        {/* /.card-body */}
                                        <div className="card-footer">
                                            <form action="#" method="post">
                                                <div className="input-group">
                                                    <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                                                    <span className="input-group-append">
                                                        <button type="submit" className="btn btn-primary">Send</button>
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
                                        {/* /.card-footer*/}
                                    </div>
                                    {/*/.direct-chat */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-3">
                                    {/* DIRECT CHAT SUCCESS */}
                                    <div className="card card-success card-outline direct-chat direct-chat-success shadow-sm">
                                        <div className="card-header">
                                            <h3 className="card-title">Shadow - Small</h3>
                                            <div className="card-tools">
                                                <span title="3 New Messages" className="badge bg-success">3</span>
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                    <i className="fas fa-minus" />
                                                </button>
                                                <button type="button" className="btn btn-tool" title="Contacts" data-widget="chat-pane-toggle">
                                                    <i className="fas fa-comments" />
                                                </button>
                                                <button type="button" className="btn btn-tool" data-card-widget="remove">
                                                    <i className="fas fa-times" />
                                                </button>
                                            </div>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            {/* Conversations are loaded here */}
                                            <div className="direct-chat-messages">
                                                {/* Message. Default to the left */}
                                                <div className="direct-chat-msg">
                                                    <div className="direct-chat-infos clearfix">
                                                        <span className="direct-chat-name float-left">Alexander Pierce</span>
                                                        <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                                                    </div>
                                                    {/* /.direct-chat-infos */}
                                                    <img className="direct-chat-img" src="../dist/img/user1-128x128.jpg" alt="Message User Image" />
                                                    {/* /.direct-chat-img */}
                                                    <div className="direct-chat-text">
                                                        Is this template really for free? That's unbelievable!
                                                    </div>
                                                    {/* /.direct-chat-text */}
                                                </div>
                                                {/* /.direct-chat-msg */}
                                                {/* Message to the right */}
                                                <div className="direct-chat-msg right">
                                                    <div className="direct-chat-infos clearfix">
                                                        <span className="direct-chat-name float-right">Sarah Bullock</span>
                                                        <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                                                    </div>
                                                    {/* /.direct-chat-infos */}
                                                    <img className="direct-chat-img" src="../dist/img/user3-128x128.jpg" alt="Message User Image" />
                                                    {/* /.direct-chat-img */}
                                                    <div className="direct-chat-text">
                                                        You better believe it!
                                                    </div>
                                                    {/* /.direct-chat-text */}
                                                </div>
                                                {/* /.direct-chat-msg */}
                                            </div>
                                            {/*/.direct-chat-messages*/}
                                            {/* Contacts are loaded here */}
                                            <div className="direct-chat-contacts">
                                                <ul className="contacts-list">
                                                    <li>
                                                        <a href="#">
                                                            <img className="contacts-list-img" src="../dist/img/user1-128x128.jpg" alt="User Avatar" />
                                                            <div className="contacts-list-info">
                                                                <span className="contacts-list-name">
                                                                    Count Dracula
                                                                    <small className="contacts-list-date float-right">2/28/2015</small>
                                                                </span>
                                                                <span className="contacts-list-msg">How have you been? I was...</span>
                                                            </div>
                                                            {/* /.contacts-list-info */}
                                                        </a>
                                                    </li>
                                                    {/* End Contact Item */}
                                                </ul>
                                                {/* /.contatcts-list */}
                                            </div>
                                            {/* /.direct-chat-pane */}
                                        </div>
                                        {/* /.card-body */}
                                        <div className="card-footer">
                                            <form action="#" method="post">
                                                <div className="input-group">
                                                    <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                                                    <span className="input-group-append">
                                                        <button type="submit" className="btn btn-success">Send</button>
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
                                        {/* /.card-footer*/}
                                    </div>
                                    {/*/.direct-chat */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-3">
                                    {/* DIRECT CHAT WARNING */}
                                    <div className="card card-warning direct-chat direct-chat-warning shadow">
                                        <div className="card-header">
                                            <h3 className="card-title">Shadow - Regular</h3>
                                            <div className="card-tools">
                                                <span title="3 New Messages" className="badge bg-danger">3</span>
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                    <i className="fas fa-minus" />
                                                </button>
                                                <button type="button" className="btn btn-tool" title="Contacts" data-widget="chat-pane-toggle">
                                                    <i className="fas fa-comments" />
                                                </button>
                                                <button type="button" className="btn btn-tool" data-card-widget="remove">
                                                    <i className="fas fa-times" />
                                                </button>
                                            </div>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            {/* Conversations are loaded here */}
                                            <div className="direct-chat-messages">
                                                {/* Message. Default to the left */}
                                                <div className="direct-chat-msg">
                                                    <div className="direct-chat-infos clearfix">
                                                        <span className="direct-chat-name float-left">Alexander Pierce</span>
                                                        <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                                                    </div>
                                                    {/* /.direct-chat-infos */}
                                                    <img className="direct-chat-img" src="../dist/img/user1-128x128.jpg" alt="Message User Image" />
                                                    {/* /.direct-chat-img */}
                                                    <div className="direct-chat-text">
                                                        Is this template really for free? That's unbelievable!
                                                    </div>
                                                    {/* /.direct-chat-text */}
                                                </div>
                                                {/* /.direct-chat-msg */}
                                                {/* Message to the right */}
                                                <div className="direct-chat-msg right">
                                                    <div className="direct-chat-infos clearfix">
                                                        <span className="direct-chat-name float-right">Sarah Bullock</span>
                                                        <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                                                    </div>
                                                    {/* /.direct-chat-infos */}
                                                    <img className="direct-chat-img" src="../dist/img/user3-128x128.jpg" alt="Message User Image" />
                                                    {/* /.direct-chat-img */}
                                                    <div className="direct-chat-text">
                                                        You better believe it!
                                                    </div>
                                                    {/* /.direct-chat-text */}
                                                </div>
                                                {/* /.direct-chat-msg */}
                                            </div>
                                            {/*/.direct-chat-messages*/}
                                            {/* Contacts are loaded here */}
                                            <div className="direct-chat-contacts">
                                                <ul className="contacts-list">
                                                    <li>
                                                        <a href="#">
                                                            <img className="contacts-list-img" src="../dist/img/user1-128x128.jpg" alt="User Avatar" />
                                                            <div className="contacts-list-info">
                                                                <span className="contacts-list-name">
                                                                    Count Dracula
                                                                    <small className="contacts-list-date float-right">2/28/2015</small>
                                                                </span>
                                                                <span className="contacts-list-msg">How have you been? I was...</span>
                                                            </div>
                                                            {/* /.contacts-list-info */}
                                                        </a>
                                                    </li>
                                                    {/* End Contact Item */}
                                                </ul>
                                                {/* /.contatcts-list */}
                                            </div>
                                            {/* /.direct-chat-pane */}
                                        </div>
                                        {/* /.card-body */}
                                        <div className="card-footer">
                                            <form action="#" method="post">
                                                <div className="input-group">
                                                    <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                                                    <span className="input-group-append">
                                                        <button type="submit" className="btn btn-warning">Send</button>
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
                                        {/* /.card-footer*/}
                                    </div>
                                    {/*/.direct-chat */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-3">
                                    {/* DIRECT CHAT DANGER */}
                                    <div className="card card-danger direct-chat direct-chat-danger shadow-lg">
                                        <div className="card-header">
                                            <h3 className="card-title">Shadow - Large</h3>
                                            <div className="card-tools">
                                                <span title="3 New Messages" className="badge">3</span>
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                    <i className="fas fa-minus" />
                                                </button>
                                                <button type="button" className="btn btn-tool" title="Contacts" data-widget="chat-pane-toggle">
                                                    <i className="fas fa-comments" />
                                                </button>
                                                <button type="button" className="btn btn-tool" data-card-widget="remove">
                                                    <i className="fas fa-times" />
                                                </button>
                                            </div>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            {/* Conversations are loaded here */}
                                            <div className="direct-chat-messages">
                                                {/* Message. Default to the left */}
                                                <div className="direct-chat-msg">
                                                    <div className="direct-chat-infos clearfix">
                                                        <span className="direct-chat-name float-left">Alexander Pierce</span>
                                                        <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                                                    </div>
                                                    {/* /.direct-chat-infos */}
                                                    <img className="direct-chat-img" src="../dist/img/user1-128x128.jpg" alt="Message User Image" />
                                                    {/* /.direct-chat-img */}
                                                    <div className="direct-chat-text">
                                                        Is this template really for free? That's unbelievable!
                                                    </div>
                                                    {/* /.direct-chat-text */}
                                                </div>
                                                {/* /.direct-chat-msg */}
                                                {/* Message to the right */}
                                                <div className="direct-chat-msg right">
                                                    <div className="direct-chat-infos clearfix">
                                                        <span className="direct-chat-name float-right">Sarah Bullock</span>
                                                        <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                                                    </div>
                                                    {/* /.direct-chat-infos */}
                                                    <img className="direct-chat-img" src="../dist/img/user3-128x128.jpg" alt="Message User Image" />
                                                    {/* /.direct-chat-img */}
                                                    <div className="direct-chat-text">
                                                        You better believe it!
                                                    </div>
                                                    {/* /.direct-chat-text */}
                                                </div>
                                                {/* /.direct-chat-msg */}
                                            </div>
                                            {/*/.direct-chat-messages*/}
                                            {/* Contacts are loaded here */}
                                            <div className="direct-chat-contacts">
                                                <ul className="contacts-list">
                                                    <li>
                                                        <a href="#">
                                                            <img className="contacts-list-img" src="../dist/img/user1-128x128.jpg" alt="User Avatar" />
                                                            <div className="contacts-list-info">
                                                                <span className="contacts-list-name">
                                                                    Count Dracula
                                                                    <small className="contacts-list-date float-right">2/28/2015</small>
                                                                </span>
                                                                <span className="contacts-list-msg">How have you been? I was...</span>
                                                            </div>
                                                            {/* /.contacts-list-info */}
                                                        </a>
                                                    </li>
                                                    {/* End Contact Item */}
                                                </ul>
                                                {/* /.contatcts-list */}
                                            </div>
                                            {/* /.direct-chat-pane */}
                                        </div>
                                        {/* /.card-body */}
                                        <div className="card-footer">
                                            <form action="#" method="post">
                                                <div className="input-group">
                                                    <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                                                    <span className="input-group-append">
                                                        <button type="submit" className="btn btn-danger">Send</button>
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
                                        {/* /.card-footer*/}
                                    </div>
                                    {/*/.direct-chat */}
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row */}

                            {/* /.row */}
                            {/* =========================================================== */}
                            <h5 className="mb-2">Custom Shadows Variations <small><i>Using Bootstrap's Shadow Utility</i></small></h5>
                            <div className="row">
                                <div className="col-md-4">
                                    {/* Widget: user widget style 2 */}
                                    <div className="card card-widget widget-user-2 shadow-sm">
                                        {/* Add the bg color to the header using any of the bg-* classes */}
                                        <div className="widget-user-header bg-warning">
                                            <div className="widget-user-image">
                                                <img className="img-circle elevation-2" src="../dist/img/user7-128x128.jpg" alt="User Avatar" />
                                            </div>
                                            {/* /.widget-user-image */}
                                            <h3 className="widget-user-username">Nadia Carmichael</h3>
                                            <h5 className="widget-user-desc">Lead Developer</h5>
                                        </div>
                                        <div className="card-footer p-0">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        Projects <span className="float-right badge bg-primary">31</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        Tasks <span className="float-right badge bg-info">5</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        Completed Projects <span className="float-right badge bg-success">12</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        Followers <span className="float-right badge bg-danger">842</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* /.widget-user */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-4">
                                    {/* Widget: user widget style 1 */}
                                    <div className="card card-widget widget-user shadow">
                                        {/* Add the bg color to the header using any of the bg-* classes */}
                                        <div className="widget-user-header bg-info">
                                            <h3 className="widget-user-username">Alexander Pierce</h3>
                                            <h5 className="widget-user-desc">Founder &amp; CEO</h5>
                                        </div>
                                        <div className="widget-user-image">
                                            <img className="img-circle elevation-2" src="../dist/img/user1-128x128.jpg" alt="User Avatar" />
                                        </div>
                                        <div className="card-footer">
                                            <div className="row">
                                                <div className="col-sm-4 border-right">
                                                    <div className="description-block">
                                                        <h5 className="description-header">3,200</h5>
                                                        <span className="description-text">SALES</span>
                                                    </div>
                                                    {/* /.description-block */}
                                                </div>
                                                {/* /.col */}
                                                <div className="col-sm-4 border-right">
                                                    <div className="description-block">
                                                        <h5 className="description-header">13,000</h5>
                                                        <span className="description-text">FOLLOWERS</span>
                                                    </div>
                                                    {/* /.description-block */}
                                                </div>
                                                {/* /.col */}
                                                <div className="col-sm-4">
                                                    <div className="description-block">
                                                        <h5 className="description-header">35</h5>
                                                        <span className="description-text">PRODUCTS</span>
                                                    </div>
                                                    {/* /.description-block */}
                                                </div>
                                                {/* /.col */}
                                            </div>
                                            {/* /.row */}
                                        </div>
                                    </div>
                                    {/* /.widget-user */}
                                </div>
                                {/* /.col */}
                                <div className="col-md-4">
                                    {/* Widget: user widget style 1 */}
                                    <div className="card card-widget widget-user shadow-lg">
                                        {/* Add the bg color to the header using any of the bg-* classes */}
                                        <div className="widget-user-header text-white" style={{ background: 'url("../dist/img/photo1.png") center center' }}>
                                            <h3 className="widget-user-username text-right">Elizabeth Pierce</h3>
                                            <h5 className="widget-user-desc text-right">Web Designer</h5>
                                        </div>
                                        <div className="widget-user-image">
                                            <img className="img-circle" src="../dist/img/user3-128x128.jpg" alt="User Avatar" />
                                        </div>
                                        <div className="card-footer">
                                            <div className="row">
                                                <div className="col-sm-4 border-right">
                                                    <div className="description-block">
                                                        <h5 className="description-header">3,200</h5>
                                                        <span className="description-text">SALES</span>
                                                    </div>
                                                    {/* /.description-block */}
                                                </div>
                                                {/* /.col */}
                                                <div className="col-sm-4 border-right">
                                                    <div className="description-block">
                                                        <h5 className="description-header">13,000</h5>
                                                        <span className="description-text">FOLLOWERS</span>
                                                    </div>
                                                    {/* /.description-block */}
                                                </div>
                                                {/* /.col */}
                                                <div className="col-sm-4">
                                                    <div className="description-block">
                                                        <h5 className="description-header">35</h5>
                                                        <span className="description-text">PRODUCTS</span>
                                                    </div>
                                                    {/* /.description-block */}
                                                </div>
                                                {/* /.col */}
                                            </div>
                                            {/* /.row */}
                                        </div>
                                    </div>
                                    {/* /.widget-user */}
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row */}
                            <h5 className="mb-2">Card with Image Overlay</h5>
                            <div className="card card-success">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-6 col-xl-4">
                                            <div className="card mb-2 bg-gradient-dark">
                                                <img className="card-img-top" src="../dist/img/photo1.png" alt="Dist Photo 1" />
                                                <div className="card-img-overlay d-flex flex-column justify-content-end">
                                                    <h5 className="card-title text-primary text-white">Card Title</h5>
                                                    <p className="card-text text-white pb-2 pt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.</p>
                                                    <a href="#" className="text-white">Last update 2 mins ago</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 col-xl-4">
                                            <div className="card mb-2">
                                                <img className="card-img-top" src="../dist/img/photo2.png" alt="Dist Photo 2" />
                                                <div className="card-img-overlay d-flex flex-column justify-content-center">
                                                    <h5 className="card-title text-white mt-5 pt-2">Card Title</h5>
                                                    <p className="card-text pb-2 pt-1 text-white">
                                                        Lorem ipsum dolor sit amet, <br />
                                                        consectetur adipisicing elit <br />
                                                        sed do eiusmod tempor.
                                                    </p>
                                                    <a href="#" className="text-white">Last update 15 hours ago</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 col-xl-4">
                                            <div className="card mb-2">
                                                <img className="card-img-top" src="../dist/img/photo3.jpg" alt="Dist Photo 3" />
                                                <div className="card-img-overlay">
                                                    <h5 className="card-title text-primary">Card Title</h5>
                                                    <p className="card-text pb-1 pt-1 text-white">
                                                        Lorem ipsum dolor <br />
                                                        sit amet, consectetur <br />
                                                        adipisicing elit sed <br />
                                                        do eiusmod tempor. </p>
                                                    <a href="#" className="text-primary">Last update 3 days ago</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* /.container-fluid */}
                    </section>


                </div>
            </div>
        </div>

    )
}