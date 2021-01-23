import React from 'react'
import './Contactus.css'

function Contactus() {
    return ( 
        <div>
           
           <div className='ContactSec'>
                
               <div className='container'>
               <div>
                   <br />
                   <h5 className='h5styl'>To contact us, kindly fill out the form below
                        with details of your order or questions in regard to our service</h5>
                    <br />
                    <br />
                    <strong>
                        <h5>CHRISTABOSS GLOBAL RESOURCES</h5>
                    </strong>  
                    <div className='row-1'>
                        <div className='col-12'>
                          <form className='form1' method='post' action='' >
                            <div class="form-group">

                                    <div class="row">

                                    <div class="col-12">
                                        <input type="text" class="form-control" id="full_name" name="full_name" placeholder="Full Name"/>
                                    </div>
                                    </div>

                                    <div class="row">
                                    <div class="col-12">
                                        <input type="tel" class="form-control" id="phone" name="phone" placeholder="Phone Number"/>
                                    </div>
                                    </div>

                                    <div class="row">
                                    <div class="col-12">
                                        <input type="email" class="form-control" id="email" name="email" placeholder="Email Address"/>
                                    </div>
                                    </div>

                                    </div>

                                    <br />

                                    <div class="form-group">
                                    <div class="row">
                                    <div class="col-12">
                                        <textarea rows="6" class="form-control" id="comments" name="comments" placeholder="Write your order details or your questions here..."></textarea>
                                    </div>
                                    </div>
                                    </div>

                                    <br />

                                    <div class="text-center">
                                    
                                    <div class="row">
                                        <button type="submit" value="Submit" class="btn btn-primary btn-lg align-center" id="send_btn">Send</button>
                                    </div>

                                    </div>
                            </form>

                        </div>
                    </div> 
                                            
                    <div class="row-2">
                            <div class="text-center col-6">
                            
                                <strong><h6> ADDRESS I</h6></strong>
                                        <h6 className='marg'> 26 Abeokuta Street,</h6>
                                        <h6 className='marg'>Anifowoshe</h6>
                                        <h6 className='marg'>Ikeja, Lagos State</h6>
                                        <h6 className='marg'>Nigeria</h6>
                                        <h6 className='marg'><abbr title="Phone">Phone:</abbr> <a href="tel:+2348105517626">+2348105517626</a></h6>
                                        <h6 className='marg'><abbr title="Email">Email: </abbr><a href="mailto:contact@christabossglobal@yahoo.com">christabossglobal@yahoo.com</a></h6>
                            <br />
                            </div>

                        <div class="text-center col-6">

                            <strong><h6>ADDRESS II</h6></strong>
                                        <h6 className='marg'>Fakale Street,</h6>
                                        <h6 className='marg'>Fakala Road</h6>
                                        <h6 className='marg'>Sagamu, Ogun State</h6>
                                        <h6 className='marg'>Nigeria</h6>
                                        <h6 className='marg'><abbr title="Phone">Phone:</abbr> <a href="tel:+2349057226965">+2349057226965</a></h6>
                                        <h6 className='marg'><abbr title="Email">Email: </abbr><a href="mailto:christabossglobal@yahoo.com">christabossglobal@yahoo.com</a></h6>
                            
                                <br />

                        </div>

                    </div>
               </div>
           </div>
           

           </div>
            
        </div>
        
    )
}

export default Contactus
