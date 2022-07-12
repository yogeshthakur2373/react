import react from "react";


function Profile() {

    return (
        <div>


            <h3 className="mt-4 mb-4">Social Widgets</h3>
            <div className="row">
                <div className="col-md-4">
                    {/* Widget: user widget style 2 */}
                    <div className="card card-widget widget-user-2">
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
                    <div className="card card-widget widget-user">
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
                    <div className="card card-widget widget-user">
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
            <div className="row">
                <div className="col-md-6">
                    {/* Box Comment */}
                    <div className="card card-widget">
                        <div className="card-header">
                            <div className="user-block">
                                <img className="img-circle" src="../dist/img/user1-128x128.jpg" alt="User Image" />
                                <span className="username"><a href="#">Jonathan Burke Jr.</a></span>
                                <span className="description">Shared publicly - 7:30 PM Today</span>
                            </div>
                            {/* /.user-block */}
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" title="Mark as read">
                                    <i className="far fa-circle" />
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
                            <img className="img-fluid pad" src="../dist/img/photo2.png" alt="Photo" />
                            <p>I took this photo this morning. What do you guys think?</p>
                            <button type="button" className="btn btn-default btn-sm"><i className="fas fa-share" /> Share</button>
                            <button type="button" className="btn btn-default btn-sm"><i className="far fa-thumbs-up" /> Like</button>
                            <span className="float-right text-muted">127 likes - 3 comments</span>
                        </div>
                        {/* /.card-body */}
                        <div className="card-footer card-comments">
                            <div className="card-comment">
                                {/* User image */}
                                <img className="img-circle img-sm" src="../dist/img/user3-128x128.jpg" alt="User Image" />
                                <div className="comment-text">
                                    <span className="username">
                                        Maria Gonzales
                                        <span className="text-muted float-right">8:03 PM Today</span>
                                    </span>{/* /.username */}
                                    It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its layout.
                                </div>
                                {/* /.comment-text */}
                            </div>
                            {/* /.card-comment */}
                            <div className="card-comment">
                                {/* User image */}
                                <img className="img-circle img-sm" src="../dist/img/user4-128x128.jpg" alt="User Image" />
                                <div className="comment-text">
                                    <span className="username">
                                        Luna Stark
                                        <span className="text-muted float-right">8:03 PM Today</span>
                                    </span>{/* /.username */}
                                    It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its layout.
                                </div>
                                {/* /.comment-text */}
                            </div>
                            {/* /.card-comment */}
                        </div>
                        {/* /.card-footer */}
                        <div className="card-footer">
                            <form action="#" method="post">
                                <img className="img-fluid img-circle img-sm" src="../dist/img/user4-128x128.jpg" alt="Alt Text" />
                                {/* .img-push is used to add margin to elements next to floating images */}
                                <div className="img-push">
                                    <input type="text" className="form-control form-control-sm" placeholder="Press enter to post comment" />
                                </div>
                            </form>
                        </div>
                        {/* /.card-footer */}
                    </div>
                    {/* /.card */}
                </div>
                {/* /.col */}
                <div className="col-md-6">
                    {/* Box Comment */}
                    <div className="card card-widget">
                        <div className="card-header">
                            <div className="user-block">
                                <img className="img-circle" src="../dist/img/user1-128x128.jpg" alt="User Image" />
                                <span className="username"><a href="#">Jonathan Burke Jr.</a></span>
                                <span className="description">Shared publicly - 7:30 PM Today</span>
                            </div>
                            {/* /.user-block */}
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" title="Mark as read">
                                    <i className="far fa-circle" />
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
                            {/* post text */}
                            <p>Far far away, behind the word mountains, far from the
                                countries Vokalia and Consonantia, there live the blind
                                texts. Separated they live in Bookmarksgrove right at</p>
                            <p>the coast of the Semantics, a large language ocean.
                                A small river named Duden flows by their place and supplies
                                it with the necessary regelialia. It is a paradisematic
                                country, in which roasted parts of sentences fly into
                                your mouth.</p>
                            {/* Attachment */}
                            <div className="attachment-block clearfix">
                                <img className="attachment-img" src="../dist/img/photo1.png" alt="Attachment Image" />
                                <div className="attachment-pushed">
                                    <h4 className="attachment-heading"><a href="https://www.lipsum.com/">Lorem ipsum text generator</a></h4>
                                    <div className="attachment-text">
                                        Description about the attachment can be placed here.
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry... <a href="#">more</a>
                                    </div>
                                    {/* /.attachment-text */}
                                </div>
                                {/* /.attachment-pushed */}
                            </div>
                            {/* /.attachment-block */}
                            {/* Social sharing buttons */}
                            <button type="button" className="btn btn-default btn-sm"><i className="fas fa-share" /> Share</button>
                            <button type="button" className="btn btn-default btn-sm"><i className="far fa-thumbs-up" /> Like</button>
                            <span className="float-right text-muted">45 likes - 2 comments</span>
                        </div>
                        {/* /.card-body */}
                        <div className="card-footer card-comments">
                            <div className="card-comment">
                                {/* User image */}
                                <img className="img-circle img-sm" src="../dist/img/user3-128x128.jpg" alt="User Image" />
                                <div className="comment-text">
                                    <span className="username">
                                        Maria Gonzales
                                        <span className="text-muted float-right">8:03 PM Today</span>
                                    </span>{/* /.username */}
                                    It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its layout.
                                </div>
                                {/* /.comment-text */}
                            </div>
                            {/* /.card-comment */}
                            <div className="card-comment">
                                {/* User image */}
                                <img className="img-circle img-sm" src="../dist/img/user5-128x128.jpg" alt="User Image" />
                                <div className="comment-text">
                                    <span className="username">
                                        Nora Havisham
                                        <span className="text-muted float-right">8:03 PM Today</span>
                                    </span>{/* /.username */}
                                    The point of using Lorem Ipsum is that it hrs a morer-less
                                    normal distribution of letters, as opposed to using
                                    'Content here, content here', making it look like readable English.
                                </div>
                                {/* /.comment-text */}
                            </div>
                            {/* /.card-comment */}
                        </div>
                        {/* /.card-footer */}
                        <div className="card-footer">
                            <form action="#" method="post">
                                <img className="img-fluid img-circle img-sm" src="../dist/img/user4-128x128.jpg" alt="Alt Text" />
                                {/* .img-push is used to add margin to elements next to floating images */}
                                <div className="img-push">
                                    <input type="text" className="form-control form-control-sm" placeholder="Press enter to post comment" />
                                </div>
                            </form>
                        </div>
                        {/* /.card-footer */}
                    </div>
                    {/* /.card */}
                </div>
                {/* /.col */}
            </div>



        </div>
    )
}
export default Profile;