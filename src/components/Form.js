import React, { Component } from 'react';

const formValid = (formErrors) => {
	let valid = true;

	Object.values(formValid).forEach((val) => val.length > 0 && (valid = false));
	return valid;
};

export default class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: null,
			lastName: null,
			email: null,
			password: null,
			formErrors: {
				firstName: '',
				lastName: '',
				email: '',
				password: '',
			},
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();

		if (formValid(this.state.formErrors)) {
			console.log(`
        --SUBMITTING--
        firstName: ${this.state.firstName}
        lastName: ${this.state.lastName}
        email: ${this.state.email}
        password: ${this.state.password}
      `);
		} else {
			console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
		}
	};

	render() {
		return (
			<div className='wrapper'>
				<div className='form-wrapper'>
					<h1>Create Account</h1>
					<form onSubmit={this.handleSubmit} onValidate>
						<div className='firstName'>
							<label htmlFor='firstName'>First Name</label>
							<input
								type='text'
								noValidate
								className=''
								placeholder='First Name'
								name='firstName'
								onChange={this.handleChange}
							/>
						</div>

						<div className='lastName'>
							<label htmlFor='lastName'>Last Name</label>
							<input
								type='text'
								noValidate
								className=''
								placeholder='Last Name'
								name='lastName'
								onChange={this.handleChange}
							/>
						</div>

						<div className='email'>
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								noValidate
								className=''
								placeholder='Email'
								name='email'
								onChange={this.handleChange}
							/>
						</div>

						<div className='password'>
							<label htmlFor='password'>Password</label>
							<input
								type='password'
								noValidate
								className=''
								placeholder='Password'
								name='password'
								onChange={this.handleChange}
							/>
						</div>

						<div className='createAccount'>
							<button type='submit'>Create Account</button>
							<small>Already Have an Account?</small>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
