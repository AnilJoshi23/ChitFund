import selectExpenseTotal from '../../src/selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should return 0 if no expenses', () => {
	const total = selectExpenseTotal([])

	expect(total).toBe(0)
})

test('should correctly add up single expense', () => {
	const total = selectExpenseTotal([expenses[0]])

	expect(total).toBe(20000)
})

test('should correctly add up all expenses', () => {
	const total = selectExpenseTotal(expenses)

	expect(total).toBe(121550)
})
