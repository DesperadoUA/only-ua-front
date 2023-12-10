<template>
	<article class="item">
		<div class="wrapper">
			<ALink :href="link">
				<AImg :attributes="imgSettings" :src="src" />
			</ALink>
		</div>
	</article>
</template>
<script>
import components from '~/mixins/components'
export default {
	name: 'game_slider_card',
    mixins: [components],
	data: () => {
		return {
			imgSettings: {
				width: '100px', height: '100px', class: 'object_fit_cover border_radius_s'
			}
		}
	},
	props: {
		link: {
			type: String,
			default() {
				return '/game'
			}
		},
		src: {
			type: String,
			default() {
				return '/img/noImages.png'
			}
		}
	}
}
</script>
<style scoped>
.item {
	width: 105px;
	height: 105px;
	padding: 5px;
}
.wrapper {
	position: relative;
	border: 1px solid #886dff;
	border-radius: 14px;
	overflow: hidden;
}
</style>
