<template>
	<main class="main_page">
		<div class="container">
			<div class="ttl_container">
				<AText tag="h1" :attributes="mainTitleSettings">{{ data.body.h1 }}</AText>
				<div class="ttl_desc" v-if="getOptions">
					<AText tag="div" :attributes="mainDescSettings">{{ getOptions.main_page_text }}</AText>
				</div>
			</div>
			<div class="bonus_wrapper">
				<Slider :settings="bonusSliderSettings" v-if="data.body.bonuses.length">
					<BonusMainCard
						v-for="(item, index) in data.body.bonuses"
						:key="index"
						:bg="item.bg"
						:label="item.label"
						:rating="parseInt(item.rating)"
						:src="item.src"
						:title="item.title"
						:value="item.value"
						:desc="item.desc"
						:refLinks="item.ref"
					/>
				</Slider>
			</div>
			<div class="main_container">
				<TwoContentContainer>
					<template v-slot:left>
						<AText tag="div" :attributes="mainContainerTitle">{{ t('ONLINE_CASINO') }}</AText>
						<CasinoLoop :value="currentCasinos" />
					</template>
					<template v-slot:right>
						<aside class="aside">
							<Filters />
						</aside>
					</template>
				</TwoContentContainer>
			</div>
		</div>
		<section class="content_section">
			<div class="container content_container">
				<Content :value="data.body.content" />
			</div>
		</section>
	</main>
</template>

<script>
import DAL_Page from '~/DAL/static_pages'
import Slider from '~/components/slider'
import TwoContentContainer from '~/components/two_content_container/'
import CasinoLoop from '~/components/casino_loop'
import BonusMainCard from '~/components/bonus_loop/cards/main'
import Filters from '~/components/filters'
import pageTemplate from '~/mixins/pageTemplate'
import device from '~/mixins/device'
import filterMixin from '~/mixins/filters'
import helper from '~/helpers/helpers'
import config from '~/config'

export default {
	name: 'main-page',
	mixins: [pageTemplate, device, filterMixin],
	components: {
		Slider,
		TwoContentContainer,
		CasinoLoop,
		BonusMainCard,
		Filters
	},
	layout: 'default',
	data: () => {
		return {
			mainTitleSettings: {
				weight: 'extra-bold',
				color: 'cucuta',
				size: '2x-large',
				class: 'main_page_h1'
			},
			mainDescSettings: {
				weight: 'extra-bold',
				color: 'cucuta',
				size: 'medium'
			},
			bonusSliderSettings: {
				slidesToShow: 5,
				autoplay: true,
				speed: 2000,
				autoplaySpeed: 2000,
				initialSlide: 0,
				infinite: true,
				spaceBetween: 15,
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 1,
							centerMode: false,
							initialSlide: -1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							centerMode: false,
							initialSlide: -1
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							centerMode: false,
							initialSlide: -1
						}
					}
				]
			},
			mainContainerTitle: {
				weight: 'extra-bold',
				color: 'cucuta',
				size: 'x-large'
			},
			asideContainerTitle: {
				weight: 'bold',
				color: 'cairo',
				size: 'large'
			},
			btnSettings: {
				color: 'cairo',
				class: 'load_more',
				weight: 'bold',
				size: 'medium'
			},
			arrowSettings: {
				width: '18px',
				height: '18px',
				class: 'arrow'
			},
			currentCasinos: [],
			allCasinos: []
		}
	},
	computed: {
		getOptions() {
			return this.$store.getters['options/getOptions']
		}
	},
	async asyncData({ store, route }) {
		const request = {
			type: 'page',
			url: '/'
		}
		const response = await DAL_Page.getData(request)
		const { data } = response
		data.body.currentUrl = config.BASE_URL[config.LANG]
		data.body.headerLinks = helper.hreflang(data.body.hreflang)
		//store.dispatch('options/setHrefLang', data.body.headerLinks)
		return { data }
	},
	methods: {
		filterCasinos(posts) {
			const vendorsFilterValue = this.$route.query[this.vendorsFilterKey]
			const vendorsFilterKey = vendorsFilterValue ? vendorsFilterValue.split(',') : []
			const paymentsFilterValue = this.$route.query[this.paymentsFilterKey]
			const paymentsFilterKey = paymentsFilterValue ? paymentsFilterValue.split(',') : []
			const langsFilterValue = this.$route.query[this.langsFilterKey]
			const langsFilterKey = langsFilterValue ? langsFilterValue.split(',') : []
			const currencyFilterValue = this.$route.query[this.currencyFilterKey]
			const currencyFilterKey = currencyFilterValue ? currencyFilterValue.split(',') : []
			return posts.filter(item => {
				let flag = true
				vendorsFilterKey.forEach(vendorKey => {
					const valueExist = item[this.vendorsFilterKey].some(vendorItem => vendorItem.title === vendorKey)
					if (!valueExist) flag = false
				})
				paymentsFilterKey.forEach(paymentKey => {
					const valueExist = item[this.paymentsFilterKey].some(paymentItem => paymentItem.title === paymentKey)
					if (!valueExist) flag = false
				})
				langsFilterKey.forEach(langKey => {
					const valueExist = item[this.langsFilterKey].some(langItem => langItem.title === langKey)
					if (!valueExist) flag = false
				})
				currencyFilterKey.forEach(currencyKey => {
					const valueExist = item[this.currencyFilterKey].some(currencyItem => currencyItem.title === currencyKey)
					if (!valueExist) flag = false
				})
				return flag
			})
		}
	},
	mounted() {
		this.currentCasinos = this.filterCasinos(this.data.body.casino)
	},
	watch: {
		'$route.params.search': {
			handler: function() {
				this.currentCasinos = this.filterCasinos(this.data.body.casino)
			},
			deep: true,
			immediate: true
		}
	}
}
</script>
<style scoped>
.main_page {
	background: url('/img/hero_img.webp') top center #f5f6fa no-repeat;
	padding-top: 165px;
}
.ttl_container {
	max-width: 900px;
}
.ttl_desc {
	max-width: 750px;
	margin-top: 15px;
}
.aside {
	padding-top: 40px;
}
.main_page_h1 {
	line-height: 62px;
}
.bonus_wrapper {
	width: 100%;
	margin-top: 110px;
}
@media (max-width: 767px) {
	.main_page_h1 {
		font-size: 32px;
		line-height: 40px;
	}
	.aside {
		padding-top: 30px;
	}
	.main_page {
		padding-top: 150px;
	}
}
@media (min-width: 768px) and (max-width: 1200px) {
	.main_page_h1 {
		font-size: 40px;
	}
	.main_page {
		padding-top: 125px;
	}
}
</style>
