<template>
	<article class="item" @click="refActivate(refLinks)">
		<div class="wrapper">
			<div class="left">
				<div class="img_wrapper">
					<AText>
						<AImg :attributes="imgSettings" :src="src" />
					</AText>
				</div>
			</div>
			<div class="right">
				<div>
					<AText tag="div" :attributes="titleSettings">{{ title }}</AText>
				</div>
				<div>
					<AText tag="div" :attributes="valueTextSettings">{{ value }}</AText>
				</div>
			</div>
			<div class="action">
				<AText>
					<AImg :attributes="arrowSettings" src="/img/filters_arrow.png" />
				</AText>
			</div>
		</div>
	</article>
</template>
<script>
import ref from '~/mixins/ref'
import components from '~/mixins/components'
export default {
	name: 'bonus_aside_card',
	mixins: [ref, components],
	data: () => {
		return {
			imgSettings: {
				width: '62px',
				height: '62px',
				class: 'object_fit_cover border_radius_50'
			},
			arrowSettings: {
				width: '26px',
				height: '26px',
				class: 'arrow'
			},
			titleSettings: {
				color: 'cleveland',
				size: 'small',
				decoration: 'none',
				class: 'title'
			},
			valueTextSettings: {
				color: 'cucuta',
				size: 'large',
				weight: 'bold',
				transform: 'uppercase'
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
		value: {
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
		}
	}
}
</script>
<style scoped>
.item {
	width: 356px;
	max-width: 100%;
	cursor: pointer;
	border-bottom: 2px solid #ced2e2;
	padding-bottom: 5px;
}
.wrapper {
	position: relative;
	border-top-left-radius: 14px;
	border-top-right-radius: 14px;
	background: rgba(255, 255, 255, 0.1);
	display: flex;
	padding-top: 5px;
	padding-bottom: 5px;
}
.img_wrapper {
	width: 62px;
	height: 62px;
}
.left {
	width: 90px;
	min-width: 90px;
	align-items: center;
	display: flex;
}
.right {
	flex-grow: 1;
	padding: 4px 0px;
}
.desc {
	line-height: 18px;
}
.title {
	line-height: 12px;
	margin-bottom: 8px;
}
.action {
	min-width: 26px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.bottom {
	background: rgba(255, 255, 255, 0.25);
	padding: var(--s);
	border-bottom-left-radius: 14px;
	border-bottom-right-radius: 14px;
}
.arrow {
	transform: rotate(90deg);
}
@media (max-width: 767px) {
	.item {
		width: 100%;
	}
}
</style>
