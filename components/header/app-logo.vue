<template>
	<div class="header_logo">
		<ALink href="/">
			<AImg :attributes="imgSettings" :src="src" />
		</ALink>
	</div>
</template>
<script>
import components from '~/mixins/components'
export default {
	name: 'logo',
	mixins: [components],
	props: {
		src: {
			type: String,
			default() {
				return ''
			}
		}
	},
	data() {
		return {
			options: null,
			imgSettings: {
				width: '162px',
				height: '59px'
			}
		}
	}
}
</script>

<style lang="scss"></style>
