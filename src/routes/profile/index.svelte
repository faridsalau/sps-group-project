<script>

</script>

<style>
  .profile-userpic img {
    float: none;
    margin: 0 auto;
    width: 50%;
    height: 30%;
    -webkit-border-radius: 50%!important;
    -moz-border-radius: 50%!important;
    border-radius: 50%!important
}

.profile-usertitle {
    text-align: center;
    margin-top: 20px
}

.profile-usertitle-name {
    color: #5a7391;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 7px
}

.profile-usertitle-job {
    text-transform: uppercase;
    color: #5b9bd1;
    font-size: 13px;
    font-weight: 800;
    margin-bottom: 7px
}

.profile-sidebar-portlet {
    padding: 30px 0 0!important
}

.profile-sidebar {
    float: left;
    width: 300px;
    margin-right: 20px
}

.profile-content {
    overflow: hidden
}

.profile-userbuttons {
    text-align: center;
    margin-top: 10px
}

.profile-userbuttons .btn {
    margin-right: 5px
}

.profile-userbuttons .btn:last-child {
    margin-right: 0
}

.profile-userbuttons button {
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 600;
    padding: 6px 15px
}
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  border: 2px solid #67bef4;
}
input[type=submit] {
  width: 100%;
  background-color: #67bef4;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

textarea[type=text], select {
  width: 100%;
  height: 20%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  border: 2px solid #67bef4;
}
label{
    color: #67bef4;
    font-size: 150%;
}
b1{
    float: left;
    width: 420px;
    height: 420px;
    padding: 25px;
    /* border: 2px solid #67bef4;
    background-color: #f2f2f2; */
    margin: 0;
}
.right {
  width: 25%;
}
h2{
    font-size: 350%;
}
  p{
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
  }
  pr{
    color: #67bef4;
  }
</style>

<svelte:head>
    <title>mélangity | profile</title>
</svelte:head>

<div class="container">
    <pr class="d-flex justify-content-center">
        <h2>Profile</h2>
    </pr>
    <div class="row">
        <b1 id="right">
            <div class="profile-userpic">
                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" class="img-responsive d-flex justify-content-center" alt="">
            </div>
            <div class="profile-usertitle">
                <div class="profile-usertitle-name"> First Name Last Name </div>
                <div class="profile-usertitle-job"> Profession </div>
            </div>
            <div class="profile-userbuttons">
                <button type="button" class="btn btn-info  btn-sm">Follow</button>
                <button type="button" class="btn btn-info  btn-sm">Message</button>
            </div>     
        </b1>
        <div class="col-md-6 d-flex justify-content-center"> 
            <form >
                <label for="ulocation">Location</label>                    
                <input type="text" id = "ulocation" name="location" placeholder=" Your location.."/>

                <label for="school">School & Grad Year</label>   
                <input type="text" id = "school" name="school-grad-year" placeholder=" Your school & grad year.."/>

                <label for="gender">Gender & Pronouns</label>   
                <input type="text" id = "gender" name="gender-pronouns" placeholder=" Your Gender & Pronouns.."/>
                
                <label for="bio">Bio</label>
                <textarea type="text" placeholder="Enter your bio here"/>

                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</div>
