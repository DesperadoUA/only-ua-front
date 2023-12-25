<template>
	<div class="filter_item">
		<div class="filter_item_title" @click="onOpen">
			<div class="filter_item_icon">
				<AImg :attributes="imgSettings" :src="src" />
			</div>
			<div class="filter_item_text">
				{{ title }}
			</div>
			<div class="filter_item_arrow">
				<AImg :attributes="imgSettings" src="/img/filters_arrow.png" />
			</div>
		</div>
		<div class="filter_item_body" v-if="open">
			<FilterItemValue
				v-for="item in value"
				:key="item.title"
				:title="item.title"
				:total="item.total"
				:filterKey="filterKey"
			/>
		</div>
	</div>
</template>
<script>
import components from '~/mixins/components'
import FilterItemValue from './filterItemValue'
export default {
	name: 'filterItem',
	mixins: [components],
	comments: { FilterItemValue },
	props: {
		title: {
			type: String,
			default() {
				return ''
			}
		},
		filterKey: {
			type: String,
			default() {
				return ''
			}
		},
		src: {
			type: String,
			default() {
				return ''
			}
		},
		value: {
			type: Array,
			default() {
				return []
			}
		}
	},
	data: () => {
		return {
			imgSettings: {
				width: '18px',
				height: '18px'
			},
			open: false
		}
	},
	methods: {
		onOpen() {
			this.open = !this.open
		}
	}
}
</script>
<style scoped>
.filter_item {
	border-bottom: 1px solid #ced2e2;
	padding-top: 20px;
	padding-bottom: 20px;
	position: relative;
}
.filter_item_title {
	display: flex;
	align-items: center;
	position: relative;
	padding-right: 30px;
	cursor: pointer;
}
.filter_item_icon {
	height: 18px;
	margin-right: 10px;
}
.filter_item_arrow {
	position: absolute;
	top: 4px;
	right: 0;
	width: 20px;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.filter_item_body {
	padding-left: 25px;
	gap: 5px;
	display: flex;
	flex-wrap: wrap;
}
</style>
