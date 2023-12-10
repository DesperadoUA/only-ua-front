<template>
	<img v-bind="attributes" :src="src" />
</template>
<script>
export default {
	name: 'AImg',
	data: () => {
		return {
			currentClasses: []
		}
	},
	props: {
		attributes: {
			default() {
				return {}
			},
			type: Object
		},
		src: {
			default: '/img/noImages.png',
			type: String
		}
	}
}
</script>
<style scoped></style>
