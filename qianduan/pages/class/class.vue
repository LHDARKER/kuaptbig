<template>
		<view class="hello">
			<view class="  r4 ">
			        <van-card
			                desc="孙曙迎"
			                title="信息政策与法规"
			                centered="true"
			                num="周二 9：50-11:25 理四519"
			        >
			            <template #footer>
			                <van-button size="mini">签到</van-button>
			                <van-button size="mini">请假</van-button>
			            </template>
			        </van-card>
			    </view>
			<view class="r4 ">
			            <van-card
			                    desc="王硕苹"
			                    title="软件体系结构"
			                    centered="true"
			                    num="周三 13：30-15:05 理四221"
			            >
			                <template #footer>
			                    <van-button size="mini">签到</van-button>
			                    <van-button size="mini">请假</van-button>
			                </template>
			            </van-card>
			        </view>
			        <view class="  r4 ">
			            <van-card
			                    desc="郭鸣"
			                    title="跨平台脚本开发技术"
			                    centered="true"
			                    num="周一 15：20-16:55 理四326  周二 15：20-16:55 理四201"
			            >
			                <template #footer>
			                    <van-button size="mini">签到</van-button>
			                    <van-button size="mini">请假</van-button>
			                </template>
			            </van-card>
			        </view>
			        <view class="  r4 ">
			            <van-card
			                    desc="胡兴桥"
			                    title="移动应用交互设计"
			                    centered="true"
			                    num="周二 13：30-15:05 理四226  周四 15：20-16:55 理四226"
			            >
			                <template #footer>
			                    <van-button size="mini">签到</van-button>
			                    <van-button size="mini">请假</van-button>
			                </template>
			            </van-card>
			        </view>
			        <view class="  r4 ">
			            <van-card
			                    desc="胡兴桥"
			                    title="移动应用交互设计"
			                    centered="true"
			                    num="周二 13：30-15:05 理四226  周四 15：20-16:55 理四226"
			            >
			                <template #footer>
			                    <van-button size="mini">签到</van-button>
			                    <van-button size="mini">请假</van-button>
			                </template>
			            </van-card>
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