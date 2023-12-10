<template>
	<footer class="footer">
		<!--
		<FooterTop />
		<FooterPartners :value="changePartners" />
		<FooterDescription :value="changeDescription" />
		<FooterText :value="changeText" />
		-->
		Footer
	</footer>
</template>
<script>
import FooterDescription from './footer-description'
import FooterText from './footer-text'
import FooterPartners from './partners'
import FooterTop from './top'
export default {
	name: 'app-footer',
	components: { FooterText, FooterDescription, FooterPartners, FooterTop },
	data() {
		return {
			footer_description: '',
			footer_text: '',
			partners: []
		}
	}
	/*
	computed: {
		changeDescription() {
			const settings = this.$store.getters['settings/getSettings']
			if (settings) {
				this.footer_description = settings.filter(item => item.key === 'footer_description')[0].value
			}
			return this.footer_description
		},
		changeText() {
			const settings = this.$store.getters['settings/getSettings']
			if (settings) {
				this.footer_text = settings.filter(item => item.key === 'footer_text')[0].value
			}
			return this.footer_text
		},
		changePartners() {
			const settings = this.$store.getters['settings/getSettings']
			if (settings) {
				this.partners = settings.filter(item => item.key === 'partners')[0].value
			}
			return this.partners
		}
	}
	*/
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
