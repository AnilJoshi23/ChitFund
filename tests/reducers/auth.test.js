import authReducer from '../../src/reducers/auth'

test('should set uid for logion', () => {
	const action = {
		type: 'LOGIN',
		uid: 'someid'
	}

	const state = authReducer({}, action)

	expect(state.uid).toBe(action.uid)
})


test('should clear uid for logout', () => {
	const action = {
		type: 'LOGOUT'
	}

	const state = authReducer({ uid: 'someid' }, action)

	expect(state).toEqual({})
})

