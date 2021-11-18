<template>
<div class="container">
<div class="row">
  <!-- BEGIN SEARCH RESULT -->
  <div class="col-md-12">
    <div class="grid search">
      <div class="grid-body">
        <div class="row">
          <!-- BEGIN FILTERS -->
          <div class="col-md-3">
            <h2 class="grid-title"><i class="fa fa-filter"></i> Filters</h2>
            <hr>
      
            <!-- BEGIN FILTER BY CATEGORY -->
            <h4>By category:</h4>
            <div class="checkbox">
              <label><input type="checkbox" class="icheck"> Free</label>
            </div>
            <div class="checkbox">
              <label><input type="checkbox" class="icheck"> In use</label>
            </div>
           
            <!-- END FILTER BY CATEGORY -->
            
            <div class="padding"></div>
            
            <!-- BEGIN FILTER BY DATE -->
            <h4>By date:</h4>
            From
            <div class="input-group date form_date" data-date="2014-06-14T05:25:07Z" data-date-format="dd-mm-yyyy" data-link-field="dtp_input1">
              <input type="datetime-local" class="form-control">
              <span class="input-group-addon bg-blue"><i class="fa fa-th"></i></span>
            </div>
            <input type="hidden" id="dtp_input1" value="">
            
            To
            <div class="input-group date form_date" data-date="2014-06-14T05:25:07Z" data-date-format="dd-mm-yyyy" data-link-field="dtp_input2">
              <input type="datetime-local" class="form-control">
              <span class="input-group-addon bg-blue"><i class="fa fa-th"></i></span>
            </div>
            <input type="hidden" id="dtp_input2" value="">
            <!-- END FILTER BY DATE -->
            
            <div class="padding"></div>
            
      
          </div>
          <!-- END FILTERS -->
          <!-- BEGIN RESULT -->
          <div class="col-md-9">
            <h2><i class="fa fa-file-o"></i> Rooms</h2> 
            <hr>
            <!-- BEGIN SEARCH INPUT -->
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Room ID">
              <span class="input-group-btn">
                <button class="btn btn-primary" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
</button>
              </span>
              
            </div>
            
            <!-- END SEARCH INPUT -->
            
            
            <br>
            
            
            
            <!-- BEGIN TABLE RESULT -->
            <div class="table-responsive">
              <table class="table table-hover">
                <tbody>
                <tr v-for="room in this.rooms"
									:key="room.ID">
                  <td class="image"><img src="../assets/logo.png" alt=""></td>
                  <td class="product">
                    <strong>{{room.id}}</strong>
                    <br>In use from {{room.startingTime}} to {{room.endTime}} at {{room.reservedDate}}
                  </td>
                  <span class="input-group-btn">
                  <button class="btn btn-primary" type="button" > 
                    <router-link to="/createMeeting">
															<h5 class="card-title text-center text-dark">
																Book
															</h5>
										</router-link>
                  </button>
                  </span>

                </tr>
               
              </tbody></table>
            </div>
            <!-- END TABLE RESULT -->
            
          
          </div>
          <!-- END RESULT -->
        </div>
      </div>
    </div>
  </div>
  <!-- END SEARCH RESULT -->
</div>
</div>
</template>

<script>
export default {
  name: "room",
  components: {},
  data() {
    return {
      searchValues: {
		roomname: "",
        city: "",
        district: "",
        roomid: "",
        status: "",
      },
      rooms: [
        { id: 123456789, reservedDate: "01/01/1999", startingTime: "15:45 CH", endTime: "16:45 CH", status: "In use" },
				{ id: 123456789, reservedDate: "01/01/1999", startingTime: "15:45 CH", endTime: "16:45 CH", status: "In use" },
        { id: 453452123, reservedDate: "01/01/2000", startingTime: "15:45 CH", endTime: "16:45 CH", status: "In use" },
      ],
			
    };
  },
};
</script>

<style scoped>
body{margin-top:20px;
background:#eee;
}

.btn {
    margin-bottom: 5px;
}

.grid {
    position: relative;
    width: 100%;
    background: #fff;
    color: #666666;
    border-radius: 2px;
    margin-bottom: 25px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
}

.grid .grid-body {
    padding: 15px 20px 15px 20px;
    font-size: 0.9em;
    line-height: 1.9em;
}

.search table tr td.rate {
    color: #f39c12;
    line-height: 50px;
}

.search table tr:hover {
    cursor: pointer;
}

.search table tr td.image {
	width: 50px;
}

.search table tr td img {
	width: 50px;
	height: 50px;
}

.search table tr td.rate {
	color: #f39c12;
	line-height: 50px;
}

.search table tr td.price {
	font-size: 1.5em;
	line-height: 50px;
}

.search #price1,
.search #price2 {
	display: inline;
	font-weight: 600;
}


</style>