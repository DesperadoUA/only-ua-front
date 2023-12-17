<template>
	<div class="footer-logo">
		<ALink href="/">
			<AImg :attributes="imgSettings" :src="src" />
		</ALink>
	</div>
</template>

<script>
import components from '~/mixins/components'
export default {
	name: 'footer-logo',
	mixins: [components],
	data() {
		return {
			imgSettings: {
				width: '160px',
				height: '36px'
			}
		}
	},
	props: {
		src: {
			type: String,
			default() {
				return ''
			}
		}
	}
}
</script>
<style scoped>
.footer-logo {
	display: flex;
	align-items: center;
}
</style>
