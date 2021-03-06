import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
})

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
})


// EDIT_EXPENSE
const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
})


// SET_TEXT_FILTER

const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
})
// SORT_BY_DATE

const sortByDate = () => ({
	type: 'SORT_BY_DATE'
})

// SORT_BY_AMOUNT


const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT'
})

// SET_START_DATE

const setStartDate = ( startDate ) => ({
	type: 'SET_START_DATE',
	startDate
})
// SET_END_DATE

const setEndDate = ( endDate ) => ({
	type: 'SET_END_DATE',
	endDate
})


// Expenses Reducer

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch(action.type) {
		case 'ADD_EXPENSE':
			return [
				...state,
				action.expense
			]
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => id !== action.id)
		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if (expense.id === action.id) {
					return {
						...expense,
						...action.updates
					}
				} else {
					return expense
				}
			})
		default:
			return state
	}
}


// filters reducer

const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined,
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch(action.type) {
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text: action.text
			}
		case 'SORT_BY_AMOUNT':
			return {
				...state,
				sortBy: 'amount'
			}
		case 'SORT_BY_DATE':
			return {
				...state,
				sortBy: 'date'
			}
		case 'SET_START_DATE':
			return {
				...state,
				startDate: action.startDate
			}
		case 'SET_END_DATE':
			return {
				...state,
				endDate: action.endDate
			}
		default:
			return state
	}
}


// get visible expenses

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
	return expenses.filter((expense) => {
		const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
		const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

		return startDateMatch && endDateMatch && textMatch
	}).sort((a, b) => {
		switch(sortBy) {
			case 'date':
				return a.createdAt < b.createdAt ? 1 : -1
			case 'amount':
				return a.amount < b.amount ? 1 : -1
		}
	})
}


// store reducer

const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer
	})
)

store.subscribe(() => {
	const state = store.getState()

	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

	console.log(visibleExpenses)
})


const itemOne = store.dispatch(addExpense({description: 'Rent', amount: 1000, createdAt: -1000}))

const itemTwo = store.dispatch(addExpense({description: 'Rent 2', amount: 2000, createdAt: 1000}))


// store.dispatch(removeExpense({ id: itemOne.expense.id }))


// store.dispatch(editExpense(itemTwo.expense.id, { amount: 500 }))


// store.dispatch(setTextFilter("Rent"))

store.dispatch(sortByAmount())

// store.dispatch(sortByDate())

// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())
// store.dispatch(setStartDate(1250))


// store.dispatch(setEndDate(500))
// store.dispatch(setEndDate())
// store.dispatch(setEndDate(50000))

const demoState = {
	expenses: [{
		id: 'someid',
		description: 'Jan Rent',
		note: 'Final payment for address',
		amount: 54500,
		createdAt: 0
	}],
	filters: {
		text: 'rent',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	}
}