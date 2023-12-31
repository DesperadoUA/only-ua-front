<template>
	<header class="header">
		<div class="container header_container" v-if="device === 'DC'">
			<div class="header_left">
				<Logo v-if="getOptions" :src="getOptions.logo" />
			</div>
			<div class="header_center">
				<div class="wrapper_menu">
					<Menu v-if="getOptions" :value="getMenu" />
				</div>
			</div>
			<div class="header_right">
				<Search />
			</div>
		</div>
		<div class="container" v-else>
			<div class="header_mob_container">
				<Logo v-if="getOptions" :src="getOptions.logo" />
				<div class="header_mob_container_right">
					<Search />
					<div class="burger" @click="mobMenuToggle"></div>
				</div>
			</div>
			<div class="header_mob_menu" :class="{ active: menuActive }">
				<div class="header_mob_menu_wrapper">
					<div class="mob_lang_container">
						<div class="burger_close" @click="mobMenuToggle"></div>
					</div>
					<Menu v-if="getOptions" :value="getMenu" />
				</div>
			</div>
		</div>
	</header>
</template>
<script>
import Logo from './app-logo'
import Menu from './app-menu'
import Search from './app-search'
import LangSelector from './lang_selector'
import components from '~/mixins/components'
import wpMenuAdapter from './adapters/wp_menu'
export default {
	name: 'app_header',
	components: { Logo, Menu, Search, LangSelector },
	mixins: [components],
	data() {
		return {
			menuActive: false
		}
	},
	computed: {
		getOptions() {
			return this.$store.getters['options/getOptions']
		},
		getMenu() {
			const { header_menu } = this.$store.getters['options/getOptions']
			return header_menu ? header_menu.map(item => wpMenuAdapter(item)) : []
		}
	},
	watch: {
		'$route.params': {
			handler: function() {
				this.menuActive = false
			},
			deep: true,
			immediate: true
		}
	},
	methods: {
		mobMenuToggle() {
			this.menuActive = !this.menuActive
		}
	},
	async mounted() {
		await this.$store.dispatch('options/setOptions')
	}
}
</script>
<style scoped>
.header {
	padding-top: 20px;
	position: absolute;
	top: 0px;
	left: 0px;
	height: 116px;
	width: 100%;
	background: transparent;
}
.header_left,
.header_right {
	width: 160px;
}
.header_right {
	display: flex;
	justify-content: flex-end;
}
.header_container {
	display: flex;
	justify-content: space-between;
}
.header_center {
	flex-grow: 1;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
.wrapper_menu {
	margin-top: var(--s);
}
@media (max-width: 767px) {
	.header_container {
		flex-wrap: wrap;
	}
	.burger {
		width: 48px;
		height: 48px;
		background: url('/img/burger.png') center center no-repeat;
	}
	.header_mob_container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.header {
		height: auto;
		padding-top: 12px;
		padding-bottom: 12px;
	}
	.header_mob_search_container {
		margin-top: 5px;
	}
	.header_mob_menu {
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100vw;
		height: 100vh;
		background: rgba(16, 13, 36, 0.5);
		z-index: 5;
		display: flex;
		justify-content: flex-end;
		transform: translateX(100%);
		transition: 0.7s;
	}
	.header_mob_menu.active {
		transform: translateX(0%);
	}
	.header_mob_menu_wrapper {
		width: 260px;
		height: 100%;
		background: rgba(16, 13, 36, 0.92);
		padding: 16px 16px 16px 32px;
	}
	.burger_close {
		width: 48px;
		height: 48px;
		background: url('/img/burger_close.png') center center no-repeat;
	}
	.mob_lang_container {
		display: flex;
		justify-content: flex-end;
	}
	.header_mob_container_right {
		display: flex;
		gap: 10px;
	}
}
@media (min-width: 768px) and (max-width: 1200px) {
	.header_container {
		flex-wrap: wrap;
	}
	.burger {
		width: 48px;
		height: 48px;
		background: url('/img/burger.png') center center no-repeat;
	}
	.header_mob_container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.header {
		height: auto;
		padding-top: 12px;
		padding-bottom: 12px;
	}
	.header_mob_search_container {
		margin-top: 5px;
		justify-content: center;
		display: flex;
	}
	.header_mob_menu {
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100vw;
		height: 100vh;
		background: rgba(16, 13, 36, 0.5);
		z-index: 5;
		display: flex;
		justify-content: flex-end;
		transform: translateX(100%);
		transition: 0.7s;
	}
	.header_mob_menu.active {
		transform: translateX(0%);
	}
	.header_mob_menu_wrapper {
		width: 320px;
		height: 100%;
		background: rgba(16, 13, 36, 0.92);
		padding: 16px 16px 16px 32px;
	}
	.burger_close {
		width: 48px;
		height: 48px;
		background: url('/img/burger_close.png') center center no-repeat;
	}
	.mob_lang_container {
		display: flex;
		justify-content: space-between;
	}
}
</style>
