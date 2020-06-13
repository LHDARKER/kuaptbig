<template>
		<view class="hello">
			<view class="  r4">
				<van-contact-card type="edit" name="张如仟" tel="13000000000" :editable="false"></van-contact-card>
			</view>
			<view class="  r4">
				<van-contact-card type="edit" name="周笑平" tel="13000000000" :editable="false"></van-contact-card>
			</view>
			<view class="  r4">
				<van-contact-card type="edit" name="胡兴桥" tel="13000000000" :editable="false"></van-contact-card>
			</view>
			<view class="  r4">
				<van-contact-card type="edit" name="孙曙迎" tel="13000000000" :editable="false"></van-contact-card>
			</view>
			<view class="  r4">
				<van-contact-card type="edit" name="王硕苹" tel="13000000000" :editable="false"></van-contact-card>
			</view>
			<view class="  r4">
				<van-contact-card type="edit" name="郭鸣" tel="13000000000" :editable="false"></van-contact-card>
			</view>
	</view>
</template>

<script>
	export default {
	}
</script>

<style>
	.hello {
		display: flex;
		flex: 1;
		flex-direction: column;
		width: 400px;
	}
	.ul {
		font-size: 15px;
		color: #8f8f94;
		margin-top: 25px;
	}

	.ul>view {
		line-height: 25px;
	}
	.r4{
			margin-top: 5px;
		}
	</style>