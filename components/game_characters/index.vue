<template>
	<div class="item_character">
		<div class="left" :data-type="type">
			<AText :attributes="titleSettings">{{ title }}</AText>
		</div>
		<div class="value_container">
			<AText :attributes="valueSettings">{{ value }}</AText>
		</div>
	</div>
</template>
<script>
import components from '~/mixins/components'
export default {
	name: 'game_characters_item',
	props: {
		title: {
			type: String,
			default() {
				return ''
			}
		},
		type: {
			type: String,
			default() {
				return 'rtp'
			}
		},
		value: {
			type: String,
			default() {
				return ''
			}
		}
	},
	mixins: [components],
	data: () => {
		return {
			titleSettings: {
                color: 'cairo', size: 'small', text_transform: 'uppercase'
			},
			valueSettings: {
                color: 'cairo'
			}
		}
	}
}
</script>
<style scoped>
.item_character {
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding-right: 28px;
	width: 100%;
}
.left {
	position: relative;
	padding-left: 24px;
	display: flex;
	align-items: center;
}
.item_character .value_container {
	padding: 12px 10px;
	background: rgba(255, 255, 255, 0.06);
	border-radius: var(--s);
}
.left::before {
	content: '';
	position: absolute;
	width: 18px;
	height: 18px;
	top: 50%;
	left: 0;
	transform: translateY(-50%);
}
[data-type='rtp']::before {
	background: url('/img/rtp_icon.png');
}
[data-type='min_dep']::before {
	background: url('/img/min_dep_icon.png');
}
[data-type='scheme']::before {
	background: url('/img/scheme_icon.png');
}
[data-type='line']::before {
	background: url('/img/line_icon.png');
}
</style>
