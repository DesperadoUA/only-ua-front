<template>
	<section class="cms" v-if="value !== ''">
		<article class="container" v-html="value"></article>
	</section>
</template>

<script>
export default {
	name: 'main_content',
	props: ['value']
}
</script>
