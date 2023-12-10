<template>
	<span class="arrow_before">
		<ALink :href="link" :attributes="attributes">
			<slot />
		</ALink>
	</span>
</template>
<script>
import ALink from '~/components/ui/atoms/links/'
export default {
	name: 'link_with_arrow',
	components: { ALink },
	props: {
		link: {
			type: String,
			default() {
				return '#'
			}
		},
		attributes: {
			type: Object,
			default() {
				return {}
			}
		}
	}
}
</script>
<style scoped>
.arrow_before {
	display: flex;
	align-items: center;
	padding-right: 18px;
	position: relative;
}
.arrow_before:before {
	content: '';
	width: 16px;
	height: 16px;
	position: absolute;
	background: url('/img/arrowGreen.svg');
	right: 0px;
}
</style>
