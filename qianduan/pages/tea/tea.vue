<template>
		<view class="hello">
			<view class="r4">
				<van-contact-card type="edit" name="张如仟" tel="13000000000" :editable="false"></van-contact-card>
			</view>
			<view class="r4">
				<van-contact-card type="edit" name="周笑平" tel="13000000000" :editable="false"></van-contact-card>
			</view>
			<view class="r4">
				<van-contact-card type="edit" name="胡兴桥" tel="13000000000" :editable="false"></van-contact-card>
			</view>
			<view class="r4">
				<van-contact-card type="edit" name="孙曙迎" tel="13000000000" :editable="false"></van-contact-card>
			</view>
			<view class="r4">
				<van-contact-card type="edit" name="王硕苹" tel="13000000000" :editable="false"></van-contact-card>
			</view>
			<view class="r4">
				<van-contact-card type="edit" name="郭鸣" tel="13000000000" :editable="false"></van-contact-card>
			</view>
			<!-- <view class="alll">
				<view>test1</view>
				<block v-for="item in dataList" :key="item.id">
					<view class="r4">
						<view class="tea">{{item.teaname}}</view>
						<view class="tea">{{item.phone}}</view>
						<view class="tea">{{item.emali}}</view>
						<view>test222</view>
					</view>
				</block>
			</view> -->
	</view>
</template>

<script>
	export default {
	// 	data() {
	// 		return {
	// 			dataList:[]
	// 		}
	// 	},
	// 	onshow() {
	// 		this.getalltea()
	// 	},
	// 	methods: {
	// 		// 获取秒杀商品列表
	// 		getalltea() {
	// 			uni.showLoading({ title: '加载中', mask: true });
	// 			this.$Http.getalltea().then(res => {
	// 				uni.hideLoading();
	// 				if (res.code == 1) {
	// 					this.dataList = res.data
	// 				} else {
	// 					uni.showModal({ title: '提示', content: `${res.message}`, showCancel: false })
	// 				}
	// 			}).catch(err => {
	// 				uni.hideLoading();
	// 			})
	// 		},
	// },
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
	.alll{
		margin-top: 50px;
	}
	.tea{
		margin-top: 10px;
	}
	</style>