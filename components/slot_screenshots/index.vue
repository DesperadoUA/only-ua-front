<template>
	<div class="item_container">
		<div class="item_wrapper" v-for="(item, index) in posts" :key="index">
			<SlotScreenshotsItem :src="item.src" />
		</div>
	</div>
</template>

<script>
import SlotScreenshotsItem from '~/components/slot_screenshots/item'
export default {
	name: 'game_screenshots',
	components: { SlotScreenshotsItem },
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
	gap: 32px 3%;
}
.item_wrapper {
	min-width: 22%;
	max-width: 22%;
}
@media (max-width: 767px) {
	.item_container {
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.item_wrapper {
		min-width: 45%;
		max-width: 45%;
	}
}
@media (min-width: 768px) and (max-width: 1200px) {
	.item_container {
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.item_wrapper {
		min-width: 45%;
		max-width: 45%;
	}
}
</style>
