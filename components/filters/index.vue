<template>
	<div class="filters">
		<div class="current_filters">
			<div class="current_filters_ttl">Sorted by</div>
			<div class="current_filters_container">
				<div class="current_filters_item">New <button class="current_filters_remove"></button></div>
				<div class="current_filters_item">Mobile <button class="current_filters_remove"></button></div>
				<div class="current_filters_item">Quality Casinos <button class="current_filters_remove"></button></div>
				<div class="current_filters_item">VIP <button class="current_filters_remove"></button></div>
			</div>
			<div class="current_filters_clear">Clear All</div>
		</div>
		<div class="filters_container">
			<div class="filter_item">
				<div class="filter_item_title">
					<div class="filter_item_icon">
						<AImg :attributes="imgSettings" src="/img/casino_type_icon.png" />
					</div>
					<div class="filter_item_text">
						Тип казино
					</div>
					<div class="filter_item_arrow">
						<AImg :attributes="imgSettings" src="/img/filters_arrow.png" />
					</div>
				</div>
				<div class="filter_item_body">
					<div class="filter_item_row">
						<div class="filter_item_row_left">
							<div class="filter_checkbox active"></div>
							Mobile
						</div>
						<div class="filter_item_row_right">120</div>
					</div>
					<div class="filter_item_row">
						<div class="filter_item_row_left">
							<div class="filter_checkbox"></div>
							New
						</div>
						<div class="filter_item_row_right">20</div>
					</div>
					<div class="filter_item_row">
						<div class="filter_item_row_left">
							<div class="filter_checkbox"></div>
							VIP
						</div>
						<div class="filter_item_row_right">10</div>
					</div>
				</div>
			</div>
			<div class="filter_item">
				<div class="filter_item_title">
					<div class="filter_item_icon">
						<AImg :attributes="imgSettings" src="/img/casino_type_icon.png" />
					</div>
					<div class="filter_item_text">
						Тип казино
					</div>
					<div class="filter_item_arrow">
						<AImg :attributes="imgSettings" src="/img/filters_arrow.png" />
					</div>
				</div>
				<div class="filter_item_body">
					<div class="filter_item_row">
						<div class="filter_item_row_left">
							<div class="filter_checkbox active"></div>
							Mobile
						</div>
						<div class="filter_item_row_right">120</div>
					</div>
					<div class="filter_item_row">
						<div class="filter_item_row_left">
							<div class="filter_checkbox"></div>
							New
						</div>
						<div class="filter_item_row_right">20</div>
					</div>
					<div class="filter_item_row">
						<div class="filter_item_row_left">
							<div class="filter_checkbox"></div>
							VIP
						</div>
						<div class="filter_item_row_right">10</div>
					</div>
				</div>
			</div>
			<div class="filter_item">
				<div class="filter_item_title">
					<div class="filter_item_icon">
						<AImg :attributes="imgSettings" src="/img/casino_type_icon.png" />
					</div>
					<div class="filter_item_text">
						Тип казино
					</div>
					<div class="filter_item_arrow">
						<AImg :attributes="imgSettings" src="/img/filters_arrow.png" />
					</div>
				</div>
				<div class="filter_item_body">
					<div class="filter_item_row">
						<div class="filter_item_row_left">
							<div class="filter_checkbox active"></div>
							Mobile
						</div>
						<div class="filter_item_row_right">120</div>
					</div>
					<div class="filter_item_row">
						<div class="filter_item_row_left">
							<div class="filter_checkbox"></div>
							New
						</div>
						<div class="filter_item_row_right">20</div>
					</div>
					<div class="filter_item_row">
						<div class="filter_item_row_left">
							<div class="filter_checkbox"></div>
							VIP
						</div>
						<div class="filter_item_row_right">10</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import components from '~/mixins/components'
export default {
	name: 'filters',
	mixins: [components],
	data: () => {
		return {
			imgSettings: {
				width: '18px',
				height: '18px'
			}
		}
	}
}
</script>
<style scoped>
.filters {
	background: white;
	border-radius: 12px;
	padding: 20px 10px;
}
.current_filters_ttl,
.current_filters_clear {
	color: #686a77;
	text-align: center;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
}
.current_filters_clear,
.current_filters_ttl {
	margin-bottom: 15px;
}
.current_filters_clear {
	margin-top: 15px;
}
.current_filters {
	border-bottom: 1px solid #ced2e2;
}
.current_filters_container {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
}
.current_filters_item {
	border-radius: 5px;
	border: 1px dashed #02cb46;
	padding: 4px 8px;
	display: flex;
	align-items: center;
	color: #1d2146;
	font-size: 16px;
	font-weight: 400;
}
.current_filters_remove {
	width: 18px;
	height: 18px;
	margin-left: 7px;
	background: none;
	border: none;
	cursor: pointer;
	background: url('/img/close_cross.png') center center;
}
.filter_item {
	border-bottom: 1px solid #ced2e2;
	padding-top: 20px;
	padding-bottom: 20px;
	cursor: pointer;
	position: relative;
}
.filter_item_title {
	display: flex;
	align-items: center;
	position: relative;
	padding-right: 30px;
}
.filter_item_icon {
	height: 18px;
	margin-right: 10px;
}
.filter_item_arrow {
	position: absolute;
	top: 4px;
	right: 0;
	width: 20px;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.filter_item_body {
	padding-left: 25px;
	gap: 5px;
	display: flex;
	flex-wrap: wrap;
}
.filter_item_row {
	display: flex;
	width: 100%;
	color: #686a77;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	display: flex;
	justify-content: space-between;
}
.filter_item_row:first-child {
	margin-top: 15px;
}
.filter_checkbox {
	width: 18px;
	height: 18px;
	margin-right: 5px;
	border: 1px solid rgba(206, 210, 226, 1);
	border-radius: 4px;
	cursor: pointer;
}
.filter_checkbox.active {
	background: url('/img/filter_active.png') rgba(2, 203, 70, 1);
	background-position: center center;
	background-repeat: no-repeat;
}
.filter_item_row_left {
	display: flex;
	align-items: center;
}
</style>
