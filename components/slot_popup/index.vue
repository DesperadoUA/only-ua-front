<template>
	<div class="game_popup" :class="fullScreen ? 'p-0' : ''">
		<div class="wrapper" :class="fullScreen ? 'full_screen' : ''">
			<div class="title_wrapper" :class="fullScreen ? 'full_screen' : ''">
				<AText :attributes="titleSettings">{{ title }}</AText>
				<div class="btn_action">
					<AButton :attributes="btnFullSettings" @onClick="changeSize"></AButton>
					<AButton :attributes="btnCloseSettings" @onClick="onClickDemoClose"></AButton>
				</div>
			</div>
			<iframe class="game-popup__iframe" :src="src" frameborder="0"></iframe>
		</div>
	</div>
</template>
<script>
import components from '~/mixins/components'
export default {
	name: 'game_popup',
	mixins: [components],
	data: () => {
		return {
			titleSettings: {
				color: 'cairo', size: 'medium', weight: 'bold'
			},
			btnFullSettings: {
				class: 'btn_full'
			},
			btnCloseSettings: {
				class: 'btn_close'
			},
			fullScreen: false
		}
	},
	props: {
		src: {
			type: String,
			default() {
				return ''
			}
		},
		title: {
			type: String,
			default() {
				return ''
			}
		}
	},
	methods: {
		onClickDemoClose() {
			this.$emit('onClickDemoClose')
		},
		changeSize() {
			this.fullScreen = this.fullScreen ? false : true
		}
	}
}
</script>
<style scoped>
.game_popup {
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background: rgba(16, 13, 36, 0.7);
	z-index: 5;
	display: flex;
	justify-content: center;
	padding-top: 5%;
}
.game_popup.p-0 {
	padding: 0px;
}
.wrapper {
	width: 968px;
	height: 594px;
	max-width: 100%;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	overflow: hidden;
}
.wrapper.full_screen {
	width: 100%;
	height: 100%;
}
.title_wrapper {
	background: var(--cucuta);
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
}
.title_wrapper.full_screen {
	padding-right: 40px;
}
.game-popup__iframe {
	width: 100%;
	height: 100%;
}
.btn_full {
	width: 18px;
	height: 18px;
	background: url('/img/full_screen.png');
}
.btn_close {
	width: 18px;
	height: 18px;
	background: url('/img/close.png');
}
.btn_action {
	display: flex;
	gap: 20px;
	align-items: center;
}
</style>
