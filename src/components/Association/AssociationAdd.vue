<template>
	<div style='text-align: center;'>
		<h1>添加社团表</h1>
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
		  <!-- <el-input style='width:300px;margin-top: 20px;' placeholder='请输入社长' v-model='userId'></el-input> -->
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入社团介绍' v-model='describe'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12">
<!-- 			<el-upload style='margin: 20px 0 0 115px;' 
			  v-model='asLmage'
			  class="upload-demo"
			  action=""
			  :on-preview="handlePreview"
			  :on-remove="handleRemove"
			  :auto-upload="false"
			  :multiple="false"
			  list-type="picture">
			  <el-button slot="trigger" size="small" type="primary">请选取图片</el-button>
			  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
			  <! <span slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</span> -->
			<!-- </el-upload> -->
			<el-upload v-model='asLmage'
			  class="upload-demo"
			  ref="upload"
			  :action="doUpload"
			  :on-preview="handlePreview"
			  :on-remove="handleRemove"
			  :file-list="fileList"
			  :auto-upload="false"
			  :limit="1"
			   list-type="picture"
			  >
			  <el-button slot="trigger" size="small" type="primary">请选取图片</el-button>
			  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
			</el-upload>
		  <!-- <el-input style='width:300px;margin-top: 20px;' placeholder='请输入图片' v-model='asLmage'></el-input> -->
		  </el-col>
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
		  <!-- <el-input style='width:300px;margin-top: 20px;' placeholder='请输入审核状态' v-model='exaState'></el-input> -->
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
				doUpload:'http://localhost/wang/upload/upload',
				fileList:[],
				asName:'',
				userId:1,
				describe:'',
				asLmage:'',
				asLabel:1,
				exaState:null,
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
			 handleRemove(file, fileList) {
				 alert(file, fileList);
				// console.log(file, fileList);
			  },
			  handlePreview(file) {
				  alert(file);
				// console.log(file);
			  },
            submitUpload() {
				this.$refs.upload.submit();
				// alert(this.name);
			  },
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
		mounted:function(){
			var url = this.baseUrl+"/baseUser/list"
			this.$axios.post(url,this.$qs.stringify(),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.list = res.data;
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
	.el-upload-list{
		margin-left: 240px;
		width: 450px;
	}
	.upload-demo{
		margin: 20px 0 0 -90px;
	}
</style>

