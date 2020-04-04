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
 select[id = "state"] {
  width: 100%;
  height: 7%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  border: 2px solid #67bef4;
}
 input[type=date] {
  width: 100%;
  height: 7%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  border: 2px solid #67bef4;
}
 input[type=text] {
  width: 100%;
  height: 7%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  border: 2px solid #67bef4;
}
 select[id = "gender"] {
  width: 100%;
  height: 7%;
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
  height: 15%;
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
    margin: 0;
}

h2{
    font-size: 350%;
}
  button {
      background-color:  #67bef4;
      border: 2px solid #67bef4;
  }
  pr{
    color: #67bef4;
  }
  fn {
      color: #546975;
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
        <b1>
            <div class="profile-userpic">
                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" class="img-responsive d-flex justify-content-center" alt="">
            </div>
            <div class="profile-usertitle">
                <fn class="profile-usertitle-name"> First Name Last Name </fn>
                <div class="profile-usertitle-job"> Profession </div>
            </div>
            <div class="profile-userbuttons">
                <button type="button" class="btn btn-info  btn-sm">Follow</button>
                <button type="button" class="btn btn-info  btn-sm">Message</button>
            </div>     
        </b1>
        <div class="col-md-6 d-flex justify-content-center"> 
            <form >
                <label for="state">Location</label>                    
                <select id = "state" name="location">
                    <option value="" selected="selected">Select your location</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>
                
                <label for="school">School Name</label>  
                <input type="text" id="school" name="Enter your school here..">

                <label for="graduation">Graduation Date</label>  
                <input type="date" id="graduation" name="Your grad date.."> 

                <label for="gender">Gender & Pronouns</label>   
                <select id = "gender" name="gender-pronouns">
                    <option value="" selected="selected">Select Your Gender</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="B">Bigender</option>
                    <option value="A">Agender</option>
                    <option value="O">Other</option>
                </select>
                <select id = "gender" name="gender-pronouns">
                    <option value="" selected="selected">Select Your Pronouns</option>
                    <option value="He">He</option>
                    <option value="She">She</option>
                    <option value="It">It</option>
                    <option value="They">They</option>
                    <option value="His">His</option>
                    <option value="Her">Her</option>
                    <option value="Its">Its</option>
                </select>
                
                <label for="bio">Bio</label>
                <textarea type="text" placeholder="Enter your bio here"/>

                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</div>
