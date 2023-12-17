<template>
	<footer class="footer" v-if="getOptions">
		<FooterTop :logoSrc="getOptions.logo" :menu="getMenu" />
		<FooterPartners :value="getPartners" />
		<FooterDescription :value="getOptions.footer_desc" />
		<FooterText :value="getOptions.footer_text" />
	</footer>
</template>
<script>
import FooterDescription from './footer-description'
import FooterText from './footer-text'
import FooterPartners from './partners'
import FooterTop from './top'
import wpPartnersAdapter from './adapters/wp_partners'
import wpMenuAdapter from './adapters/wp_menu'
export default {
	name: 'app-footer',
	components: { FooterText, FooterDescription, FooterPartners, FooterTop },
	data() {
		return {
			footer_description: '',
			footer_text: '',
			partners: []
		}
	},
	computed: {
		getOptions() {
			return this.$store.getters['options/getOptions']
		},
		getPartners() {
			const { partners } = this.$store.getters['options/getOptions']
			return partners ? partners.map(item => wpPartnersAdapter(item)) : []
		},
		getMenu() {
			const { footer_menu } = this.$store.getters['options/getOptions']
			return footer_menu ? footer_menu.map(item => wpMenuAdapter(item)) : []
		}
	}
}
</script>
<style scoped>
.footer {
	padding-top: 45px;
	background: var(--cucuta);
}
@media (max-width: 767px) {
	.footer {
		padding-top: 15px;
	}
}
</style>
