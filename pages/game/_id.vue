<template>
	<div>
		<main class="game_page">
			<div class="container container_top_game">
				<SlotCard
					:title="data.body.title"
					:src="data.body.thumbnail"
					:rtp="data.body.rtp"
					:min_bid="data.body.min_bid"
					:line="data.body.lines"
					:scheme="data.body.scheme"
					:demo="data.body.iframe ? true : false"
					:vendor_title="data.body.vendor.length ? data.body.vendor[0].title : ''"
					:casinos="data.body.casinos"
					:refLinks="data.body.ref"
					@onClickDemoActivate="onClickDemoActivate"
				/>
			</div>
			<div class="symbols" v-if="data.body.symbols.length">
				<div class="container">
					<AText tag="div" :attributes="symbolTitleSettings">{{ t('SLOT_SYMBOLS') }}</AText>
					<SlotSymbols :posts="data.body.symbols" />
				</div>
			</div>
			<div class="screenshots" v-if="data.body.screenshots.length">
				<div class="container">
					<AText tag="div" :attributes="symbolTitleSettings">{{ t('SCREENSHOTS') }}</AText>
					<SlotScreenshots :posts="data.body.screenshots" />
				</div>
			</div>
			<div class="container content_container" v-if="data.body.content">
				<Content :value="data.body.content" />
			</div>
			<div class="container" v-if="data.body.faq.length">
				<div class="faq_container">
					<Faq :value="data.body.faq" />
				</div>
			</div>
			<SlotPopUp
				v-if="isShowDemo"
				:src="data.body.iframe"
				:title="data.body.title"
				@onClickDemoClose="onClickDemoClose"
			/>
		</main>
	</div>
</template>

<script>
import DAL_Page from '~/DAL/static_pages'
import pageTemplate from '~/mixins/pageTemplate'
import SlotCard from '~/components/slot_card'
import SlotSymbols from '~/components/slot_symbols'
import SlotScreenshots from '~/components/slot_screenshots'
import Faq from '~/components/faq'
import SlotPopUp from '~/components/slot_popup'
import helper from '~/helpers/helpers'

export default {
	name: 'game_single',
	mixins: [pageTemplate],
	components: {
		SlotCard,
		SlotSymbols,
		SlotScreenshots,
		Faq,
		SlotPopUp
	},
	layout: 'default',
	data: () => {
		return {
			symbolTitleSettings: {
				size: 'x-large',
				color: 'cairo',
				weight: 'bold',
				class: 'title'
			},
			isShowDemo: false
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
	},
	methods: {
		onClickDemoActivate() {
			this.isShowDemo = true
		},
		onClickDemoClose() {
			this.isShowDemo = false
		}
	}
}
</script>
<style scoped>
.game_page {
	background: url('/img/casinoPageBg.jpg') top center var(--colombo);
	background-repeat: no-repeat;
	padding-top: 165px;
}
.container_top_game {
	padding-bottom: 80px;
}
.symbols {
	background: var(--cucuta);
	padding-top: 50px;
	padding-bottom: 60px;
}
.screenshots {
	padding-top: 50px;
	padding-bottom: 60px;
}
.title {
	margin-bottom: 24px;
}
@media (max-width: 767px) {
	.symbols,
	.screenshots {
		padding-top: 30px;
		padding-bottom: 30px;
	}
	.container_top_game {
		padding-bottom: 30px;
	}
}
</style>
