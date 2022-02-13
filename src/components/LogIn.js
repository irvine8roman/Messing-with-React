import "./Login.css";

function LogIn() {
  return (
    <div className="mt-3 login">
      <h3 className="text-center">Login</h3>
      <div className="mb-3">
        <label for="username" className="form-label">
          Username:
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter username"
        ></input>
      </div>
      <div className="mb-3">
        <label for="password" className="form-label">
          Password:
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        ></input>
      </div>
      <div className="d-grid mt-2">
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </div>
    </div>
  );
}

export default LogIn;
