<template>
	<div style='text-align: center;'>
		<h1>更新社团表</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入社团名字' v-model='asName'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入社长' v-model='userId'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入社团介绍' v-model='describe'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入图片' v-model='asLmage'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入标签' v-model='asLabel'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入审核状态' v-model='exaState'></el-input> </el-col>
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
				asId:'',
				asName:'',
				userId:'',
				describe:'',
				asLmage:'',
				asLabel:'',
				exaState:'',
			};
		},
		methods:{
			saveEdit(){
				// 后端网址
				var url = this.baseUrl+"/association/update"
				// 传递给后端的数据
				var data = {asId:this.asId,asName:this.asName,userId:this.userId,describe:this.describe,asLmage:this.asLmage,asLabel:this.asLabel,exaState:this.exaState};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					  }
				  }).then(res=>{
					  // res是后端的响应
					  this.$message("更新成功");
					  this.$router.push({path:'/AssociationList'});
				  })
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			// 获取路由传递的对象
			var asId = this.$route.params.asId;
			var url2 = this.baseUrl+"/association/load"
			var data = {asId:asId};
			this.$axios.post(url2,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				var obj = res.data;
				this.asId=obj.asId;
				this.asName=obj.asName;
				this.userId=obj.userId;
				this.describe=obj.describe;
				this.asLmage=obj.asLmage;
				this.asLabel=obj.asLabel;
				this.exaState=obj.exaState;
			})
		}
	}
</script>
<style>

</style>
