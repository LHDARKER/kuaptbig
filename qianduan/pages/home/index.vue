<template>
		<view class="hello">
			<view>
				<van-notice-bar background="#ecf9ff" color="#1989fa" left-icon="volume-o" mode="closeable" class="zz">
					浙大城市学院最后一批学生将于6月5号返校
				</van-notice-bar>
			</view>
			<view class="xz">
				<van-swipe class="my-swipe" :autoplay="2000">
					<van-swipe-item><img src="../../static/images/1.jpg" alt=""/></van-swipe-item>
					<van-swipe-item><img src="../../static/images/2.jpg" alt=""/></van-swipe-item>
					<van-swipe-item><img src="../../static/images/3.jpg" alt=""/></van-swipe-item>
					<van-swipe-item><img src="../../static/images/4.jpg" alt=""/></van-swipe-item>
				</van-swipe>
			</view>
			<view class="zucc">
				浙大城市学院
			</view>
			<view class="gg">
				<van-grid>
					<van-grid-item icon="volume" text="通知"/>
					<van-grid-item icon="wap-home" text="实习"/>
					<van-grid-item icon="invition" text="报名" />
					<van-grid-item icon="balance-list" text="就业要求" />
				</van-grid>
				<van-grid>
					<van-grid-item icon="todo-list" text="就业上报" />
					<van-grid-item icon="friends" text="公司招聘" />
					<van-grid-item icon="comment" text="二课活动" />
					<van-grid-item icon="column" text="打卡" />
				</van-grid>
			</view>
			<view class="r5">
					我的班级：软件工程1701
			</view>
			<view class=" xz">
				<van-grid >
					<van-grid-item icon="todo-list-o" text="班级名单" />
					<van-grid-item icon="friends-o" text="班级公告" />
					<van-grid-item icon="comment-o" text="班级投票" />
					<van-grid-item icon="records" text="请假" />
				</van-grid>
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
	.zucc{
		background-color: #7A7E83;
		font-size: 15px;
		color: #fefdff;
		text-align: center;
	}
	.gg{
		
	}
	.ul {
		font-size: 15px;
		color: #8f8f94;
		margin-top: 25px;
	}

	.ul>view {
		line-height: 25px;
	}
	.my-swipe .van-swipe-item {
		margin-top: 5px;
		width: 400px;
		height: 200px;
	}
	.r5{
		background-color: #fefdff;
		font-size: 18px;
		color: #85857c;
		text-align: left;
		margin-top: 20px;
		line-height: 28px;
		border-bottom: #1d0011;
		border-bottom-style: solid;
		border-bottom-width: 1px;
        width: 100%;
	}
	.xz{
		width: 100%;
		height:200px
	}
	.zz{
		width: 95%;
	}
	</style>