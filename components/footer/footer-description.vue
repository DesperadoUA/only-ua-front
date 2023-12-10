<template>
	<div v-bind="containerSettings">
		<div class="container">
			<AText tag="div" :attributes="textSettings">{{ value }}</AText>
		</div>
	</div>
</template>

<script>
import components from '~/mixins/components'
export default {
	name: 'footer-desc',
	mixins: [components],
	data: () => {
		return {
			textSettings: {
				weight: 'regular',
				color: 'cordoba',
				size: 'small'
			},
			containerSettings: {
				class: 'p_m footer_copyright'
			}
		}
	},
	props: {
		value: {
			type: String,
			default: ''
		}
	}
}
</script>
<style scoped>
.footer_copyright {
	border-top: 1px solid var(--callao);
}
@media (max-width: 767px) {
	.footer_copyright {
		padding-left: 0px;
		padding-right: 0px;
	}
}
</style>
