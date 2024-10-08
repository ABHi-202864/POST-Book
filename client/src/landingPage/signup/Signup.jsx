import React from "react";

const Signup = () => {
  return (
    <div className="container">
      <div className="row p-5 ">
        <div className="col-6 mt-5 mb-5">
          <img src="assets/signup-page-img.png" alt="" style={{ width: "90%" }} />
        </div>
        <div className="col-6 mt-5">
          <form class="row g-3 needs-validation" novalidate>
            <div class="col-md-6 ">
              <label for="fname" class="form-label">First name</label>
              <input type="text" class="form-control" id="fname" placeholder="typing..." required />
              <div class="valid-feedback">
                Looks good!
              </div>
            </div>
            <div class="col-md-6">
              <label for="lname" class="form-label">Last name</label>
              <input type="text" class="form-control" id="lname" required placeholder="typing..." />
              <div class="valid-feedback">
                Looks good!
              </div>
            </div>
            <div class="mt-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" class="form-control" id="email" placeholder="name@example.com" required />
            </div>
            <div class="mb-3 mt-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" placeholder="password" required />
            </div>
            <div class="col-12">
              <button class="btn btn-primary" type="submit">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup;