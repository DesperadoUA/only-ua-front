<template>
	<article class="item">
		<div class="wrapper">
			<div class="left">
				<div class="img_wrapper">
					<ALink :href="link">
						<AImg :attributes="imgSettings" :src="src" />
					</ALink>
				</div>
			</div>
			<div class="right">
				<div>
					<ALink :attributes="titleSettings" :href="link">{{ title }}</ALink>
				</div>
				<div>
					<AText :attributes="descTextSettings">{{ desc }}</AText>
				</div>
			</div>
		</div>
	</article>
</template>
<script>
import components from '~/mixins/components'
export default {
	name: 'news_slider_card',
	mixins: [components],
	data: () => {
		return {
			imgSettings: {
				width: '44px',
				height: '44px',
				class: 'object_fit_cover border_radius_s'
			},
			titleSettings: {
				color: 'cairo',
				size: 'small',
				weight: 'bold',
				decoration: 'none',
				class: 'title'
			},
			descTextSettings: {
				color: 'cairo',
				size: 'small',
				weight: 'regular',
				class: 'desc'
			}
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
		}
	}
}
</script>
<style scoped>
.item {
	width: 356px;
	height: 95px;
	padding: 5px;
	padding-right: 25px;
}
.wrapper {
	position: relative;
	border-radius: 14px;
	height: 100%;
	background: rgba(255, 255, 255, 0.1);
	display: flex;
}
.img_wrapper {
	width: 44px;
	height: 44px;
}
.left {
	width: 60px;
	min-width: 60px;
	align-items: center;
	justify-content: center;
	display: flex;
	height: 100%;
}
.right {
	flex-grow: 1;
	padding: 10px 10px 0px 10px;
}
.desc {
	line-height: 18px;
}
.title {
	line-height: 18px;
	display: inline-block;
}
@media (max-width: 767px) {
	.item {
		padding-right: 0px;
		width: 100%;
		height: 90px;
	}
	.desc {
		display: none;
	}
}
@media (min-width: 768px) and (max-width: 1200px) {
	.desc {
		transform: translateY(-10px);
		display: inline-block;
	}
	.title {
		line-height: 18px;
		display: inline-block;
	}
	.item {
		padding-right: 0px;
	}
}
</style>
