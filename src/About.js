const About = () => {
    return ( 
        <div className="container-fluid py-4 px-4">

            <h1 className="text-center text-orange-a d-none d-lg-block page-header">ABOUT ME</h1>
            
            <div className="row mobile mt-5">
                <div className="col-12 col-lg-4 img-div text-center">
                    <img src="/images/haas-f1.jpg" className="img-fluid circle-image" alt="Haas" />
                    <h4 className="text-grey-a mt-4">Software Developer</h4>
                </div>
                <div className="col-12 col-lg-8 mb-4 orange-marker about-details">
                    <h4 className="text-orange-a mt-5">Dare Afolabi</h4>
                    <p className="text-grey-a">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus possimus quaerat ad debitis, eum voluptatum laudantium ullam voluptate quisquam similique? Voluptas nihil soluta commodi adipisci ea inventore, explicabo earum molestias.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus possimus quaerat ad debitis, eum voluptatum laudantium ullam voluptate quisquam similique? Voluptas nihil soluta commodi adipisci ea inventore, explicabo earum molestiasLorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus possimus quaerat ad debitis, eum voluptatum laudantium ullam voluptate quisquam similique? Voluptas nihil soluta commodi adipisci ea inventore, explicabo earum molestias</p>
                </div>
            </div>

        </div>
    );
}

export default About;