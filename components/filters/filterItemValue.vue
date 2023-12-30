<template>
	<div class="filter_item_row">
		<div class="filter_item_row_left" @click="onActive">
			<div class="filter_checkbox" :class="{ active: active }" />
			{{ title }}
		</div>
		<div class="filter_item_row_right" v-if="false">
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
				const currentValue = this.$route.query[this.filterKey]
				if (!currentValue) {
					this.$router.push({ query: { ...this.$route.query, [this.filterKey]: this.title } })
				} else {
					const arr = this.$route.query[this.filterKey].split(',')
					arr.push(this.title)
					this.$router.push({ query: { ...this.$route.query, [this.filterKey]: arr.join(',') } })
				}
			} else {
				const arr = this.$route.query[this.filterKey].split(',')
				const filter = arr.filter(item => item !== this.title)
				if (!filter.length) {
					this.$router.push({ query: { ...this.$route.query, [this.filterKey]: '' } })
				} else {
					this.$router.push({ query: { ...this.$route.query, [this.filterKey]: filter.join(',') } })
				}
			}
		}
	},
	watch: {
		'$route.params.search': {
			handler: function() {
				const filterValue = this.$route.query[this.filterKey]
				if (filterValue) {
					const filterList = filterValue.split(',')
					if (!filterList.includes(this.title)) this.active = false
				} else {
					this.active = false
				}
			},
			deep: true,
			immediate: true
		}
	},
	mounted() {
		const arr = this.$route.query[this.filterKey]
		if (arr) {
			const arrKeys = this.$route.query[this.filterKey].split(',')
			if (arrKeys.length && arrKeys.includes(this.title)) {
				this.active = true
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
	background: url('/img/filter_active.png') rgba(2, 203, 70, 1) center center no-repeat;
}
.filter_item_row_left {
	display: flex;
	align-items: center;
	cursor: pointer;
}
</style>
