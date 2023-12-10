<template>
	<div class="root">
		<div class="wrapper">
			<AText :attributes="btnSettings" data-active="true">{{ t('ALL') }}</AText>
			<ALink
				v-for="(item, index) in value"
				:href="item.permalink"
				:attributes="textSettings"
				:key="index"
				:data-active="item.active"
			>
				<AImg :attributes="imgSettings" :src="item.icon" /> {{ item.title }}
			</ALink>
		</div>
	</div>
</template>

<script>
import components from '~/mixins/components'
export default {
	name: 'providers_filter',
	mixins: [components],
	props: {
		value: {
			type: Array,
			default() {
				return []
			}
		}
	},
	data() {
		return {
			textSettings: {
				class: 'item',
				color: 'cairo',
				size: 'small',
				weight: 'regular',
				decoration: 'none'
			},
			imgSettings: {
				width: '26px',
				height: '26px',
				class: 'logo'
			},
			btnSettings: {
				class: 'item_btn',
				color: 'cairo',
				size: 'small',
				weight: 'regular',
				decoration: 'none'
			}
		}
	}
}
</script>

<style scoped>
.wrapper {
	display: flex;
	gap: 6px;
	width: 4000px;
}
.item {
	display: flex;
	align-items: center;
	padding: 5px 15px;
	border-radius: var(--s);
	background: rgba(255, 255, 255, 0.1);
	white-space: nowrap;
	font-size: 10px;
}
.logo {
	display: block;
	margin-right: 5px;
}
.item_btn {
	width: 80px;
	height: 36px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: var(--s);
}
[data-active='true'] {
	background: rgba(255, 255, 255, 0.27);
}
@media (max-width: 767px) {
	.wrapper {
		width: auto;
	}
	.wrapper a,
	.wrapper span {
		flex-shrink: 0;
	}
}
@media (min-width: 768px) and (max-width: 1200px) {
	.wrapper {
		width: auto;
	}
	.wrapper a,
	.wrapper span {
		flex-shrink: 0;
	}
}
</style>
