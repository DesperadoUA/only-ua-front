<template>
	<article class="item" @click="refActivate(refLinks)">
		<div class="top" :style="`background: ${bg}`">
			<div class="label" v-if="label" :class="label">
				{{ label }}
			</div>
			<div class="rating">
				<AImg :attributes="starSettings" src="/img/goldStar.svg" />
				<AText tag="span" :attributes="textSettings">{{ rating / 10 }}</AText>
				<AText tag="span" :attributes="thinTextSettings">/10</AText>
			</div>
			<AImg :attributes="imgSettings" :src="src" />
		</div>
		<div class="bottom">
			<AText tag="div" :attributes="titleSettings">{{ title }}</AText>
			<AText tag="div" :attributes="valueTextSettings">{{ value }}</AText>
			<div class="btn_wrapper">
				<AButton :attributes="btnSettings" @onClick="refActivate(refLinks)">{{ t('GO_TO') }}</AButton>
			</div>
			<AText tag="div" :attributes="descTextSettings">{{ desc }}</AText>
		</div>
	</article>
</template>
<script>
import ref from '~/mixins/ref'
import components from '~/mixins/components'
export default {
	name: 'bonus_card',
	mixins: [ref, components],
	data: () => {
		return {
			imgSettings: {
				width: '210px',
				height: '92px'
			},
			starSettings: {
				width: '14px',
				height: '14px',
				class: ' m_r_xs'
			},
			titleSettings: {
				color: 'cairo',
				size: 'small',
				weight: 'bold',
				decoration: 'none',
				align: 'center',
				class: 'title'
			},
			descTextSettings: {
				color: 'cordoba',
				size: 'small',
				weight: 'regular',
				class: 'desc',
				align: 'center',
				decoration: 'underline'
			},
			valueTextSettings: {
				color: 'cucuta',
				size: 'large',
				weight: 'bold',
				transform: 'uppercase',
				align: 'center',
				class: 'bonus_card_value'
			},
			textSettings: {
				color: 'cairo',
				size: 'small',
				bold: 'semi-bold',
				class: 'rating_value'
			},
			thinTextSettings: {
				color: 'cordoba',
				size: 'small',
				bold: 'thin',
				class: 'rating_total_value'
			},
			btnSettings: {
				bg: 'calgary',
				color: 'cochin',
				borderRadius: 's',
				weight: 'semi-bold'
			}
		}
	},
	props: {
		title: {
			type: String,
			default() {
				return ''
			}
		},
		desc: {
			type: String,
			default() {
				return ''
			}
		},
		value: {
			type: String,
			default() {
				return ''
			}
		},
		src: {
			type: String,
			default() {
				return '/img/casino-logo.png'
			}
		},
		bg: {
			type: String,
			default() {
				return '#1f1c33'
			}
		},
		label: {
			type: String,
			default() {
				return 'Popular'
			}
		},
		rating: {
			type: Number,
			default() {
				return 0
			}
		}
	}
}
</script>
<style scoped>
.item {
	width: 210px;
	position: relative;
	max-width: 210px;
	margin-bottom: -30px;
	height: 240px;
	margin-bottom: 25px;
	cursor: pointer;
}
.top {
	border-radius: 8px;
	background: #1f1c33;
	height: 165px;
	box-shadow: 0px 6px 10px 0px rgba(158, 167, 200, 0.1);
}
.popular {
	background: var(--popular-color);
}
.best {
	background: var(--best-color);
}
.new {
	background: var(--new-color);
}
.trusted {
	background: var(--trusted-color);
}
.label {
	position: absolute;
	width: 62px;
	height: 22px;
	text-transform: uppercase;
	color: var(--cairo);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 10px;
	top: 2px;
	left: 2px;
	border-radius: 8px;
	font-family: 'Work Sans';
}
.rating {
	position: absolute;
	top: 2px;
	right: 2px;
	z-index: 2;
	width: 70px;
	height: 22px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 8px;
	font-family: 'Work Sans';
	background: rgba(0, 0, 0, 0.26);
	backdrop-filter: blur(5px);
	color: var(--cairo);
}
.rating_value {
	transform: translateY(1px);
}
.rating_total_value {
	font-size: 10px;
	transform: translateY(1px);
}
.bottom {
	width: calc(100% - 4px);
	height: 150px;
	border: 1px solid rgba(206, 210, 226, 1);
	border-radius: 8px;
	background: #fff;
	top: -75px;
	position: relative;
	margin: 0 auto;
}
.title {
	color: rgba(104, 106, 119, 1);
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	margin-top: 12px;
}
.btn_wrapper {
	width: 170px;
	height: 38px;
	margin: 0 auto;
	margin-top: 10px;
}
.desc {
	margin-top: 5px;
}
</style>
