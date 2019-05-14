<template>
	<div style='text-align: center;'>
		<h1>添加用户表</h1>
		<h6 style="color: red;">*手机号和邮箱不正确填写，后果自负</h6>
		<el-row>
		  <el-col :span="12" style='margin-left: 30px;color: red;'> 
				<el-input style='width:300px;margin-top: 20px;' placeholder='请输入账号' v-model='userName'></el-input> *必选项 
			</el-col>
		</el-row>
		<el-row>
		  <el-col :span="12" style='margin-left: 30px;color: red;'> 
				<el-input style='width:300px;margin-top: 20px;' placeholder='请输入密码' v-model='password'></el-input> *必选项 
			</el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入姓名' v-model='name'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> 
		   <el-select v-model='userSex' placeholder='请选择性别' style='width:300px;margin-top: 20px;'>
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
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入年龄' v-model='userAge'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入邮箱' v-model='email'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入电话' v-model='telno'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> 
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
		  <el-col :span="24" > <el-button type='primary' @click='saveAdd'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>
<script>
	export default {
		name:'',
		data() {
			return {
				userName:'',
				password:'',
				name:'',
				userSex:'',
				userAge:'',
				email:'',
				telno:'',
				options: [{
				  value: '1',
				  label: '男'
				}, {
				  value: '2',
				  label: '女'
				}],
				list:[],
				statusId:1,
			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/baseUser/insert"
				// 传递给后端的数据
				var data = {userName:this.userName,password:this.password,name:this.name,userSex:this.userSex,userAge:this.userAge,email:this.email,telno:this.telno,statusId:this.statusId};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					  }
				  }).then(res=>{
					  // res是后端的响应
					  this.$message("添加成功");
					  this.$router.push({path:'/BaseUserList'});
				  })
			},
			cancel(){
				this.$message("添加失败");
				this.$router.go(-1);
			}
		},
		mounted:function(){
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

