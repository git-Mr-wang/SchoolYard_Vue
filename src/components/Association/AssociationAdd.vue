<template>
	<div style='text-align: center;'>
		<h1>添加社团表</h1>
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
		  <el-col :span="24" > <el-button type='primary' @click='saveAdd'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>
<script>
	export default {
		name:'',
		data() {
			return {
				asName:'',
				userId:'',
				describe:'',
				asLmage:'',
				asLabel:'',
				exaState:'',
			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/association/insert"
				// 传递给后端的数据
				var data = {asName:this.asName,userId:this.userId,describe:this.describe,asLmage:this.asLmage,asLabel:this.asLabel,exaState:this.exaState};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					  }
				  }).then(res=>{
					  // res是后端的响应
					  this.$message("添加成功");
					  this.$router.push({path:'/AssociationList'});
				  })
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		
	}
</script>

<style>

</style>

