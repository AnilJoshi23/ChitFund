import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../src/components/EditExpensePage'
import expenses from '../fixtures/expenses'

let startEditExpense, startRemoveExpense, history, wrapper

beforeEach(() => {
	startEditExpense = jest.fn()
	startRemoveExpense = jest.fn()
	history = { push: jest.fn() }
	wrapper = shallow(
		<EditExpensePage
			startEditExpense={startEditExpense}
			history={history}
			startRemoveExpense={startRemoveExpense}
			expense={expenses[0]}
		/>
	)
})

test('should render EditExpensePage correctly', () => {
	expect(wrapper).toMatchSnapshot()
})

test('should handle startEditExpense correctly', () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
	expect(history.push).toHaveBeenLastCalledWith('/')
	expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0])
})

test('should handle startRemoveExpense correctly', () => {
	wrapper.find('button').simulate('click')
	expect(history.push).toHaveBeenLastCalledWith('/')
	expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[0].id)
})