<template>
	<NuxtLink :class="currentClasses" no-prefetch :to="href">
		<slot />
	</NuxtLink>
</template>
<script>
export default {
	name: 'ALink',
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
		href: {
			default() {
				return '#'
			},
			type: String
		}
	},
	mounted() {
		const classes = []
		const availableWeight = [
			'thin',
			'extra-light',
			'light',
			'regular',
			'medium',
			'semi-bold',
			'bold',
			'extra-bold',
			'black'
		]
		const availableSize = ['small', 'medium', 'large', 'x-large', '2x-large']
		const availableDecoration = [
			'underline',
			'overline',
			'line-through',
			'blink',
			'solid',
			'wavy',
			'dotted',
			'dashed',
			'double',
			'none'
		]
		const availableColor = [
			'cairo',
			'calgary',
			'cordoba',
			'callao',
			'cucuta',
			'colombo',
			'cancun',
			'cochin',
			'cardiff',
			'cleveland'
		]
		const availableAlign = ['left', 'right', 'center', 'justify']
		const availableTextTransform = ['uppercase', 'lowercase', 'capitalize', 'none']
		if ('weight' in this.attributes && availableWeight.includes(this.attributes.weight)) {
			classes.push(`text_weight_${this.attributes.weight}`)
		}
		if ('size' in this.attributes && availableSize.includes(this.attributes.size)) {
			classes.push(`text_size_${this.attributes.size}`)
		}
		if ('decoration' in this.attributes && availableDecoration.includes(this.attributes.decoration)) {
			classes.push(`text_decoration_${this.attributes.decoration}`)
		}
		if ('color' in this.attributes && availableColor.includes(this.attributes.color)) {
			classes.push(`text_color_${this.attributes.color}`)
		}
		if ('align' in this.attributes && availableAlign.includes(this.attributes.align)) {
			classes.push(`text_align_${this.attributes.align}`)
		}
		if ('text_transform' in this.attributes && availableTextTransform.includes(this.attributes.text_transform)) {
			classes.push(`text_transform_${this.attributes.text_transform}`)
		}
		if ('class' in this.attributes) classes.push(this.attributes.class)
		this.currentClasses = classes.join(' ')
	}
}
</script>
<style scoped></style>
