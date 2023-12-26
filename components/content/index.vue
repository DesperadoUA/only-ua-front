<template>
	<section class="cms" v-if="value !== ''">
		<article class="container" v-html="value"></article>
	</section>
</template>

<script>
export default {
	name: 'main_content',
	props: {
        value: {
            type: String,
            default() {
                return ''
            }
        }
    }
}
</script>
<style scoped>
.cms {
	background: var(--cairo);
	padding: 20px 15px;
	border-radius: 12px;
}
</style>
