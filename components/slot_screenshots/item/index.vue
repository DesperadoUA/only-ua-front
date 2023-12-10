<template>
	<div class="item">
		<AImg :attributes="imgSettings" :src="src" />
	</div>
</template>

<script>
import components from '~/mixins/components'
export default {
	name: 'game_screenshots_item',
	mixins: [components],
	data() {
		return {
			imgSettings: {
				width: '280px', height: '170px', class: 'img'
			}
		}
	},
	props: {
		src: {
			type: String,
			default() {
				return []
			}
		}
	}
}
</script>

<style scoped>
.img {
	max-width: 100%;
}
</style>
