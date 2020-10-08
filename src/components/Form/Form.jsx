import React, {useState} from 'react';
import style from './Form.module.scss';
import classNames from 'classnames';


function Form() {
    const [input, setInput] = useState({
        email: '',
        phone: '',
        firstName: '',
        lastName: '',
        company: '',
        job: '',
        industry: '',
    });

    //todo:: add validation, send form
    const handleInputs = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setInput(prevState => (
            {...prevState,
            [name]: value
            }
        ))
    };

    const [errors, setErrors] = useState({
        email: false,
        phone: false,
        firstName: false,
        lastName: false,
        company: false,
        job: false,
        industry: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        function validateEmail(email) {
            if (email === '') {
                return false
            }
            const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
            return re.test(String(email).toLowerCase());
        }
        function validateString(string) {
            if (string === '') {
                return false
            }
            const re = /^[A-Za-z]*$/;
            return re.test(String(string))
        }
        function validateMobileUS(number) {
            if (number === '') {
                return false
            }
            const re = /(^1300\d{6}$)|(^1800|1900|1902\d{6}$)|(^0[2|3|7|8]{1}[0-9]{8}$)|(^13\d{4}$)|(^04\d{2,3}\d{6}$)/;
            return re.test(String(number))
        }
        setErrors({
            email: !validateEmail(input.email),
            phone: !validateMobileUS(input.phone),
            firstName: !validateString(input.firstName),
            lastName: !validateString(input.lastName),
            company: !validateString(input.company),
            job: !validateString(input.job),
            industry: !validateString(input.industry)
        })

    }

    const inputs = [
        {
            type: 'text',
            name: 'email',
            placeholder: 'Bussines Email',
            value: input.email,
        },
        {
            type: 'text',
            name: 'phone',
            placeholder: 'phone',
            value: input.phone,
        },
        {
            type: 'text',
            name: 'firstName',
            placeholder: 'firstName',
            value: input.firstName,
        },
        {
            type: 'text',
            name: 'lastName',
            placeholder: 'lastName',
            value: input.lastName,
        },
        {
            type: 'text',
            name: 'company',
            placeholder: 'company',
            value: input.company,
        },
        {
            type: 'text',
            name: 'job',
            placeholder: 'job',
            value: input.job,
        },
    ]

    return (
        <section className={style.Form}>
            <div className="container">
                <h2>Get in touch with us!</h2>
                <form>
                    {inputs.map(input => (
                        <div key={input.name} className={classNames("row", style.input)}>
                            <input type={input.type} name={input.name} placeholder={input.placeholder} value={input.value} onChange={e=>handleInputs(e)} className={classNames({'error': errors[input.name]})}/>
                        </div>
                    ))}
                    <button onClick={(e) => handleSubmit(e)}>Submit request</button>
                </form>
            </div>
        </section>
    );
}

export default Form;