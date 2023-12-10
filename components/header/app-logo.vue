<template>
	<div class="header_logo">
		<ALink href="/">
			<AImg :attributes="imgSettings" src="/img/logo_footer.png" />
		</ALink>
	</div>
</template>
<script>
import components from '~/mixins/components'
export default {
	name: 'logo',
    mixins: [components],
	data() {
		return {
			options: null,
			imgSettings: {
				width: '160px', height: '36px'
			}
		}
	}
}
</script>

<style lang="scss"></style>
