<template>
	<div class="header_menu">
		<nav class="header_menu_container">
			<div v-for="(item, index) in value" :key="index" class="header_menu_item">
				<ALink :href="item.value_2" :attributes="linkSettings">
					<AImg :attributes="iconSettings" :src="item.src" />
					{{ item.value_1 }}
				</ALink>
			</div>
		</nav>
	</div>
</template>
<script>
import components from '~/mixins/components'
export default {
	name: 'app-menu',
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
			linkSettings: {
				color: 'cairo',
				text_transform: 'uppercase',
				weight: 'regular',
				size: 'small',
				decoration: 'none'
			},
			iconSettings: {
				width: '24px',
				height: '24px',
				class: 'icon'
			}
		}
	}
}
</script>

<style scoped lang="scss">
.header_menu_container {
	display: flex;
	gap: 20px;
	justify-content: center;
}
.header_menu_item {
	padding-bottom: 10px;
}
.header_menu_item:has(.nuxt-link-active) {
	border-bottom: 4px solid var(--calgary);
}
.header_menu_item:first-child:has(.nuxt-link-active) {
	border-bottom: none;
}
.header_menu_item[data-active='true'] {
	border-bottom: 4px solid var(--calgary) !important;
}
.icon {
	transform: translateY(3px);
}
@media (max-width: 767px) {
	.header_menu_container {
		flex-wrap: wrap;
		gap: 10px;
		margin-top: 20px;
	}
	.header_menu_item {
		width: 100%;
	}
}
@media (min-width: 768px) and (max-width: 1200px) {
	.header_menu_container {
		flex-wrap: wrap;
		gap: 10px;
		margin-top: 20px;
	}
	.header_menu_item {
		width: 100%;
	}
}
</style>
