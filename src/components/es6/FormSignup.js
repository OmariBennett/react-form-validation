import React from 'react';
import useForm from './useForm';
import validateForm from './validateForm';

const FormSignup = () => {
	const { values, errors, handleChange, handleSubmit } = useForm(validateForm);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h1>
					Get started with us today! Create your account by filling out the
					information below.
				</h1>

				<div>
					<label htmlFor='username'>User Name</label>
					<input
						id='username'
						type='text'
						name='username'
						placeholder='Enter your username'
						value={values.username}
						onChange={handleChange}
					/>
					{errors.username && <small>{errors.username}</small>}
				</div>

				<div>
					<label htmlFor='email'>Email</label>
					<input
						id='email'
						type='email'
						name='email'
						placeholder='Enter your email'
						value={values.email}
						onChange={handleChange}
					/>
					{errors.email && <small>{errors.email}</small>}
				</div>

				<div>
					<label htmlFor='password'>Password</label>
					<input
						id='password'
						type='password'
						name='password'
						placeholder='Enter your password'
						value={values.password}
						onChange={handleChange}
					/>
					{errors.password && <small>{errors.password}</small>}
				</div>
				<div>
					<label htmlFor='password2'>Confirm Password</label>
					<input
						id='password2'
						type='password'
						name='password2'
						placeholder='Enter your password'
						value={values.password2}
						onChange={handleChange}
					/>
					{errors.password2 && <small>{errors.password2}</small>}
				</div>

				<button type='submit'>Sign Up</button>
				<span>
					Already have an account? Login <a href='#/'>here</a>
				</span>
			</form>
		</div>
	);
};

export default FormSignup;
