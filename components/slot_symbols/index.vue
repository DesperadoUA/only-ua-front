<template>
	<div class="item_container">
		<div class="item_wrapper" v-for="(item, index) in posts" :key="index">
			<SlotSymbolItem :src="item.src" :value_1="item.value_1" :value_2="item.value_2" :value_3="item.value_3" />
		</div>
	</div>
</template>

<script>
import SlotSymbolItem from '~/components/slot_symbols/item'
export default {
	name: 'game_symbols',
	components: { SlotSymbolItem },
	data() {
		return {
			currentValue: []
		}
	},
	props: {
		posts: {
			type: Array,
			default() {
				return []
			}
		}
	}
}
</script>

<style scoped>
.item_container {
	display: flex;
	flex-wrap: wrap;
	gap: 32px 5%;
}
.item_wrapper {
	min-width: 30%;
}
@media (max-width: 767px) {
	.item_wrapper {
		width: 48%;
	}
	.item {
		gap: 10px;
	}
	.item_container {
		gap: 20px 0px;
		justify-content: space-between;
	}
}
</style>
