import { login, logout } from '../../src/actions/auth'

test('should generate login action object', () => {
	const uid = 'someid'
	const action = login(uid)

	expect(action).toEqual({
		type: 'LOGIN',
		uid
	})
})


test('should generate logout action object', () => {
	const action = logout()

	expect(action).toEqual({
		type: 'LOGOUT'
	})
})

