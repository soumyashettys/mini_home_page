import React, { Fragment } from 'react';
import login from './login.css';
// {/* <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet"></link> */}
// <link rel="stylesheet" type="text/css" href="slide navbar style.css"></link>
// <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet"></link>
function Login() {
  return (
    <Fragment>
		
     {/* <div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true" />

			<div class="login">
				<form class="form">
					<label htmlFor="chk" aria-hidden="true">Log in</label>
					<input class="input" type="email" name="email" placeholder="Email" required="" /> 
					<input class="input" type="password" name="pswd" placeholder="Password" required="" />
					<button>Log in</button>
				</form>
			</div>

      <div class="register">
				<form class="form">
					<label htmlFor="chk" aria-hidden="true">Register</label>
					<input class="input" type="text" name="txt" placeholder="Username" required="" />
					<input class="input" type="email" name="email" placeholder="Email" required="" />
					<input class="input" type="password" name="pswd" placeholder="Password" required="" />
					<button>Register</button>
				</form>
			</div>
	</div> */}
    	<div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true" />

			<div class="signup">
				<form>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="User name" required="" />
					<input type="email" name="email" placeholder="Email" required="" />
					<input type="password" name="pswd" placeholder="Password" required="" />
					<button>Sign up</button>
				</form>
			</div>

			<div class="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required="" />
					<input type="password" name="pswd" placeholder="Password" required="" />
					<button>Login</button>
				</form>
			</div>
	</div>
    </Fragment>
  );
}

export default Login;