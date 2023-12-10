<template>
	<div class="root">
		<div class="wrapper">
			<ALink
				:href="item.permalink"
				:attributes="textSettings"
				v-for="(item, index) in value"
				:key="index"
				:data-active="activeLink(item.permalink, index)"
				>{{ item.title }}</ALink
			>
		</div>
	</div>
</template>

<script>
import components from '~/mixins/components'
export default {
	name: 'dev-category-filter',
    mixins: [components],
	props: {
		value: {
			type: Array,
			default() {
				return []
			}
		}
	},
	data() {
		return {
			textSettings: {
					class: 'item',
					color: 'cairo',
					text_transform: 'uppercase',
					size: 'small',
					weight: 'regular',
					decoration: 'none'
			}
		}
	},
	methods: {
		activeLink(link, index) {
			if (index === 0 && this.$route.path === '/') return true
			else if (this.$route.path === link) return true
			else return false
		}
	}
}
</script>

<style scoped>
.wrapper {
	display: flex;
	gap: 6px;
}
.item {
	display: inline-block;
	padding: 5px 15px;
	border-radius: var(--m);
	background: rgba(255, 255, 255, 0.1);
}
[data-active='true'] {
	background: rgba(255, 255, 255, 0.27);
}
</style>
