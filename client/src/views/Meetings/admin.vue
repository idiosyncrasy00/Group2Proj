<template>
<div class="container">
<div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title text-uppercase mb-0">Danh sách cuộc họp</h5>
            </div>
            <div class="table-responsive">
                <table class="table no-wrap user-table mb-0">
                  <thead>
                    <tr>
                      <th scope="col" class="border-0 text-uppercase font-medium">Mã phòng</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Mã cuộc họp</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Ngày tổ chức</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Thời gian bắt đầu</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Thời gian họp</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Tên cuộc họp</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Chỉnh sửa</th>

                    </tr>
                  </thead>
                <tbody>
                    <tr v-for="meeting in meetings" 
                            :key="meeting.id">
                      <td class="pl-4">{{meeting.roomid}}</td>
                      <td>
                        <span class="text-muted">{{meeting.id}}</span>
                      </td>
                      <td>
                          <span class="text-muted">{{meeting.reserveddate}}</span>
                      </td>
                      <td>
                          <span class="text-muted">{{meeting.startingtime}} giờ</span><br>
                          
                      </td>
                      <td>
                          <span class="text-muted">{{meeting.during}} giờ</span>
                      </td>
                      <td>
                          <span class="text-muted">{{meeting.title}}</span>
                      </td>
                      <td>
                          <button class="btn btn-danger" type="button">
                              <router-link :to="{ name:'editMeeting', params: {} }">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  class="bi bi-pen" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                        </svg>							
										</router-link>
                        
                          </button>
                      </td>
                    </tr>
                   
                    
                </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
export default {
name: "admin",
data(){
    return{
        meetings:[
            {roomid:1,id:1,reserveddate: "2021-01-01",startingtime: 7, during: 2, title: "Họp cuối năm"},
            {roomid:3,id:4,reserveddate: "2021-02-01",startingtime: 6, during: 2, title: "Họp tổ dân phố"}
        ]
    }
}
}
</script>

<style>
body{
    background: #edf1f5;
    margin-top:20px;
}
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid transparent;
    border-radius: 0;
}
.btn-circle.btn-lg, .btn-group-lg>.btn-circle.btn {
    width: 50px;
    height: 50px;
    padding: 14px 15px;
    font-size: 18px;
    line-height: 23px;
}
.text-muted {
    color: #8898aa!important;
}
[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
    cursor: pointer;
}
.btn-circle {
    border-radius: 100%;
    width: 40px;
    height: 40px;
    padding: 10px;
}
.user-table tbody tr .category-select {
    max-width: 150px;
    border-radius: 20px;
}
</style>