<template>
	<div class="dv">
		<h1 style="text-align: center"></h1>
		<div style="margin: -30px 80px 70px -660px;">
			<el-input style='width:160px' placeholder='账号' v-model='search_userName'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center style="margin-top: -50px;">
			<el-table :data="list" :row-style="tableRowStyle" :header-cell-style="tableHeaderColor" >
				<el-table-column prop="userId" label="ID" width="100"></el-table-column>
				<el-table-column prop="userName" label="账号" width="140"></el-table-column>
				<!-- <el-table-column prop="password" label="密码" width="120"></el-table-column> -->
				<el-table-column prop="name" label="姓名" width="140"></el-table-column>
				<!-- <span v-if=""></span> -->
				<el-table-column prop="userSexName" label="性别" width="100"></el-table-column>
				<el-table-column prop="userAge" label="年龄" width="100"></el-table-column>
				<el-table-column prop="email" label="邮箱" width="140"></el-table-column>
				<el-table-column prop="telno" label="电话" width="140"></el-table-column>
				<el-table-column prop="statusName" label="身份级别 width="140"></el-table-column>
				<el-table-column label="操作" width="200">
				  <template slot-scope="scope" class="tl">
					<el-button size="mini" @click="update(scope.row.userId)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.userId)">删除</el-button>
				  </template>
				</el-table-column>
			</el-table>
		</center>
		
		<!-- 分页 begin -->
		<el-pagination
		  @size-change="handleSizeChange"
		  @current-change="handleCurrentChange"
		  :current-page="currentPage"
		  :page-sizes="pagesizes"
		  :page-size="pageSize"
		  layout="total, sizes, prev, pager, next, jumper"
		  :total="lists.length" background>
		</el-pagination>
		<!-- end -->
		
		
	</div>
</template>
<script>
	export default {
		name:'',
		// inject:['reload'],
		data() {
			return {
				search_userName:'',
				list:[],
				lists:[],
				// 
				pageSize:5,//每页显示条目个数
				currentPage:1,//当前页
				pagesizes:[5,10],
				
				//
			
				
			};
		},
		methods:{
			//改变每页条数
			handleSizeChange(val){
				// alert(val+",1")
				this.pageSize=val
				this.diao(val)
			},
			//改变当前页数
			handleCurrentChange(val){
				// alert(val+",2")
				this.diao1(val)
			},
// 			//调用方法
			diao(val){
				var url = this.baseUrl+"/baseUser/search"
				var data = {pageSize:val,currentPage:this.currentPage};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						// 'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						'Content-Type':'application/x-www-form-; charset=UTF-8'
					}
				}).then(res=>{
					this.list = res.data;
				})
			},
			diao1(val){
				var url = this.baseUrl+"/baseUser/search"
				var data = {pageSize:this.pageSize,currentPage:val};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.list = res.data;
				})
			},
			// 修改table tr行的透明度
			tableRowStyle({ row, rowIndex }) {
			  return 'background: rgba(255,218,185,0.3);'
			},
			// 修改table header的背景色
			tableHeaderColor({rowIndex}) {
			  if (rowIndex == 0) {
				  // antiquewhite
				   return 'background-color: lightblue;color: #fff;'
			  }
			 },
			
			update(userId){
				this.$router.push({name:'BaseUserEdit',params:{userId:userId}});
			},
			del(userId){
				var url = this.baseUrl+"/baseUser/delete"
				var data = {userid:userId};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.$message("删除成功");
					this.search();
			    })
			},
			add(){
				this.$router.push("/BaseUserAdd");
			},
			search(){
				var url = this.baseUrl+"/baseUser/search"
				var data = {userName:this.search_userName,pageSize:this.pageSize,currentPage:this.currentPage};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.list = res.data;
					// console.log(this.list)
				})
			},
			searchs(){
				var url = this.baseUrl+"/baseUser/list"
				var data = {userName:this.search_userName};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.lists = res.data;
					// console.log(this.list)
				})
			}
		},
		mounted:function(){
			this.search();
			this.searchs();
		}
		
	}
</script>

<style scoped>
    .tebale_card {
        background-color: rgba(255,218,185,0);
    }
    .el-table,
    .el-table__expanded-cell {
        background-color: rgba(255,218,185,0);
    }
</style>
