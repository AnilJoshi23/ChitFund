import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../src/components/ExpensesSummary'

test('should correctly render ExpensesSummary with 1 expense', () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={567} />)
	expect(wrapper).toMatchSnapshot()
})

test('should correctly render ExpensesSummary with multiple expenses', () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={123456789} />)
	expect(wrapper).toMatchSnapshot()
})
