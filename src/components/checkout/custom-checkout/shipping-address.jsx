import React from "react";
import { Formik } from  "formik";

const ShippingAddress = () => {
    return (
        <div>
            <h4>Shipping Address</h4>
            <Formik>
                {
                    ({ values, errors, handleChange, handleSubmit }) => {
                        const { name, email, address } = errors;
                        return (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <input 
                                        type='text'
                                        name='name'
                                        onChange={handleChange}
                                        value={values.name}
                                        className={ 'nomad-input' + (name? 'error' : '')}
                                    />
                                </div>
                                <div>
                                    <input 
                                        type='email'
                                        name='email'
                                        onChange={handleChange}
                                        value={values.email}
                                        className={ 'nomad-input' + (email? 'error' : '')}
                                    />
                                </div>
                                <div>
                                    <input 
                                        type='text'
                                        name='address'
                                        onChange={handleChange}
                                        value={values.address}
                                        className={ 'nomad-input' + (address? 'error' : '')}
                                    />
                                </div>
                            </form>
                        )
                    }
                }
            </Formik>
        </div>
    )
}