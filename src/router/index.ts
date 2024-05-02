import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import Payment from "../Pages/Payment/Payment.vue";
import List from "../Pages/List/List.vue";
import Persons from "../Pages/Persons/Persons.vue";

// ルーティング情報
const routes = [
	{
		path: "/app",
		name: "App",
		component: App,
	},
	{
		path: "/",
		name: "Payment",
		component: Payment,
	},
	{
		path: "/list",
		name: "List",
		component: List,
	},
	{
		path: "/persons",
		name: "Persons",
		component: Persons,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
