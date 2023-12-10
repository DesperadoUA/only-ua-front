<template>
	<main class="casino_page">
		<div class="container">
			<AText tag="h1" :attributes="titleSettings">{{ data.body.h1 }}</AText>
			<div class="main_container">
				<TwoContentContainer>
					<template v-slot:left>
						<div class="left_wrapper">
							<div class="casino_card_container">
								<CasinoCard
									:src="data.body.thumbnail"
									:bonus_value="data.body.bonus_value"
									:title="data.body.title"
									:rating="data.body.rating"
									:bg="data.body.color"
									:label="data.body.label"
									:refLinks="data.body.ref"
								/>
							</div>
							<div class="casino_characters_container">
								<AText tag="div" :attributes="titleCharactersSettings">{{ t('CASINO_CHARACTERS') }}</AText>
								<CasinoDetails
									:vendors="data.body.vendors"
									:payments="data.body.payments"
									:currencies="data.body.currencies"
									:languages="data.body.languages"
								/>
							</div>
							<div class="casino_slot_container" v-if="data.body.games.length">
								<AText tag="div" :attributes="titleSlotsSettings"
									>{{ t('BEST_GAMES_IN_CASINO') }} {{ data.body.title }}</AText
								>
								<div class="slot_loop">
									<GameMainCard
										v-for="(item, index) in gamesLoop"
										:key="index"
										:link="item.permalink"
										:src="item.thumbnail"
										size="middle"
									/>
								</div>
							</div>
						</div>
					</template>
					<template v-slot:right>
						<aside class="aside">
							<AText tag="div" :attributes="asideContainerTitle">{{ t('RECOMMENDED_BONUSES') }}</AText>
							<div class="aside_bonus_container">
								<div class="aside_bonus_wrapper" v-for="(item, index) in data.body.bonuses" :key="index">
									<BonusAsideCard
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
		<section class="content_wrapper">
			<div class="container">
				<TabContent :value="tabContent" />
			</div>
		</section>
	</main>
</template>

<script>
import DAL_Page from '~/DAL/static_pages'
import pageTemplate from '~/mixins/pageTemplate'
import TwoContentContainer from '~/components/two_content_container/'
import BonusAsideCard from '~/components/bonus_loop/cards/aside_card'
import CasinoCard from '~/components/casino_card'
import CasinoDetails from '~/components/casino_detail'
import GameMainCard from '~/components/slot_loop/cards/main'
import TabContent from '~/components/content/tab_content'
import helper from '~/helpers/helpers'
import device from '~/mixins/device'
import { getErrorPageObj } from '~/utils'

export default {
	name: 'casino_single',
	mixins: [pageTemplate, device],
	components: {
		BonusAsideCard,
		TwoContentContainer,
		CasinoCard,
		CasinoDetails,
		GameMainCard,
		TabContent
	},
	layout: 'default',
	data: () => {
		return {
			titleSettings: {
				color: 'cairo',
				weight: 'bold',
				class: 'title'
			},
			titleCharactersSettings: {
				color: 'cairo',
				weight: 'bold',
				size: 'x-large',
				class: 'detail_title'
			},
			titleSlotsSettings: {
				color: 'cairo',
				weight: 'regular',
				class: 'slots_title'
			},
			asideContainerTitle: {
				weight: 'bold',
				color: 'cairo',
				size: 'large'
			}
		}
	},
	computed: {
		tabContent() {
			const data = [
				{ title: this.t('ANALYSIS'), content: this.data.body.content_analysis },
				{ title: this.t('BONUSES'), content: this.data.body.content_bonuses },
				{ title: this.t('REVIEWS'), content: this.data.body.content_reviews },
				{ title: this.t('GAMES'), content: this.data.body.content_games }
			]
			return data
		},
		gamesLoop() {
			const config = {
				DC: 12,
				MOB: 12,
				TABLET: 10
			}
			return this.data.body.games.slice(0, config[this.device])
		}
	},
	async asyncData({ route, error, store }) {
		const request = {
			type: 'casino',
			url: route.params.id
		}
		const response = await DAL_Page.getData(request)
		if (response.data.status === '404') {
			error(getErrorPageObj())
		} else {
			const body = response.data
			const data = body
			data.body = data.body
			data.body.headerLinks = helper.hreflang(data.body.hreflang)
			store.dispatch('options/setHrefLang', data.body.headerLinks)
			return { data }
		}
	}
}
</script>
<style scoped>
.casino_page {
	background: url('/img/mobHeroBg.webp') top center rgba(16, 13, 36, 1);
	background-repeat: no-repeat;
	padding-top: 165px;
}
.title {
	font-size: 32px;
}
.aside {
	padding-top: 10px;
}
.aside_bonus_container {
	margin-top: 14px;
	display: flex;
	flex-wrap: wrap;
	gap: 15px;
}
.casino_card_container {
	margin-top: var(--l);
}
.casino_characters_container,
.casino_slot_container {
	border: 1px solid rgba(255, 255, 255, 0.15);
	background: rgba(27, 24, 49, 1);
	margin-top: 40px;
	border-radius: 20px;
	padding: 32px 22px;
}
.left_wrapper {
	max-width: 820px;
}
.slots_title {
	font-size: 22px;
}
.slot_loop {
	display: flex;
	gap: 12px;
	flex-wrap: wrap;
	margin-top: 24px;
	justify-content: space-between;
}
.content_wrapper {
	background: rgba(8, 5, 26, 1);
	padding: 60px 0px;
}
@media (max-width: 767px) {
	.title {
		font-size: 24px;
	}
	.detail_title {
		font-size: 17px;
	}
	.slot_loop {
		gap: 10px;
	}
	.casino_page {
		padding-top: 150px;
	}
	.aside_bonus_wrapper {
		width: 100%;
	}
}
@media (min-width: 768px) and (max-width: 1200px) {
	.aside_bonus_wrapper {
		width: 48%;
	}
	.casino_slot_container {
		margin-bottom: 25px;
	}
	.aside_bonus_wrapper {
		width: 48%;
	}
}
</style>
