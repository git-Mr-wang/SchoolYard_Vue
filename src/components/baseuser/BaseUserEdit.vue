<template>
	<div style='text-align: center;'>
		<h1>更新用户表</h1>
		<el-row>
			<el-col :span="12"> 账号：<el-input style='width:300px;margin-top: 20px;' placeholder='请输入账号' v-model='userName'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> 密码：<el-input style='width:300px;margin-top: 20px;' placeholder='请输入密码' v-model='password'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> 姓名：<el-input style='width:300px;margin-top: 20px;' placeholder='请输入姓名' v-model='name'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> 性别：
			  <el-select v-model='userSex' placeholder='请输入1、男  2、女' style='width:300px;margin-top: 20px;'>
					<el-option 
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value"
						 >
					</el-option>
				</el-select>
		  <!-- <el-input style='width:300px;margin-top: 20px;' placeholder='请输入1、男  2、女' v-model='userSex'></el-input> -->
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> 年龄：<el-input style='width:300px;margin-top: 20px;' placeholder='请输入年龄' v-model='userAge'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> 邮箱<el-input style='width:300px;margin-top: 20px;' placeholder='请输入邮箱' v-model='email'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> 电话<el-input style='width:300px;margin-top: 20px;' placeholder='请输入电话' v-model='telno'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> 身份
			  <el-select v-model='statusId' placeholder='请输入身份id 1——9' style='width:300px;margin-top: 20px;'>
				  <el-option 
					v-for="item in list"
					:key="item.statusId"
					:label="item.statusName"
					:value="item.statusId"
					 >
				  </el-option>
			  </el-select>
		  <!-- <el-input style='width:300px;margin-top: 20px;' placeholder='请输入身份id 1——9' v-model='statusId'></el-input> -->
		  </el-col>
		</el-row>
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveEdit'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>
<script>
	export default {
		name:'',
		data() {
			return {
				userId:'',
				userName:'',
				password:'',
				name:'',
				userSex:'',
				userAge:'',
				email:'',
				telno:'',
				statusId:'',
				options: [{
				  value: 1,
				  label: '男'
				}, {
				  value: 2,
				  label: '女'
				}],
				list:[],
			};
		},
		methods:{
			saveEdit(){
				// 后端网址
				var url = this.baseUrl+"/baseUser/update"
				// 传递给后端的数据
				var data = {userId:this.userId,userName:this.userName,password:this.password,name:this.name,userSex:this.userSex,userAge:this.userAge,email:this.email,telno:this.telno,statusId:this.statusId};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					  }
				  }).then(res=>{
					  // res是后端的响应
					  this.$message("更新成功");
					  this.$router.push({path:'/BaseUserList'});
				  })
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			// 获取路由传递的对象
			var userId = this.$route.params.userId;
			var url2 = this.baseUrl+"/baseUser/load"
			var data = {userId:userId};
			this.$axios.post(url2,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				var obj = res.data;
				this.userId=obj.userId;
				this.userName=obj.userName;
				// this.password=obj.password;
				this.name=obj.name;
				this.userSex=obj.userSex;
				this.userAge=obj.userAge;
				this.email=obj.email;
				this.telno=obj.telno;
				this.statusId=obj.statusId;
			});
			
			var url = this.baseUrl+"/baseStatus/list"
			this.$axios.post(url,this.$qs.stringify(),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.list = res.data;
			})
		}
	}
</script>
<style>

</style>
