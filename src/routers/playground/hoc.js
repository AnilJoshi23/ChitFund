// higher order components (HOC) - component that renders another component
// reuse code
// render hijacking
// prop manipulation
// abstract state


import React from 'react'
import ReactDOM from 'react-dom'


const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>The info is: {props.info}</p>
	</div>
)

const withAdminWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAdmin && <p>This is private info. Dont share it!!</p>}
			<WrappedComponent {...props} />
		</div>
	)
}

const AdminInfo = withAdminWarning(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info="DETS ARE HERE" />, document.getElementById('app'))


const RequireAuthentication = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAuthenticated ?
				(<WrappedComponent {...props} />) : (<p>Please log in!</p>)}
		</div>
	)
}

const AuthInfo = RequireAuthentication(Info)


ReactDOM.render(<AuthInfo isAuthenticated={true} info="DETS ARE HERE" />, document.getElementById('app'))