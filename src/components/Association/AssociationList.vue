<template>
	<div>
		<h1 style="text-align: center"></h1>
		<div style="margin: -30px 0px 20px -690px;">
			<el-input style='width:160px' placeholder='社团名字' v-model='search_asName'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center style="margin-top: 0px;">
			<el-table :data="list" :row-style="tableRowStyle" :header-cell-style="tableHeaderColor">
				<el-table-column prop="asId" label="社团——主键" width="110"></el-table-column>
				<el-table-column prop="asName" label="社团名字" width="120"></el-table-column>
				<el-table-column prop="name" label="社长" width="120"></el-table-column>
				<el-table-column prop="describe" label="社团介绍" width="120"></el-table-column>
				<el-table-column prop="asLmage" label="图片" width="120"></el-table-column>
				<el-table-column prop="labelName" label="标签" width="120"></el-table-column>
				<el-table-column prop="exaStateName" label="审核状态" width="120"></el-table-column>
				<el-table-column label="操作" width="180">
				  <template slot-scope="scope">
					<el-button size="mini" @click="update(scope.row.asId)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.asId)">删除</el-button>
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
		data() {
			return {
				search_asName:'',
				list:[],
				lists:[],
				// listss:[],
				// 
				pageSize:5,//每页显示条目个数
				currentPage:1,//当前页
				pagesizes:[5, 10],
				
				//
			};
		},
		methods:{
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
			//调用方法
			diao(val){
				var url = this.baseUrl+"/association/search"
				var data = {pageSize:val,currentPage:this.currentPage};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.list = res.data;
				})
			},
			diao1(val){
				var url = this.baseUrl+"/association/search"
				var data = {pageSize:this.pageSize,currentPage:val};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.list = res.data;
				})
			},
			update(asId){
				this.$router.push({name:'AssociationEdit',params:{asId:asId}});
			},
			del(asId){
				var url = this.baseUrl+"/association/delete"
				var data = {asId:asId};
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
				this.$router.push("/AssociationAdd");
			},
			search(){
				var url = this.baseUrl+"/association/search"
				var data = {asName:this.search_asName,pageSize:this.pageSize,currentPage:this.currentPage};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.list = res.data;
				})
			},
			searchs(){
				var url = this.baseUrl+"/association/list"
				// var data = {userName:this.search_userName};
				this.$axios.post(url,this.$qs.stringify(),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.lists = res.data;
					// console.log(this.list)
				})
				
// 				var url = this.baseUrl+"/baseUser/list"
// 					this.$axios.post(url,this.$qs.stringify(),{
// 						headers: {
// 							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
// 						}
// 					}).then(res=>{
// 						this.listss = res.data;
// 						// console.log(this.list)
// 					})
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
