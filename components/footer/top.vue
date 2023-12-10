<template>
	<div v-bind="containerSettings">
		<div class="container top-container">
			<div class="left">
				<FooterLogo :social="changeSocial" />
				<FooterMenu :value="changeMenu" />
			</div>
			<div class="right">
				<FooterForm />
			</div>
		</div>
	</div>
</template>
<script>
import FooterMenu from './footer-menu'
import FooterLogo from './logo'
import FooterForm from './footer-form'
export default {
	name: 'top-footer',
	components: { FooterMenu, FooterLogo, FooterForm },
	data: () => {
		return {
			containerSettings: {
				class: 'p_m'
			},
			footer_menu: null,
			social: []
		}
	},
	computed: {
		changeMenu() {
			const settings = this.$store.getters['settings/getSettings']
			if (settings) {
				this.footer_menu = settings.filter(item => item.key === 'footer_menu')[0].value
			}
			return this.footer_menu
		},
		changeSocial() {
			const settings = this.$store.getters['settings/getSettings']
			if (settings) {
				this.social = settings.filter(item => item.key === 'social')[0].value
			}
			return this.social
		}
	}
}
</script>
<style scoped>
.top-container {
	display: flex;
	margin-bottom: var(--l);
}
.left {
	width: 57%;
}
.right {
	width: 43%;
}
@media (max-width: 767px) {
	.top-container {
		flex-wrap: wrap;
		padding-left: 5px;
		padding-right: 5px;
	}
	.left {
		width: 100%;
	}
	.right {
		width: 100%;
	}
}
@media (min-width: 768px) and (max-width: 1200px) {
	.top-container {
		flex-wrap: wrap;
		padding-left: 5px;
		padding-right: 5px;
		margin-bottom: 15px;
	}
	.left {
		width: 100%;
	}
	.right {
		width: 100%;
	}
}
</style>
