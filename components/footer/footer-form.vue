<template>
	<div class="form-wrapper">
		<AText :attributes="titleSettings">{{ t('SUBSCRIBE_NEWSLETTER') }}</AText>
		<div class="form_wrapper">
			<input :placeholder="t('YOUR_EMAIL')" class="input" />
			<div class="btn_wrapper">
				<AButton :attributes="btnSettings">{{ t('SIGN_UP') }}</AButton>
			</div>
		</div>
		<div class="form_rules">
			<div class="rules_check_box"></div>
			<AText :attributes="formRulesSettings">{{ t('SUBSCRIBE_RULES') }}</AText>
		</div>
	</div>
</template>

<script>
import components from '~/mixins/components'
export default {
	name: 'footer-form',
	mixins: [components],
	data: () => {
		return {
			btnSettings: {
				bg: 'calgary', color: 'cochin', borderRadius: 's', weight: 'semi-bold'
			},
			titleSettings: {
				color: 'cairo',
				weight: 'bold',
				size: 'x-large',
				class: 'form_title'
			},
			formRulesSettings: {
				color: 'cordoba', weight: 'regular', size: 'small'
			}
		}
	}
}
</script>
<style scoped>
.btn_wrapper {
	width: 168px;
	height: 40px;
}
.form_wrapper {
	margin-top: var(--s);
	display: flex;
	background: rgba(255, 255, 255, 0.25);
	box-sizing: border-box;
	padding: 1px;
	border-radius: var(--s);
}
.input {
	flex-grow: 1;
	height: 40px;
	background: transparent;
	border: none;
	padding-left: 15px;
	padding-right: 5px;
	color: var(--cairo);
}
.input:active,
.input:hover,
.input:focus {
	outline: 0;
	outline-offset: 0;
}
.form_rules {
	margin-top: var(--m);
	display: flex;
}
.rules_check_box {
	width: 20px;
	height: 20px;
	min-width: 20px;
	background: rgba(0, 0, 0, 0.25);
	border-radius: var(--xs);
	border: 1px solid #d9d9d9;
	margin-right: 10px;
	cursor: pointer;
}
@media (max-width: 767px) {
	.form_title {
		font-size: 16px;
	}
}
</style>
