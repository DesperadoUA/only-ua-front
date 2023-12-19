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
				<Slider :settings="bonusSliderSettings">
					<BonusMainCard
                        bg="#d21037"
                        label="Popular"
                        rating="90"
                        src="/img/game_types/casino-logo.png"
                        title="Вітальний пакет"
                        value="125 000 ₴ + 500FS"
                        desc="Bonus T&C"
                    />
					<BonusMainCard
                        bg="#320059"
                        label="Trusted"
                        rating="87"
                        src="/img/game_types/casino-logo.png"
                        title="Вітальний пакет"
                        value="125 000 ₴ + 500FS"
                        desc="Bonus T&C"
                    />
					<BonusMainCard
                        bg="#320059"
                        label="New"
                        src="/img/game_types/casino-logo.png"
                        title="Вітальний пакет"
                        value="125 000 ₴ + 500FS"
                        desc="Bonus T&C"
                    />
					<BonusMainCard
                        bg="#fff"
                        label="Best"
                        src="/img/game_types/casino-logo.png"
                        title="Вітальний пакет"
                        value="125 000 ₴ + 500FS"
                        desc="Bonus T&C"
                    />
					<BonusMainCard
                        bg="#fff"
                        label="Best"
                        src="/img/game_types/casino-logo.png"
                        title="Вітальний пакет"
                        value="125 000 ₴ + 500FS"
                        desc="Bonus T&C"
                    />
					<BonusMainCard
                        bg="#fff"
                        label="Best"
                        src="/img/game_types/casino-logo.png"
                        title="Вітальний пакет"
                        value="125 000 ₴ + 500FS"
                        desc="Bonus T&C"
                    />
					<BonusMainCard
                        bg="#fff"
                        label="Best"
                        src="/img/game_types/casino-logo.png"
                        title="Вітальний пакет"
                        value="125 000 ₴ + 500FS"
                        desc="Bonus T&C"
                    />
					<BonusMainCard
                        bg="#fff"
                        label="Best"
                        src="/img/game_types/casino-logo.png"
                        title="Вітальний пакет"
                        value="125 000 ₴ + 500FS"
                        desc="Bonus T&C"
                    />
					<BonusMainCard
                        bg="#fff"
                        label="Best"
                        src="/img/game_types/casino-logo.png"
                        title="Вітальний пакет"
                        value="125 000 ₴ + 500FS"
                        desc="Bonus T&C"
                    />
					<BonusMainCard
                        bg="#fff"
                        label="Best"
                        src="/img/game_types/casino-logo.png"
                        title="Вітальний пакет"
                        value="125 000 ₴ + 500FS"
                        desc="Bonus T&C"
                    />
				</Slider>
			</div>
			<div class="main_container">
				<TwoContentContainer>
					<template v-slot:left>
						<AText tag="div" :attributes="mainContainerTitle">{{ t('ONLINE_CASINO') }}</AText>
						<CasinoLoop :value="data.body.casino" />
					</template>
					<template v-slot:right>
						<aside class="aside"></aside>
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
import pageTemplate from '~/mixins/pageTemplate'
import device from '~/mixins/device'
import helper from '~/helpers/helpers'
import config from '~/config'

export default {
	name: 'main-page',
	mixins: [pageTemplate, device],
	components: {
		Slider,
		TwoContentContainer,
		CasinoLoop,
		BonusMainCard
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
			}
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
	}
}
</script>
<style scoped>
.main_page {
	background: url('/img/hero_img.webp') top center var(--cairo);
	background-repeat: no-repeat;
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
	padding-top: var(--xl);
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
