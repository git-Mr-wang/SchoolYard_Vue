<template>
	<div style='text-align: center;'>
		<h1>更新社团表</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入社团名字' v-model='asName'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> 
			  <el-select v-model='userId' placeholder='请输入社长' style='width:300px;margin-top: 20px;'>
				  <el-option 
					v-for="item in list"
					:key="item.userId"
					:label="item.name"
					:value="item.userId"
					 >
				  </el-option>
			  </el-select>
		  <!-- <el-input style='width:300px;margin-top: 20px;' placeholder='请输入社长' v-model='name'></el-input> -->
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入社团介绍' v-model='describes'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入图片' v-model='asLmage'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> 
			  <el-select v-model='asLabel' placeholder='请输入标签' style='width:300px;margin-top: 20px;'>
					  <el-option 
						v-for="item in lists"
						:key="item.labelId"
						:label="item.labelName"
						:value="item.labelId"
						 >
					  </el-option>
			  </el-select>
		  <!-- <el-input style='width:300px;margin-top: 20px;' placeholder='请输入标签' v-model='asLabel'></el-input> -->
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> 
			  <el-select v-model='exaState' placeholder='请输入审核状态' style='width:300px;margin-top: 20px;'>
					<el-option 
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value"
						 >
					</el-option>
				</el-select>
		  <!-- <el-input style='width:300px;margin-top: 20px;' placeholder='请输入审核状态' v-model='exaStateName'></el-input> -->
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
				asId:'',
				asName:'',
				userId:'',
				describes:'',
				asLmage:'',
				asLabel:'',
				exaState:'',
				exaStateName:'',
				list:[],
				lists:[],
				options: [{
				  value: 1,
				  label: '审核中'
				}, {
				  value: 2,
				  label: '已通过'
				}, {
				  value: null,
				  label: '未过审'
				}, {
				  value: 0,
				  label: '已驳回'
				}],
			};
		},
		methods:{
			saveEdit(){
				//后端网址
				var url = this.baseUrl+"/association/update"
				// 传递给后端的数据
				var data = {asId:this.asId,asName:this.asName,userId:this.userId,describes:this.describes,
				asLmage:this.asLmage,asLabel:this.asLabel,exaState:this.exaState};
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
				this.describes=obj.describes;
				this.asLmage=obj.asLmage;
				this.asLabel=obj.asLabel;
				this.exaState=obj.exaState;
				this.exaStateName=obj.exaStateName;
				// this.name=obj.name;
			});
			var url = this.baseUrl+"/baseUser/list"
				this.$axios.post(url,this.$qs.stringify(),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
			}).then(res=>{
				this.list = res.data;
				// console.log(this.list)
			});
			var url = this.baseUrl+"/label/list"
				this.$axios.post(url,this.$qs.stringify(),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
			}).then(res=>{
				this.lists = res.data;
				// console.log(this.list)
			})
		}
	}
</script>
<style>

</style>
