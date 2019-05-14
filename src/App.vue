<template>
  <div id="app">
		<!-- <router-view v-if="isRouterAlive"></router-view> -->
		<!-- <router-link to="/BaseUserAdd">BaseUserAdd</router-link>
		<router-link to="/BaseUserEdit">BaseUserEdit</router-link> -->
		
		
		<el-container class="as">
			<!-- 头部 -->
			<el-header class="top" style="height: 120px;">
				<img class="img" src="./assets/images/logo.png">
				<br />
				<span class="sp">校&nbsp;&nbsp;&nbsp;园&nbsp;&nbsp;&nbsp;通</span>
				<el-button @click='ads()' style="margin-right: -500px; margin-left: 500px;" class="eb">打开侧边栏</el-button>
			</el-header>
			<hr />
			<!-- 右边 -->
				<el-container>
					<el-aside class='lefts' v-show='flags' width="250px" >
						<div class='de'>
							<router-link to="/BaseUserList"><el-button class='buta'>用户表</el-button></router-link>
						</div>
						<div class='de'>
							<router-link to="/AssociationList"><el-button class='buta'>社团表</el-button></router-link>
						</div>
					</el-aside>
					
					<!-- 主体 -->
					<el-main>
						<router-view/>
					</el-main>
					
				</el-container>
		</el-container>

		
  </div>
</template>

<script>
export default {
	name: 'App',
// 	provide(){
// 		return{
// 			reload:this.reload
// 		}
// 	},
	data(){
		return {
		  flags:false,
		  // isRouterAlive:false
		}
	},
	methods: {
// 		reload(){
// 			this.isRouterAlive=true
// 			this.$nextTick(function(){
// 				this.isRouterAlive=false
// 			})
// 		},
		ads(){
			var url = this.baseUrl+"/baseUser/findByStatusId"
			var data = {asId:"ss"};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				if(res.data.statusId==1){
					this.flags=!this.flags
				}else{
					this.$message("请登录")
				}
				;
				// this.search();
			})
		},
		ads1(){
			var url = this.baseUrl+"/baseUser/findByStatusId"
			var data = {asId:"ss"};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				if(res.data.statusId==1){
					this.$router.push({name:'BaseUserList'});
				}
				// this.search();
			})
		}
		
	},
	mounted:function(){
		this.$router.push({name:"Login"});
		// this.$router.push({name:'BaseUserList'});
		this.ads1()
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
body{
	margin: 0rem;
}
.img{
	margin: 20px;
	width: 80px;
	height: 80px;
	float: left;
}
.sp{
	font-size: 50px;
	
}
.as{
	background-image: url(assets/images/bag.jpg);
	height: 1048px;
}
.de{
	height: 20px;margin-top: 30px;
}
.lefts{	
	/* background-image: url(assets/images/left.jpg); */
	
	margin-left: 20px;margin-top: 10px;
	background-color: rgba(255,218,185,0.3);
}
.top{
	/* background-image: url(assets/images/top.jpg); */

	background-color: rgba(248,248,255,0.4);
}
.buta{
	width: 80%;
	height:40px ;
	background-color: rgba(139,115,85,0.4);
}
.eb{
	background-color: rgba(139,115,85,0.3);
	border: 0px solid;
}
</style>
