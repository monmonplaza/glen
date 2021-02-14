import React from 'react'
import Nav from "../Nav"
import {services} from "../../data/services"

const index = () => {
    return (
        <>
            <section className="hero">
                <Nav />
                <div className="hero__content"> 
                    <span>Save Time and Money</span>
                    <h1>We Handle Your Business</h1>
                    <p>lLorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vitae sint aperiam, sit possimus temporibus repellat non voluptates iste. Dolores.  </p>
                </div>

                <div className="services__menu">
                    <div className="services__link">
                        
                        {
                            services.map((service, key)=>{
                                return (
                                    <div className="service__item" key={key}>
                                       
                                          <span>{service.icon}</span>  
                                          <small>{service.title}</small>
                                      
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default index
