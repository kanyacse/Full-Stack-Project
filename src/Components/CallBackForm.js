import React from 'react';

function CallBackForm() {
  return (
    <div className="card p-3">
      <h5 className="card-title text-center">Request a Call Back!</h5>
      <form>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Your Name (required)" />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Work Email (required)" />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Work Phone (Optional)" />
        </div>
        <div className="mb-3">
          <select className="form-control">
            <option>—Please choose an option—</option>
            {/* Add more options here */}
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100">Request a Call Back!</button>
      </form>
    </div>
  );
}

export default CallBackForm;
