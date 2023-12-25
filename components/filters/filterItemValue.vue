<template>
	<div class="filter_item_row">
		<div class="filter_item_row_left" @click="onActive">
			<div class="filter_checkbox" :class="{ active: active }"></div>
			{{ title }}
		</div>
		<div class="filter_item_row_right">
			{{ total }}
		</div>
	</div>
</template>
<script>
export default {
	name: 'filterItemValue',
	props: {
		title: {
			type: String,
			default() {
				return ''
			}
		},
		total: {
			type: Number,
			default() {
				return ''
			}
		},
		filterKey: {
			type: String,
			default() {
				return ''
			}
		}
	},
	data: () => {
		return {
			active: false
		}
	},
	methods: {
		onActive() {
			this.active = !this.active
			if (this.active) {
				console.log(this.$route.fullPath)
				let currentValue = this.$route.query[this.filterKey]
				if (!currentValue) {
					this.$router.push({ query: { ...this.$route.query, [this.filterKey]: this.title } })
				} else {
					//this.$route.fullPath = `${this.$route.fullPath},${this.title}`
				}
			} else {
				console.log(this.filterKey, this.title, 'action remove')
			}
		}
	}
}
</script>
<style scoped>
.filter_item_row {
	display: flex;
	width: 100%;
	color: #686a77;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	display: flex;
	justify-content: space-between;
}
.filter_item_row:first-child {
	margin-top: 15px;
}
.filter_checkbox {
	width: 18px;
	height: 18px;
	margin-right: 5px;
	border: 1px solid rgba(206, 210, 226, 1);
	border-radius: 4px;
	cursor: pointer;
}
.filter_checkbox.active {
	background: url('/img/filter_active.png') rgba(2, 203, 70, 1);
	background-position: center center;
	background-repeat: no-repeat;
}
.filter_item_row_left {
	display: flex;
	align-items: center;
	cursor: pointer;
}
</style>
