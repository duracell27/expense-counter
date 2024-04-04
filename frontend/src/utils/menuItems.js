import {dashboard, expenses, transactions, trend} from '../utils/icons'

export const menuItems = [
    {
        id: 1,
        title: 'Дашборд',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 2,
        title: "Транзакції",
        icon: transactions,
        link: "/dashboard",
    },
    {
        id: 3,
        title: "Прибутки",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Витрати",
        icon: expenses,
        link: "/dashboard",
    },
]