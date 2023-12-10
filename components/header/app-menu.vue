<template>
	<div class="header_menu">
		<nav class="header_menu_container">
			<div
				v-for="(item, index) in settings"
				:key="index"
				class="header_menu_item"
				:data-active="activeLink(item.value_2)"
			>
				<ALink :href="item.value_2" :attributes="linkSettings">{{ item.value_1 }}</ALink>
			</div>
		</nav>
	</div>
</template>
<script>
import components from '~/mixins/components'
export default {
	name: 'app-menu',
	mixins: [components],
	data() {
		return {
			linkSettings: {
				color: 'cairo',
				text_transform: 'uppercase',
				weight: 'regular',
				size: 'small',
				decoration: 'none'
			},
			settings: []
		}
	},
	methods: {
		activeLink(link) {
			return link === this.$route.path
		}
	},
	async mounted() {
		const data = { lang: 1 }
		await this.$store.dispatch('settings/setSettings', data)
		const settings = this.$store.getters['settings/getSettings']
		if (settings.length !== 0) {
			this.settings = settings.filter(item => item.key === 'header_menu')[0].value
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
