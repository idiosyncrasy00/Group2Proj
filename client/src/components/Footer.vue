<template>
  <div id="footer">
    <div id="contacts">
      <div id="contacts--contact">
        <p>{{ mail }}</p>
        <p>{{ phone }}</p>
				<div class="item">
            <a href="/Feedback" style="text-decoration: none;">Send feedback to us</a>
        </div>
      </div>
      <div id="contacts--social">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div id="mentions">
      <p>{{ mention }}</p>
    </div>
   </div>
</template>

<script>
export default {
	data(){
			return{
					mail : 'abcxyz@gmail.com',
					phone : '0983983983',
					mention : '2021 | Group2.Inc'
				}
		},
};
</script>

<style>

#footer{
  padding-top:20px;
  margin-top:20px;
  width:100vw;
  color:white;
  background-color:#292354;
  display:flex;
  flex-direction:column;
  align-items:center;
}
#contacts{
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
}
#contacts--contact{
  text-align:right;
}
#contacts--social{
  width:20%;
  display : flex;
  justify-content : space-between;
}
#contacts--social div{
  height:30px;
  width:30px;
  background-color:white;
  border-radius:50%;
}
#mentions p {
  font-size:0.5em;
}
</style>