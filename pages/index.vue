<template>
	<main class="main_page">
		<h1>Main Page</h1>
		<!--
		<div class="container">
			<div class="ttl_container">
				<AText tag="h1" :attributes="mainTitleSettings">{{ data.body.h1 }}</AText>
				<div class="ttl_desc">
					<AText tag="div" :attributes="mainDescSettings">{{ data.body.short_desc }}</AText>
				</div>
			</div>
			<div class="slider_wrapper">
				<div class="slider_item">
					<SliderContainer
						icon="casino"
						:title="t('ONLINE_CASINO')"
						link="/casinos/new"
						:sliderSettings="casinoSliderSettings"
					>
						<CasinoSliderCard
							v-for="(item, index) in data.body.casino_slider"
							:key="index"
							:link="item.permalink"
							:src="item.icon"
							:color="item.color"
							:rating="item.rating"
						/>
					</SliderContainer>
				</div>
				<div class="slider_item">
					<SliderContainer icon="game" :title="t('GAMES')" link="/games" :sliderSettings="gameSliderSettings">
						<SlotSliderCard
							v-for="(item, index) in data.body.games"
							:key="index"
							:link="item.permalink"
							:src="item.thumbnail"
						/>
					</SliderContainer>
				</div>
				<div class="slider_item" v-if="sliderShow">
					<SliderContainer icon="bonus" :title="t('BONUSES')" link="/bonuses" :sliderSettings="bonusSliderSettings">
						<BonusSliderCard
							v-for="(item, index) in data.body.bonuses"
							:key="index"
							:src="item.thumbnail"
							:title="item.title"
							:desc="item.short_desc"
							:value="item.bonus"
							:refLinks="item.casino.ref"
						/>
					</SliderContainer>
				</div>
				<div class="slider_item" v-if="sliderShow">
					<SliderContainer icon="news" :title="t('NEWS')" link="/news" :sliderSettings="newsSliderSettings">
						<NewsSliderCard
							v-for="(item, index) in data.body.news"
							:key="index"
							:link="item.permalink"
							:src="item.thumbnail"
							:title="item.title"
							:desc="item.create_at.slice(0, 10)"
						/>
					</SliderContainer>
				</div>
				<div class="slider_show_more_container" v-if="device === 'MOB' && !sliderShow">
					<div class="btn_wrapper">
						<AButton @onClick="sliderShowToggle" :attributes="btnSettings">
							{{ t('SHOW_MORE') }} <AImg :attributes="arrowSettings" src="/img/arrowGreen.svg" />
						</AButton>
					</div>
				</div>
			</div>
			<div class="main_container">
				<TwoContentContainer>
					<template v-slot:left>
						<AText tag="div" :attributes="mainContainerTitle">{{ t('ONLINE_CASINO') }}</AText>
						<div class="category_filter_wrapper">
							<CategoryFilter :value="data.body.casino_category" />
						</div>
						<CasinoLoop :value="data.body.casino" />
					</template>
					<template v-slot:right>
						<aside class="aside">
							<AText tag="div" :attributes="asideContainerTitle">{{ t('RECOMMENDED_BONUSES') }}</AText>
							<div class="aside_bonus_container">
								<div class="aside_bonus_wrapper" v-for="item in data.body.top_bonuses" :key="item.title">
									<BonusAsideCard
										:link="item.permalink"
										:src="item.thumbnail"
										:title="item.title"
										:desc="item.short_desc"
										:value="item.bonus"
										:min_dep="item.min_deposit"
										:wager="item.wagering"
										:refLinks="item.casino.ref"
									/>
								</div>
							</div>
						</aside>
					</template>
				</TwoContentContainer>
			</div>
		</div>
		<div class="news_loop">
			<div class="container">
				<div class="section_title_wrapper">
					<AText tag="div" :attributes="mainContainerTitle">{{ t('NEWS') }}</AText>
					<LinkWithArrow link="/news" :attributes="newsLinkSettings">
						{{ t('SHOW_MORE') }}
					</LinkWithArrow>
				</div>
				<div class="news_container">
					<NewsMainCard
						v-for="item in data.body.news.slice(0, 4)"
						:key="item.title"
						:link="item.permalink"
						:src="item.thumbnail"
						:title="item.title"
						:date="item.create_at.slice(0, 10)"
						:desc="item.short_desc"
					/>
				</div>
			</div>
		</div>
		<div class="container content_container">
			<Content :value="data.body.content" />
		</div>
		<div class="container">
			<div class="faq_container">
				<Faq :value="data.body.faq" />
			</div>
		</div>
	    -->
	</main>
</template>

<script>
import DAL_Page from '~/DAL/static_pages'
import Slider from '~/components/slider'
import SliderContainer from '~/components/slider_container'
import TwoContentContainer from '~/components/two_content_container/'
import CasinoLoop from '~/components/casino_loop'
import pageTemplate from '~/mixins/pageTemplate'
import device from '~/mixins/device'
import helper from '~/helpers/helpers'
import config from '~/config'

export default {
	name: 'main-page',
	mixins: [pageTemplate, device],
	components: {
		Slider,
		SliderContainer,
		TwoContentContainer,
		CasinoLoop
	},
	layout: 'default',
	data: () => {
		return {
			mainTitleSettings: {
				weight: 'extra-bold',
				color: 'cairo',
				size: '2x-large',
				class: 'main_page_h1'
			},
			mainDescSettings: {
				weight: 'extra-bold',
				color: 'cairo',
				size: 'medium'
			},
			bonusSliderSettings: {
				slidesToShow: 1.12,
				centerMode: true,
				autoplay: true,
				speed: 2000,
				autoplaySpeed: 2000,
				initialSlide: 0,
				infinite: true,
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
			casinoSliderSettings: {
				slidesToShow: 5,
				centerMode: false,
				autoplay: true,
				speed: 2000,
				autoplaySpeed: 2000,
				initialSlide: 0,
				infinite: true,
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 5
						}
					},
					{
						breakpoint: 1023,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 3
						}
					}
				]
			},
			gameSliderSettings: {
				slidesToShow: 5,
				centerMode: false,
				autoplay: true,
				speed: 2000,
				autoplaySpeed: 2000,
				initialSlide: 0,
				infinite: true,
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 5
						}
					},
					{
						breakpoint: 1023,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 3
						}
					}
				]
			},
			newsSliderSettings: {
				slidesToShow: 1.12,
				centerMode: true,
				autoplay: true,
				speed: 2000,
				autoplaySpeed: 2000,
				initialSlide: 0,
				infinite: true,
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
				color: 'cairo',
				size: 'x-large'
			},
			asideContainerTitle: {
				weight: 'bold',
				color: 'cairo',
				size: 'large'
			},
			newsLinkSettings: {
				size: 'medium',
				color: 'calgary',
				weight: 'semi-bold',
				decoration: 'none'
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
.slider_wrapper {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.slider_item {
	max-width: 48%;
	margin-bottom: var(--m);
}
.main_page {
	background: url('/img/hero_img.webp') top center var(--colombo);
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
.slider_wrapper {
	padding-top: 50px;
	padding-bottom: 50px;
}
.category_filter_wrapper {
	padding-top: var(--m);
	padding-bottom: var(--m);
}
.aside_bonus_container {
	margin-top: var(--s);
	display: flex;
	flex-wrap: wrap;
	gap: 15px;
}
.aside {
	padding-top: var(--xl);
}
.section_title_wrapper {
	display: flex;
	justify-content: space-between;
}
.news_loop {
	padding-top: 40px;
	padding-bottom: 60px;
	background: var(--cancun);
}
.news_container {
	display: flex;
	justify-content: space-between;
	margin-top: var(--l);
}
.main_page_h1 {
	line-height: 62px;
}
.arrow {
	transform: rotate(90deg);
	margin-left: 10px;
}
@media (max-width: 767px) {
	.main_page_h1 {
		font-size: 32px;
		line-height: 40px;
	}
	.slider_item {
		max-width: 100%;
		margin-bottom: var(--m);
		flex-grow: 1;
	}
	.slider_wrapper {
		padding-top: 30px;
	}
	.aside {
		padding-top: 30px;
	}
	.news_container {
		overflow-y: scroll;
		gap: 20px;
		margin-right: -20px;
	}
	.news_container .item:last-child {
		margin-right: 20px;
	}
	.main_page {
		padding-top: 150px;
	}
	.slider_show_more_container {
		width: 100%;
		margin-top: 20px;
		display: flex;
		justify-content: center;
	}
	.btn_wrapper {
		max-width: 272px;
		width: 272px;
		height: 52px;
	}
	.aside_bonus_wrapper {
		width: 100%;
	}
}
@media (min-width: 768px) and (max-width: 1200px) {
	.main_page_h1 {
		font-size: 40px;
	}
	.news_container {
		overflow-y: scroll;
		gap: 20px;
		margin-right: -20px;
	}
	.news_container .item:last-child {
		margin-right: 20px;
	}
	.main_page {
		padding-top: 125px;
	}
	.aside_bonus_wrapper {
		width: 48%;
	}
	.aside_bonus_container {
		justify-content: space-between;
	}
}
</style>
