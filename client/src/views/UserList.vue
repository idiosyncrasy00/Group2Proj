<template>
<div class="container">
<div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title text-uppercase mb-0">Manage Users</h5>
            </div>
            <div class="table-responsive">
                <table class="table no-wrap user-table mb-0">
                  <thead>
                    <tr>
                      <th scope="col" class="border-0 text-uppercase font-medium pl-4">#</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Name</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Address</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Email</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Phone</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Room ID</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="pl-4">1</td>
                      <td>
                          <h5 class="font-medium mb-0">{{info.name}}</h5>
                          
                      </td>
                      <td>
                          <span class="text-muted">{{info.address}}</span>
                      </td>
                      <td>
                          <span class="text-muted">{{info.email}}</span><br>
                          
                      </td>
                      <td>
                          <span class="text-muted">{{info.phone}}</span>
                      </td>
                      <td>
                          <span class="text-muted">{{info.roomID}}</span>
                      </td>
                      <td>
                          <span class="text-muted">{{info.category}}</span>
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
name: "UserList",
data(){
    return{
        info:{
            name:"Nguyen Van Anh",
            address:"Hanoi",
            email:"abc12@gmail.com",
            phone:"0219238291",
            roomID:"1234567",
            category:"Room Master"
        }
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