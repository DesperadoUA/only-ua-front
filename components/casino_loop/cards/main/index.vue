<template>
	<article class="item" :style="`background: ${bg}`">
		<div class="wrapper">
			<div class="left">
				<div class="label" v-if="label" :class="label">
					{{ label }}
				</div>
				<div class="rating">
					<AImg :attributes="starSettings" src="/img/goldStar.svg" />
					<AText tag="span" :attributes="textSettings">{{ rating / 10 }}</AText>
					<AText tag="span" :attributes="thinTextSettings">/10</AText>
				</div>
				<div class="img_wrapper">
					<ALink :href="link">
						<AImg :attributes="imgSettings" :src="src" />
					</ALink>
				</div>
			</div>
			<div class="right" v-if="device === 'DC'">
				<div class="right_left">
					<ALink :href="link" :attributes="titleLinkSettings">
						{{ title }}
					</ALink>
					<AText tag="div" :attributes="bonusNameSettings">{{ t('WELCOME_PACKAGE') }}</AText>
					<AText tag="div" :attributes="bonusValueSettings">{{ bonus_value }}</AText>
					<AText tag="div" :attributes="bonusDescSettings">
						Min. deposit: <b class="text_color_cucuta">{{ min_dep }}</b> &middot; Wagering:
						<b class="text_color_cucuta">{{ wager }}</b>
					</AText>
					<div class="action_wrapper">
						<div class="btn_wrapper">
							<AButton :attributes="btnSettings" @onClick="refActivate(refLinks)">{{ t('GO_TO') }}</AButton>
						</div>
						<ALink :href="link" :attributes="readMoreLinkSettings"
							><AImg :attributes="searchSettings" src="/img/read_more_arrow.png" />
						</ALink>
					</div>
				</div>
				<div class="right_right">
					<div class="advantages_wrapper">
						<AText tag="div" :attributes="advantagesTextSettings" v-for="(item, index) in advantages" :key="index">{{
							item
						}}</AText>
					</div>
					<div class="payments">
						<div class="payments_icon"></div>
						<div class="payments_loop">
							<div v-for="(item, index) in payments.slice(0, 4)" :attributes="paymentLinkSettings" :key="index">
								<AImg :attributes="paymentSettings" :src="item.thumbnail" />
							</div>
						</div>
						<div class="payments_total">
							<AText tag="span">+ {{ payments.length }}</AText>
						</div>
					</div>
					<div class="providers">
						<div class="providers_icon"></div>
						<div class="providers_loop">
							<div v-for="(item, index) in vendors.slice(0, 4)" :attributes="providerLinkSettings" :key="index">
								<AImg :attributes="providerSettings" :src="item.thumbnail" />
							</div>
						</div>
						<div class="providers_total">
							<AText tag="span">+ {{ vendors.length }}</AText>
						</div>
					</div>
				</div>
			</div>
			<div class="right" v-else>
				<div class="wrapper_title">
					<ALink :href="link" :attributes="titleLinkSettings">
						{{ title }}
					</ALink>
				</div>
				<AText tag="div" :attributes="bonusNameSettings">{{ t('WELCOME_PACKAGE') }}</AText>
				<AText tag="div" :attributes="bonusValueSettings">{{ bonus_value }}</AText>
				<AText tag="div" :attributes="bonusDescSettings"
					>Min. deposit: {{ min_dep }} &middot; Wagering: {{ wager }}</AText
				>
				<div class="providers">
					<div class="providers_icon"></div>
					<div class="providers_loop">
						<div v-for="(item, index) in vendors.slice(0, 4)" :attributes="providerLinkSettings" :key="index">
							<AImg :attributes="providerSettings" :src="item.thumbnail" />
						</div>
					</div>
					<div class="providers_total">
						<AText tag="span">+ {{ vendors.length }}</AText>
					</div>
				</div>
				<div class="details_wrapper">
					<div class="details_btn" :class="{ active: detailActive }" @click="onDetailActive">{{ t('DETAILS') }}</div>
				</div>
				<div class="advantages_wrapper" v-if="detailActive">
					<AText tag="div" :attributes="advantagesTextSettings" v-for="(item, index) in advantages" :key="index">{{
						item
					}}</AText>
				</div>
				<div class="action_wrapper">
					<div class="btn_wrapper">
						<AButton :attributes="btnSettings" @onClick="refActivate(refLinks)">{{ t('GO_TO') }}</AButton>
					</div>
					<ALink :href="link" :attributes="readMoreLinkSettings"
						><AImg :attributes="searchSettings" src="/img/read_more_arrow.png" />
					</ALink>
				</div>
			</div>
		</div>
	</article>
</template>
<script>
import ref from '~/mixins/ref'
import components from '~/mixins/components'
export default {
	name: 'casino_main_card',
	mixins: [components, ref],
	data: () => {
		return {
			imgSettings: {
				width: '210px',
				height: '92px',
				class: 'object_fit_cover'
			},
			starSettings: {
				width: '14px',
				height: '14px',
				class: ' m_r_xs'
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
			searchSettings: {
				width: '20px',
				height: '20px'
			},
			titleLinkSettings: {
				color: 'cucuta',
				size: 'large',
				weight: 'bold',
				decoration: 'none'
			},
			bonusNameSettings: {
				color: 'cleveland',
				size: 'small',
				weight: 'regular',
				class: 'bonus_name'
			},
			bonusValueSettings: {
				color: 'cucuta',
				size: 'large',
				weight: 'bold',
				class: 'bonus_value'
			},
			bonusDescSettings: {
				color: 'cleveland',
				size: 'small',
				weight: 'regular',
				class: 'bonus_desc'
			},
			btnSettings: {
				bg: 'calgary',
				color: 'cleveland',
				borderRadius: 's',
				weight: 'semi-bold'
			},
			readMoreLinkSettings: {
				bg: 'calgary',
				class: 'read_more'
			},
			advantagesTextSettings: {
				color: 'cleveland',
				size: 'small',
				class: 'advantages'
			},
			providerLinkSettings: {
				class: 'provider_link'
			},
			paymentLinkSettings: {
				class: 'payment_link'
			},
			providerSettings: {
				class: 'provider_img',
				width: '54px',
				height: '34px'
			},
			paymentSettings: {
				class: 'payment_img',
				width: '54px',
				height: '34px'
			},
			detailActive: false
		}
	},
	props: {
		link: {
			type: String,
			default() {
				return '/game'
			}
		},
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
		src: {
			type: String,
			default() {
				return '/img/noImages.png'
			}
		},
		bonus_value: {
			type: String,
			default() {
				return '125 000 ₴ + 500 FS'
			}
		},
		bg: {
			type: String,
			default() {
				return '#D21037'
			}
		},
		min_dep: {
			type: String,
			default() {
				return '$30'
			}
		},
		wager: {
			type: String,
			default() {
				return '40x'
			}
		},
		label: {
			type: String,
			default() {
				return ''
			}
		},
		advantages: {
			type: Array,
			default() {
				return []
			}
		},
		vendors: {
			type: Array,
			default() {
				return []
			}
		},
		payments: {
			type: Array,
			default() {
				return []
			}
		},
		rating: {
			type: Number,
			default() {
				return 0
			}
		}
	},
	methods: {
		onDetailActive() {
			this.detailActive = !this.detailActive
		}
	}
}
</script>
<style scoped>
.item {
	width: 820px;
	height: 206px;
	padding: var(--xs);
	border-radius: var(--m);
}
.img_wrapper {
	width: 210px;
	height: 92px;
}
.desc {
	font-size: 10px;
	margin-top: var(--xs);
}
.date {
	font-size: 10px;
	margin-top: var(--xs);
}
.wrapper {
	display: flex;
	height: 100%;
}
.left {
	width: 210px;
	min-width: 210px;
	display: flex;
	height: 100%;
	align-items: center;
	position: relative;
}
.right {
	display: flex;
	flex-grow: 1;
	border: 1px solid #ced2e2;
	background: linear-gradient(270deg, #fff 0%, rgba(255, 255, 255, 0.9) 100%);
	border-radius: var(--m);
	padding: var(--m);
}
.bonus_name {
	margin-top: var(--s);
}
.btn_wrapper {
	width: 206px;
	height: 40px;
}
.action_wrapper {
	display: flex;
	margin-top: var(--m);
}
.read_more {
	display: flex;
	width: 40px;
	height: 40px;
	background: rgba(245, 246, 250, 1);
	border-radius: var(--s);
	margin-left: var(--s);
	align-items: center;
	justify-content: center;
	border: 1px solid rgba(206, 210, 226, 1);
}
.right_right {
	flex-grow: 1;
	padding-left: var(--m);
}
.advantages {
	margin-bottom: 5px;
	position: relative;
	padding-left: 25px;
}
.advantages::before {
	content: '';
	width: 18px;
	height: 18px;
	background: url('/img/success.svg');
	background-position: center;
	background-repeat: no-repeat;
	position: absolute;
	top: 0;
	left: 0;
}
.payments {
	margin-bottom: 10px;
}
.providers,
.payments {
	display: flex;
	justify-content: space-between;
}
.providers_icon,
.payments_icon {
	height: 34px;
	width: 18px;
	background: url('/img/vendor_icon.png');
	background-position: center;
	background-repeat: no-repeat;
}
.payments_icon {
	background: url('/img/payment_icon.png');
	background-position: center;
	background-repeat: no-repeat;
}
.providers_total,
.payments_total {
	height: 34px;
	width: 34px;
	background: rgba(245, 246, 250, 1);
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: var(--s);
	border: 1px solid rgba(206, 210, 226, 1);
	font-size: 10px;
	color: rgba(29, 33, 70, 1);
}
.providers_loop,
.payments_loop {
	flex-grow: 1;
	display: flex;
	justify-content: space-around;
}
.provider_link,
.payment_link {
	display: inline-block;
	width: 54px;
	height: 34px;
}
.provider_img,
.payment_img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: var(--s);
}
.advantages_wrapper {
	overflow: hidden;
	padding-bottom: 5px;
}
.rating {
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	z-index: 2;
	background: var(--cardiff);
	width: 75px;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: var(--l);
}
.rating_value {
	transform: translateY(1px);
}
.rating_total_value {
	font-size: 10px;
	transform: translateY(1px);
}
.label {
	width: 63px;
	height: 30px;
	border-radius: var(--l);
	position: absolute;
	left: 0;
	top: 0;
	font-size: 10px;
	text-transform: uppercase;
	font-weight: 500;
	color: var(--cairo);
	display: flex;
	align-items: center;
	justify-content: center;
}
.label.trusted {
	background: var(--trusted-color);
}
.label.new {
	background: var(--new-color);
}
.label.popular {
	background: var(--popular-color);
}
.label.best {
	background: var(--best-color);
}
@media (max-width: 767px) {
	.item {
		width: 100%;
		height: auto;
	}
	.wrapper {
		flex-wrap: wrap;
		height: auto;
	}
	.left {
		width: 100%;
		justify-content: center;
	}
	.right {
		width: 100%;
		flex-wrap: wrap;
	}
	.rating {
		left: 100%;
		transform: translateX(-100%);
	}
	.wrapper_title {
		display: flex;
		justify-content: center;
		width: 100%;
	}
	.bonus_name,
	.bonus_value,
	.bonus_desc {
		width: 100%;
		text-align: center;
	}
	.bonus_desc {
		margin-top: 10px;
	}
	.providers {
		width: 100%;
		margin: 0 auto;
		margin-top: 20px;
	}
	.details_wrapper {
		display: flex;
		justify-content: center;
		margin-top: 20px;
		width: 100%;
	}
	.details_btn {
		font-size: 14px;
		color: var(--cucuta);
		cursor: pointer;
		position: relative;
		padding-right: 24px;
	}
	.details_btn::after {
		content: '';
		width: 18px;
		height: 18px;
		background: url('/img/white_arrow_details.png') center center no-repeat;
		position: absolute;
		right: 0px;
		top: 50%;
		transform: translateY(-50%);
	}
	.details_btn.active::after {
		transform: rotate(180deg) translateY(50%);
	}
	.advantages_wrapper {
		height: auto;
		width: 100%;
		margin-top: 10px;
		padding-bottom: 0px;
	}
	.advantages {
		margin-bottom: 15px;
	}
	.action_wrapper {
		width: 100%;
		justify-content: center;
	}
	.label {
		width: 85px;
	}
}
@media (min-width: 768px) and (max-width: 1200px) {
	.label {
		width: 85px;
	}
	.item {
		width: 48%;
		height: auto;
	}
	.wrapper {
		flex-wrap: wrap;
		height: auto;
	}
	.left {
		width: 100%;
		justify-content: center;
	}
	.right {
		width: 100%;
		flex-wrap: wrap;
	}
	.rating {
		left: 100%;
		transform: translateX(-100%);
	}
	.wrapper_title {
		display: flex;
		justify-content: center;
		width: 100%;
	}
	.bonus_name,
	.bonus_value,
	.bonus_desc {
		width: 100%;
		text-align: center;
	}
	.bonus_desc {
		margin-top: 10px;
	}
	.providers {
		width: 100%;
		margin: 0 auto;
		margin-top: 20px;
	}
	.details_wrapper {
		display: flex;
		justify-content: center;
		margin-top: 20px;
		width: 100%;
	}
	.details_btn {
		font-size: 14px;
		color: var(--cairo);
		cursor: pointer;
		position: relative;
		padding-right: 24px;
	}
	.details_btn::after {
		content: '';
		width: 18px;
		height: 18px;
		background: url('/img/white_arrow_details.png') center center no-repeat;
		position: absolute;
		right: 0px;
		top: 50%;
		transform: translateY(-50%);
	}
	.details_btn.active::after {
		transform: rotate(180deg) translateY(50%);
	}
	.advantages_wrapper {
		height: auto;
		width: 100%;
		margin-top: 10px;
		padding-bottom: 0px;
	}
	.advantages {
		margin-bottom: 15px;
	}
	.action_wrapper {
		width: 100%;
		justify-content: center;
	}
}
</style>
