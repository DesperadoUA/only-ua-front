<template>
		<main class="games_page">
			<div class="container">
				<AText tag="h1" :attributes="titleSettings">{{ data.body.h1 }}</AText>
			</div>
			<div class="container container_loop" v-if="data.body.games.length">
				<SlotLoop :value="data.body.games" />
			</div>
			<div class="container content_container" v-if="data.body.content">
				<Content :value="data.body.content" />
			</div>
		</main>
</template>

<script>
import DAL_Page from '~/DAL/static_pages'
import pageTemplate from '~/mixins/pageTemplate'
import GameMainCard from '~/components/slot_loop/cards/main'
import SlotLoop from '~/components/slot_loop'
import helper from '~/helpers/helpers'
import device from '~/mixins/device'

export default {
	name: 'games-page',
	mixins: [pageTemplate, device],
	components: {
		GameMainCard,
		SlotLoop
	},
	layout: 'default',
	data: () => {
		return {
			titleSettings: {
				color: 'cairo',
				size: 'x-large',
				weight: 'bold',
				transform: 'uppercase',
				class: 'title'
			}
		}
	},
	async asyncData({ store, route }) {
		const request = {
			url: 'games'
		}
		const response = await DAL_Page.getData(request)
		const data = helper.headDataMixin(response.data, route)
		return { data }
	}
}
</script>
<style scoped>
.games_page {
	background: url('/img/casinoPageBg.jpg') top center var(--colombo);
	background-repeat: no-repeat;
	padding-top: 165px;
}
.title {
	margin-bottom: var(--m);
}
.right {
	display: flex;
	gap: 12px;
	flex-wrap: wrap;
}
.container_game_week {
	display: flex;
	gap: 12px;
	padding-left: 0px;
	padding-right: 0px;
}
.container_loop {
	margin-top: 12px;
	padding-left: 0px;
	padding-right: 0px;
}
.container_providers {
	padding: var(--s) 0px 21px 0px;
	padding-left: 0px;
	padding-right: 0px;
	overflow: hidden;
}
@media (max-width: 767px) {
	.container_providers {
		padding-left: 15px;
		overflow-x: scroll;
	}
	.container_game_week {
		flex-wrap: wrap;
		padding-left: 15px;
		padding-right: 15px;
	}
	.left {
		width: 100%;
		margin-bottom: 20px;
		justify-content: center;
		display: flex;
	}
	.right {
		justify-content: space-between;
	}
	.container_loop {
		padding-left: 15px;
		padding-right: 15px;
	}
}

@media (min-width: 768px) and (max-width: 1200px) {
	.container_game_week {
		gap: 8px;
	}
	.left {
		min-width: 50%;
	}
	.right {
		justify-content: space-between;
	}
}
</style>
