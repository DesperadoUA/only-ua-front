<template>
	<div class="filters">
		<div class="current_filters">
			<div class="current_filters_ttl">Sorted by</div>
			<div class="current_filters_container">
				<div class="current_filters_item">New <button class="current_filters_remove"></button></div>
				<div class="current_filters_item">Mobile <button class="current_filters_remove"></button></div>
				<div class="current_filters_item">Quality Casinos <button class="current_filters_remove"></button></div>
				<div class="current_filters_item">VIP <button class="current_filters_remove"></button></div>
			</div>
			<div class="current_filters_clear">Clear All</div>
		</div>
		<div class="filters_container">
			<FilterItem title="Провайдеры" src="/img/providers.png" :value="vendors" filterKey="vendors" />
			<FilterItem title="Методи депозиту" src="/img/payment_icon.png" :value="payments" filterKey="payments" />
			<FilterItem title="Мова сайту" src="/img/lang.png" :value="langs" filterKey="langs" />
			<FilterItem title="Ігрові валюти" src="/img/game_currency.png" :value="currency" filterKey="currency" />
		</div>
	</div>
</template>

<script>
import components from '~/mixins/components'
import FilterItem from './filterItem'
export default {
	name: 'filters',
	mixins: [components],
	components: { FilterItem },
	data: () => {
		return {
			imgSettings: {
				width: '18px',
				height: '18px'
			},
			currentFilters: [{ typeCasino: 'New' }, { typeCasino: 'Mobile' }],
			vendors: [
				{ title: 'Ezugi', total: 5 },
				{ title: 'Yggdrasil', total: 3 },
				{ title: 'Microgaming', total: 6 },
				{ title: 'Kalamba', total: 1 }
			],
			payments: [
				{ title: 'Visa', total: 5 },
				{ title: 'MasterCard', total: 3 },
				{ title: 'Neosurf', total: 6 },
				{ title: 'EcoPayz', total: 1 }
			],
			langs: [
				{ title: 'English', total: 5 },
				{ title: 'Українська', total: 3 },
				{ title: 'Русский', total: 6 }
			],
			currency: [
				{ title: '$ - USD', total: 5 },
				{ title: '€ - EUR', total: 3 },
				{ title: '₽ - RUB', total: 6 },
				{ title: '₸ - KZT', total: 6 },
				{ title: 'zł - PLN', total: 6 },
				{ title: '₴ - UAH', total: 6 }
			]
		}
	}
}
</script>
<style scoped>
.filters {
	background: white;
	border-radius: 12px;
	padding: 20px 10px;
}
.current_filters_ttl,
.current_filters_clear {
	color: #686a77;
	text-align: center;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
}
.current_filters_clear,
.current_filters_ttl {
	margin-bottom: 15px;
}
.current_filters_clear {
	margin-top: 15px;
}
.current_filters {
	border-bottom: 1px solid #ced2e2;
}
.current_filters_container {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
}
.current_filters_item {
	border-radius: 5px;
	border: 1px dashed #02cb46;
	padding: 4px 8px;
	display: flex;
	align-items: center;
	color: #1d2146;
	font-size: 16px;
	font-weight: 400;
}
.current_filters_remove {
	width: 18px;
	height: 18px;
	margin-left: 7px;
	background: none;
	border: none;
	cursor: pointer;
	background: url('/img/close_cross.png') center center;
}
</style>
