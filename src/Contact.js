const Contact = () => {
    return ( 
        <div class="container-fluid py-4 px-4 contact-section page-header">
            
            <div class="row touch-section pt-4">
                <div class="col-12 col-lg-4 my-5 d-flex align-items-center get-in-touch">
                    <h2 class="text-orange-a">Get in Touch</h2>
                </div>
                <div class="col-12 col-lg-6 my-4 form-section">
                    <form class="contact-form">
                        <div class="form-group">
                            <input type="text" class="form-control" id="inputName" placeholder="Your Name" />
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="YourEmail@email.com" aria-describedby="emailHelp" />
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-block bg-orange-a text-white contact-btn mb-3">Send</button>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Contact