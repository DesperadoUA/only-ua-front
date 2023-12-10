<template>
	<div class="root">
		<div class="top" @click="onClick(link)">
			<div class="ttl" :class="icon">
				<AText :attributes="ttlSettings">{{ title }}</AText>
			</div>
			<LinkWithArrow :link="link" :attributes="linkSettings">
				{{ t('SHOW_MORE') }}
			</LinkWithArrow>
		</div>
		<div class="bottom">
			<Slider :settings="sliderSettings">
				<slot />
			</Slider>
		</div>
	</div>
</template>
<script>
import Slider from '~/components/slider'
import LinkWithArrow from '~/components/ui/atoms/links/link_with_arrow'
import components from '~/mixins/components'
export default {
	name: 'slider_container',
	components: { Slider, LinkWithArrow },
	mixins: [components],
	data: () => {
		return {
			ttlSettings: {
				size: 'x-large',
				color: 'cairo',
				weight: 'extra-bold',
				class: 'slider_head-ttl'
			},
			linkSettings: {
				size: 'medium',
				color: 'calgary',
				weight: 'semi-bold',
				decoration: 'none',
				class: 'slider_head-link'
			}
		}
	},
	props: {
		icon: {
			type: String,
			default() {
				return 'casino_good'
			}
		},
		link: {
			type: String,
			default() {
				return '#'
			}
		},
		title: {
			type: String,
			default() {
				return 'Онлайн казино'
			}
		},
		sliderSettings: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	methods: {
		onClick(link) {
			this.$router.push(link)
		}
	}
}
</script>
<style>
@media (max-width: 767px) {
	.slider_head-ttl {
		font-size: 16px;
	}
	.slider_head-link {
		display: none;
	}
}
@media (min-width: 768px) and (max-width: 1200px) {
	.slider_head-ttl {
		font-size: 16px;
	}
	.slider_head-link {
		display: none;
	}
}
</style>
<style scoped>
.root {
	width: 100%;
	max-width: 585px;
	border: 1px solid #886dff;
	background: rgba(36, 0, 140);
	border-radius: 14px;
	padding-left: 24px;
	padding-top: 14px;
	padding-bottom: 24px;
}
.top {
	display: flex;
	justify-content: space-between;
	padding-right: 12px;
	margin-bottom: 8px;
	height: 62px;
}
.ttl {
	font-family: 'Unbounded';
	position: relative;
	padding-left: 32px;
}
.casino::before {
	content: '';
	width: 24px;
	height: 24px;
	position: absolute;
	top: 10;
	left: 0px;
	background: url('/img/casinoIcon.svg');
}
.game::before {
	content: '';
	width: 24px;
	height: 24px;
	position: absolute;
	top: 10;
	left: 0px;
	background: url('/img/gameIcon.svg');
}
.bonus::before {
	content: '';
	width: 24px;
	height: 24px;
	position: absolute;
	top: 10;
	left: 0px;
	background: url('/img/bonusIcon.svg');
}
.news::before {
	content: '';
	width: 24px;
	height: 24px;
	position: absolute;
	top: 10;
	left: 0px;
	background: url('/img/newsIcon.svg');
}
.ttl {
	display: flex;
	align-items: center;
}
@media (max-width: 767px) {
	.root {
		padding: 10px;
	}
	.top {
		height: 40px;
		padding-right: 0px;
		margin-bottom: 0px;
	}
}
@media (min-width: 768px) and (max-width: 1200px) {
	.root {
		padding: 10px;
	}
	.top {
		height: 40px;
		padding-right: 0px;
		margin-bottom: 0px;
	}
}
</style>
