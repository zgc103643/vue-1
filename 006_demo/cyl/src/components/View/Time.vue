<template>
	<div class="time_content vue_content">
		<div class="hide vue_hide">{{$route.params.id}}</div>
		<div class="send">
			<span v-show="show" @click="getCode">获取验证码</span>
			<span v-show="!show" class="count">{{count}} s后重新获取</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Time',
		data() {
			return {
				show: true,
				count: '',
				timer: null
			}
		},
		mounted: function() {
			var isBool = document.querySelector('.hide'),
				isTitle = document.querySelector('.view_title');
			if(isBool.innerText == '004') {
				isTitle.innerText = '倒计时'
			}
		},
		methods: {
			getCode() {
				const countObj = 5;
				if(!this.timer) {
					this.count = countObj;
					this.show = false;
					this.timer = setInterval(() => {
						if(this.count > 0 && this.count <= countObj) {
							this.count--;
						} else {
							this.show = true;
							clearInterval(this.timer);
							this.timer = null;
						}
					}, 1000)
				}
			}
		}
	}
</script>

<style lang="scss">
	.time_content {
		.send {
			width: 100px;
			height: 40px;
			text-align: center;
			line-height: 40px;
			font-size: 14px;
			background-color: #000000;
			color: white;
			margin: 0 auto;
			text-transform: capitalize;
		}
	}
</style>