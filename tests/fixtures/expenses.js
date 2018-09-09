import moment from 'moment'


export default [
	{
		id: '1',
		description: 'Costco',
		note: '',
		amount: 20000,
		createdAt: moment(0).valueOf(),
	},
	{
		id: '2',
		description: 'Gas',
		note: '',
		amount: 3000,
		createdAt: moment(0).subtract(4, 'days').valueOf(),
	},
	{
		id: '3',
		description: 'Rent',
		note: '',
		amount: 98550,
		createdAt: moment(0).add(4, 'days').valueOf(),
	}
]