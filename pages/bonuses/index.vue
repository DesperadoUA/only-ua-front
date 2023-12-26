<template>
	<main class="bonuses_page">
		<section class="container">
			<AText tag="h1" :attributes="titleSettings">{{ data.body.h1 }}</AText>
		</section>
		<section class="container bonus_container">
			<BonusLoop :value="data.body.bonuses" />
		</section>
		<section class="content_section">
			<div class="container content_container">
				<Content :value="data.body.content" />
			</div>
		</section>
	</main>
</template>

<script>
import DAL_Page from '~/DAL/static_pages'
import pageTemplate from '~/mixins/pageTemplate'
import helper from '~/helpers/helpers'
import config from '~/config'
import BonusLoop from '~/components/bonus_loop'

export default {
	name: 'bonuses-page',
	mixins: [pageTemplate],
	components: { BonusLoop },
	layout: 'default',
	data: () => {
		return {
			titleSettings: {
				color: 'cucuta',
				size: 'x-large',
				weight: 'bold',
				transform: 'uppercase',
				class: 'title'
			}
		}
	},
	async asyncData({ store, route }) {
		const request = {
			type: 'page',
			url: 'bonuses'
		}
		const response = await DAL_Page.getData(request)
		const { data } = response
		data.body.currentUrl = config.BASE_URL[config.LANG] + route.path
		data.body.ampUrl = config.BASE_URL[config.LANG] + config.AMP_PREFIX + route.path
		data.body.headerLinks = helper.hreflang(data.body.hreflang)
		store.dispatch('options/setHrefLang', data.body.headerLinks)
		return { data }
	}
}
</script>
<style scoped>
.bonuses_page {
	background: url('/img/hero_img.webp') top center #f5f6fa no-repeat;
	padding-top: 165px;
}
.bonus_container {
	margin-top: 60px;
}
.title {
	margin-bottom: var(--m);
}
.bonus_category_container {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.bonus_category_item {
	width: 32%;
}
@media (max-width: 767px) {
	.bonus_category_item {
		width: 100%;
	}
}
@media (min-width: 768px) and (max-width: 1200px) {
	.bonus_category_item {
		width: 48%;
	}
	.bonus_category_container {
		gap: 12px;
	}
}
</style>
