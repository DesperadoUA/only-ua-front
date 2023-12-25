<template>
	<div class="casino_details">
		<div class="row">
			<div class="left">
				<AText :attributes="textProvidersSettings">{{ t('VENDORS') }}</AText>
			</div>
			<div class="right">
				<AText v-for="(item, index) in vendors" :attributes="textProviderItemSettings" :key="index">
					{{ item.title }}
				</AText>
			</div>
		</div>
		<div class="row">
			<div class="left">
				<AText :attributes="textDepositMethodsSettings">{{ t('DEPOSIT_METHODS') }}</AText>
			</div>
			<div class="right">
				<AText :attributes="textPayoutSettings" v-for="(item, index) in payments" :key="index">
					{{ item.title }}
				</AText>
			</div>
		</div>
		<div class="row">
			<div class="left">
				<AText :attributes="textWithoutMethodsSettings">{{ t('PAYMENTS_OPTIONS') }}</AText>
			</div>
			<div class="right">
				<AText :attributes="textPayoutSettings" v-for="(item, index) in payments" :key="index">
					{{ item.title }}
				</AText>
			</div>
		</div>
		<div class="row">
			<div class="left">
				<AText :attributes="textGameCurrencySettings">{{ t('GAME_CURRENCY') }}</AText>
			</div>
			<div class="right">
				<AText :attributes="textItemSettings" v-for="(item, index) in currencies" :key="index">
					{{ item.title }}
				</AText>
			</div>
		</div>
		<div class="row">
			<div class="left">
				<AText :attributes="textLangSettings">{{ t('LANG') }}</AText>
			</div>
			<div class="right">
				<AText :attributes="textItemSettings" v-for="(item, index) in languages" :key="index">
					{{ item.title }}
				</AText>
			</div>
		</div>
	</div>
</template>
<script>
import components from '~/mixins/components'
export default {
	name: 'casino_detail',
	mixins: [components],
	props: {
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
		currencies: {
			type: Array,
			default() {
				return []
			}
		},
		languages: {
			type: Array,
			default() {
				return []
			}
		}
	},
	data() {
		return {
			textProvidersSettings: {
				color: 'cucuta',
				size: 'small',
				weight: 'medium',
				class: 'provider'
			},
			textDepositMethodsSettings: {
				color: 'cucuta',
				size: 'small',
				weight: 'medium',
				class: 'deposit_methods'
			},
			textWithoutMethodsSettings: {
				color: 'cucuta',
				size: 'small',
				weight: 'medium',
				class: 'without_methods'
			},
			textGameCurrencySettings: {
				color: 'cucuta',
				size: 'small',
				weight: 'medium',
				class: 'game_currency'
			},
			textLangSettings: {
				color: 'cucuta',
				size: 'small',
				weight: 'medium',
				class: 'lang'
			},
			imgSettings: {
				width: '26px',
				height: '26px',
				class: 'logo'
			},
			imgSettingsFlag: {
				width: '19px',
				height: '18px',
				class: 'flag_icon'
			},
			textProviderItemSettings: {
				class: 'item_provider',
				color: 'cucuta',
				size: 'small',
				weight: 'regular',
				decoration: 'none'
			},
			textPayoutSettings: {
				class: 'item_payout',
				color: 'cucuta',
				weight: 'regular'
			},
			textItemSettings: {
				class: 'item',
				color: 'cucuta',
				weight: 'regular'
			}
		}
	}
}
</script>

<style scoped>
.flag_icon {
	margin-right: 5px;
	display: block;
}
.row {
	display: flex;
	padding-bottom: 15px;
	padding-top: 20px;
	border-bottom: 1px solid #ced2e2;
}
.left {
	width: 200px;
	min-width: 200px;
	padding-right: 10px;
}
.right {
	flex-grow: 1;
	display: flex;
	flex-wrap: wrap;
	gap: 5px;
}
.provider,
.deposit_methods,
.without_methods,
.game_currency,
.lang {
	padding-left: 25px;
	position: relative;
	font-size: 12px;
	text-transform: uppercase;
	font-weight: 600;
	top: 6px;
}
.provider::before,
.deposit_methods::before,
.without_methods::before,
.game_currency::before,
.lang::before {
	content: '';
	width: 20px;
	height: 20px;
	position: absolute;
	top: 50%;
	left: 0px;
	transform: translateY(-50%);
	background: url('/img/providers.png') no-repeat;
}
.deposit_methods::before {
	background: url('/img/deposit_methods.png') no-repeat;
}
.without_methods::before {
	background: url('/img/without.png') no-repeat;
}
.game_currency::before {
	background: url('/img/game_currency.png') no-repeat;
}
.lang::before {
	background: url('/img/lang.png') no-repeat;
}
.item_provider {
	display: flex;
	align-items: center;
	padding: 10px 12px;
	border-radius: var(--s);
	background: rgba(29, 33, 70, 0.06);
	white-space: nowrap;
	font-size: 12px;
}
.logo {
	display: block;
	margin-right: 5px;
}
.item_payout {
	font-size: 12px;
	display: flex;
	align-items: center;
	padding: 10px 12px;
	border: 1px solid rgba(29, 33, 70, 0.1);
	border-radius: 10px;
}
.item {
	font-size: 12px;
	display: flex;
	align-items: center;
	padding: 10px 12px;
	background: rgba(29, 33, 70, 0.06);
	border-radius: 10px;
}
@media (max-width: 767px) {
	.row {
		flex-wrap: wrap;
	}
	.left {
		width: 100%;
		margin-bottom: 20px;
	}
	.right {
		width: 100%;
	}
}
</style>
